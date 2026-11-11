// The Places guide: Panjim's neighbourhoods and landmarks with a line about each. Pick one and it becomes your guide
// target: a pin on the minimap, a glowing beam over it in the city, and an arrow at the screen's edge pointing the way.
// A place counts as discovered once the child has been near it.
import * as THREE from 'three';
import { T, type PanjimData, type Ground } from '../world/data';

export interface Place { name: string; x: number; z: number; note: string; seen: boolean }

const NOTES: Record<string, string> = {
  'Mandovi': 'The big river, men. Casino boats at night, ferries to Betim in the day.',
  'Panaji': 'Our capital city. Small only, but everybody knows everybody.',
  'Church Square': 'The garden in front of the big white church. Everybody meets here.',
  'Fontainhas': 'The old Latin quarter. Red, yellow, blue houses, and Portuguese still spoken here.',
  'São Tomé': 'Next to Fontainhas, the old post office side. Narrow lanes, careful on the cycle.',
  'Mala': 'Up from the creek, by the Maruti temple steps.',
  'Altinho': 'The hill. Big old houses, the Bishop\'s palace, and a nice breeze, baba.',
  'Campal': 'Along the river, the gardens and the Kala Academy. Evening walks here.',
  'Santa Inez': 'Quiet side, the creek and the new buildings.',
  'Patto': 'Where the Kadamba buses come in. Rush rush always.',
  'Panjim Bazaar': 'The market! Fish, poee, vegetables. Go early or everything is finished.',
  'Neugi Nagar': 'Houses and houses, near the highway side.',
  'Ourém creek': 'The creek between Fontainhas and Patto. Mangroves, and crabs if you look.',
  'Atal Setu': 'The new cable bridge over the Mandovi. All lit up at night.',
  'Ponte de Linhares': 'The old long causeway, built by the Portuguese. Two hundred years old, men.',
  'church': 'Our Lady of the Immaculate Conception. Those zig-zag steps, every photo is here only.',
  'secretariat': 'The Old Secretariat, Adil Shah\'s palace once. Right on the riverfront.',
  'mahalaxmi': 'The Mahalaxmi temple. Go with your shoes off, no?',
  'atalsetu': 'Atal Setu pylons, tall and white.',
  'imb': 'Institute Menezes Braganza, the library and the azulejo tiles at the entrance.',
  'postoffice': 'The Head Post Office. Old red building, letters going since Portuguese time.',
  'maruti': 'The Maruti temple on Altinho, the saffron tower you can see from far.',
  'sebastian': 'St. Sebastian chapel in Fontainhas. The big crucifix inside has open eyes.',
  'donbosco': 'Don Bosco. The school and the shrine, boys playing football outside.',
  'kadamba': 'The Kadamba bus stand. Mapusa, Margao, Vasco, shouting conductors.',
};
const LM_NAMES: Record<string, string> = { church: 'Immaculate Conception Church', secretariat: 'Old Secretariat', mahalaxmi: 'Mahalaxmi Temple', atalsetu: 'Atal Setu', imb: 'Institute Menezes Braganza', postoffice: 'Head Post Office', maruti: 'Maruti Temple', sebastian: 'St. Sebastian Chapel', donbosco: 'Don Bosco', kadamba: 'Kadamba Bus Stand' };

export class Places {
  list: Place[];
  target: Place | null = null;
  private panel = document.getElementById('places')!;
  private arrow = document.getElementById('arrow')!;
  private beam: THREE.Mesh;

  constructor(d: PanjimData, private g: Ground, scene: THREE.Scene, private onPick: (p: Place) => void) {
    this.list = [
      ...d.lm.map(l => ({ name: LM_NAMES[l.name] ?? l.name, x: l.at[0][0] * T, z: l.at[0][1] * T, note: NOTES[l.name] ?? '', seen: false })),
      ...d.places.map(([n, x, y]) => ({ name: n, x: x * T, z: y * T, note: NOTES[n] ?? '', seen: false })),
    ];
    this.beam = new THREE.Mesh(new THREE.CylinderGeometry(3, 3, 120, 16, 1, true), new THREE.MeshBasicMaterial({ color: 0x9fe8d6, transparent: true, opacity: 0.3, depthWrite: false, side: THREE.DoubleSide }));
    this.beam.visible = false; scene.add(this.beam);
    document.getElementById('bPlaces')!.addEventListener('click', e => { (e.currentTarget as HTMLElement).blur(); this.toggle(); });
  }

  toggle() {
    const open = this.panel.classList.toggle('open');
    if (!open) return;
    const row = (p: Place, i: number) => `<button data-i="${i}" class="${p === this.target ? 'on' : ''}"><b>${p.seen ? p.name : p.name + ' <em>· not yet visited</em>'}</b><span>${p.note}</span></button>`;
    this.panel.innerHTML = `<div class="ph"><h2>Places in Panjim</h2><span>${this.list.filter(p => p.seen).length} of ${this.list.length} visited · pick one to be guided there</span><button class="x" aria-label="Close">✕</button></div><div class="pl">${this.list.map(row).join('')}</div>`;
    this.panel.querySelector('.x')!.addEventListener('click', () => this.panel.classList.remove('open'));
    this.panel.querySelectorAll<HTMLButtonElement>('.pl button').forEach(b => b.addEventListener('click', () => {
      const p = this.list[+b.dataset.i!]; this.target = this.target === p ? null : p;
      this.panel.classList.remove('open'); if (this.target) this.onPick(this.target);
    }));
  }

  /** Mark places visited; move the beam and the edge arrow. Returns a newly visited place, if any. */
  update(cx: number, cz: number, camera: THREE.Camera, t: number): Place | null {
    let fresh: Place | null = null;
    for (const p of this.list) if (!p.seen && Math.hypot(p.x - cx, p.z - cz) < 60) { p.seen = true; fresh = p; }
    const tg = this.target;
    if (tg && Math.hypot(tg.x - cx, tg.z - cz) < 30) { this.target = null; fresh = fresh ?? tg; }
    this.beam.visible = !!this.target;
    if (!this.target) { this.arrow.style.display = 'none'; return fresh; }
    const p = this.target;
    this.beam.position.set(p.x, this.g.heightAt(p.x, p.z) + 60, p.z); (this.beam.material as THREE.MeshBasicMaterial).opacity = 0.22 + Math.sin(t * 3) * 0.08;
    // the arrow: where on screen the target is, pinned to the edge when it is off screen
    const v = new THREE.Vector3(p.x, this.g.heightAt(p.x, p.z) + 4, p.z).project(camera);
    let sx = v.x, sy = -v.y; if (v.z > 1) { sx = -sx; sy = -sy; }
    const on = Math.abs(sx) < 0.9 && Math.abs(sy) < 0.85 && v.z < 1;
    const k = on ? 1 : 0.85 / Math.max(Math.abs(sx), Math.abs(sy) / 0.8);
    const W = innerWidth, H = innerHeight, px = (sx * k * 0.5 + 0.5) * W, py = (sy * k * 0.5 + 0.5) * H;
    const d = Math.round(Math.hypot(p.x - cx, p.z - cz) / 10) * 10;
    this.arrow.style.display = 'block';
    this.arrow.style.transform = `translate(${px}px, ${py}px) translate(-50%, -50%)`;
    this.arrow.innerHTML = `<i style="transform: rotate(${Math.atan2(sy, sx)}rad); opacity:${on ? 0 : 1}">➤</i><span>${p.name} · ${d} m</span>`;
    return fresh;
  }
}
