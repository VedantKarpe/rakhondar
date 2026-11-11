// The Blender models (exported by tools/blender_export_glb.py): loaded once, their many parts merged into one mesh
// per material so each copy in the world costs only a few draw calls.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export type ModelName = string;
export const LANDMARKS = ['church', 'secretariat', 'mahalaxmi', 'atalsetu', 'imb', 'postoffice', 'maruti', 'sebastian', 'donbosco', 'kadamba'];
const cache = new Map<ModelName, THREE.Group>();

async function loadOne(name: ModelName): Promise<THREE.Group> {
  const gltf = await new GLTFLoader().loadAsync(`${import.meta.env.BASE_URL}models/${name}.glb`);
  gltf.scene.updateMatrixWorld(true);
  const byMat = new Map<THREE.Material, THREE.BufferGeometry[]>();
  gltf.scene.traverse(o => {
    const m = o as THREE.Mesh; if (!m.isMesh) return;
    const mats = Array.isArray(m.material) ? m.material : [m.material];
    const geo = m.geometry.clone().applyMatrix4(m.matrixWorld);
    for (const k of ['uv', 'uv1', 'tangent', 'color']) if (geo.attributes[k]) geo.deleteAttribute(k);
    if (mats.length === 1) { const a = byMat.get(mats[0]) ?? []; a.push(geo.index ? geo.toNonIndexed() : geo); byMat.set(mats[0], a); }
    else for (const gr of geo.groups) {
      const part = geo.index ? geo.toNonIndexed() : geo, sub = new THREE.BufferGeometry();
      for (const k of Object.keys(part.attributes)) { const at = part.attributes[k] as THREE.BufferAttribute; sub.setAttribute(k, new THREE.BufferAttribute(at.array.slice(gr.start * at.itemSize, (gr.start + gr.count) * at.itemSize), at.itemSize)); }
      const mt = mats[gr.materialIndex ?? 0], a = byMat.get(mt) ?? []; a.push(sub); byMat.set(mt, a);
    }
  });
  const out = new THREE.Group();
  for (const [mat, geos] of byMat) {
    const merged = mergeGeometries(geos); if (!merged) continue;
    const src = mat as THREE.MeshStandardMaterial;
    // Lambert is cheaper and matches the rest of the city; keep the glow of lamps
    const m = new THREE.MeshLambertMaterial({ color: src.color, emissive: src.emissive ?? 0, emissiveIntensity: src.emissiveIntensity ?? 0 });
    const mesh = new THREE.Mesh(merged, m); mesh.castShadow = true; out.add(mesh);
  }
  return out;
}

export async function loadModels(): Promise<void> {
  await Promise.all(['pilot', 'bus', 'child', ...LANDMARKS].map(async n => { try { cache.set(n, await loadOne(n)); } catch (e) { console.warn('model', n, e); } }));
}

/** A copy of a model, sized so it is `height` metres tall (or `length` long), standing on y = 0. */
export function model(name: ModelName, size: { height?: number; length?: number }): THREE.Group | null {
  const t = cache.get(name); if (!t) return null;
  const g = new THREE.Group(), c = t.clone(true);
  const b = new THREE.Box3().setFromObject(c), s = new THREE.Vector3(); b.getSize(s);
  const k = size.height ? size.height / s.y : (size.length ?? 1) / s.x;
  c.scale.setScalar(k); c.position.set(-(b.min.x + b.max.x) / 2 * k, -b.min.y * k, -(b.min.z + b.max.z) / 2 * k);
  g.add(c); return g;
}

/** A copy of a model as it was built: metres, its origin where the Blender script put it (for landmarks, their map point). */
export function rawModel(name: ModelName): THREE.Group | null { const t = cache.get(name); return t ? t.clone(true) : null; }
