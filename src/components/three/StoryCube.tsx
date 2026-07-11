import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { SceneEnv } from "./SceneEnv";
import { storyState } from "../../lib/storyState";

/**
 * Polished obsidian glass. Low roughness + clearcoat picks up the studio
 * strips as long gradient streaks; iridescence adds a faint oil-film sheen
 * on grazing bevels - the difference between "gray plastic" and "expensive".
 */
const OBSIDIAN = {
  color: new THREE.Color("#08030f"),
  metalness: 0.5,
  roughness: 0.075,
  clearcoat: 1,
  clearcoatRoughness: 0.06,
  envMapIntensity: 1.7,
  iridescence: 0.55,
  iridescenceIOR: 1.35,
};

const QUADRANTS: [number, number][] = [
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
];

/**
 * The four-capsule signature shape (from the brand asset): glossy lozenges
 * stacked on a diagonal. Each entry: length, offset across the stack (local
 * x), offset along the capsule axis (local y).
 */
const CAPSULES: { len: number; across: number; along: number }[] = [
  { len: 2.3, across: -1.14, along: 0.55 },
  { len: 3.3, across: -0.38, along: 0.18 },
  { len: 3.3, across: 0.38, along: -0.18 },
  { len: 2.5, across: 1.14, along: -0.55 },
];

/**
 * The orbiting satellites ARE the five agent squads. Each mini-cube carries
 * its agent's accent as a fresnel rim and a screen-tracked HUD label, so the
 * orbit reads as "the agent fleet around the QuantorX core", not decoration.
 */
const AGENT_SATS = [
  { label: "01 · Nodus", color: "#38bdf8" },
  { label: "02 · Axon", color: "#00c9a7" },
  { label: "03 · Nexus", color: "#9b5cf6" },
  { label: "04 · PayGate", color: "#f59e0b" },
  { label: "05 · Nextra", color: "#d946ef" },
];

/** Soft radial falloff texture shared by the halo sprite and the dust. */
const makeRadialTexture = (): THREE.CanvasTexture => {
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.25, "rgba(255,255,255,0.45)");
  g.addColorStop(0.6, "rgba(255,255,255,0.11)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 256, 256);
  return new THREE.CanvasTexture(c);
};

/**
 * Subtle brushed-surface roughness variation. Perfectly uniform gloss reads
 * as CGI; faint streaks make reflections drag organically across the faces
 * like lacquered obsidian.
 */
const makeRoughnessTexture = (): THREE.CanvasTexture => {
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const ctx = c.getContext("2d")!;
  ctx.fillStyle = "rgb(22,22,22)";
  ctx.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 1400; i++) {
    const y = Math.random() * 256;
    const w = 20 + Math.random() * 120;
    const x = Math.random() * 256 - w / 2;
    const lighter = Math.random() > 0.5;
    ctx.fillStyle = lighter
      ? `rgba(52,52,52,${0.05 + Math.random() * 0.1})`
      : `rgba(8,8,8,${0.05 + Math.random() * 0.1})`;
    ctx.fillRect(x, y, w, 1);
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
};

