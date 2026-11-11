// The child: the same look as the canvas game (yellow shirt, blue shorts, big round head, the clay lamp held out),
// built from simple shapes. Drawn larger than life, as the game's people are, so they read at city scale.
import * as THREE from 'three';
import { model } from '../world/models';

export const CHILD_SCALE = 3.4;   // how much larger than life

export class Child {
  readonly obj = new THREE.Group();
  private legL: THREE.Object3D; private legR: THREE.Object3D; private armL: THREE.Object3D;
  private lamp: THREE.PointLight;
  private t = 0;
  heading = 0;
  private model: THREE.Object3D | null = null;                      // radians, 0 = facing +X (east)

  constructor() {
    const mat = (c: number, e = 0) => new THREE.MeshLambertMaterial({ color: c, emissive: e ? c : 0, emissiveIntensity: e });
    const SKIN = mat(0xb8794a), SHIRT = mat(0xf2c230), SHORTS = mat(0x2f5fb0), HAIR = mat(0x1a1410), WHITE = mat(0xfdfbf5), DARK = mat(0x16110e), CLAY = mat(0xb4532a);
    const add = (parent: THREE.Object3D, geo: THREE.BufferGeometry, m: THREE.Material, x: number, y: number, z: number) => {
      const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); o.castShadow = true; parent.add(o); return o;
    };
    const body = new THREE.Group(); this.obj.add(body); body.scale.setScalar(CHILD_SCALE);
    const leg = (side: number) => { const p = new THREE.Group(); p.position.set(0, 0.34, side * 0.08); body.add(p); add(p, new THREE.CylinderGeometry(0.055, 0.055, 0.3, 8), SKIN, 0, -0.16, 0); add(p, new THREE.BoxGeometry(0.17, 0.08, 0.1), DARK, 0.04, -0.31, 0); return p; };
    this.legL = leg(1); this.legR = leg(-1);
    add(body, new THREE.SphereGeometry(0.16, 12, 8).scale(0.95, 0.7, 1.05), SHORTS, 0, 0.38, 0);
    add(body, new THREE.SphereGeometry(0.17, 12, 8).scale(0.92, 1.05, 1.05), SHIRT, 0, 0.55, 0);
    const arm = new THREE.Group(); arm.position.set(0, 0.64, 0.19); body.add(arm);
    add(arm, new THREE.CylinderGeometry(0.045, 0.045, 0.24, 8), SKIN, 0, -0.12, 0); this.armL = arm;
    add(body, new THREE.CylinderGeometry(0.045, 0.045, 0.24, 8).rotateZ(-1.2), SKIN, 0.12, 0.56, -0.2);
    add(body, new THREE.SphereGeometry(0.085, 10, 6).scale(1, 0.45, 1), CLAY, 0.25, 0.52, -0.21);
    add(body, new THREE.SphereGeometry(0.035, 8, 6).scale(1, 2, 1), mat(0xffd36b, 1.5), 0.3, 0.6, -0.21);
    add(body, new THREE.SphereGeometry(0.265, 16, 12), SKIN, 0.01, 0.93, 0);
    add(body, new THREE.SphereGeometry(0.27, 16, 12).scale(1, 0.8, 1.02), HAIR, -0.045, 1.0, 0);
    for (const z of [-0.105, 0.105]) { add(body, new THREE.SphereGeometry(0.07, 10, 8), WHITE, 0.235, 0.94, z); add(body, new THREE.SphereGeometry(0.032, 8, 6), DARK, 0.29, 0.935, z); }
    // the Blender model of the child, when it has loaded, in place of the simple shapes
    const m = model('child', { height: 1.15 * CHILD_SCALE });
    if (m) { body.visible = false; this.obj.add(m); this.model = m; }
    this.lamp = new THREE.PointLight(0xffc870, 0, 40, 1.6); this.lamp.position.set(0.3 * CHILD_SCALE, 0.8 * CHILD_SCALE, -0.21 * CHILD_SCALE); this.obj.add(this.lamp);
  }

  /** Walk animation and facing; `speed` in m/s. */
  update(dt: number, speed: number, night: boolean) {
    this.t += dt * (speed > 0.1 ? Math.min(14, 4 + speed * 0.6) : 0);
    const s = speed > 0.1 ? Math.sin(this.t) * 0.55 : 0;
    this.legL.rotation.z = s; this.legR.rotation.z = -s; this.armL.rotation.z = -s * 0.8;
    this.obj.rotation.y = -this.heading;
    if (this.model) { this.model.position.y = Math.abs(Math.sin(this.t)) * (speed > 0.1 ? 0.35 : 0); this.model.rotation.z = s * 0.08; }
    this.lamp.intensity = night ? 450 : 0;
  }
}
