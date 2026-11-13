"""Add Panjim's named buildings (with a style each) and the real casino-ship moorings to the 3D game's map data.

    python tools/export_named.py        (after tools/export_web.py)

Reads data/panjim.osm.json and writes two keys into web/public/data/panjim.json:
  named:   [style, name, x, y, storeys]   x, y = the outline's middle in tiles; the game styles the building there
  casinos: [name, x, y, heading, length]  heading in radians (0 = east), length in metres, from the ship's outline
Styles: pub (Portuguese-era public building), church, temple, modern.
"""
import json, math, pathlib, re

ROOT = pathlib.Path(__file__).resolve().parent.parent
src = (ROOT / 'rakhondar.html').read_text(encoding='utf-8')
head = src[src.index('/* VILLAGE-DATA panjim */'):][:400]
LAT, LON = json.loads(re.search(r'"centre":(\[[^\]]*\])', head).group(1))
TILE = float(re.search(r'"tile":([\d.]+)', head).group(1)); W = int(re.search(r'"W":(\d+)', head).group(1)); H = int(re.search(r'"H":(\d+)', head).group(1))
kx, ky = 111320 * math.cos(math.radians(LAT)) / TILE, 110540 / TILE
tile = lambda la, lo: ((lo - LON) * kx + W / 2, (LAT - la) * ky + H / 2)

PUB = {'Junta House', 'Corporation of the city of panaji', 'Maquinez Palace', 'Maquinez Palace Annexe', 'Old GMC Building', "Archbishop's House",
       'District Court', 'Captain of Ports Terminal Building', 'Old Education Department Building', 'Consulate-General of Portugal', 'Goa Museum',
       'Lawyers Building', 'Panjim Residency', 'Kala Mandir', 'Bal Bhavan Goa', 'Mint', 'Sanskruti Bhavan', 'Van Bhavan', 'Goa Directorate of Social Welfare',
       'Assembly Block', 'VIP Block', 'Secretariat Block', 'Goa College of Home Science', 'Library', 'GCA Block C', 'GCA Block D', 'Lar de Estudantes'}
MODERN = {'Inox', 'Cine National', 'Caculo Mall', 'Central Towers', 'Dempo House', 'Patto Center', 'Patto Business Center', "Unitech's City Centre",
          'Udyog Bhavan', 'Times of India', 'Rio Sol Tower', 'EDC House', 'Sapana Heights', 'Sahakar Sankul', 'Myles High', 'Star House', 'Alfran Plaza',
          'Electricity Department', 'State Bank of India', 'Bharat Sanchar Nigam Ltd', 'Trionora Apartments', 'Shankar Parvati Building', 'Frank Chambers',
          'Campal Clinic', 'Menezes Polyclinic', 'Kadamba Bus Terminus Panaji', 'Fish Market', 'Edcon'}

els = json.load(open(ROOT / 'data' / 'panjim.osm.json', encoding='utf-8'))['elements']
named, casinos = [], []
for e in els:
    t = e.get('tags', {})
    if e['type'] != 'way' or 'geometry' not in e: continue
    nm = t.get('name', '')
    pts = [tile(g['lat'], g['lon']) for g in e['geometry']]
    cx, cy = sum(p[0] for p in pts) / len(pts), sum(p[1] for p in pts) / len(pts)
    if not (0 <= cx < W and 0 <= cy < H): continue
    if t.get('building') == 'ship' or t.get('amenity') == 'casino':
        # the ship's long axis: the farthest pair of outline points
        a, b = max(((p, q) for p in pts for q in pts), key=lambda pq: math.dist(*pq))
        casinos.append([nm, round(cx, 3), round(cy, 3), round(math.atan2(b[1] - a[1], b[0] - a[0]), 3), round(math.dist(a, b) * TILE)])
        continue
    if 'building' not in t or not nm: continue
    worship = t.get('amenity') == 'place_of_worship'
    style = ('church' if worship and t.get('religion', 'christian') == 'christian' and t.get('building') != 'temple' and 'Mandir' not in nm and 'Temple' not in nm
             and 'Masjid' not in nm and 'Gurdwara' not in nm
             else 'temple' if worship and ('Mandir' in nm or 'Temple' in nm or t.get('building') == 'temple')
             else 'pub' if nm in PUB else 'modern' if nm in MODERN else None)
    if not style: continue
    lv = t.get('building:levels')
    named.append([style, nm, round(cx, 3), round(cy, 3), int(float(lv)) if lv and lv.replace('.', '').isdigit() else 0])

dst = ROOT / 'web' / 'public' / 'data' / 'panjim.json'
d = json.loads(dst.read_text(encoding='utf-8'))
d['named'], d['casinos'] = named, casinos
dst.write_text(json.dumps(d, separators=(',', ':')), encoding='utf-8')
from collections import Counter
print(Counter(n[0] for n in named), len(casinos), 'casinos:', [c[0] for c in casinos])