/** Additive fresnel rim - silhouette glow tinted by the chapter accent. */
const makeFresnelMaterial = (): THREE.ShaderMaterial =>
  new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color("#9b5cf6") },
      uIntensity: { value: 0.9 },
    },
    vertexShader: /* glsl */ `
      #include <morphtarget_pars_vertex>
      varying float vFresnel;
      void main() {
        vec3 transformed = vec3(position);
        vec3 objectNormal = vec3(normal);
        #include <morphnormal_vertex>
        #include <morphtarget_vertex>
        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
        vec3 n = normalize(normalMatrix * objectNormal);
        vec3 v = normalize(-mvPosition.xyz);
        vFresnel = pow(1.0 - abs(dot(n, v)), 2.4);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uColor;
      uniform float uIntensity;
      varying float vFresnel;
      void main() {
        float a = vFresnel * uIntensity;
        gl_FragColor = vec4(uColor * a, a);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

const Rig = ({ satLabels }: { satLabels: React.MutableRefObject<(HTMLDivElement | null)[]> }) => {
  const rig = useRef<THREE.Group>(null);
  const spinner = useRef<THREE.Group>(null);
  const wholeCube = useRef<THREE.Group>(null);
  const quarters = useRef<(THREE.Group | null)[]>([]);
  const core = useRef<THREE.Group>(null);
  const coreLight = useRef<THREE.PointLight>(null);
  const satSystem = useRef<THREE.Group>(null);
  const sats = useRef<(THREE.Group | null)[]>([]);
  const ringA = useRef<THREE.Mesh>(null);
  const schematic = useRef<THREE.Group>(null);
  const halo = useRef<THREE.Sprite>(null);
  const groundGlow = useRef<THREE.Sprite>(null);
  const reflection = useRef<THREE.Group>(null);
  const accentLight = useRef<THREE.PointLight>(null);
  const keyLight = useRef<THREE.DirectionalLight>(null);
  const lastX = useRef(storyState.x);
  const bank = useRef(0);

  const cubeGeo = useMemo(() => new RoundedBoxGeometry(2.1, 2.1, 2.1, 8, 0.13), []);
  // Quarters sized so that at rest offset (±0.525) they assemble flush into
  // the whole cube's exact 2.1³ silhouette - the swap is then seamless.
  const satGeo = useMemo(() => new RoundedBoxGeometry(0.34, 0.34, 0.34, 4, 0.06), []);
  // True morph: quarter-box and capsule are both RoundedBoxGeometry with the
  // same segment count → identical vertex topology. Each piece's geometry
  // carries its capsule as a morph target, so the SAME mesh deforms
  // continuously from fracture quarter to signature lozenge.
  const pieceGeos = useMemo(
    () =>
      CAPSULES.map((c) => {
        const g = new RoundedBoxGeometry(1.05, 2.1, 1.05, 6, 0.09);
        const target = new RoundedBoxGeometry(0.66, c.len, 0.66, 6, 0.32);
        g.morphAttributes.position = [target.attributes.position.clone()];
        g.morphAttributes.normal = [target.attributes.normal.clone()];
        target.dispose();
        return g;
      }),
    [],
  );
  // Where each piece lands in the diagonal stack (spinner-local space)
  const stackPose = useMemo(() => {
    const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(0.38, 0.12, -0.82));
    return {
      quat: q,
      pos: CAPSULES.map((c, i) =>
        new THREE.Vector3(c.across, c.along, (i - 1.5) * 0.08).applyQuaternion(q),
      ),
    };
  }, []);
  const roughTex = useMemo(makeRoughnessTexture, []);
  const cubeMat = useMemo(() => {
    const m = new THREE.MeshPhysicalMaterial({ ...OBSIDIAN, roughness: 1 });
    m.roughnessMap = roughTex;
    return m;
  }, [roughTex]);
  const quarterMat = useMemo(() => {
    const m = new THREE.MeshPhysicalMaterial({ ...OBSIDIAN, roughness: 1 });
    m.roughnessMap = roughTex;
    m.transparent = true;
    return m;
  }, [roughTex]);
  const satMat = useMemo(() => {
    const m = new THREE.MeshPhysicalMaterial({ ...OBSIDIAN, envMapIntensity: 1.9 });
    m.transparent = true;
    return m;
  }, []);
  // Each satellite rims in its own agent's accent - the fleet identifies itself
  const satFresnels = useMemo(
    () =>
      AGENT_SATS.map((a) => {
        const m = makeFresnelMaterial();
        (m.uniforms.uColor.value as THREE.Color).set(a.color);
        m.uniforms.uIntensity.value = 1.3;
        return m;
      }),
    [],
  );
  const fresnelCube = useMemo(makeFresnelMaterial, []);
  const fresnelQuarter = useMemo(makeFresnelMaterial, []);
  const radialTex = useMemo(makeRadialTexture, []);
  const haloMat = useMemo(
    () =>
      new THREE.SpriteMaterial({
        map: radialTex,
        color: new THREE.Color("#9b5cf6"),
        transparent: true,
        opacity: 0.34,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    [radialTex],
  );
  // Light pooling on the "floor" beneath the object - grounds it in the scene
  const groundMat = useMemo(
    () =>
      new THREE.SpriteMaterial({
        map: radialTex,
        color: new THREE.Color("#9b5cf6"),
        transparent: true,
        opacity: 0.4,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    [radialTex],
  );
  // Blurred mirror image below the floor line - the fake reflection
  const reflMat = useMemo(() => {
    const m = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#0a0514"),
      metalness: 0.6,
      roughness: 0.38,
      envMapIntensity: 0.7,
      transparent: true,
      opacity: 0.13,
      side: THREE.DoubleSide,
    });
    return m;
  }, []);
  const ringMat = useMemo(
    () => new THREE.MeshBasicMaterial({ color: new THREE.Color("#9b5cf6"), transparent: true, opacity: 0.3, side: THREE.DoubleSide }),
    [],
  );
  const handleMat = useMemo(
    () => new THREE.MeshBasicMaterial({ color: new THREE.Color("#9b5cf6"), transparent: true, opacity: 0.85 }),
    [],
  );
  // Oryzo-style schematic callout: a dashed selection circle with handles
  const dashedRing = useMemo(() => {
    const pts = new THREE.EllipseCurve(0, 0, 3.1, 3.1, 0, Math.PI * 2, false, 0).getPoints(160);
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    const mat = new THREE.LineDashedMaterial({
      color: new THREE.Color("#9b5cf6"),
      dashSize: 0.16,
      gapSize: 0.11,
      transparent: true,
      opacity: 0.55,
    });
    const line = new THREE.Line(geo, mat);
    line.computeLineDistances();
    return line;
  }, []);
  // The core is LIGHT, not plastic: a blinding nucleus inside an additive
  // fresnel rim, wrapped in a volumetric glow sprite.
  const coreNucleusMat = useMemo(
    () =>
      new THREE.SpriteMaterial({
        map: radialTex,
        color: new THREE.Color("#ffffff"),
        transparent: true,
        opacity: 0,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    [radialTex],
  );
  const coreFresnel = useMemo(() => {
    const m = makeFresnelMaterial();
    (m.uniforms.uColor.value as THREE.Color).set("#c9a6ff");
    return m;
  }, []);
  const coreGlowMat = useMemo(
    () =>
      new THREE.SpriteMaterial({
        map: radialTex,
        color: new THREE.Color("#b07cff"),
        transparent: true,
        opacity: 0,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    [radialTex],
  );

  const SAT_RADIUS = 2.55;
  const tmpVec = useMemo(() => new THREE.Vector3(), []);
  const tmpEuler = useMemo(() => new THREE.Euler(), []);
  const tmpQuat = useMemo(() => new THREE.Quaternion(), []);

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime;
    const s = storyState;
    const p = s.spin;
    const split = THREE.MathUtils.clamp(s.split, 0, 1);
    const eased = split * split * (3 - 2 * split);

    // ── Camera dolly: chapters push in and pull back like a filmed scene ─
    state.camera.position.z += (s.camZ - state.camera.position.z) * 0.055;
    state.camera.position.y += (s.camY - state.camera.position.y) * 0.055;

    // ── Rig placement (the "travel") ────────────────────────────────────
    // Vertical FOV is fixed, so narrow viewports would render the cube near
    // full-width; fit shrinks and lowers it as the aspect ratio tightens.
    const aspect = state.size.width / state.size.height;
    const fit = THREE.MathUtils.clamp(aspect * 0.78 + 0.28, 0.58, 1);
    if (rig.current) {
      // Narrow viewports: recentre horizontally (the split stage is a
      // desktop composition) and nudge into the free middle band.
      const xFit = fit < 0.75 ? s.x * 0.12 : s.x;
      rig.current.position.set(xFit, s.y - (1 - fit) * 3.4 + Math.sin(t * 0.6) * 0.09, 0);
      rig.current.scale.setScalar(Math.max(0.001, s.scale * fit));
      rig.current.visible = s.visible > 0.01;

      // Banking: lean into horizontal travel like a hovering object would
      const vx = (s.x - lastX.current) / Math.max(dt, 1 / 120);
      lastX.current = s.x;
      bank.current += (THREE.MathUtils.clamp(-vx * 0.16, -0.22, 0.22) - bank.current) * 0.07;
      rig.current.rotation.z = bank.current;
    }

    // ── Base spin: idle + hero scroll + story rotation ──────────────────
    const caps = THREE.MathUtils.clamp(s.capsule, 0, 1);
    const capsEased = caps * caps * (3 - 2 * caps);
    if (spinner.current) {
      let targetY = t * 0.12 + p * Math.PI * 2 + s.rot + state.pointer.x * 0.22;
      let targetX = 0.45 + Math.sin(t * 0.35) * 0.04 - state.pointer.y * 0.18 + p * 0.5;
      // The stack settles into a composed pose as the mark forms
      targetY = THREE.MathUtils.lerp(targetY, 0.3, capsEased);
      targetX = THREE.MathUtils.lerp(targetX, 0.42, capsEased);
      spinner.current.rotation.y += (targetY - spinner.current.rotation.y) * 0.06;
      spinner.current.rotation.x += (targetX - spinner.current.rotation.x) * 0.06;
    }

    // ── Whole cube ⇄ quarters handoff (the fracture) ────────────────────
    // Swap at the very first instant of the split, while the quarters are
    // still flush - the monolith gains hairline seams, then drifts apart.
    if (wholeCube.current) {
      wholeCube.current.visible = split < 0.02;
    }
    // The transformation: each piece is ONE continuous mesh. Its geometry
    // morphs box → lozenge (morph target) while it glides and rotates from
    // its fracture posting into its slot in the diagonal stack. Matter never
    // appears or disappears - it re-forms. Slight per-piece wave (i·0.08).
    const pieceP = (i: number) => {
      const pp = THREE.MathUtils.clamp((caps - i * 0.08) / 0.76, 0, 1);
      return pp * pp * (3 - 2 * pp);
    };
    quarters.current.forEach((q, i) => {
      if (!q) return;
      const pe = pieceP(i);
      const [sx, sz] = QUADRANTS[i];
      q.visible = split >= 0.02;
      q.scale.setScalar(1);
      const spread = 0.525 + eased * 0.62;
      tmpVec.set(sx * spread, 0, sz * spread);
      q.position.lerpVectors(tmpVec, stackPose.pos[i], pe);
      tmpEuler.set(0, eased * sx * sz * 0.3, 0);
      tmpQuat.setFromEuler(tmpEuler);
      q.quaternion.copy(tmpQuat).slerp(stackPose.quat, pe);
      q.children.forEach((child) => {
        const mesh = child as THREE.Mesh;
        // R3F attaches geometry post-construction, so initialize once here
        if (!mesh.morphTargetInfluences) mesh.updateMorphTargets();
        if (mesh.morphTargetInfluences) mesh.morphTargetInfluences[0] = pe;
      });
    });
    quarterMat.opacity = s.visible;
    cubeMat.opacity = s.visible;
    cubeMat.transparent = s.visible < 1;

    if (core.current) {
      // The core melts back into the pieces as the mark forms
      core.current.visible = split > 0.3 && capsEased < 0.99;
      const cs = (0.16 + eased * 0.36) * (1 - capsEased * 0.85);
      core.current.scale.setScalar(Math.max(0.001, cs));
      const fade = s.visible * (1 - capsEased);
      const pulse = 1 + Math.sin(t * 2.6) * 0.08;
      coreNucleusMat.opacity = fade;
      coreFresnel.uniforms.uIntensity.value = (1.5 + Math.sin(t * 3) * 0.3) * fade;
      coreGlowMat.opacity = 0.55 * fade * pulse;
    }
    if (coreLight.current) {
      coreLight.current.intensity = (eased * 30 + Math.sin(capsEased * Math.PI) * 26) * s.visible;
    }

    // ── Satellites + schematic ring: the five agent squads ──────────────
    const satVis = THREE.MathUtils.clamp(s.satellites, 0, 1) * s.visible;
    if (satSystem.current) {
      satSystem.current.visible = satVis > 0.02;
      satSystem.current.rotation.y = t * 0.22 + p * Math.PI * 1.5 + s.rot * 0.6;
    }
    const camDist = state.camera.position.length();
    sats.current.forEach((sat, i) => {
      if (!sat) return;
      const phase = (i / AGENT_SATS.length) * Math.PI * 2;
      sat.position.set(Math.cos(phase) * SAT_RADIUS, Math.sin(t * 0.8 + i * 1.7) * 0.14, Math.sin(phase) * SAT_RADIUS);
      sat.rotation.x = t * 0.5 + i;
      sat.rotation.y = t * 0.4 + i * 2;
      satFresnels[i].uniforms.uIntensity.value = 1.3 * satVis;

      // HUD label: project the satellite into screen space; labels dim as
      // their satellite swings behind the core so depth stays readable.
      const el = satLabels.current[i];
      if (el) {
        if (satVis > 0.04 && fit >= 0.75) {
          sat.getWorldPosition(tmpVec);
          const depth = tmpVec.distanceTo(state.camera.position);
          tmpVec.project(state.camera);
          const sx2 = (tmpVec.x * 0.5 + 0.5) * state.size.width;
          const sy2 = (-tmpVec.y * 0.5 + 0.5) * state.size.height;
          const front = THREE.MathUtils.clamp((camDist - depth) / 2.4 + 0.55, 0, 1);
          el.style.transform = `translate3d(${sx2}px, ${sy2}px, 0)`;
          el.style.opacity = String(satVis * (0.3 + 0.7 * front));
        } else {
          el.style.opacity = "0";
        }
      }
    });
    satMat.opacity = satVis;
    ringMat.opacity = 0.3 * satVis;

    // ── Scene grounding: floor light + blurred mirror reflection ────────
    // satVis doubles as a "low chapter" proxy - the cube only sits near the
    // floor while its satellites are alive (hero → manifesto → agents).
    groundMat.color.setRGB(s.accentR, s.accentG, s.accentB);
    groundMat.opacity = 0.42 * satVis;
    if (groundGlow.current) groundGlow.current.visible = satVis > 0.02;
    if (reflection.current && spinner.current) {
      reflection.current.visible = satVis > 0.02 && split < 0.42;
      reflection.current.rotation.copy(spinner.current.rotation);
    }
    reflMat.opacity = 0.13 * satVis;
    if (ringA.current) ringA.current.visible = satVis > 0.02;
    if (schematic.current) {
      schematic.current.visible = satVis > 0.02;
      schematic.current.rotation.z = t * 0.05;
    }
    (dashedRing.material as THREE.LineDashedMaterial).opacity = 0.55 * satVis;
    handleMat.opacity = 0.85 * satVis;

    // ── Accent: rim light, halo, fresnel - retinted by the chapter ──────
    if (accentLight.current) {
      accentLight.current.color.setRGB(s.accentR, s.accentG, s.accentB);
      accentLight.current.intensity = 42 * s.visible;
    }
    if (keyLight.current) {
      keyLight.current.position.set(Math.sin(t * 0.22) * 6, 5 + Math.sin(t * 0.13) * 1.5, Math.cos(t * 0.22) * 6);
    }
    ringMat.color.setRGB(s.accentR, s.accentG, s.accentB);
    handleMat.color.setRGB(s.accentR, s.accentG, s.accentB);
    (dashedRing.material as THREE.LineDashedMaterial).color.setRGB(s.accentR, s.accentG, s.accentB);
    haloMat.color.setRGB(s.accentR, s.accentG, s.accentB);
    // The halo pulses through the capsule morph - light masks the crossfade
    haloMat.opacity = (0.34 + eased * 0.5 + Math.sin(capsEased * Math.PI) * 0.5) * s.visible;
    if (halo.current) halo.current.visible = s.visible > 0.01;
    (fresnelCube.uniforms.uColor.value as THREE.Color).setRGB(s.accentR, s.accentG, s.accentB);
    fresnelCube.uniforms.uIntensity.value = (0.85 + Math.sin(t * 1.4) * 0.12) * s.visible;
    (fresnelQuarter.uniforms.uColor.value as THREE.Color).setRGB(s.accentR, s.accentG, s.accentB);
    // Base matches the whole-cube rim at the swap instant, then heats up
    fresnelQuarter.uniforms.uIntensity.value = (0.82 + eased * 0.55) * s.visible;
  });

  return (
    <group ref={rig}>
      <directionalLight ref={keyLight} position={[4, 6, 5]} intensity={1.3} color="#ffffff" />
      <pointLight ref={accentLight} position={[0, -3.4, -2.5]} intensity={42} color="#9b5cf6" />
      <pointLight position={[-5, -1, -4]} intensity={24} color="#7c3aed" />
      <pointLight position={[4, -2.5, 1.5]} intensity={7} color="#d946ef" />

      {/* Atmosphere: hot accent halo with radial falloff behind the object */}
      <sprite ref={halo} position={[0, -0.2, -1.7]} scale={[7.4, 7.4, 1]} material={haloMat} />

      {/* Scene grounding: light pooling on the floor + mirrored ghost */}
      <sprite ref={groundGlow} position={[0, -1.45, -0.2]} scale={[4.8, 1.15, 1]} material={groundMat} />
      <group ref={reflection} position={[0, -2.9, 0]} scale={[1, -1, 1]}>
        <mesh geometry={cubeGeo} material={reflMat} />
      </group>

      <group ref={spinner} rotation={[0.45, 0.8, 0]}>
        <group ref={wholeCube}>
          <mesh geometry={cubeGeo} material={cubeMat} />
          <mesh geometry={cubeGeo} material={fresnelCube} scale={1.012} />
        </group>
        {QUADRANTS.map(([sx, sz], i) => (
          <group key={i} ref={(el) => { quarters.current[i] = el; }} position={[sx * 0.525, 0, sz * 0.525]} visible={false}>
            <mesh geometry={pieceGeos[i]} material={quarterMat} />
            <mesh geometry={pieceGeos[i]} material={fresnelQuarter} scale={1.02} />
          </group>
        ))}
        <group ref={core} visible={false}>
          <sprite material={coreNucleusMat} scale={[1.5, 1.5, 1]} />
          <mesh material={coreFresnel}>
            <sphereGeometry args={[1, 48, 48]} />
          </mesh>
          <sprite material={coreGlowMat} scale={[3.4, 3.4, 1]} />
        </group>
        <pointLight ref={coreLight} intensity={0} color="#a855f7" distance={11} />
      </group>


      {/* Agent satellites on orbit paths + schematic selection ring */}
      <group rotation={[0.42, 0, -0.08]}>
        <group ref={satSystem}>
          {AGENT_SATS.map((_, i) => (
            <group key={i} ref={(el) => { sats.current[i] = el; }}>
              <mesh geometry={satGeo} material={satMat} />
              <mesh geometry={satGeo} material={satFresnels[i]} scale={1.07} />
            </group>
          ))}
        </group>
        <mesh ref={ringA} rotation={[Math.PI / 2, 0, 0]} material={ringMat}>
          <torusGeometry args={[SAT_RADIUS, 0.006, 8, 128]} />
        </mesh>
        <group ref={schematic} rotation={[Math.PI / 2, 0, 0]}>
          <primitive object={dashedRing} />
          {[0, 1, 2, 3].map((i) => (
            <mesh
              key={i}
              position={[Math.cos((i / 4) * Math.PI * 2) * 3.1, Math.sin((i / 4) * Math.PI * 2) * 3.1, 0]}
              material={handleMat}
            >
              <boxGeometry args={[0.09, 0.09, 0.09]} />
            </mesh>
          ))}
        </group>
      </group>
    </group>
  );
};

/** Rising luminous dust shared across the journey. */
const Dust = () => {
  const points = useRef<THREE.Points>(null);
  const { positions, speeds } = useMemo(() => {
    const N = 110;
    const pos = new Float32Array(N * 3);
    const sp = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 9;
      pos[i * 3 + 1] = -3 + Math.random() * 6;
      pos[i * 3 + 2] = -1.5 + (Math.random() - 0.5) * 3;
      sp[i] = 0.12 + Math.random() * 0.32;
    }
    return { positions: pos, speeds: sp };
  }, []);
  const mat = useMemo(
    () =>
      new THREE.PointsMaterial({
        size: 0.055,
        map: makeRadialTexture(),
        color: new THREE.Color("#c4a8ff"),
        transparent: true,
        opacity: 0.5,
        sizeAttenuation: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    [],
  );

  useFrame((state, dt) => {
    const geo = points.current?.geometry;
    if (!geo) return;
    const attr = geo.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < attr.count; i++) {
      let y = attr.getY(i) + speeds[i] * dt;
      if (y > 3.1) y = -3.1;
      attr.setY(i, y);
    }
    attr.needsUpdate = true;
    mat.opacity = 0.5 * storyState.visible;
  });

  return (
    <points ref={points} material={mat}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
    </points>
  );
};

/**
 * StoryCube - the persistent protagonist. A single fixed, transparent,
 * pointer-transparent canvas layered between section backgrounds and
 * section copy; every Home chapter scrubs `storyState` to move, retint,
 * fracture and dissolve the same object as the visitor scrolls.
 */
export const StoryCube = (): JSX.Element => {
  const satLabels = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div className="fixed inset-0 z-[5] pointer-events-none" aria-hidden="true">
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0.15, 9.6], fov: 32 }}
        style={{ background: "transparent" }}
        onCreated={({ gl }) => {
          gl.toneMappingExposure = 1.15;
        }}
      >
        <Suspense fallback={null}>
          <SceneEnv />
          <ambientLight intensity={0.22} />
          <Rig satLabels={satLabels} />
          <Dust />
        </Suspense>
      </Canvas>

      {/* Fleet HUD: each orbiting satellite is one product, and says so */}
      <div className="hidden lg:block absolute inset-0 overflow-hidden">
        {AGENT_SATS.map((a, i) => (
          <div
            key={a.label}
            ref={(el) => { satLabels.current[i] = el; }}
            className="absolute left-0 top-0 opacity-0 will-change-transform"
          >
            <div className="flex items-center gap-1.5 translate-x-3 -translate-y-4">
              <span
                className="w-1 h-1 rounded-full shrink-0"
                style={{ background: a.color, boxShadow: `0 0 8px 2px ${a.color}66` }}
              />
              <span
                className="[font-family:'Satoshi-Medium',Helvetica] text-[9px] uppercase tracking-[0.22em] whitespace-nowrap"
                style={{ color: `${a.color}d9`, textShadow: `0 0 12px ${a.color}59` }}
              >
                {a.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
