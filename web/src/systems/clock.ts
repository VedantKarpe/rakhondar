// The day: a game minute passes every real second (so a day is 24 minutes). The sky, sun and moon follow it; at dusk
// the street tubelights come on, and the few nearest the child light the ground for real.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import type { Network } from '../world/network';
import type { Ground } from '../world/data';

const SKY: [number, number][] = [[0, 0x0b1222], [300, 0x0b1222], [360, 0xe6b89a], [450, 0xd8dcd8], [1000, 0xdcdcd4], [1080, 0xead2b0], [1130, 0xc88a78], [1180, 0x2a2848], [1440, 0x0b1222]];

function lerpCol(t: number): THREE.Color {
  for (let i = 1; i < SKY.length; i++) if (t <= SKY[i][0]) {
    const [a, ca] = SKY[i - 1], [b, cb] = SKY[i];
    return new THREE.Color(ca).lerp(new THREE.Color(cb), (t - a) / (b - a));
  }
  return new THREE.Color(SKY[0][1]);
}

export class Clock {
  min = 17 * 60;            // start in the late afternoon, so dusk comes soon
  rate = 1;                 // game minutes a real second
  readonly lamps = new THREE.Group();
  private spots: THREE.Vector3[] = [];
  private heads: THREE.InstancedMesh;
  private pool: THREE.PointLight[] = [];

  constructor(net: Network, g: Ground) {
    this.lamps.name = 'street lights';
    // a tubelight every ~45 m along each street, on its left side
    for (let e = 0; e < net.edges.length; e++) {
      const E = net.edges[e];
      for (let s = 10; s < E.len; s += 30) {
        const p = net.at(e, s), off = E.width / 2 + 1.5, x = p.x + p.dz * off, z = p.z - p.dx * off;
        this.spots.push(new THREE.Vector3(x, (E.deck ?? g.heightAt(x, z)), z));
      }
    }
    // Panjim's old cast-iron lamp posts: a black fluted pole on a wide foot, a lantern cap and a white globe
    const ironGeo = mergeGeometries([
      new THREE.CylinderGeometry(0.45, 0.6, 1.2, 8).translate(0, 0.6, 0),
      new THREE.CylinderGeometry(0.14, 0.22, 7, 8).translate(0, 4.6, 0),
      new THREE.CylinderGeometry(0.3, 0.3, 0.3, 8).translate(0, 8.2, 0),
      new THREE.ConeGeometry(0.75, 0.6, 8).translate(0, 9.8, 0),
    ])!;
    const pole = new THREE.InstancedMesh(ironGeo, new THREE.MeshLambertMaterial({ color: 0x1d1e21 }), this.spots.length);
    this.heads = new THREE.InstancedMesh(new THREE.SphereGeometry(0.62, 12, 8).translate(0, 9.0, 0), new THREE.MeshBasicMaterial({ color: 0xd8d6d0 }), this.spots.length);
    const m = new THREE.Matrix4();
    this.spots.forEach((p, i) => { m.makeTranslation(p.x, p.y, p.z); pole.setMatrixAt(i, m); this.heads.setMatrixAt(i, m); });
    this.lamps.add(pole, this.heads);
    for (let i = 0; i < 6; i++) { const l = new THREE.PointLight(0xffe2a8, 0, 30, 1.4); this.pool.push(l); this.lamps.add(l); }
  }

  get night(): boolean { return this.min < 6 * 60 || this.min > 18 * 60 + 40; }
  /** 0 at noon, 1 deep in the night, easing through dusk and dawn. */
  get dark(): number { const t = this.min; return t < 300 ? 1 : t < 420 ? 1 - (t - 300) / 120 : t < 1050 ? 0 : t < 1170 ? (t - 1050) / 120 : 1; }
  get label(): string { const h = Math.floor(this.min / 60), m = Math.floor(this.min % 60); return `${((h + 11) % 12) + 1}:${String(m).padStart(2, '0')} ${h < 12 ? 'am' : 'pm'}`; }

  update(dt: number, scene: THREE.Scene, hemi: THREE.HemisphereLight, sun: THREE.DirectionalLight, cx: number, cz: number) {
    this.min = (this.min + dt * this.rate) % 1440;
    const k = this.dark;
    scene.background = lerpCol(this.min);
    hemi.intensity = 1.25 - 1.0 * k; hemi.color.set(0xf1eee4).lerp(new THREE.Color(0x5a6aa0), k); hemi.groundColor.set(0x8a7456).lerp(new THREE.Color(0x1a1a28), k);
    // a hazy tropical sun: soft by day, low and golden in the evening
    const eve = Math.max(0, Math.min(1, (this.min - 960) / 150));
    sun.intensity = (1.7 + eve * 0.5) * (1 - k) + 0.12 * k;
    sun.color.set(0xfff0d8).lerp(new THREE.Color(0xffb870), eve).lerp(new THREE.Color(0x8fa6d8), k);
    if (scene.fog) (scene.fog as THREE.Fog).color.copy(scene.background as THREE.Color);
    const on = k > 0.55;
    (this.heads.material as THREE.MeshBasicMaterial).color.set(on ? 0xfff2cc : 0xd8d6d0);
    // the nearest few lamps cast real light
    if (on) {
      const near = this.spots.map(p => ({ p, d: Math.hypot(p.x - cx, p.z - cz) })).filter(a => a.d < 120).sort((a, b) => a.d - b.d);
      this.pool.forEach((l, i) => { const a = near[i]; if (a) { l.position.set(a.p.x, a.p.y + 8.4, a.p.z); l.intensity = 90; } else l.intensity = 0; });
    } else this.pool.forEach(l => (l.intensity = 0));
  }

  /** Is (x, z) under a lit street light? */
  litAt(x: number, z: number): boolean {
    if (this.dark <= 0.55) return true;
    for (const l of this.pool) if (l.intensity > 0 && Math.hypot(l.position.x - x, l.position.z - z) < 14) return true;
    return false;
  }
}
