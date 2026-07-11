import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

/**
 * SceneEnv - an authored studio environment baked through PMREM (no network).
 * Instead of a generic room, the cube reflects a photography rig: one long
 * hot white strip overhead for the signature top streak, a violet and a
 * magenta side panel for brand-colored gradients on the glass, and a dim
 * cool fill from the camera side. This is what makes the faces read as
 * polished obsidian rather than flat gray plastic.
 */
const buildStudio = (): THREE.Scene => {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#020008");

  const panel = (
    color: string,
    intensity: number,
    w: number,
    h: number,
    pos: [number, number, number],
    lookAtOrigin = true,
  ) => {
    const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color(color), side: THREE.DoubleSide });
    mat.color.multiplyScalar(intensity);
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
    mesh.position.set(...pos);
    if (lookAtOrigin) mesh.lookAt(0, 0, 0);
    scene.add(mesh);
    return mesh;
  };

  // Long overhead strip - the elongated white highlight along top faces/bevels
  panel("#ffffff", 5.5, 14, 1.6, [0, 6.5, 0.5]);
  // Violet key panel, camera-left
  panel("#7c3aed", 3.4, 4.5, 9, [-7.5, 0.5, 1]);
  // Magenta kicker panel, camera-right and slightly behind
  panel("#d946ef", 2.4, 3.5, 8, [7.5, -0.5, -2]);
  // Deep violet floor bounce - the eclipse light from below
  panel("#4c1d95", 2.0, 10, 4, [0, -6.5, -1]);
  // Faint cool fill from the camera side so front faces never go dead black
  panel("#a5b4fc", 0.5, 8, 6, [0, 1, 9]);

  return scene;
};

export const SceneEnv = (): null => {
  const { gl, scene } = useThree();

  useEffect(() => {
    const pmrem = new THREE.PMREMGenerator(gl);
    const studio = buildStudio();
    // sigma 0.04 is the largest blur PMREM can sample without clipping
    // (0.06 requests 30 samples against a max of 20 and logs a warning)
    const envRT = pmrem.fromScene(studio, 0.04);
    scene.environment = envRT.texture;
    return () => {
      scene.environment = null;
      envRT.dispose();
      pmrem.dispose();
    };
  }, [gl, scene]);

  return null;
};
