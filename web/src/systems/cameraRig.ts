// The view: a perspective camera looking down at the child at an adjustable tilt, following them, turning freely and
// smoothly about them, and zooming. A narrow lens keeps the city readable while streets still recede into the distance.
import * as THREE from 'three';

export class CameraRig {
  readonly camera: THREE.PerspectiveCamera;
  yaw = Math.PI / 4; private yawTarget = Math.PI / 4;
  // the default view: low over the street, looking down it to the skyline (press 0 or the ⌂ button to come back to it)
  static readonly SPAN = 140; static readonly TILT = 0.3;
  span = CameraRig.SPAN; private spanTarget = CameraRig.SPAN;   // metres of the world across the screen at the child
  tilt = CameraRig.TILT; private tiltTarget = CameraRig.TILT;   // radians above the ground
  private target = new THREE.Vector3();
  private readonly FOV = 32;

  constructor() { this.camera = new THREE.PerspectiveCamera(this.FOV, 1, 1, 6000); }

  turn(radians: number) { this.yawTarget += radians; }
  /** Back to the default zoom and tilt (the direction stays). */
  reset() { this.spanTarget = CameraRig.SPAN; this.tiltTarget = CameraRig.TILT; }
  zoom(steps: number) { this.spanTarget = Math.max(30, Math.min(600, this.spanTarget * Math.pow(0.87, steps))); }
  /** Tilt the view: positive looks more from above, negative more from the side. */
  tiltBy(r: number) { this.tiltTarget = Math.max(0.2, Math.min(1.25, this.tiltTarget + r)); }

  /** Follow `at`, easing the turn, tilt and zoom; `aspect` is the canvas width / height. */
  update(dt: number, at: THREE.Vector3, aspect: number) {
    const k = Math.min(1, dt * 10);
    this.yaw += (this.yawTarget - this.yaw) * k;
    this.span += (this.spanTarget - this.span) * k;
    this.tilt += (this.tiltTarget - this.tilt) * k;
    this.target.lerp(at, Math.min(1, dt * 8));
    const c = this.camera;
    c.aspect = aspect;
    // distance so `span` metres fit across the screen at the child
    const d = (this.span / 2) / (Math.tan(THREE.MathUtils.degToRad(this.FOV) / 2) * aspect);
    c.far = d * 4.6 + 300;   // beyond the haze nothing is drawn c.updateProjectionMatrix();
    const ce = Math.cos(this.tilt);
    c.position.set(this.target.x + Math.cos(this.yaw) * ce * d, this.target.y + Math.sin(this.tilt) * d, this.target.z + Math.sin(this.yaw) * ce * d);
    c.lookAt(this.target.x, this.target.y + 2, this.target.z);
  }

  /** A screen direction (x right, y down) as a world direction on the ground. */
  screenToGround(x: number, y: number): { x: number; z: number } {
    // the camera looks along -(cos yaw, sin yaw); its right is that direction crossed with up: (sin yaw, -cos yaw)
    const rx = Math.sin(this.yaw), rz = -Math.cos(this.yaw), dx = Math.cos(this.yaw), dz = Math.sin(this.yaw);
    return { x: rx * x + dx * y, z: rz * x + dz * y };
  }
}
