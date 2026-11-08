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
