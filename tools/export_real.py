"""Export the real-data Panaji (the mock's buildings, streets, water and slopes) into the game.

    python tools/export_real.py

Reads what tools/mock_real.py sorts out of data/panjim.osm.json and data/panjim.elev.json, converts it from the
mock's metres into the game's Panjim tiles (20 m, the frame tools/osm_import.py uses), and writes it into
rakhondar.html as the `/* REAL-DATA panjim */` line. Landmark sprites stay in sprites/ and load at run time.
"""
import json, math, pathlib, re, sys
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
import mock_real as MR

ROOT = MR.ROOT
HTML = ROOT / 'rakhondar.html'
src = HTML.read_text(encoding='utf-8')
head = src[src.index('/* VILLAGE-DATA panjim */'):][:400]
V = {'centre': json.loads(re.search(r'"centre":(\[[^\]]*\])', head).group(1)), 'tile': float(re.search(r'"tile":([\d.]+)', head).group(1)),
     'W': int(re.search(r'"W":(\d+)', head).group(1)), 'H': int(re.search(r'"H":(\d+)', head).group(1))}
LAT, LON, TILE, W, H = V['centre'][0], V['centre'][1], V['tile'], V['W'], V['H']
kx, ky = 111320 * math.cos(math.radians(LAT)) / TILE, 110540 / TILE


def tile(x, y):
    """The mock's metres to the game's tiles."""
    lo, la = MR.LO0 + x / MR.KX, MR.LA1 - y / MR.KY
    return round((lo - LON) * kx + W / 2, 3), round((LAT - la) * ky + H / 2, 3)


def flat(pts):
    out = []
    for x, y in pts: out += tile(x, y)
    return out


ok = lambda pts: any(-2 <= tile(*p)[0] <= W + 2 and -2 <= tile(*p)[1] <= H + 2 for p in pts)
wset = {id(w['r']) for w in MR.worship}
blds = []
for b in MR.ALL_BUILDINGS:
    if not ok(b['r']): continue
    t = b['tags']
    church = t.get('building') in ('church', 'chapel', 'cathedral') or (t.get('amenity') == 'place_of_worship' and t.get('religion') == 'christian')
    temple = t.get('building') == 'temple' or (t.get('amenity') == 'place_of_worship' and t.get('religion') == 'hindu')
    if not (church or temple):
        cx = sum(x for x, y in b['r']) / len(b['r']); cy = sum(y for x, y in b['r']) / len(b['r'])
        for w in MR.worship:
            if MR.inpoly(w['r'], cx, cy): church, temple = w['rel'] == 'christian', w['rel'] == 'hindu'
    r = b['r'][:-1] if b['r'][0] == b['r'][-1] else b['r']
    blds.append([flat(r), round(b['lv'], 1), 1 if church else 2 if temple else 0, round(b['area'])])
# ---- guessed houses: OpenStreetMap misses most of Panjim's small houses, leaving its blocks as bare grass. Fill the
# mapped residential, commercial and retail areas with plausible houses facing their streets, set back a few metres,
# clear of every mapped building, road, path and water, and keep each one marked (the game can show which they are).
import random
rnd = random.Random(7)
def zone_rings(pred):
    out = []
    for e in MR.els:
        t = e.get('tags', {})
        if e['type'] != 'node' and pred(t):
            out += [r for r in MR.rings(e) if len(r) > 2]
    return out
ZONES = zone_rings(lambda t: t.get('landuse') in ('residential', 'commercial', 'retail'))
NOGO = zone_rings(lambda t: t.get('amenity') in ('parking', 'school', 'college', 'hospital', 'grave_yard') or t.get('leisure') in ('park', 'pitch', 'garden', 'playground')
                  or t.get('landuse') in ('grass', 'recreation_ground', 'cemetery', 'construction', 'farmland', 'orchard', 'military'))
CELL = 25
def grid():
    return {}
