// Rakhondar in three.js: Panjim from the map data, the child, the turning view. A prototype to compare with the
// canvas game; game systems (traffic, people, quests, monsters, fog) come next.
import * as THREE from 'three';
import { loadPanjim, Ground, T } from './world/data';
import { buildTerrain, buildWater } from './world/terrain';
import { buildRoads, StreetIndex } from './world/roads';
import { buildBuildings, BuildingIndex } from './world/buildings';
import { buildTrees } from './world/trees';
import { Child } from './entities/child';
import { Input } from './systems/input';
import { CameraRig } from './systems/cameraRig';
import { Movement } from './systems/movement';
import { Hud } from './ui/hud';

async function start() {
  const d = await loadPanjim();
  const g = new Ground(d);

  const app = document.getElementById('app')!;
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  app.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x9cc3d8);
  const hemi = new THREE.HemisphereLight(0xdfeaf5, 0x4a5a30, 1.1);
  const sun = new THREE.DirectionalLight(0xfff1d6, 2.2);
  sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -160, right: 160, top: 160, bottom: -160, near: 1, far: 900 });
  sun.shadow.bias = -0.0008; sun.shadow.normalBias = 0.6;
  scene.add(hemi, sun, sun.target);

  scene.add(buildTerrain(d, g), buildWater(d));
  const roads = buildRoads(d, g); scene.add(roads.group);
  const si = new StreetIndex(roads.segs);
  const blds = buildBuildings(d, g); scene.add(blds.group);
  const bi = new BuildingIndex(blds.list);
  scene.add(buildTrees(d, g, bi, si));

  const child = new Child(); scene.add(child.obj);
  const move = new Movement(g, bi, si);
  // start below the Church of the Immaculate Conception, where the canvas game starts
  let px = 92 * T, pz = 34 * T;
  if (!move.free(px, pz)) for (let r = 2; r < 200 && !move.free(px, pz); r += 2) { px = 92 * T + r; }

  const rig = new CameraRig(), input = new Input(renderer.domElement), hud = new Hud();
  let night = false;
  input.onKey = k => { if (k === 'n') night = !night; };
  const btn = (id: string, f: () => void) => document.getElementById(id)!.addEventListener('click', e => { (e.currentTarget as HTMLElement).blur(); f(); });
  btn('bL', () => rig.turn(-Math.PI / 2)); btn('bR', () => rig.turn(Math.PI / 2)); btn('bIn', () => rig.zoom(2)); btn('bOut', () => rig.zoom(-2));

  const places = d.places.map(([n, x, y]) => ({ n, X: x * T, Z: y * T }));
  const resize = () => { renderer.setSize(app.clientWidth, app.clientHeight, false); };
  addEventListener('resize', resize); resize();
  document.getElementById('loading')!.remove();

  const clock = new THREE.Clock();
  (window as unknown as { rk: unknown }).rk = { scene, renderer, rig, child, get pos() { return [px, pz]; }, set pos(v: number[]) { px = v[0]; pz = v[1]; } };
  const frame = (dt: number) => {
    // walk: screen directions turned to the ground under the current view
    const m = input.move(), run = input.has('shift') ? 2 : 1, speed = Math.hypot(m.x, m.y) * 14 * run;
    if (speed > 0) {
      const w = rig.screenToGround(m.x, m.y), L = Math.hypot(w.x, w.z) || 1;
      child.heading = Math.atan2(w.z, w.x);
      [px, pz] = move.step(px, pz, (w.x / L) * speed * dt, (w.z / L) * speed * dt);
    }
    const py = move.standY(px, pz);
    child.obj.position.set(px, py, pz);
    child.update(dt, speed, night);
    // the view: held keys turn it steadily, the mouse turns it as it is dragged, it zooms in steps
    rig.turn(input.heldTurn() * 2.2 * dt + input.turnDelta); input.turnDelta = 0;
    if (input.zoomDelta) { rig.zoom(input.zoomDelta); input.zoomDelta = 0; }
    rig.update(dt, child.obj.position, app.clientWidth / Math.max(1, app.clientHeight));
    // the sun follows the child so its shadows are always sharp where you are
    sun.position.set(px - 120, py + 260, pz - 60); sun.target.position.set(px, py, pz);
    hemi.intensity = night ? 0.25 : 1.1; sun.intensity = night ? 0.15 : 2.2;
    hemi.color.set(night ? 0x5a6aa0 : 0xdfeaf5); scene.background = new THREE.Color(night ? 0x0a1020 : 0x9cc3d8);
    let near = '', nd = 1e9;
    for (const p of places) { const dd = Math.hypot(p.X - px, p.Z - pz); if (dd < nd) { nd = dd; near = p.n; } }
    renderer.render(scene, rig.camera);
    hud.update(dt, renderer, nd < 400 ? near : '', night);
  };
  (window as unknown as { rkFrame: (dt: number) => void }).rkFrame = frame;   // for tests: run one frame by hand
  renderer.setAnimationLoop(() => frame(Math.min(0.05, clock.getDelta())));
}

start().catch(e => { const l = document.getElementById('loading'); if (l) l.textContent = 'Could not start: ' + e.message; console.error(e); });
