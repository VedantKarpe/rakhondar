// The street network as a graph: a node wherever streets share a point, an edge for each piece of street between.
// Vehicles drive it (keeping left, as in India); townspeople walk its pavements.
import { T, pts, type PanjimData } from './data';
import type { Ground } from './data';

export interface Edge { a: number; b: number; line: [number, number][]; len: number; width: number; oneWay: boolean; deck: number | null }
export interface Node { x: number; z: number; out: number[] }   // out: edge ids leaving (both directions for two-way)

export class Network {
  nodes: Node[] = [];
  edges: Edge[] = [];

  constructor(d: PanjimData, g: Ground) {
    // count how many streets use each point: a point used twice or more (or a street's end) is a node
    const key = (x: number, y: number) => `${Math.round(x * 50)},${Math.round(y * 50)}`;
    const uses = new Map<string, number>();
    const streets = d.r.filter(([f, w]) => f.length >= 4 && w >= 5);
    for (const [f] of streets) for (const [x, y] of pts(f)) uses.set(key(x, y), (uses.get(key(x, y)) ?? 0) + 1);
    const id = new Map<string, number>();
    const node = (x: number, y: number) => {
      const k = key(x, y); let i = id.get(k);
      if (i === undefined) { i = this.nodes.length; id.set(k, i); this.nodes.push({ x: x * T, z: y * T, out: [] }); }
      return i;
    };
    for (const [f, w, flags] of streets) {
      const p = pts(f); let start = 0;
      const bridge = (flags & 1) !== 0;
      const deck = bridge ? Math.max(5, g.heightAt(p[0][0] * T, p[0][1] * T) + 0.3, g.heightAt(p[p.length - 1][0] * T, p[p.length - 1][1] * T) + 0.3) + ((flags & 8) ? 14 : 0) : null;
      for (let i = 1; i < p.length; i++) {
        if (i < p.length - 1 && (uses.get(key(p[i][0], p[i][1])) ?? 0) < 2) continue;
        const line = p.slice(start, i + 1).map(([x, y]) => [x * T, y * T] as [number, number]);
        let len = 0; for (let k = 1; k < line.length; k++) len += Math.hypot(line[k][0] - line[k - 1][0], line[k][1] - line[k - 1][1]);
        if (len > 1) {
          const a = node(p[start][0], p[start][1]), b = node(p[i][0], p[i][1]), oneWay = (flags & 4) !== 0;
          const e = this.edges.length; this.edges.push({ a, b, line, len, width: w * 1.5, oneWay, deck });
          this.nodes[a].out.push(e);
          if (!oneWay) this.nodes[b].out.push(~e);   // ~e: the same edge driven backwards
        }
        start = i;
      }
    }
  }

  /** Point and heading at distance s along edge `e` (negative id = driven backwards). */
  at(e: number, s: number): { x: number; z: number; dx: number; dz: number } {
    const E = this.edges[e < 0 ? ~e : e], L = E.line, back = e < 0;
    let rem = back ? E.len - s : s;
    for (let i = 1; i < L.length; i++) {
      const [ax, az] = L[i - 1], [bx, bz] = L[i], l = Math.hypot(bx - ax, bz - az);
      if (rem <= l || i === L.length - 1) {
        const t = Math.max(0, Math.min(1, rem / (l || 1))), dx = (bx - ax) / (l || 1), dz = (bz - az) / (l || 1);
        return { x: ax + (bx - ax) * t, z: az + (bz - az) * t, dx: back ? -dx : dx, dz: back ? -dz : dz };
      }
      rem -= l;
    }
    return { x: L[0][0], z: L[0][1], dx: 1, dz: 0 };
  }
  end(e: number): number { const E = this.edges[e < 0 ? ~e : e]; return e < 0 ? E.a : E.b; }
  edge(e: number): Edge { return this.edges[e < 0 ? ~e : e]; }

  /** The next edge out of the end of `e`, not straight back if there is any other way. */
  next(e: number, rnd: () => number): number {
    const n = this.nodes[this.end(e)], back = ~e, opts = n.out.filter(o => o !== back);
    if (!opts.length) return n.out.includes(back) ? back : n.out[0] ?? back;
    return opts[Math.floor(rnd() * opts.length)];
  }

  /** The edge nearest (X, Z), and how far along it. */
  nearest(X: number, Z: number): { e: number; s: number; d: number } {
    let best = { e: 0, s: 0, d: 1e18 };
    this.edges.forEach((E, i) => {
      let acc = 0;
      for (let k = 1; k < E.line.length; k++) {
        const [ax, az] = E.line[k - 1], [bx, bz] = E.line[k], ex = bx - ax, ez = bz - az, l2 = ex * ex + ez * ez || 1e-9;
        const t = Math.max(0, Math.min(1, ((X - ax) * ex + (Z - az) * ez) / l2)), dd = Math.hypot(X - ax - ex * t, Z - az - ez * t);
        if (dd < best.d) best = { e: i, s: acc + Math.sqrt(l2) * t, d: dd };
        acc += Math.sqrt(l2);
      }
    });
    return best;
  }
}