def put(gr, bb, item):
    for i in range(int(bb[0] // CELL), int(bb[2] // CELL) + 1):
        for j in range(int(bb[1] // CELL), int(bb[3] // CELL) + 1):
            gr.setdefault((i, j), []).append(item)
def near(gr, x, y, r=0):
    seen = set()
    for i in range(int((x - r) // CELL), int((x + r) // CELL) + 1):
        for j in range(int((y - r) // CELL), int((y + r) // CELL) + 1):
            for it in gr.get((i, j), []):
                if id(it) not in seen: seen.add(id(it)); yield it
bbox = lambda r: (min(p[0] for p in r), min(p[1] for p in r), max(p[0] for p in r), max(p[1] for p in r))
zg, ng, bg, sg, wg = grid(), grid(), grid(), grid(), grid()
for r in ZONES: put(zg, bbox(r), (r, bbox(r)))
for r in NOGO: put(ng, bbox(r), (r, bbox(r)))
for r in MR.water + MR.mangroves + MR.marsh: put(wg, bbox(r), (r, bbox(r)))
for b in MR.ALL_BUILDINGS: bb = bbox(b['r']); put(bg, (bb[0] - 2, bb[1] - 2, bb[2] + 2, bb[3] + 2), (b['r'], bb))
ROAD_K = 1.5   # the game draws streets 1.5x their mapped width, so they read and walk easily
lines = [(r['p'], r['w'] * ROAD_K / 2 + 1.2) for r in MR.roads] + [(p['p'], 1.6) for p in MR.ALL_PATHS]
for pts, half in lines:
    for a, b in zip(pts, pts[1:]):
        put(sg, (min(a[0], b[0]) - half, min(a[1], b[1]) - half, max(a[0], b[0]) + half, max(a[1], b[1]) + half), (a, b, half))
def segd(px, py, a, b):
    dx, dy = b[0] - a[0], b[1] - a[1]; L2 = dx * dx + dy * dy or 1e-9
    t = max(0, min(1, ((px - a[0]) * dx + (py - a[1]) * dy) / L2)); return math.hypot(px - a[0] - dx * t, py - a[1] - dy * t)
def inside_any(gr, x, y):
    return any(bb[0] <= x <= bb[2] and bb[1] <= y <= bb[3] and MR.inpoly(r, x, y) for r, bb in near(gr, x, y))
def clear(rect):
    xs, ys = [p[0] for p in rect], [p[1] for p in rect]; cx, cy = sum(xs) / 4, sum(ys) / 4
    probe = rect + [(cx, cy)] + [((rect[i][0] + rect[(i + 1) % 4][0]) / 2, (rect[i][1] + rect[(i + 1) % 4][1]) / 2) for i in range(4)]
    if not all(inside_any(zg, x, y) for x, y in probe): return False
    if any(inside_any(ng, x, y) or inside_any(wg, x, y) for x, y in probe): return False
    for x, y in probe:
        for a, b, half in near(sg, x, y, 2):
            if segd(x, y, a, b) < half: return False
    lo = (min(xs), min(ys), max(xs), max(ys))
    for it in near(bg, cx, cy, 20):
        bb = it[1]
        if not (lo[2] < bb[0] - 3 or lo[0] > bb[2] + 3 or lo[3] < bb[1] - 3 or lo[1] > bb[3] + 3): return False
    return True
guessed = []
for r in MR.roads:
    if r['hw'] not in ('residential', 'living_street', 'unclassified', 'tertiary', 'secondary', 'service') or r['bridge']: continue
    for side in (-1, 1):
        rows = [0, 1] if rnd.random() < 0.3 else [0]
        for row in rows:
            s_off = rnd.uniform(0, 6)
            for (px, py, ux, uy) in MR.along(r['p'], 1.0):
                s_off -= 1.0
                if s_off > 0: continue
                wid, dep = rnd.uniform(7, 12), rnd.uniform(8, 12)
                nx, ny = -uy * side, ux * side
                back = r['w'] * ROAD_K / 2 + rnd.uniform(2.5, 5.0) + row * (dep + rnd.uniform(4.0, 7.0))
                cx, cy = px + nx * (back + dep / 2), py + ny * (back + dep / 2)
                rect = [(cx + ux * sx * wid / 2 + nx * sy * dep / 2, cy + uy * sx * wid / 2 + ny * sy * dep / 2) for sx, sy in ((-1, -1), (1, -1), (1, 1), (-1, 1))]
                s_off = wid + rnd.uniform(3.5, 8.0)
                if rnd.random() < 0.25: continue   # an empty plot now and then: a garden, a yard, a gap
                if clear(rect):
                    lv = 1 if rnd.random() < 0.7 else 2
                    guessed.append((rect, lv, wid * dep))
                    bb = bbox(rect); put(bg, (bb[0] - 2, bb[1] - 2, bb[2] + 2, bb[3] + 2), (rect, bb))
                else:
                    s_off = 1.5
for rect, lv, area in guessed:
    if ok(rect): blds.append([flat(rect), lv, 0, round(area), 1])
print(f'{len(guessed)} guessed houses in {len(ZONES)} mapped residential/commercial areas')
HW_ = ['trunk', 'trunk_link', 'primary', 'primary_link', 'secondary', 'secondary_link', 'tertiary', 'tertiary_link', 'unclassified', 'residential', 'living_street', 'service']
names = []
roads = []
for r in MR.roads:
    if not ok(r['p']): continue
    nm = r['name']
    if nm and nm not in names: names.append(nm)
    flags = (1 if r['bridge'] else 0) | (2 if r['round'] else 0) | (4 if r['oneway'] else 0) | (8 if r.get('atal') else 0)
    roads.append([flat(r['p']), r['w'], flags, HW_.index(r['hw']), names.index(nm) if nm else -1])
paths = [[flat(p['p']), (1 if p['steps'] else 0) | (2 if p['bridge'] else 0)] for p in MR.ALL_PATHS if ok(p['p'])]
polys = lambda L: [flat(r) for r in L if ok(r)]
# heights on a grid of 2 tiles, in metres (0 at the water)
G = 2
gw, gh = W // G + 1, H // G + 1
elev = []
for j in range(gh):
    for i in range(gw):
        tx, ty = i * G, j * G
        la, lo = LAT - (ty - H / 2) / ky, LON + (tx - W / 2) / kx
        mx, my = MR.xy(la, lo)
        elev.append(round(MR.height(mx, my)) if 0 <= mx <= MR.W_M and 0 <= my <= MR.H_M else 0)
lms = []
for jf in sorted((ROOT / 'sprites').glob('landmark_*.json')):
    lm = json.load(open(jf))
    base = lm['file'][:-4]
    rots = [k for k in range(4) if (ROOT / 'sprites' / (lm['file'] if k == 0 else f'{base}_r{k}.png')).exists()]
    insts = lm.get('instances') or [[lm['lat'], lm['lon']]]
    pos = [tile(*MR.xy(la, lo)) for la, lo in insts]
    cov = lm['covers']
    lms.append({'name': base[9:], 'file': base, 'rots': rots, 'anchor': lm['anchor'], 'ppm': lm['px_per_m'], 'at': pos, 'deck': lm.get('deck_z', 0),
                'cov': [c / TILE for c in cov['x'] + cov['y']]})
out = {'tile': TILE, 'b': blds, 'r': roads, 'names': names, 'p': paths, 'water': polys(MR.water), 'mang': polys(MR.mangroves), 'marsh': polys(MR.marsh),
       'eg': G, 'ew': gw, 'eh': gh, 'elev': elev, 'lm': lms,
       'places': [[nm, *tile(*MR.xy(la, lo))] for nm, la, lo, z in MR.LABELS]}   # neighbourhood names for the maps
line = '/* REAL-DATA panjim */const REAL_PANJIM = ' + json.dumps(out, separators=(',', ':')) + ';'
if '/* REAL-DATA panjim */' in src:
    src = re.sub(r'^/\* REAL-DATA panjim \*/.*$', lambda m: line, src, count=1, flags=re.M)
else:
    i = src.index('/* VILLAGE-DATA panjim */'); i = src.index('\n', i) + 1
    src = src[:i] + line + '\n' + src[i:]
HTML.write_text(src, encoding='utf-8')
print(f'{len(blds)} buildings, {len(roads)} roads, {len(paths)} paths, {len(lms)} landmarks; {len(line) // 1024} KB')
