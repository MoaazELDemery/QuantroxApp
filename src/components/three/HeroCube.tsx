import { MutableRefObject, Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { SceneEnv } from "./SceneEnv";

interface HeroCubeProps {
  /** 0→1 scroll progress; drives rotation so the object is scroll-owned. */
  progressRef: MutableRefObject<number>;
  className?: string;
}

const CubeMesh = ({ progressRef }: { progressRef: MutableRefObject<number> }) => {
  const group = useRef<THREE.Group>(null);
  const keyLight = useRef<THREE.DirectionalLight>(null);
  const geometry = useMemo(() => new RoundedBoxGeometry(2.1, 2.1, 2.1, 6, 0.09), []);
  const material = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#170b26"),
        metalness: 0.4,
        roughness: 0.14,
        clearcoat: 1,
        clearcoatRoughness: 0.12,
        envMapIntensity: 1.15,
      }),
    [],
  );

  useFrame((state) => {
    const g = group.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    const p = progressRef.current;

    // Idle float + slow turn, scroll adds a full revolution, pointer adds tilt
    g.position.y = Math.sin(t * 0.6) * 0.09;
    const targetRotY = t * 0.12 + p * Math.PI * 2 + state.pointer.x * 0.28;
    const targetRotX = 0.45 + Math.sin(t * 0.35) * 0.04 - state.pointer.y * 0.22 + p * 0.6;
    g.rotation.y += (targetRotY - g.rotation.y) * 0.06;
    g.rotation.x += (targetRotX - g.rotation.x) * 0.06;

    // Orbiting key light - reflections travel across the glass
    if (keyLight.current) {
      keyLight.current.position.set(Math.sin(t * 0.22) * 6, 5 + Math.sin(t * 0.13) * 1.5, Math.cos(t * 0.22) * 6);
    }
  });

  return (
    <>
      <directionalLight ref={keyLight} position={[4, 6, 5]} intensity={1.15} color="#ffffff" />
      <group ref={group} rotation={[0.45, 0.8, 0]}>
        <mesh geometry={geometry} material={material} />
      </group>
    </>
  );
};

/**
 * Four satellite cubes - the agents - orbiting the platform on two glowing
 * ring paths. Scroll advances the orbit; each satellite tumbles slowly.
 */
const AgentSatellites = ({ progressRef }: { progressRef: MutableRefObject<number> }) => {
  const system = useRef<THREE.Group>(null);
  const sats = useRef<(THREE.Group | null)[]>([]);

  const satGeo = useMemo(() => new RoundedBoxGeometry(0.34, 0.34, 0.34, 4, 0.05), []);
  const satMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#1d0f30"),
        metalness: 0.45,
        roughness: 0.18,
        clearcoat: 1,
        clearcoatRoughness: 0.15,
        envMapIntensity: 1.3,
      }),
    [],
  );
  const ringMat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: new THREE.Color("#9b5cf6"),
        transparent: true,
        opacity: 0.32,
        side: THREE.DoubleSide,
      }),
    [],
  );

  const RADIUS = 2.55;

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const p = progressRef.current;
    if (system.current) {
      system.current.rotation.y = t * 0.22 + p * Math.PI * 1.5;
    }
    sats.current.forEach((s, i) => {
      if (!s) return;
      const phase = (i / 4) * Math.PI * 2;
      s.position.set(Math.cos(phase) * RADIUS, Math.sin(t * 0.8 + i * 1.7) * 0.14, Math.sin(phase) * RADIUS);
      s.rotation.x = t * 0.5 + i;
      s.rotation.y = t * 0.4 + i * 2;
    });
  });

  return (
    <group rotation={[0.42, 0, -0.08]}>
      <group ref={system}>
        {[0, 1, 2, 3].map((i) => (
          <group key={i} ref={(el) => { sats.current[i] = el; }}>
            <mesh geometry={satGeo} material={satMat} />
          </group>
        ))}
      </group>
      {/* Orbit paths - thin luminous rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]} material={ringMat}>
        <torusGeometry args={[RADIUS, 0.006, 8, 128]} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} material={ringMat}>
        <torusGeometry args={[RADIUS * 1.22, 0.003, 8, 128]} />
      </mesh>
    </group>
  );
};

/** Luminous dust rising through the light field around the cube. */
const RisingParticles = () => {
  const points = useRef<THREE.Points>(null);
  const { positions, speeds } = useMemo(() => {
    const N = 110;
    const pos = new Float32Array(N * 3);
    const sp = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8.5;
      pos[i * 3 + 1] = -2.8 + Math.random() * 5.6;
      pos[i * 3 + 2] = -1.5 + (Math.random() - 0.5) * 3;
      sp[i] = 0.12 + Math.random() * 0.32;
    }
    return { positions: pos, speeds: sp };
  }, []);

  useFrame((state, dt) => {
    const geo = points.current?.geometry;
    if (!geo) return;
    const attr = geo.attributes.position as THREE.BufferAttribute;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < attr.count; i++) {
      let y = attr.getY(i) + speeds[i] * dt;
      if (y > 2.9) y = -2.9;
      attr.setY(i, y);
      attr.setX(i, attr.getX(i) + Math.sin(t * 0.6 + i) * 0.0009);
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#c4a8ff"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

/** HeroCube - the platform cube, rendered live. Crisp at any resolution. */
export const HeroCube = ({ progressRef, className }: HeroCubeProps): JSX.Element => (
  <div className={className} aria-hidden="true">
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0.15, 6.5], fov: 32 }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <SceneEnv />
        <ambientLight intensity={0.25} />
        {/* Eclipse backlight: hot violet from below/behind, magenta kicker */}
        <pointLight position={[0, -3.4, -2.5]} intensity={55} color="#9b5cf6" />
        <pointLight position={[-5, -1, -4]} intensity={30} color="#7c3aed" />
        <pointLight position={[4, -2.5, 1.5]} intensity={12} color="#d946ef" />
        <pointLight position={[3, -3, 2]} intensity={8} color="#d4c5f9" />
        <CubeMesh progressRef={progressRef} />
        <AgentSatellites progressRef={progressRef} />
        <RisingParticles />
      </Suspense>
    </Canvas>
  </div>
);
