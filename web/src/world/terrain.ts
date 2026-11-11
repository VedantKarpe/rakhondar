// The land and the water: one mesh for the ground (a vertex at every tile corner, heights from the survey, coloured by
// what the map says grows there) and one flat sheet for the river and the sea.
import * as THREE from 'three';
import { Ground, T, WATER_Y, type PanjimData } from './data';

const TILE_COL: Record<string, [number, number, number]> = {
  G: [0.22, 0.38, 0.15], L: [0.22, 0.38, 0.15], R: [0.22, 0.38, 0.15], P: [0.44, 0.56, 0.28],
  F: [0.25, 0.42, 0.22], M: [0.22, 0.33, 0.21], S: [0.78, 0.68, 0.46], B: [0.78, 0.68, 0.46], W: [0.30, 0.40, 0.32],
};

const SUB = 4;   // ground vertices per tile edge: 5 m apart, so the shore can curve

/** How much land there is around each tile, blurred, so the shoreline comes out as smooth curves, not tile steps. */
function landField(g: Ground): Float32Array {
  const { W, H } = g; let f = new Float32Array(W * H);
  for (let i = 0; i < W * H; i++) f[i] = g.wet[i] ? 0 : 1;
  for (let pass = 0; pass < 0; pass++) {   // no blur: interpolating the raw tiles already rounds the corners, and keeps one-tile creeks open
    const o = new Float32Array(W * H);
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      let sum = 0, n = 0;
      for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) { const xx = x + dx, yy = y + dy; if (xx < 0 || yy < 0 || xx >= W || yy >= H) continue; sum += f[yy * W + xx]; n++; }
      o[y * W + x] = sum / n;
    }
    f = o;
  }
  return f;
}

export function buildTerrain(d: PanjimData, g: Ground, solidAt: (X: number, Z: number) => boolean = () => false): THREE.Mesh {
  const { W, H } = d, field = landField(g);
  const landAt = (tx: number, ty: number) => {   // bilinear, tx/ty in tiles, sampled at tile centres
    const x = Math.max(0, Math.min(W - 1.001, tx - 0.5)), y = Math.max(0, Math.min(H - 1.001, ty - 0.5)), i = x | 0, j = y | 0, u = x - i, v = y - j;
    const F = (a: number, b: number) => field[(j + b) * W + i + a];
    return (F(0, 0) * (1 - u) + F(1, 0) * u) * (1 - v) + (F(0, 1) * (1 - u) + F(1, 1) * u) * v;
  };
  const smooth = (e0: number, e1: number, x: number) => { const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0))); return t * t * (3 - 2 * t); };
  const geo = new THREE.PlaneGeometry(W * T, H * T, W * SUB, H * SUB);
  geo.rotateX(-Math.PI / 2);                     // lie flat: the plane's rows run along +Z (south)
  geo.translate((W * T) / 2, 0, (H * T) / 2);
  const pos = geo.attributes.position as THREE.BufferAttribute, col = new Float32Array(pos.count * 3);
  const SAND: [number, number, number] = [0.80, 0.70, 0.48];
  for (let v = 0; v < pos.count; v++) {
    const X = pos.getX(v), Z = pos.getZ(v), tx = X / T, ty = Z / T;
    const land = solidAt(X, Z) ? 1 : landAt(tx, ty), k = smooth(0.42, 0.58, land);   // the bank is built up under riverside streets
    const hl = Math.max(0.6, g.heightAt(X, Z));
    pos.setY(v, -2.2 + (hl + 2.2) * k);
    const i = Math.min(W - 1, Math.floor(tx)), j = Math.min(H - 1, Math.floor(ty));
    const c = TILE_COL[d.rows[j][i]] || TILE_COL.G;
    const hk = 1 + Math.min(0.12, g.rawHeight(tx, ty) / 400);
    const jit = 0.94 + ((i * 73 + j * 37) % 11) / 90;
    const lat = c === TILE_COL.G || c === TILE_COL.L || c === TILE_COL.R ? Math.max(0, Math.sin(tx * 0.31 + Math.sin(ty * 0.17) * 2) * Math.sin(ty * 0.23 + tx * 0.05) - 0.35) * 0.9 : 0;
    let r0 = c[0] + (0.55 - c[0]) * lat, g0 = c[1] + (0.36 - c[1]) * lat, b0 = c[2] + (0.22 - c[2]) * lat;
    // a band of sand or mud along the water's edge
    const beach = (1 - smooth(0.58, 0.85, land)) * 0.85;
    r0 += (SAND[0] - r0) * beach; g0 += (SAND[1] - g0) * beach; b0 += (SAND[2] - b0) * beach;
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
  const mesh = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ color: 0x2f7a9a }));
  mesh.receiveShadow = true;
  mesh.name = 'water';
  return mesh;
}
