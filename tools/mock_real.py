"""A mock-up of Panaji for Rakhondar drawn from real data, in the game's 2:1 isometric view.

    python tools/mock_real.py

Buildings, temples, churches, roads, footpaths, bridges, water and mangroves come from the OpenStreetMap cache
(data/panjim.osm.json); ground height comes from SRTM 30 m elevation (data/panjim.elev.json, fetched from
OpenTopoData). Writes mock/panaji_overview.png and mock/panaji_detail.png. Map data (c) OpenStreetMap contributors.
"""
import json, math, pathlib, random
from PIL import Image, ImageDraw, ImageFont

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'mock'; OUT.mkdir(exist_ok=True)
els = json.load(open(ROOT / 'data/panjim.osm.json', encoding='utf-8'))['elements']
EL = json.load(open(ROOT / 'data/panjim.elev.json'))
LA0, LA1, LO0, LO1 = EL['bbox']
LAT0 = (LA0 + LA1) / 2
KX, KY = 111320 * math.cos(math.radians(LAT0)), 110540
W_M, H_M = (LO1 - LO0) * KX, (LA1 - LA0) * KY      # metres east, metres south
random.seed(3)


def xy(la, lo):
    return (lo - LO0) * KX, (LA1 - la) * KY       # x east, y south (the game's map axes)


def height(x, y):
    """Bilinear SRTM height in metres (sea and creek clamp to 0)."""
    nx, ny, e = EL['nx'], EL['ny'], EL['elev']
    fx = max(0, min(nx - 1.001, x / W_M * (nx - 1)))
    fy = max(0, min(ny - 1.001, (H_M - y) / H_M * (ny - 1)))   # rows run south to north
    i, j = int(fx), int(fy); tx, ty = fx - i, fy - j
    v = lambda a, b: e[(j + b) * nx + i + a]
    h = (v(0, 0) * (1 - tx) + v(1, 0) * tx) * (1 - ty) + (v(0, 1) * (1 - tx) + v(1, 1) * tx) * ty
    return max(0.0, h)


def rings(e):
    if e['type'] == 'way':
        return [[xy(p['lat'], p['lon']) for p in e.get('geometry') or [] if p]]
    parts = [[xy(p['lat'], p['lon']) for p in m.get('geometry') or [] if p] for m in e.get('members', []) if m.get('type') == 'way' and m.get('role', 'outer') in ('outer', '')]
    parts = [p for p in parts if len(p) > 1]; out = []
    while parts:
        r = parts.pop(0); grown = True
        while grown and r[0] != r[-1]:
            grown = False
            for i, p in enumerate(parts):
                if p[0] == r[-1]: r += p[1:]
                elif p[-1] == r[-1]: r += p[-2::-1]
                elif p[-1] == r[0]: r = p[:-1] + r
                elif p[0] == r[0]: r = p[:0:-1] + r
                else: continue
                parts.pop(i); grown = True; break
        out.append(r)
    return out


def inside(pts, pad=60):
    return any(-pad <= x <= W_M + pad and -pad <= y <= H_M + pad for x, y in pts)


