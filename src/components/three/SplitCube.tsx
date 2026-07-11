import { MutableRefObject, Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { SceneEnv } from "./SceneEnv";

interface SplitCubeProps {
  /** 0→1 scroll progress: 0 = intact cube, 1 = four quarters apart, core blazing. */
  progressRef: MutableRefObject<number>;
  className?: string;
}

const QUADRANTS: [number, number][] = [
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
];

const SplitMesh = ({ progressRef }: { progressRef: MutableRefObject<number> }) => {
  const group = useRef<THREE.Group>(null);
  const quarters = useRef<(THREE.Group | null)[]>([]);
  const core = useRef<THREE.Mesh>(null);
  const shell = useRef<THREE.Mesh>(null);
  const coreLight = useRef<THREE.PointLight>(null);

  const quarterGeo = useMemo(() => new RoundedBoxGeometry(1.02, 2.14, 1.02, 5, 0.07), []);
  const quarterMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#170b26"),
        metalness: 0.4,
        roughness: 0.14,
        clearcoat: 1,
        clearcoatRoughness: 0.12,
        envMapIntensity: 1.1,
      }),
    [],
  );
  const coreMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#1a0533"),
        emissive: new THREE.Color("#7c3aed"),
        emissiveIntensity: 0.4,
        roughness: 0.25,
        metalness: 0.2,
      }),
    [],
  );
  const shellMat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: new THREE.Color("#a855f7"),
        wireframe: true,
        transparent: true,
        opacity: 0,
      }),
    [],
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const p = THREE.MathUtils.clamp(progressRef.current, 0, 1);
    const eased = p * p * (3 - 2 * p); // smoothstep

    if (group.current) {
      group.current.rotation.y = 0.7 + t * 0.08 + eased * 1.1;
      group.current.rotation.x = 0.35 + Math.sin(t * 0.4) * 0.03;
      group.current.position.y = Math.sin(t * 0.55) * 0.07;
    }

    quarters.current.forEach((q, i) => {
      if (!q) return;
      const [sx, sz] = QUADRANTS[i];
      const spread = 0.56 + eased * 0.82;
      q.position.set(sx * spread, 0, sz * spread);
      q.rotation.y = eased * sx * sz * 0.3;
    });

    if (core.current) {
      const s = 0.18 + eased * 0.5;
      core.current.scale.setScalar(s);
      core.current.rotation.y = t * 0.6;
      core.current.rotation.x = t * 0.25;
      coreMat.emissiveIntensity = 0.4 + eased * 2.2 + Math.sin(t * 3) * 0.2 * eased;
      shellMat.opacity = eased * 0.5;
    }
    if (shell.current) {
      const s = (0.18 + eased * 0.5) * 1.5;
      shell.current.scale.setScalar(s);
      shell.current.rotation.y = -t * 0.35;
      shell.current.rotation.z = t * 0.18;
    }
    if (coreLight.current) {
      coreLight.current.intensity = eased * 34;
    }
  });

  return (
    <group ref={group} rotation={[0.35, 0.7, 0]}>
      {QUADRANTS.map(([sx, sz], i) => (
        <group key={i} ref={(el) => { quarters.current[i] = el; }} position={[sx * 0.56, 0, sz * 0.56]}>
          <mesh geometry={quarterGeo} material={quarterMat} />
        </group>
      ))}
      <mesh ref={core} material={coreMat}>
        <icosahedronGeometry args={[1, 2]} />
      </mesh>
      <mesh ref={shell} material={shellMat}>
        <icosahedronGeometry args={[1, 1]} />
      </mesh>
      <pointLight ref={coreLight} intensity={0} color="#a855f7" distance={12} />
    </group>
  );
};

/** SplitCube - the platform cube fracturing into the agent squads around the core. */
export const SplitCube = ({ progressRef, className }: SplitCubeProps): JSX.Element => (
  <div className={className} aria-hidden="true">
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0.4, 7.2], fov: 36 }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <SceneEnv />
        <ambientLight intensity={0.2} />
        <directionalLight position={[4, 6, 5]} intensity={0.9} />
        <pointLight position={[-6, 2, -4]} intensity={30} color="#7c3aed" />
        <SplitMesh progressRef={progressRef} />
      </Suspense>
    </Canvas>
  </div>
);
