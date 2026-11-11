// The land and the water: one mesh for the ground (a vertex at every tile corner, heights from the survey, coloured by
// what the map says grows there) and one flat sheet for the river and the sea.
import * as THREE from 'three';
import { Ground, T, WATER_Y, type PanjimData } from './data';

const TILE_COL: Record<string, [number, number, number]> = {
  G: [0.22, 0.38, 0.15], L: [0.22, 0.38, 0.15], R: [0.22, 0.38, 0.15], P: [0.44, 0.56, 0.28],
  F: [0.25, 0.42, 0.22], M: [0.22, 0.33, 0.21], S: [0.78, 0.68, 0.46], B: [0.78, 0.68, 0.46], W: [0.30, 0.40, 0.32],
};

export function buildTerrain(d: PanjimData, g: Ground): THREE.Mesh {
  const { W, H } = d;
  const geo = new THREE.PlaneGeometry(W * T, H * T, W, H);
  geo.rotateX(-Math.PI / 2);                     // lie flat: the plane's rows run along +Z (south)
  geo.translate((W * T) / 2, 0, (H * T) / 2);
  const pos = geo.attributes.position as THREE.BufferAttribute, col = new Float32Array(pos.count * 3);
  for (let v = 0; v < pos.count; v++) {
    const i = Math.round(pos.getX(v) / T), j = Math.round(pos.getZ(v) / T);
    pos.setY(v, g.corner[j * (W + 1) + i]);
    const tx = Math.min(W - 1, i), ty = Math.min(H - 1, j), c = TILE_COL[d.rows[ty][tx]] || TILE_COL.G;
    const hk = 1 + Math.min(0.12, g.rawHeight(i, j) / 400);   // higher ground a touch lighter
    const jit = 0.94 + ((i * 73 + j * 37) % 11) / 90;         // a little grain
    // patches of Goan red laterite earth showing through the grass
    const lat = c === TILE_COL.G || c === TILE_COL.L || c === TILE_COL.R ? Math.max(0, Math.sin(i * 0.31 + Math.sin(j * 0.17) * 2) * Math.sin(j * 0.23 + i * 0.05) - 0.35) * 0.9 : 0;
    const r0 = c[0] + (0.55 - c[0]) * lat, g0 = c[1] + (0.36 - c[1]) * lat, b0 = c[2] + (0.22 - c[2]) * lat;
    col[v * 3] = r0 * hk * jit; col[v * 3 + 1] = g0 * hk * jit; col[v * 3 + 2] = b0 * hk * jit;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  geo.computeVertexNormals();
  const mesh = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ vertexColors: true }));
  mesh.receiveShadow = true;
  mesh.name = 'terrain';
  return mesh;
}

export function buildWater(d: PanjimData): THREE.Mesh {
  const pad = 2000;
  const geo = new THREE.PlaneGeometry(d.W * T + pad * 2, d.H * T + pad * 2);
  geo.rotateX(-Math.PI / 2); geo.translate((d.W * T) / 2, WATER_Y, (d.H * T) / 2);
  const mesh = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ color: 0x2b6a8a }));
  mesh.receiveShadow = true;
  mesh.name = 'water';
  return mesh;
}