# ---- sort the map data into what the mock draws ----
water, mangroves, marsh, buildings, roads, paths, worship = [], [], [], [], [], [], []
ROADW = {'trunk': 18, 'primary': 14, 'secondary': 11, 'tertiary': 9, 'unclassified': 7, 'residential': 6.5, 'living_street': 5, 'service': 4.5}
for e in els:
    t = e.get('tags', {})
    if t.get('natural') == 'water' or t.get('waterway') in ('riverbank',):
        for r in rings(e):
            if len(r) > 2 and inside(r): water.append(r)
    elif t.get('wetland') in ('mangrove',) :
        for r in rings(e):
            if len(r) > 2 and inside(r): mangroves.append(r)
    elif t.get('natural') == 'wetland':
        for r in rings(e):
            if len(r) > 2 and inside(r): marsh.append(r)
    if 'building' in t and e['type'] == 'way':
        r = rings(e)[0]
        if len(r) > 2 and inside(r, 0):
            lv = t.get('building:levels'); a = abs(sum(x0 * y1 - x1 * y0 for (x0, y0), (x1, y1) in zip(r, r[1:] + r[:1]))) / 2
            try: lv = float(lv)
            except (TypeError, ValueError): lv = 1 if a < 80 else 2 if a < 400 else 3
            buildings.append({'r': r, 'lv': lv, 'tags': t, 'area': a})
    hw = t.get('highway')
    if hw and e['type'] == 'way':
        pts = [xy(p['lat'], p['lon']) for p in e.get('geometry') or [] if p]
        if len(pts) > 1 and inside(pts):
            if hw in ROADW: roads.append({'p': pts, 'w': ROADW[hw], 'bridge': bool(t.get('bridge')), 'hw': hw, 'name': t.get('name', '')})
            elif hw in ('footway', 'path', 'steps', 'pedestrian', 'track', 'cycleway'): paths.append({'p': pts, 'steps': hw == 'steps', 'bridge': bool(t.get('bridge'))})
    if t.get('amenity') == 'place_of_worship':
        for r in rings(e) if e['type'] != 'node' else []:
            if len(r) > 2 and inside(r, 0): worship.append({'r': r, 'rel': t.get('religion'), 'name': t.get('name', '')})
print(f'{len(buildings)} buildings, {len(worship)} temples/churches, {len(roads)} roads ({sum(r["bridge"] for r in roads)} bridges), {len(paths)} paths, {len(water)} water, {len(mangroves)} mangrove, {len(marsh)} marsh areas')
WORSHIP_IDS = {id(w['r']) for w in worship}
wpoly = [w['r'] for w in worship]


