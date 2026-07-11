import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { SceneEnv } from "./SceneEnv";

/** Same polished-obsidian recipe as the story cube - one material language. */
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

/** The four-capsule signature mark (brand asset proportions). */
const CAPSULES: { len: number; across: number; along: number }[] = [
  { len: 2.3, across: -1.14, along: 0.55 },
  { len: 3.3, across: -0.38, along: 0.18 },
  { len: 3.3, across: 0.38, along: -0.18 },
  { len: 2.5, across: 1.14, along: -0.55 },
];

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

const makeFresnelMaterial = (): THREE.ShaderMaterial =>
  new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color("#9b5cf6") },
      uIntensity: { value: 0.75 },
    },
    vertexShader: /* glsl */ `
      varying float vFresnel;
      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vec3 n = normalize(normalMatrix * normal);
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

/** Pointer target shared between the window listener and the frame loop. */
type PointerTarget = { x: number; y: number };

const Mark = ({ pointer, reduced }: { pointer: PointerTarget; reduced: boolean }) => {
  const rig = useRef<THREE.Group>(null);
  const mark = useRef<THREE.Group>(null);

  const geos = useMemo(
    () => CAPSULES.map((c) => new RoundedBoxGeometry(0.66, c.len, 0.66, 6, 0.32)),
    [],
  );
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
  const mat = useMemo(() => {
    const m = new THREE.MeshPhysicalMaterial({ ...OBSIDIAN, roughness: 1 });
    m.roughnessMap = roughTex;
    return m;
  }, [roughTex]);
  const fresnel = useMemo(makeFresnelMaterial, []);
  const radialTex = useMemo(makeRadialTexture, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (!rig.current || !mark.current) return;
    if (reduced) {
      mark.current.rotation.set(0, 0.4, 0);
      return;
    }
    // Idle drift + pointer-led tilt: the mark leans toward the cursor.
    const targetY = 0.4 + t * 0.1 + pointer.x * 0.55;
    const targetX = pointer.y * 0.3;
    mark.current.rotation.y += (targetY - mark.current.rotation.y) * 0.045;
    mark.current.rotation.x += (targetX - mark.current.rotation.x) * 0.045;
    rig.current.position.y = Math.sin(t * 0.55) * 0.14;
    rig.current.position.x = pointer.x * 0.22;
  });

  return (
    <group position={[2.45, -0.25, 0]} scale={0.72}>
      <group ref={rig}>
        {/* Violet halo behind the mark */}
        <sprite scale={[8.5, 8.5, 1]} position={[0, 0, -2.2]}>
          <spriteMaterial
            map={radialTex}
            color="#9b5cf6"
            transparent
            opacity={0.3}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </sprite>
        <group ref={mark} rotation={[0, 0.4, 0]}>
          {CAPSULES.map((_, i) => (
            <group key={i} position={stackPose.pos[i]} quaternion={stackPose.quat}>
              <mesh geometry={geos[i]} material={mat} />
              <mesh geometry={geos[i]} material={fresnel} scale={1.02} />
            </group>
          ))}
        </group>
        {/* Grounding glow under the mark */}
        <sprite scale={[7, 2.2, 1]} position={[0, -2.6, 0]}>
          <spriteMaterial
            map={radialTex}
            color="#4c1d95"
            transparent
            opacity={0.32}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </sprite>
      </group>
      <directionalLight position={[3, 6, 4]} intensity={1.1} color="#ffffff" />
      <pointLight position={[-4, -1, 3]} intensity={5} color="#d946ef" distance={14} />
      <pointLight position={[3, 2, 4]} intensity={4} color="#9b5cf6" distance={14} />
    </group>
  );
};

/**
 * FooterMark - the brand's four-capsule signature floating in obsidian glass
 * behind the footer. Leans toward the pointer, drifts on an idle spin, and
 * only renders while the footer is actually on screen.
 */
export const FooterMark = (): JSX.Element => {
  const wrap = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const pointer = useRef<PointerTarget>({ x: 0, y: 0 }).current;
  const reduced = useMemo(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      rootMargin: "80px",
    });
    io.observe(el);
    const onMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, [pointer]);

  return (
    <div ref={wrap} className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0.1, 9], fov: 32 }}
        frameloop={inView ? "always" : "never"}
        onCreated={({ gl }) => {
          gl.toneMappingExposure = 1.15;
        }}
      >
        <Suspense fallback={null}>
          <SceneEnv />
          <Mark pointer={pointer} reduced={reduced} />
        </Suspense>
      </Canvas>
    </div>
  );
};
