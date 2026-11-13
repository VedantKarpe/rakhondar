// The day: a game minute passes every real second (so a day is 24 minutes). The sky, sun and moon follow it; at dusk
// the street tubelights come on, and the few nearest the child light the ground for real.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import type { Network } from '../world/network';
import type { Ground } from '../world/data';

const SKY: [number, number][] = [[0, 0x1c2c52], [300, 0x1c2c52], [360, 0xe6b89a], [450, 0xd8dcd8], [1000, 0xdcdcd4], [1080, 0xead2b0], [1130, 0xc88a78], [1180, 0x2e3a66], [1440, 0x1c2c52]];

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
  private tubes: THREE.InstancedMesh;
  private pool: THREE.PointLight[] = [];

  constructor(net: Network, g: Ground) {
    this.lamps.name = 'street lights';
    // a light every 30 m along each street, on its left side: the old cast-iron globe lamps on the main streets, and on
    // the ordinary streets the grey concrete pole with a curved arm and a white tubelight hanging over the road
    const iron: THREE.Matrix4[] = [], tube: THREE.Matrix4[] = [];
    for (let e = 0; e < net.edges.length; e++) {
      // Panjim's streets are lit by tubelights; the old cast-iron lamps stand only along the Mandovi promenade
      const E = net.edges[e], mid = net.at(e, E.len / 2), mx = mid.x / 20, mz = mid.z / 20;
      let main = mx > 55 && mx < 135 && mz < 32;
      if (main) { main = false; for (const sd of [-1, 1]) for (let k = 4; k <= 34 && !main; k += 3) if (g.landAt(mid.x + mid.dz * sd * (E.width * 0.75 + k), mid.z - mid.dx * sd * (E.width * 0.75 + k)) < 0.5) main = true; }
      for (let s = 10; s < E.len; s += 30) {
        const p = net.at(e, s), off = E.width / 2 + 1.5, x = p.x + p.dz * off, z = p.z - p.dx * off, y = E.deck ?? g.heightAt(x, z);
        const ang = Math.atan2(-p.dx, -p.dz);   // turns the arm (local +X) toward the road
        const m = new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), ang), new THREE.Vector3(1, 1, 1));
        if (main) { iron.push(m); this.spots.push(new THREE.Vector3(x, y + 9, z)); }
        else { tube.push(m); this.spots.push(new THREE.Vector3(x - p.dz * 2.4, y + 8.4, z + p.dx * 2.4)); }
      }
    }
    const ironGeo = mergeGeometries([
      new THREE.CylinderGeometry(0.45, 0.6, 1.2, 6).translate(0, 0.6, 0),
      new THREE.CylinderGeometry(0.14, 0.22, 7, 5).translate(0, 4.6, 0),
      new THREE.CylinderGeometry(0.3, 0.3, 0.3, 5).translate(0, 8.2, 0),
      new THREE.ConeGeometry(0.75, 0.6, 6).translate(0, 9.8, 0),
    ])!;
    const tubeGeo = mergeGeometries([
      new THREE.CylinderGeometry(0.16, 0.26, 9, 6).translate(0, 4.5, 0),                      // the concrete pole
      new THREE.CylinderGeometry(0.07, 0.07, 2.8, 5).rotateZ(Math.PI / 2 - 0.25).translate(1.3, 9.2, 0),   // the arm, rising a little
      new THREE.BoxGeometry(0.5, 0.18, 1.5).translate(2.5, 9.45, 0),                          // the fixture's cover
    ])!;
    const add = (geo: THREE.BufferGeometry, color: number, list: THREE.Matrix4[]) => { const im = new THREE.InstancedMesh(geo, new THREE.MeshLambertMaterial({ color }), list.length); list.forEach((m, i) => im.setMatrixAt(i, m)); im.castShadow = true; this.lamps.add(im); };
    add(ironGeo, 0x1d1e21, iron); add(tubeGeo, 0x9a9a96, tube);
    // the lit parts: globes on the iron lamps, long white tubes under the fixtures
    this.heads = new THREE.InstancedMesh(new THREE.SphereGeometry(0.62, 8, 5).translate(0, 9.0, 0), new THREE.MeshBasicMaterial({ color: 0xd8d6d0 }), iron.length);
    iron.forEach((m, i) => this.heads.setMatrixAt(i, m));
    this.tubes = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.1, 0.1, 1.3, 6).rotateX(Math.PI / 2).translate(2.5, 9.3, 0), new THREE.MeshBasicMaterial({ color: 0xd8d8d8 }), tube.length);
    tube.forEach((m, i) => this.tubes.setMatrixAt(i, m));
    this.lamps.add(this.heads, this.tubes);
    for (let i = 0; i < 12; i++) { const l = new THREE.PointLight(0xf0f4ff, 0, 34, 1.3); this.pool.push(l); this.lamps.add(l); }
  }

  get night(): boolean { return this.min < 6 * 60 || this.min > 18 * 60 + 40; }
  /** 0 at noon, 1 deep in the night, easing through dusk and dawn. */
  get dark(): number { const t = this.min; return t < 300 ? 1 : t < 420 ? 1 - (t - 300) / 120 : t < 1050 ? 0 : t < 1170 ? (t - 1050) / 120 : 1; }
  get label(): string { const h = Math.floor(this.min / 60), m = Math.floor(this.min % 60); return `${((h + 11) % 12) + 1}:${String(m).padStart(2, '0')} ${h < 12 ? 'am' : 'pm'}`; }

  update(dt: number, scene: THREE.Scene, hemi: THREE.HemisphereLight, sun: THREE.DirectionalLight, cx: number, cz: number) {
    this.min = (this.min + dt * this.rate) % 1440;
    const k = this.dark;
    scene.background = lerpCol(this.min);
    hemi.intensity = 1.25 - 0.6 * k; hemi.color.set(0xf1eee4).lerp(new THREE.Color(0x8a9ad0), k); hemi.groundColor.set(0x8a7456).lerp(new THREE.Color(0x3a3a50), k);   // Goan nights are bright: moonlight, sodium glow, lit windows
    // a hazy tropical sun: soft by day, low and golden in the evening
    const eve = Math.max(0, Math.min(1, (this.min - 960) / 150));
    sun.intensity = (1.7 + eve * 0.5) * (1 - k) + 0.45 * k;
    sun.color.set(0xfff0d8).lerp(new THREE.Color(0xffb870), eve).lerp(new THREE.Color(0x8fa6d8), k);
    if (scene.fog) (scene.fog as THREE.Fog).color.copy(scene.background as THREE.Color);
    const on = k > 0.55;
    (this.heads.material as THREE.MeshBasicMaterial).color.set(on ? 0xfff2cc : 0xd8d6d0);
    (this.tubes.material as THREE.MeshBasicMaterial).color.set(on ? 0xf2fbff : 0xd8d8d8);
    // the nearest few lamps cast real light
    if (on) {
      const near = this.spots.map(p => ({ p, d: Math.hypot(p.x - cx, p.z - cz) })).filter(a => a.d < 120).sort((a, b) => a.d - b.d);
      this.pool.forEach((l, i) => { const a = near[i]; if (a) { l.position.set(a.p.x, a.p.y - 0.4, a.p.z); l.intensity = 140; } else l.intensity = 0; });
    } else this.pool.forEach(l => (l.intensity = 0));
  }

  /** Is (x, z) under a lit street light? */
  litAt(x: number, z: number): boolean {
    if (this.dark <= 0.55) return true;
    for (const l of this.pool) if (l.intensity > 0 && Math.hypot(l.position.x - x, l.position.z - z) < 14) return true;
    return false;
  }
}
