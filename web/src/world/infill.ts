// OpenStreetMap does not have every house in Panjim, so the town looked scattered: big empty lawns between buildings.
// This fills the gaps the way the city really is: wherever a street in town has empty frontage, a row of narrow
// two- and three-storey houses goes up along it, shoulder to shoulder, set back a little from the pavement.
import { T, pts, inPoly, type PanjimData } from './data';
import type { Ground } from './data';
import type { StreetIndex } from './roads';

const CELL = 2;   // metres a cell of the "is this ground taken?" grid

export function infill(d: PanjimData, g: Ground, si: StreetIndex): PanjimData['b'] {
  const W = Math.ceil(d.W * T / CELL), H = Math.ceil(d.H * T / CELL), taken = new Uint8Array(W * H);
  const mark = (x0: number, z0: number, x1: number, z1: number) => {
    for (let z = Math.max(0, Math.floor(z0 / CELL)); z <= Math.min(H - 1, Math.floor(z1 / CELL)); z++)
      for (let x = Math.max(0, Math.floor(x0 / CELL)); x <= Math.min(W - 1, Math.floor(x1 / CELL)); x++) taken[z * W + x] = 1;
  };
  // the mapped buildings, filled cell by cell (with a 2 m margin)
  for (const [f] of d.b) {
    const p = pts(f).map(([x, y]) => [x * T, y * T] as [number, number]);
    let x0 = 1e9, z0 = 1e9, x1 = -1e9, z1 = -1e9; for (const [x, z] of p) { x0 = Math.min(x0, x); z0 = Math.min(z0, z); x1 = Math.max(x1, x); z1 = Math.max(z1, z); }
    for (let z = z0 - 2; z <= z1 + 2; z += CELL) for (let x = x0 - 2; x <= x1 + 2; x += CELL)
      if (inPoly(p, x, z) || inPoly(p, x + 2, z) || inPoly(p, x - 2, z) || inPoly(p, x, z + 2) || inPoly(p, x, z - 2)) mark(x, z, x, z);
  }
  // is the town here? only fill where there are already mapped buildings nearby (so fields and hills stay open)
  const dense = new Uint16Array(d.W * d.H);
  for (const [f] of d.b) { const p = pts(f); const tx = Math.floor(p[0][0]), ty = Math.floor(p[0][1]); for (let y = ty - 3; y <= ty + 3; y++) for (let x = tx - 3; x <= tx + 3; x++) if (x >= 0 && y >= 0 && x < d.W && y < d.H) dense[y * d.W + x]++; }
  const free = (x: number, z: number) => {
    const cx = Math.floor(x / CELL), cz = Math.floor(z / CELL);
    if (cx < 0 || cz < 0 || cx >= W || cz >= H || taken[cz * W + cx]) return false;
    const tx = Math.floor(x / T), ty = Math.floor(z / T), row = d.rows[ty]?.[tx];
    if (!row || row === 'W' || row === 'F' || row === 'M' || g.isWet(x, z) || si.at(x, z)) return false;
    return dense[ty * d.W + tx] >= 2;
  };
  const out: PanjimData['b'] = [];
  let seed = 31; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  for (const [f, w, flags] of d.r) {
    if ((flags & 1) || w < 5) continue;
    const line = pts(f).map(([x, y]) => [x * T, y * T]);
    for (let i = 1; i < line.length; i++) {
      const [ax, az] = line[i - 1], [bx, bz] = line[i], len = Math.hypot(bx - ax, bz - az);
      if (len < 12) continue;
      const tx = (bx - ax) / len, tz = (bz - az) / len, nx = -tz, nz = tx;
      // a front row on the street, then a second row behind it, as the town fills in back from the road
      for (const back of [w * 0.75 + 3.5, w * 0.75 + 23]) for (const sd of [-1, 1]) {
        for (let s = 4; s + 6 < len;) {
          const wide = 7 + Math.floor(rnd() * 5), deep = 10 + Math.floor(rnd() * 7);
          // the house's four corners: front on the street, back away from it
          const c = (u: number, v: number): [number, number] => [ax + tx * u + nx * sd * v, az + tz * u + nz * sd * v];
          const corners = [c(s, back), c(s + wide, back), c(s + wide, back + deep), c(s, back + deep)];
          let ok = true;
          for (let u = 0; u <= wide && ok; u += 2) for (let v = 0; v <= deep && ok; v += 2) { const [x, z] = c(s + u, back + v); if (!free(x, z)) ok = false; }
          if (ok) {
            for (let u = 0; u <= wide; u += 1) for (let v = 0; v <= deep; v += 1) { const [x, z] = c(s + u, back + v); mark(x, z, x, z); }
            const storeys = rnd() < 0.55 ? 2 : rnd() < 0.7 ? 1 : 3;
            out.push([corners.flatMap(([x, z]) => [x / T, z / T]), storeys, 0, storeys > 1 ? Math.max(160, wide * deep) : Math.min(140, wide * deep)] as PanjimData['b'][number]);
          }
          s += wide + (ok ? 0.4 : 3);
        }
      }
    }
  }
  return out;
}
