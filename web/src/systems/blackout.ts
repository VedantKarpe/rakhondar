// When the torch dies at night: every street light in Panjim goes out except one lit way through the dark, leading to
// a shop where Uncle keeps batteries. Following it is the only way to charge the torch again before morning, and the
// demons know it: they lie in wait along the lit path.
import type { Network } from '../world/network';

export interface Shop { x: number; z: number }

export class Blackout {
  active = false;
  target: { x: number; z: number; name: string } | null = null;
  path: { x: number; z: number }[] = [];          // the route's points, for ambushes
  edges = new Set<number>();
  private sprung = new Set<number>();              // ambushes already set off

  constructor(private net: Network, private shops: Shop[]) {}

  private nearestNode(x: number, z: number): number {
    let best = 0, bd = 1e18;
    this.net.nodes.forEach((n, i) => { if (!n.out.length) return; const d = (n.x - x) ** 2 + (n.z - z) ** 2; if (d < bd) { bd = d; best = i; } });
    return best;
  }

  /** The torch has died at (cx, cz): pick a shop some way off and light the route there. */
  start(cx: number, cz: number): string | null {
    if (!this.shops.length) return null;
    // a shop at least 150 m away (it should be a walk), the nearest such
    const far = this.shops.map(s => ({ s, d: Math.hypot(s.x - cx, s.z - cz) })).sort((a, b) => a.d - b.d);
    const shop = (far.find(a => a.d > 150) ?? far[0]).s;
    const from = this.nearestNode(cx, cz), to = this.nearestNode(shop.x, shop.z);
    // the shortest way along the streets (Dijkstra)
    const n = this.net.nodes.length, dist = new Float64Array(n).fill(Infinity), via = new Int32Array(n).fill(-1), viaEdge = new Int32Array(n), done = new Uint8Array(n);
    dist[from] = 0;
    for (let it = 0; it < n; it++) {
      let u = -1, ud = Infinity;
      for (let i = 0; i < n; i++) if (!done[i] && dist[i] < ud) { ud = dist[i]; u = i; }
      if (u < 0 || u === to) break; done[u] = 1;
      for (const e of this.net.nodes[u].out) { const v = this.net.end(e), nd = ud + this.net.edge(e).len; if (nd < dist[v]) { dist[v] = nd; via[v] = u; viaEdge[v] = e; } }
    }
    this.edges.clear(); this.path = []; this.sprung.clear();
    for (let v = to; v !== from && via[v] >= 0; v = via[v]) {
      const e = viaEdge[v], E = this.net.edge(e); this.edges.add(e < 0 ? ~e : e);
      for (let s = 0; s < E.len; s += 25) { const p = this.net.at(e, s); this.path.push({ x: p.x, z: p.z }); }
    }
    this.path.reverse();
    this.active = true;
    this.target = { x: shop.x, z: shop.z, name: "Uncle's battery shop" };
    const m = Math.round(Math.hypot(shop.x - cx, shop.z - cz) / 10) * 10;
    return `Your torch is dead! Every light in Panjim has gone out... except one street. Follow the lit way to Uncle's battery shop, about ${m} m off. Careful, baba: they will be waiting along it.`;
  }

  /** Ambushes: as the child walks the lit way, demons rise from the dark a little ahead (once per stretch). */
  ambushAhead(cx: number, cz: number): { x: number; z: number }[] {
    if (!this.active) return [];
    let k = -1, bd = 1e18;
    this.path.forEach((p, i) => { const d = (p.x - cx) ** 2 + (p.z - cz) ** 2; if (d < bd) { bd = d; k = i; } });
    const out: { x: number; z: number }[] = [];
    const ahead = k + 3;
    if (k >= 0 && ahead < this.path.length && !this.sprung.has(ahead) && ahead % 3 === 0) { this.sprung.add(ahead); out.push(this.path[ahead]); }
    return out;
  }

  end() { this.active = false; this.target = null; this.edges.clear(); this.path = []; }
}
