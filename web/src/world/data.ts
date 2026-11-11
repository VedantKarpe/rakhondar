// Panjim's map data (written by tools/export_web.py from the canvas game) and the ground's height.
// Map coordinates are tiles (x east, y south; one tile is 20 m). In the 3D world: X = x * T east, Z = y * T south, Y up, metres.

export const T = 20;            // metres a tile
export const EXAG = 1.6;        // heights are drawn this much taller than they are, so Altinho reads as a hill
export const WATER_Y = 0;       // the river and the sea

type Flat = number[];           // [x0, y0, x1, y1, ...] in tiles
export interface Landmark { name: string; file: string; at: [number, number][]; cov: number[]; deck: number }
export interface PanjimData {
  W: number; H: number; tile: number; rows: string[]; centre: [number, number];
  b: [Flat, number, number, number, number?][];      // building: outline, storeys, kind (0 house, 1 church, 2 temple), area m², guessed
  r: [Flat, number, number, number, number][];       // street: line, width m, flags (1 bridge, 2 roundabout, 4 one-way, 8 Atal Setu), class, name index
  p: [Flat, number][];                               // footpath: line, flags (1 steps, 2 bridge)
  water: Flat[]; mang: Flat[]; marsh: Flat[];
  eg: number; ew: number; eh: number; elev: number[];  // heights in metres on a grid every eg tiles
  names: string[]; places: [string, number, number][]; lm: Landmark[];
}

export async function loadPanjim(): Promise<PanjimData> {
  const res = await fetch(`${import.meta.env.BASE_URL}data/panjim.json`);
  if (!res.ok) throw new Error(`could not load the map (${res.status})`);
  return res.json();
}

export const pts = (f: Flat): [number, number][] => { const o: [number, number][] = []; for (let i = 0; i < f.length; i += 2) o.push([f[i], f[i + 1]]); return o; };

export function inPoly(p: [number, number][], x: number, y: number): boolean {
  let s = false;
  for (let i = 0, j = p.length - 1; i < p.length; j = i++)
    if ((p[i][1] > y) !== (p[j][1] > y) && x < (p[j][0] - p[i][0]) * (y - p[i][1]) / (p[j][1] - p[i][1] + 1e-12) + p[i][0]) s = !s;
  return s;
}

/** The ground: which tiles are water, and the height (metres, already exaggerated) at every tile corner. */
export class Ground {
  readonly W: number; readonly H: number;
  readonly wet: Uint8Array;            // 1 where a tile is water (the map's sea and river, and the mapped ponds and creeks)
  readonly corner: Float32Array;       // height at each tile corner, (W + 1) x (H + 1)

  constructor(readonly d: PanjimData) {
    const W = this.W = d.W, H = this.H = d.H;
    this.wet = new Uint8Array(W * H);
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) if (d.rows[y][x] === 'W') this.wet[y * W + x] = 1;
    // mapped water inside the land (Ourém creek, ponds): a tile whose middle is in it is water too
    for (const f of d.water) {
      const p = pts(f); let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
      for (const [x, y] of p) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); }
      for (let y = Math.max(0, Math.floor(y0)); y <= Math.min(H - 1, Math.floor(y1)); y++)
        for (let x = Math.max(0, Math.floor(x0)); x <= Math.min(W - 1, Math.floor(x1)); x++)
          if (inPoly(p, x + 0.5, y + 0.5)) this.wet[y * W + x] = 1;
    }
    // how far each land tile is from water, so the ground eases down to the shore
    const dist = new Float32Array(W * H).fill(99), q: number[] = [];
    for (let i = 0; i < W * H; i++) if (this.wet[i]) { dist[i] = 0; q.push(i); }
    for (let h = 0; h < q.length; h++) {
      const i = q[h], x = i % W, y = (i / W) | 0, nd = dist[i] + 1;
      if (nd > 4) continue;
      for (const [ax, ay] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const nx = x + ax, ny = y + ay; if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue;
        const n = ny * W + nx; if (dist[n] > nd) { dist[n] = nd; q.push(n); }
      }
    }
    this.corner = new Float32Array((W + 1) * (H + 1));
    for (let j = 0; j <= H; j++) for (let i = 0; i <= W; i++) {
      let land = 0, dm = 99;
      for (const [ax, ay] of [[-1, -1], [0, -1], [-1, 0], [0, 0]]) {
        const tx = i + ax, ty = j + ay;
        if (tx < 0 || ty < 0 || tx >= W || ty >= H) continue;
        if (!this.wet[ty * W + tx]) land++;
        dm = Math.min(dm, dist[ty * W + tx]);
      }
      const h = this.rawHeight(i, j) * EXAG * Math.min(1, dm / 3) + 0.6;
      // a corner touching more water than land sits under the water; between, it slopes down to it
      const f = land / 4;
      this.corner[j * (W + 1) + i] = f >= 0.75 ? h : f <= 0.25 ? -2.2 : -2.2 + (h + 2.2) * (f - 0.25) / 0.5;
    }
  }

  /** The surveyed height in metres at tile position (x, y). */
  rawHeight(x: number, y: number): number {
    const d = this.d, g = d.eg, fx = Math.max(0, Math.min(d.ew - 1.001, x / g)), fy = Math.max(0, Math.min(d.eh - 1.001, y / g));
    const i = fx | 0, j = fy | 0, tx = fx - i, ty = fy - j, e = (a: number, b: number) => d.elev[(j + b) * d.ew + i + a];
    return Math.max(0, (e(0, 0) * (1 - tx) + e(1, 0) * tx) * (1 - ty) + (e(0, 1) * (1 - tx) + e(1, 1) * tx) * ty);
  }

  /** The ground's drawn height (metres) at world position (X, Z). */
  heightAt(X: number, Z: number): number {
    const W = this.W, x = Math.max(0, Math.min(W - 0.001, X / T)), y = Math.max(0, Math.min(this.H - 0.001, Z / T));
    const i = x | 0, j = y | 0, tx = x - i, ty = y - j, w = W + 1, k = j * w + i, c = this.corner;
    return (c[k] * (1 - tx) + c[k + 1] * tx) * (1 - ty) + (c[k + w] * (1 - tx) + c[k + w + 1] * tx) * ty;
  }

  isWet(X: number, Z: number): boolean {
    const x = Math.floor(X / T), y = Math.floor(Z / T);
    return x < 0 || y < 0 || x >= this.W || y >= this.H || this.wet[y * this.W + x] === 1;
  }
}
