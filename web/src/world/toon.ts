// The cartoon look: every lit material becomes a cel-shaded one (three flat tones: lit, half, shadow, with hard steps),
// and solid things get a dark ink outline (the "inverted hull": the same shape pushed out along its normals, drawn
// back-faces only in ink, so it shows as a rim around the silhouette).
import * as THREE from 'three';

let ramp: THREE.DataTexture | null = null;
/** Three flat bands of light; nearest filtering keeps the steps hard. */
export function toonRamp(): THREE.DataTexture {
  if (ramp) return ramp;
  const d = new Uint8Array([90, 90, 90, 255, 175, 175, 175, 255, 255, 255, 255, 255]);
  ramp = new THREE.DataTexture(d, 3, 1, THREE.RGBAFormat);
  ramp.minFilter = ramp.magFilter = THREE.NearestFilter; ramp.generateMipmaps = false; ramp.needsUpdate = true;
  return ramp;
}

/** A toon material with the same colour, texture and glow as a Lambert one. */
export function toToon(m: THREE.MeshLambertMaterial): THREE.MeshToonMaterial {
  const t = new THREE.MeshToonMaterial({
    color: m.color, map: m.map, vertexColors: m.vertexColors, emissive: m.emissive, emissiveIntensity: m.emissiveIntensity,
    transparent: m.transparent, opacity: m.opacity, side: m.side, gradientMap: toonRamp(),
    polygonOffset: m.polygonOffset, polygonOffsetFactor: m.polygonOffsetFactor, polygonOffsetUnits: m.polygonOffsetUnits,
  });
  if (m.onBeforeCompile) t.onBeforeCompile = m.onBeforeCompile;
  return t;
}

const inkCache = new Map<number, THREE.MeshBasicMaterial>();
/** Ink for an outline `w` units thick (in the object's own units). */
function ink(w: number): THREE.MeshBasicMaterial {
  const k = Math.round(w * 1000);
  let m = inkCache.get(k);
  if (!m) {
    m = new THREE.MeshBasicMaterial({ color: 0x1a120c, side: THREE.BackSide });
    m.onBeforeCompile = sh => { sh.vertexShader = sh.vertexShader.replace('#include <begin_vertex>', `vec3 transformed = position + normalize(normal) * ${w.toFixed(4)};`); };
    m.customProgramCacheKey = () => 'ink' + k;
    inkCache.set(k, m);
  }
  return m;
}

/** Turn every Lambert material in `root` to toon, and give the meshes under `outlined` an ink rim. */
export function toonify(root: THREE.Object3D, outlined: THREE.Object3D[], skipOutline: (o: THREE.Object3D) => boolean) {
  const done = new Map<THREE.Material, THREE.Material>();
  root.traverse(o => {
    const m = o as THREE.Mesh; if (!m.isMesh || !m.material) return;
    const swap = (x: THREE.Material) => { if (!(x instanceof THREE.MeshLambertMaterial)) return x; let t = done.get(x); if (!t) { t = toToon(x); done.set(x, t); } return t; };
    m.material = Array.isArray(m.material) ? m.material.map(swap) : swap(m.material);
  });
  for (const top of outlined) addOutlines(top, skipOutline);
}

/** Give each solid mesh under `top` an ink rim about `px` metres wide in the world. */
export function addOutlines(top: THREE.Object3D, skip: (o: THREE.Object3D) => boolean = () => false, metres = 0.12) {
  const list: THREE.Mesh[] = [];
  top.traverse(o => { const m = o as THREE.Mesh; if (m.isMesh && !m.userData.ink && !m.userData.hasInk && !skip(m) && !(m as unknown as THREE.Sprite).isSprite) list.push(m); });
  for (const m of list) {
    if ((m.material as THREE.Material).transparent) continue;
    // the rim's thickness in the object's own units, so a model drawn 3x life size still gets a thin line
    const s = new THREE.Vector3(); m.updateWorldMatrix(true, false); m.matrixWorld.decompose(new THREE.Vector3(), new THREE.Quaternion(), s);
    const w = metres / Math.max(0.01, (s.x + s.y + s.z) / 3);
    const o = (m as THREE.InstancedMesh).isInstancedMesh
      ? new THREE.InstancedMesh(m.geometry, ink(w), (m as THREE.InstancedMesh).count)
      : new THREE.Mesh(m.geometry, ink(w));
    if ((o as THREE.InstancedMesh).isInstancedMesh) (o as THREE.InstancedMesh).instanceMatrix = (m as THREE.InstancedMesh).instanceMatrix;
    o.userData.ink = true; o.raycast = () => {}; m.userData.hasInk = true;
    m.add(o);
  }
}
