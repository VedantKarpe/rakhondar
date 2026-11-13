// Streets and footpaths: ribbons laid on the ground (bridges held level above the water), each kind merged into one
// mesh. Also the lookup used to keep the streets walkable and to stand people and vehicles on bridges.
import * as THREE from 'three';
import { Ground, T, pts, type PanjimData } from './data';

const ROAD_K = 1.5;                 // streets are drawn 1.5 x their mapped width, as in the canvas game
export interface Seg { ax: number; az: number; bx: number; bz: number; half: number; deck: number | null }

/** Points every `step` metres along a line of world points. */
function resample(line: [number, number][], step: number): [number, number][] {
  const out: [number, number][] = [line[0]];
  for (let i = 1; i < line.length; i++) {
    const [ax, az] = line[i - 1], [bx, bz] = line[i], L = Math.hypot(bx - ax, bz - az), n = Math.max(1, Math.ceil(L / step));
    for (let k = 1; k <= n; k++) out.push([ax + (bx - ax) * k / n, az + (bz - az) * k / n]);
  }
  return out;
}

/** A ribbon `width` metres wide along `line`, `lift` above the ground (or at `deck` height on a bridge). */
function ribbon(line: [number, number][], width: number, g: Ground, lift: number, deck: number | null, P: number[], I: number[]) {
  const pl = resample(line, 6), base = P.length / 3, h = width / 2;
  for (let i = 0; i < pl.length; i++) {
    const a = pl[Math.max(0, i - 1)], b = pl[Math.min(pl.length - 1, i + 1)], L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
    const nx = -(b[1] - a[1]) / L, nz = (b[0] - a[0]) / L, [x, z] = pl[i];
    for (const s of [-1, 1]) {
      const X = x + nx * h * s, Z = z + nz * h * s, y = deck !== null ? deck : Math.max(0.6, g.heightAt(X, Z)) + lift;   // a street never dips under the river at the bank
      P.push(X, y, Z);
    }
    if (i) { const k = base + (i - 1) * 2; I.push(k, k + 2, k + 1, k + 1, k + 2, k + 3); }
  }
}

function meshOf(P: number[], I: number[], color: number, offset: number): THREE.Mesh {
  // the layers are drawn in a fixed order, pavement, then path, asphalt, markings, each over the one before, and do not
  // fight each other for depth: so one street's pavement can never show through another street's road surface
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); geo.setIndex(I); geo.computeVertexNormals();
  const mat = new THREE.MeshLambertMaterial({ color, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -offset, polygonOffsetUnits: -offset * 2 });
  mat.depthWrite = offset >= 3; const m = new THREE.Mesh(geo, mat); m.receiveShadow = true; m.renderOrder = offset; return m;
}

/** The line `d` metres to the left of `line` (negative: to the right), following its bends. */
function offsetLine(line: [number, number][], d: number): [number, number][] {
  const pl = resample(line, 4);
  return pl.map((q, i) => {
    const a = pl[Math.max(0, i - 1)], b = pl[Math.min(pl.length - 1, i + 1)], L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
    return [q[0] - (b[1] - a[1]) / L * d, q[1] + (b[0] - a[0]) / L * d] as [number, number];
  });
}

export function buildRoads(d: PanjimData, g: Ground): { group: THREE.Group; segs: Seg[] } {
  const group = new THREE.Group(); group.name = 'roads';
  const pave: number[] = [], paveI: number[] = [], asph: number[] = [], asphI: number[] = [], path: number[] = [], pathI: number[] = [], dash: number[] = [], dashI: number[] = [];
  const segs: Seg[] = [];
  for (const [f, w, flags] of d.r) {
    const line = pts(f).map(([x, y]) => [x * T, y * T] as [number, number]);
    if (line.length < 2) continue;
    const width = w * ROAD_K, bridge = (flags & 1) !== 0;
    // a bridge is held level: at the height of the higher of its two ends, and never lower than 5 m over the water
    const deck = bridge ? Math.max(5, g.heightAt(...line[0]) + 0.3, g.heightAt(...line[line.length - 1]) + 0.3) + ((flags & 8) ? 14 : 0) : null;
    ribbon(line, width + (width >= 12 ? 5 : 3), g, 0.12, deck === null ? null : deck - 0.05, pave, paveI);
    ribbon(line, width, g, 0.2, deck, asph, asphI);
    // road markings: a dashed white centre line on every street wide enough for two lanes (a lane divider on the
    // one-ways), and solid white edge lines on the main roads
    if (width >= 9 && !(flags & 2)) {
      const pl = resample(line, 3);
      for (let i = 0; i + 1 < pl.length; i += 3) ribbon([pl[i], pl[i + 1]], 0.3, g, 0.28, deck === null ? null : deck + 0.05, dash, dashI);
    }
    if (width >= 13 && !(flags & 2)) for (const sd of [-1, 1]) ribbon(offsetLine(line, sd * (width / 2 - 0.7)), 0.22, g, 0.28, deck === null ? null : deck + 0.05, dash, dashI);
    for (let i = 1; i < line.length; i++) segs.push({ ax: line[i - 1][0], az: line[i - 1][1], bx: line[i][0], bz: line[i][1], half: width / 2 + 1, deck });
  }
  for (const [f, flags] of d.p) {
    const line = pts(f).map(([x, y]) => [x * T, y * T] as [number, number]);
    if (line.length < 2) continue;
    ribbon(line, 2.2, g, 0.16, (flags & 2) ? Math.max(4, g.heightAt(...line[0]) + 0.3) : null, path, pathI);
    for (let i = 1; i < line.length; i++) segs.push({ ax: line[i - 1][0], az: line[i - 1][1], bx: line[i][0], bz: line[i][1], half: 1.6, deck: null });
  }
  group.add(meshOf(pave, paveI, 0xa65a46, 1), meshOf(path, pathI, 0xcdb98e, 1), meshOf(asph, asphI, 0x5c5e62, 2), meshOf(dash, dashI, 0xf2efe6, 3));
  return { group, segs };
}

/** A grid of street segments for quick "is this on a street?" lookups. */
export class StreetIndex {
  private cells = new Map<number, Seg[]>();
  private static C = 20;
  constructor(segs: Seg[]) {
    const C = StreetIndex.C;
    for (const s of segs) {
      const x0 = Math.floor((Math.min(s.ax, s.bx) - s.half) / C), x1 = Math.floor((Math.max(s.ax, s.bx) + s.half) / C);
      const z0 = Math.floor((Math.min(s.az, s.bz) - s.half) / C), z1 = Math.floor((Math.max(s.az, s.bz) + s.half) / C);
      for (let x = x0; x <= x1; x++) for (let z = z0; z <= z1; z++) { const k = x * 65536 + z; let a = this.cells.get(k); if (!a) this.cells.set(k, a = []); a.push(s); }
    }
  }
  /** The street segment under (X, Z), if any. */
  at(X: number, Z: number): Seg | null {
    const a = this.cells.get(Math.floor(X / StreetIndex.C) * 65536 + Math.floor(Z / StreetIndex.C));
    if (!a) return null;
    for (const s of a) {
      const ex = s.bx - s.ax, ez = s.bz - s.az, L2 = ex * ex + ez * ez || 1e-9, t = Math.max(0, Math.min(1, ((X - s.ax) * ex + (Z - s.az) * ez) / L2));
      if (Math.hypot(X - s.ax - ex * t, Z - s.az - ez * t) < s.half) return s;
    }
    return null;
  }
}
