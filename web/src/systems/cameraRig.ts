// The view: an orthographic camera looking down at 30 degrees (the old game's 2:1 view), following the child, turning
// freely and smoothly about them, and zooming.
import * as THREE from 'three';

export class CameraRig {
  readonly camera: THREE.OrthographicCamera;
  yaw = Math.PI / 4; private yawTarget = Math.PI / 4;
  span = 95; private spanTarget = 95;   // metres of the world across the screen
  private target = new THREE.Vector3();
  private readonly ELEV = Math.asin(0.5);

  constructor() { this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 4000); }

  turn(radians: number) { this.yawTarget += radians; }
  zoom(steps: number) { this.spanTarget = Math.max(40, Math.min(600, this.spanTarget * Math.pow(0.87, steps))); }

  /** Follow `at`, easing the turn and the zoom; `aspect` is the canvas width / height. */
  update(dt: number, at: THREE.Vector3, aspect: number) {
    this.yaw += (this.yawTarget - this.yaw) * Math.min(1, dt * 10);
    this.span += (this.spanTarget - this.span) * Math.min(1, dt * 10);
    this.target.lerp(at, Math.min(1, dt * 8));
    const c = this.camera, h = this.span / aspect / 2;
    c.left = -this.span / 2; c.right = this.span / 2; c.top = h; c.bottom = -h; c.updateProjectionMatrix();
    const d = 800, ce = Math.cos(this.ELEV);
    c.position.set(this.target.x + Math.cos(this.yaw) * ce * d, this.target.y + Math.sin(this.ELEV) * d, this.target.z + Math.sin(this.yaw) * ce * d);
    c.lookAt(this.target);
  }

  /** A screen direction (x right, y down) as a world direction on the ground. */
  screenToGround(x: number, y: number): { x: number; z: number } {
    // screen right = the camera's right; screen down = toward the camera along the ground
    const rx = -Math.sin(this.yaw), rz = Math.cos(this.yaw), dx = Math.cos(this.yaw), dz = Math.sin(this.yaw);
    return { x: rx * x + dx * y, z: rz * x + dz * y };
  }
}
