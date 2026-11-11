// Rakhondar in three.js: Panjim from the map data, the child, the turning view, and the game: traffic and lifts,
// townspeople, the day and its street lights, the night's demons, tasks, the minimap with fog of war.
import * as THREE from 'three';
import { loadPanjim, Ground, T } from './world/data';
import { buildTerrain, buildWater } from './world/terrain';
import { buildRoads, StreetIndex } from './world/roads';
import { buildBuildings, BuildingIndex, windowsLit } from './world/buildings';
import { buildTrees } from './world/trees';
import { Child } from './entities/child';
import { Input } from './systems/input';
import { CameraRig } from './systems/cameraRig';
import { Movement } from './systems/movement';
import { Hud } from './ui/hud';
import { Network } from './world/network';
import { Traffic } from './entities/traffic';
import { People } from './entities/people';
import { Monsters } from './entities/monsters';
import { Clock } from './systems/clock';
import { Quests } from './systems/quests';
import { Minimap } from './ui/minimap';
import { sfx, unlockAudio } from './systems/sfx';
import { loadModels, rawModel } from './world/models';
import { Boats } from './entities/boats';
import { Pumps } from './entities/pumps';

async function start() {
  const [d] = await Promise.all([loadPanjim(), loadModels()]);
  const g = new Ground(d);

  const app = document.getElementById('app')!;
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 0.95;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  app.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x9cc3d8);
  const hemi = new THREE.HemisphereLight(0xcfe3f5, 0x6a5a38, 1.1);
  const sun = new THREE.DirectionalLight(0xfff1d6, 2.2);
  sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -160, right: 160, top: 160, bottom: -160, near: 1, far: 900 });
  sun.shadow.bias = -0.0008; sun.shadow.normalBias = 0.6;
  scene.add(hemi, sun, sun.target);

  scene.add(buildTerrain(d, g), buildWater(d));
  const roads = buildRoads(d, g); scene.add(roads.group);
  const si = new StreetIndex(roads.segs);
  // the landmarks: their Blender models stand on their map points, in place of the plain blocks there
  const lmBox = d.lm.flatMap(l => l.at.map(([x, y]) => [x + l.cov[0], x + l.cov[1], y + l.cov[2], y + l.cov[3]]));
  const plain = { ...d, b: d.b.filter(([f]) => {
    let cx = 0, cy = 0; for (let i = 0; i < f.length; i += 2) { cx += f[i]; cy += f[i + 1]; } cx /= f.length / 2; cy /= f.length / 2;
    return !lmBox.some(([x0, x1, y0, y1]) => cx > x0 && cx < x1 && cy > y0 && cy < y1);
  }) };
  const blds = buildBuildings(plain, g); scene.add(blds.group);
  // the landmarks' own outlines stay solid, though their plain blocks are not drawn
  for (const [f] of d.b) {
    if (plain.b.some(b => b[0] === f)) continue;
    const p: [number, number][] = []; for (let i = 0; i < f.length; i += 2) p.push([f[i] * T, f[i + 1] * T]);
    const xs = p.map(q => q[0]), zs = p.map(q => q[1]);
    blds.list.push({ p, bb: [Math.min(...xs), Math.min(...zs), Math.max(...xs), Math.max(...zs)], base: 0, top: 30 });
  }
  const bi = new BuildingIndex(blds.list);
  for (const l of d.lm) for (const [x, y] of l.at) {
    const m = rawModel(l.name); if (!m) continue;
    const X = x * T, Z = y * T, deck = si.at(X, Z)?.deck;
    m.position.set(X, deck ?? g.heightAt(X, Z), Z); m.traverse(o => { o.receiveShadow = true; }); scene.add(m);
  }
  scene.add(buildTrees(d, g, bi, si));

  const child = new Child(); scene.add(child.obj);
  const move = new Movement(g, bi, si);
  // start below the Church of the Immaculate Conception, where the canvas game starts
  let px = 92 * T, pz = 34 * T;
  if (!move.free(px, pz)) for (let r = 2; r < 200 && !move.free(px, pz); r += 2) { px = 92 * T + r; }

  const net = new Network(d, g);
  const traffic = new Traffic(net, g); scene.add(traffic.group);
  const people = new People(net, g); scene.add(people.group);
  const monsters = new Monsters(g, move); scene.add(monsters.group);
  const day = new Clock(net, g); scene.add(day.lamps);
  const quests = new Quests(d, net, g, px, pz); scene.add(quests.group);
  const map = new Minimap(d);
  const boats = new Boats(g); scene.add(boats.group);
  const pumps = new Pumps(net, g, (x, z) => !bi.solid(x, z, 9) && !g.isWet(x, z) && !si.at(x, z)); scene.add(pumps.group);
  const home: [number, number] = [px, pz];

  const rig = new CameraRig(), input = new Input(renderer.domElement), hud = new Hud();
  const st = { courage: 100, oil: 100, points: 0, lamp: true };
  let knockX = 0, knockZ = 0, hurtT = 0;
  const talk = () => {
    const p = people.near(px, pz);
    hud.whisper(p ? people.talk(px, pz, quests.target) : 'Nobody here to ask, baba. Go near someone and ask.');
  };
  const lift = () => {
    if (traffic.riding) { const o = traffic.hopOff(); if (o && move.free(o.x, o.z)) { px = o.x; pz = o.z; } }
    else if (!traffic.hopOn(px, pz)) hud.whisper('No vehicle near. Stand beside the road and wait for a pilot.', 3);
  };
  const banish = () => {
    if (!day.night) { hud.whisper('No demons in the daytime, men. Relax.', 2); return; }
    if (st.oil < 8) { hud.whisper('Your lamp has no oil left! Find a street light, quick.', 3); return; }
    if (monsters.banishNear(px, pz)) { st.oil -= 8; st.points += 15; sfx.banish(); hud.whisper('Begone! The demon melts into the dark.', 2); }
    else hud.whisper('No demon close enough.', 2);
  };
  const call = () => {
    if (st.points < 50) { hud.whisper('You need 50 points of good deeds to call Rakhondar.', 3); return; }
    st.points -= 50; monsters.call(); sfx.spirit(); hud.whisper('Rakhondar rises beside you, staff glowing. The demons flee!', 4);
  };
  input.onKey = k => {
    unlockAudio();
    if (k === '[' || k === 'pagedown') rig.tiltBy(-0.1);
    if (k === ']' || k === 'pageup') rig.tiltBy(0.1);
    if (k === 'n') day.min = day.night ? 7 * 60 : 19 * 60 + 30;
    if (k === 't') talk();
    if (k === 'f') lift();
    if (k === ' ') banish();
    if (k === 'r') call();
    if (k === 'l') st.lamp = !st.lamp;
    if (k === 'm') document.getElementById('map')!.click();
  };
  addEventListener('pointerdown', unlockAudio);
  traffic.onEvent = (kind, text) => {
    if (kind === 'honk') { if (Math.random() < 0.5) sfx.honk(); return; }
    if (kind === 'crash') sfx.crash();
    if (text) hud.whisper(text, 4);
  };
  const btn = (id: string, f: () => void) => document.getElementById(id)!.addEventListener('click', e => { (e.currentTarget as HTMLElement).blur(); unlockAudio(); f(); });
  btn('bL', () => rig.turn(-Math.PI / 2)); btn('bR', () => rig.turn(Math.PI / 2)); btn('bIn', () => rig.zoom(2)); btn('bOut', () => rig.zoom(-2));
  btn('bTiltD', () => rig.tiltBy(-0.12)); btn('bTiltU', () => rig.tiltBy(0.12));
  btn('bTalk', talk); btn('bLift', lift); btn('bBan', banish); btn('bCall', call);

  const places = d.places.map(([n, x, y]) => ({ n, X: x * T, Z: y * T }));
  const resize = () => { renderer.setSize(app.clientWidth, app.clientHeight, false); };
  addEventListener('resize', resize); resize();
  document.getElementById('loading')!.remove();
  hud.whisper(quests.cur!.intro, 8);

  const clock = new THREE.Clock();
  let mapT = 0;
  (window as unknown as { rk: unknown }).rk = { scene, renderer, rig, child, day, traffic, people, monsters, quests, st, get pos() { return [px, pz]; }, set pos(v: number[]) { px = v[0]; pz = v[1]; } };
  const frame = (dt: number) => {
    const night = day.night;
    let speed = 0;
    if (traffic.riding) {
      // riding: the child sits on the vehicle
      const v = traffic.riding; px = v.x; pz = v.z; child.heading = Math.atan2(v.hz, v.hx);
    } else {
      // walk: screen directions turned to the ground under the current view
      const m = input.move(), run = input.has('shift') ? 2 : 1;
      speed = Math.hypot(m.x, m.y) * 20 * run;
      if (speed > 0) {
        const w = rig.screenToGround(m.x, m.y), L = Math.hypot(w.x, w.z) || 1;
        child.heading = Math.atan2(w.z, w.x);
        [px, pz] = move.step(px, pz, (w.x / L) * speed * dt, (w.z / L) * speed * dt);
      }
      // thrown by a vehicle
      if (Math.abs(knockX) + Math.abs(knockZ) > 0.1) {
        [px, pz] = move.step(px, pz, knockX * dt, knockZ * dt);
        knockX *= 1 - Math.min(1, dt * 4); knockZ *= 1 - Math.min(1, dt * 4);
      }
    }
    const py = traffic.riding ? traffic.riding.obj.position.y + 2.2 : move.standY(px, pz);
    child.obj.position.set(px, py, pz);
    const lampLit = st.lamp && st.oil > 0;
    child.update(dt, speed, night && lampLit);
    child.obj.rotation.z = hurtT > 0 ? Math.sin(hurtT * 30) * 0.15 : 0; hurtT = Math.max(0, hurtT - dt);

    day.update(dt, scene, hemi, sun, px, pz);
    windowsLit.value = Math.max(0, day.dark * 1.6 - 0.6);
    const hit = traffic.update(dt, px, pz, night);
    if (hit && !traffic.riding) { knockX = hit.kx; knockZ = hit.kz; st.courage = Math.max(0, st.courage - 15); hurtT = 0.6; }
    people.update(dt, px, pz, night);
    boats.update(dt, day.dark);
    const pumpLine = pumps.update(dt, px, pz, st.oil);
    if (pumpLine) { st.oil = 100; sfx.pick(); hud.whisper(pumpLine, 4); }
    const hurt = monsters.update(dt, px, pz, night, lampLit, (x, z) => day.litAt(x, z));
    if (hurt > 0) { st.courage = Math.max(0, st.courage - hurt); if (hurtT <= 0) { sfx.hurt(); hurtT = 0.4; } }
    // the lamp burns oil at night and refills by day; standing in light restores courage
    if (night && lampLit) st.oil = Math.max(0, st.oil - dt * 0.35);
    if (!night) st.oil = Math.min(100, st.oil + dt * 2);
    if (day.litAt(px, pz) && hurt === 0) st.courage = Math.min(100, st.courage + dt * (night ? 3 : 1));
    if (st.courage <= 0) {
      hud.whisper('Too scared! You run home to Aunty. "Aiyo baba, rest a little, then go."', 6);
      if (traffic.riding) traffic.hopOff();
      st.courage = 70; [px, pz] = home;
    }
    const q = quests.update(dt, px, pz);
    if (q) { st.points += q.pts; const big = q.msg.length > 40; (big ? sfx.done : sfx.pick)(); hud.whisper(q.msg, big ? 9 : 2); }

    // the view: held keys turn it steadily, the mouse turns it as it is dragged, it zooms in steps
    rig.turn(input.heldTurn() * 2.2 * dt + input.turnDelta); input.turnDelta = 0;
    if (input.zoomDelta) { rig.zoom(input.zoomDelta); input.zoomDelta = 0; }
    rig.update(dt, child.obj.position, app.clientWidth / Math.max(1, app.clientHeight));
    // the sun follows the child so its shadows are always sharp where you are
    sun.position.set(px - 120, py + 260, pz - 60); sun.target.position.set(px, py, pz);
    let near = '', nd = 1e9;
    for (const p of places) { const dd = Math.hypot(p.X - px, p.Z - pz); if (dd < nd) { nd = dd; near = p.n; } }
    map.reveal(px, pz, 6);
    mapT -= dt;
    if (mapT <= 0) { mapT = 0.1; map.draw(px, pz, rig.yaw, quests.cur?.spots.filter(s => !s.done) ?? [], night); }
    renderer.render(scene, rig.camera);
    const t = quests.target;
    const hint = t && !quests.cur?.litter ? `${Math.round(Math.hypot(t.x - px, t.z - pz) / 10) * 10} m` : '';
    hud.update(dt, renderer, { courage: st.courage, oil: st.oil, points: st.points, time: day.label + (night ? ' · night' : ''), placeName: nd < 400 ? near : '', objective: quests.objective, riding: !!traffic.riding, hint });
  };
  (window as unknown as { rkFrame: (dt: number) => void }).rkFrame = frame;   // for tests: run one frame by hand
  renderer.setAnimationLoop(() => frame(Math.min(0.05, clock.getDelta())));
}

start().catch(e => { const l = document.getElementById('loading'); if (l) l.textContent = 'Could not start: ' + e.message; console.error(e); });