def render(name, x0, y0, x1, y1, scale, zscale, labels):
    """Draw the box (x0, y0)-(x1, y1) in metres, isometric 2:1, `scale` px per metre."""
    corners = [(x0, y0), (x1, y0), (x0, y1), (x1, y1)]
    iso0 = lambda x, y: ((x - y) * scale, (x + y) * scale / 2)
    xs = [iso0(*c)[0] for c in corners]; ys = [iso0(*c)[1] for c in corners]
    ox, oy = -min(xs) + 40, -min(ys) + 120
    Wpx, Hpx = int(max(xs) - min(xs) + 80), int(max(ys) - min(ys) + 160)
    P = lambda x, y, z=None: ((x - y) * scale + ox, (x + y) * scale / 2 + oy - (height(x, y) if z is None else z) * zscale)
    img = Image.new('RGB', (Wpx, Hpx), (22, 40, 58)); d = ImageDraw.Draw(img, 'RGBA')
    inbox = lambda pts: any(x0 - 30 <= x <= x1 + 30 and y0 - 30 <= y <= y1 + 30 for x, y in pts)
    # terrain: a grid of cells, shaded by slope
    cell = max(8, 6 / scale)
    yy = y0
    while yy < y1:
        xx = x0
        while xx < x1:
            h00, h10, h11, h01 = height(xx, yy), height(xx + cell, yy), height(xx + cell, yy + cell), height(xx, yy + cell)
            k = 1 + ((h00 + h01) - (h10 + h11)) * 0.02 - ((h01 + h11) - (h00 + h10)) * 0.008
            base = (122, 160, 85) if (h00 + h11) / 2 < 12 else (104, 146, 74)
            col = tuple(max(0, min(255, int(c * k))) for c in base)
            d.polygon([P(xx, yy, h00), P(xx + cell, yy, h10), P(xx + cell, yy + cell, h11), P(xx, yy + cell, h01)], fill=col)
            xx += cell
        yy += cell
    # contour hints every 10 m
    for yy2 in range(int(y0), int(y1), int(cell)):
        for xx2 in range(int(x0), int(x1), int(cell)):
            a, b = height(xx2, yy2), height(xx2 + cell, yy2)
            if int(a // 10) != int(b // 10) and max(a, b) > 5:
                d.line([P(xx2 + cell / 2, yy2), P(xx2 + cell / 2, yy2 + cell)], fill=(70, 50, 30, 60), width=1)
    poly = lambda r, col, z=0: d.polygon([P(x, y, z) for x, y in r], fill=col)
    for r in marsh:
        if inbox(r): poly(r, (120, 140, 90))
    for r in water:
        if inbox(r): poly(r, (42, 106, 134))
    for r in mangroves:
        if inbox(r):
            poly(r, (58, 90, 58))
    # mangrove trees scattered inside the mangrove areas
    for r in mangroves:
        if not inbox(r): continue
        xs_, ys_ = [p[0] for p in r], [p[1] for p in r]
        for _ in range(int(min(400, abs(sum(a * d_ - c * b for (a, b), (c, d_) in zip(r, r[1:] + r[:1]))) / 2 / 120))):
            px, py = random.uniform(min(xs_), max(xs_)), random.uniform(min(ys_), max(ys_))
            if not (x0 <= px <= x1 and y0 <= py <= y1): continue
            n = len(r); inside_ = False; j = n - 1
            for i in range(n):
                if (r[i][1] > py) != (r[j][1] > py) and px < (r[j][0] - r[i][0]) * (py - r[i][1]) / (r[j][1] - r[i][1] + 1e-9) + r[i][0]: inside_ = not inside_
                j = i
            if inside_:
                cx, cy = P(px, py, 0); rr = max(2, 5 * scale)
                d.ellipse([cx - rr, cy - rr * 2.2, cx + rr, cy - rr * 0.4], fill=(36, 69, 46))
    # roads: pavement, kerb, asphalt, centre line; footpaths dashed; steps hatched; bridges lifted with railings
    def line(pts, w, col, z=None):
        d.line([P(x, y, z) for x, y in pts], fill=col, width=max(1, int(w)), joint='curve')
    for r in sorted(roads, key=lambda r: r['w']):
        if not inbox(r['p']): continue
        z = 6 if r['bridge'] else None
        line(r['p'], (r['w'] + 6) * scale, (214, 208, 196), z)
        line(r['p'], (r['w'] + 1.5) * scale, (186, 180, 168), z)
        line(r['p'], r['w'] * scale, (52, 54, 62), z)
        if r['w'] >= 9:
            line(r['p'], max(1, scale * 0.5), (242, 239, 230, 150), z)
        if r['bridge']:
            for side in (-1, 1):
                pts = r['p']
                off = []
                for (ax, ay), (bx, by) in zip(pts, pts[1:]):
                    L = math.hypot(bx - ax, by - ay) or 1; nx_, ny_ = -(by - ay) / L, (bx - ax) / L
                    off.append((ax + nx_ * side * r['w'] / 2, ay + ny_ * side * r['w'] / 2)); off.append((bx + nx_ * side * r['w'] / 2, by + ny_ * side * r['w'] / 2))
                line(off, max(1.5, scale * 0.6), (240, 236, 226), 7.5)
    for pth in paths:
        if not inbox(pth['p']): continue
        z = 6 if pth['bridge'] else None
        line(pth['p'], max(1.5, 2.5 * scale), (222, 206, 168) if not pth['steps'] else (200, 186, 150), z)
    # buildings, back to front, with real outlines extruded by their levels; temples and churches stand out
    LV = 3.2
    blds = [b for b in buildings if inbox(b['r'])]
    blds.sort(key=lambda b: sum(x + y for x, y in b['r']) / len(b['r']))
    palette = [(242, 194, 48), (224, 118, 58), (47, 111, 208), (232, 224, 204), (47, 160, 138), (232, 163, 58), (208, 52, 74), (224, 122, 138), (74, 143, 224)]
    for b in blds:
        r = b['r']; t = b['tags']
        church = t.get('building') in ('church', 'chapel', 'cathedral') or t.get('amenity') == 'place_of_worship' and t.get('religion') == 'christian' or any(r is w for w in wpoly)
        temple = t.get('building') == 'temple' or (t.get('amenity') == 'place_of_worship' and t.get('religion') == 'hindu')
        base = min(height(x, y) for x, y in r)
        top = base + b['lv'] * LV * (1.6 if church else 1.2 if temple else 1)
        col = (250, 248, 242) if church else (236, 214, 160) if temple else palette[hash(id(b)) % len(palette)]
        # walls: each edge facing the viewer (+x or +y in the 2:1 view)
        for (ax, ay), (bx, by) in zip(r, r[1:] + r[:1]):
            nx_, ny_ = by - ay, -(bx - ax)
            if nx_ + ny_ <= 0 and -(nx_ + ny_) <= 0: continue
            facing = (nx_ + ny_) > 0
            if not facing: continue
            k = 0.95 if ny_ > nx_ else 0.74
            d.polygon([P(ax, ay, base), P(bx, by, base), P(bx, by, top), P(ax, ay, top)], fill=tuple(int(c * k) for c in col), outline=(26, 20, 16))
        roofc = (240, 238, 232) if church else (200, 140, 60) if temple else (168, 73, 43) if b['area'] < 600 else (190, 182, 166)
        d.polygon([P(x, y, top) for x, y in r], fill=roofc, outline=(26, 20, 16))
        if church or temple:
            cx = sum(x for x, y in r) / len(r); cy = sum(y for x, y in r) / len(r)
            px, py = P(cx, cy, top)
            if church:
                d.rectangle([px - 1, py - 14 * scale - 6, px + 1, py], fill=(200, 42, 42)); d.rectangle([px - 4, py - 10 * scale - 5, px + 4, py - 10 * scale - 3], fill=(200, 42, 42))
            else:
                d.polygon([(px - 6, py), (px + 6, py), (px, py - 16)], fill=(220, 120, 40), outline=(26, 20, 16))
    # labels
    try: f = ImageFont.truetype('arial.ttf', max(13, int(14 * min(1.6, scale * 2))))
    except OSError: f = ImageFont.load_default()
    for txt, la, lo, z in labels:
        x, y = xy(la, lo)
        if not (x0 <= x <= x1 and y0 <= y <= y1): continue
        px, py = P(x, y, (z or 0) + height(x, y))
        tw = d.textlength(txt, font=f)
        d.rectangle([px - tw / 2 - 5, py - 12, px + tw / 2 + 5, py + 10], fill=(8, 12, 24, 190)); d.text((px - tw / 2, py - 10), txt, fill=(244, 239, 228), font=f)
    d.text((10, Hpx - 22), 'Map data (c) OpenStreetMap contributors (ODbL) · elevation: SRTM via OpenTopoData', fill=(200, 200, 200), font=ImageFont.load_default())
    img.save(OUT / name)
    print('wrote', OUT / name, img.size)


# names placed where OpenStreetMap's own place points are (the river, creek and bridge from their mapped water and roads)
LABELS = [('Mandovi', 15.5040, 73.8250, 0), ('Panaji', 15.49899, 73.82821, 35), ('Church Square', 15.4987, 73.82891, 25), ('Fontainhas', 15.49666, 73.83108, 25),
          ('São Tomé', 15.49945, 73.83218, 20), ('Mala', 15.49205, 73.82948, 20), ('Altinho', 15.48789, 73.82626, 25), ('Campal', 15.49412, 73.81957, 15),
          ('Santa Inez', 15.48693, 73.81752, 15), ('Patto', 15.49515, 73.83542, 40), ('Panjim Bazaar', 15.49775, 73.82602, 25), ('Neugi Nagar', 15.48931, 73.83119, 15),
          ('Ourém creek', 15.4935, 73.8335, 0), ('Atal Setu', 15.5040, 73.8445, 30), ('Ponte de Linhares', 15.4990, 73.8490, 10)]
render('panaji_overview.png', 0, 0, W_M, H_M, 0.36, 0.9, LABELS)
dx, dy = xy(15.5010, 73.8240); ex, ey = xy(15.4880, 73.8370)
render('panaji_detail.png', dx, dy, ex, ey, 1.25, 2.6, LABELS)
