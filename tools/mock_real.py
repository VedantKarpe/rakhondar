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
ROADW = {'trunk': 16, 'trunk_link': 8, 'primary': 12, 'primary_link': 7, 'secondary': 10, 'secondary_link': 6, 'tertiary': 8, 'tertiary_link': 5,
         'unclassified': 6, 'residential': 5, 'living_street': 4.5, 'service': 3.5}
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
            if hw in ROADW: roads.append({'p': pts, 'w': ROADW[hw], 'bridge': bool(t.get('bridge')), 'hw': hw, 'name': t.get('name', ''), 'round': t.get('junction') in ('roundabout', 'circular'), 'oneway': t.get('oneway') == 'yes', 'atal': t.get('name') == 'Atal Setu'})
            elif hw in ('footway', 'path', 'steps', 'pedestrian', 'track', 'cycleway'): paths.append({'p': pts, 'steps': hw == 'steps', 'bridge': bool(t.get('bridge'))})
    if t.get('amenity') == 'place_of_worship':
        for r in rings(e) if e['type'] != 'node' else []:
            if len(r) > 2 and inside(r, 0): worship.append({'r': r, 'rel': t.get('religion'), 'name': t.get('name', '')})
print(f'{len(buildings)} buildings, {len(worship)} temples/churches, {len(roads)} roads ({sum(r["bridge"] for r in roads)} bridges), {len(paths)} paths, {len(water)} water, {len(mangroves)} mangrove, {len(marsh)} marsh areas')
# landmarks modelled in Blender (tools/blender_*.py): each sprite replaces the plain blocks and steps under it
LANDMARKS = []
for jf in sorted((ROOT / 'sprites').glob('landmark_*.json')):
    lm = json.load(open(jf)); img_ = Image.open(ROOT / 'sprites' / lm['file']).convert('RGBA')
    insts = lm.get('instances') or [[lm['lat'], lm['lon']]]
    for la_, lo_ in insts[1:]:
        LANDMARKS.append(dict(lm, img=img_, x=xy(la_, lo_)[0], y=xy(la_, lo_)[1]))
    ox_, oy_ = xy(*insts[0])
    lm['x'], lm['y'] = ox_, oy_; lm['img'] = img_
    cov = lm['covers']; inside_cov = lambda px, py: cov['x'][0] <= px - ox_ <= cov['x'][1] and cov['y'][0] <= py - oy_ <= cov['y'][1]
    buildings[:] = [b for b in buildings if not inside_cov(sum(q[0] for q in b['r']) / len(b['r']), sum(q[1] for q in b['r']) / len(b['r']))]
    paths[:] = [q for q in paths if not all(inside_cov(*pt) for pt in q['p'])]
    LANDMARKS.append(lm)
print(f'{len(LANDMARKS)} landmark models')
WORSHIP_IDS = {id(w['r']) for w in worship}
wpoly = [w['r'] for w in worship]


def hyp2(a, b):
    return math.hypot(a[0] - b[0], a[1] - b[1])


def inpoly(r, px, py):
    n = len(r); inside_ = False; j = n - 1
    for i in range(n):
        if (r[i][1] > py) != (r[j][1] > py) and px < (r[j][0] - r[i][0]) * (py - r[i][1]) / (r[j][1] - r[i][1] + 1e-9) + r[i][0]: inside_ = not inside_
        j = i
    return inside_


def offset(pts, dist):
    """A polyline moved `dist` metres to its left."""
    out = []
    for i, (x, y) in enumerate(pts):
        a = pts[max(0, i - 1)]; b = pts[min(len(pts) - 1, i + 1)]
        L = math.hypot(b[0] - a[0], b[1] - a[1]) or 1
        out.append((x - (b[1] - a[1]) / L * dist, y + (b[0] - a[0]) / L * dist))
    return out


def along(pts, step):
    """Points every `step` metres along a polyline, with the direction there."""
    out, carry = [], 0.0
    for (ax, ay), (bx, by) in zip(pts, pts[1:]):
        L = math.hypot(bx - ax, by - ay)
        if L == 0: continue
        k = carry
        while k < L:
            t = k / L; out.append((ax + (bx - ax) * t, ay + (by - ay) * t, (bx - ax) / L, (by - ay) / L)); k += step
        carry = k - L
    return out


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
    # grass: a scatter of darker and lighter blades
    rnd = random.Random(11)
    for _ in range(int((x1 - x0) * (y1 - y0) / 60)):
        gx, gy = rnd.uniform(x0, x1), rnd.uniform(y0, y1)
        px, py = P(gx, gy)
        d.point((px, py), fill=(70, 110, 50, 120) if rnd.random() < 0.6 else (170, 200, 120, 90))
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
    # ripples catching the light on the open water
    rnd = random.Random(5)
    for r in water:
        if not inbox(r): continue
        xs_, ys_ = [q[0] for q in r], [q[1] for q in r]
        for _ in range(int(min(600, (max(xs_) - min(xs_)) * (max(ys_) - min(ys_)) / 900))):
            wx, wy = rnd.uniform(min(xs_), max(xs_)), rnd.uniform(min(ys_), max(ys_))
            if x0 <= wx <= x1 and y0 <= wy <= y1 and inpoly(r, wx, wy):
                a, b2 = P(wx, wy, 0), P(wx + 6, wy - 6, 0)
                d.line([a, b2], fill=(170, 210, 230, 70), width=1)
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
    # roads: pavement, kerb, asphalt, dashed centre line; bridges lifted with railings
    def line(pts, w, col, z=None):
        d.line([P(x, y, z) for x, y in pts], fill=col, width=max(1, int(round(w))), joint='curve')
    vis = [r for r in roads if inbox(r['p']) and not r.get('atal')]
    # the Atal Setu: an elevated deck that climbs from the Patto bank to ~22 m over the river, standing on piers
    def deck_z(px, py):
        s0 = math.hypot(px - patto[0], py - patto[1])
        return min(22.0, 3 + s0 * 0.06)
    patto = xy(15.49653, 73.83756)
    for r in roads:
        if not r.get('atal') or not inbox(r['p']): continue
        pts = [q for q in r['p']]
        for (ax, ay, ux, uy) in along(pts, 45):     # piers down to the water or ground
            if not (x0 - 20 <= ax <= x1 + 20 and y0 - 20 <= ay <= y1 + 20): continue
            z = deck_z(ax, ay)
            d.line([P(ax, ay, 0), P(ax, ay, z)], fill=(214, 210, 200), width=max(2, int(2.2 * scale)))
        for (ax, ay), (bx, by) in zip(pts, pts[1:]):
            L = math.hypot(bx - ax, by - ay) or 1; nx_, ny_ = -(by - ay) / L * r['w'] / 2, (bx - ax) / L * r['w'] / 2
            za, zb = deck_z(ax, ay), deck_z(bx, by)
            d.polygon([P(ax + nx_, ay + ny_, za), P(bx + nx_, by + ny_, zb), P(bx - nx_, by - ny_, zb), P(ax - nx_, ay - ny_, za)], fill=(58, 60, 68))
            d.polygon([P(ax - nx_, ay - ny_, za), P(bx - nx_, by - ny_, zb), P(bx - nx_, by - ny_, zb - 2.2), P(ax - nx_, ay - ny_, za - 2.2)], fill=(226, 222, 212))
            for sgn in (1, -1):
                d.line([P(ax + nx_ * sgn, ay + ny_ * sgn, za + 1.1), P(bx + nx_ * sgn, by + ny_ * sgn, zb + 1.1)], fill=(242, 240, 232), width=max(1, int(scale * 0.7)))
    for r in sorted(vis, key=lambda r: r['w']):                       # pavements, wider for the bigger roads
        line(r['p'], (r['w'] + (5 if r['w'] >= 8 else 3)) * scale, (206, 200, 188), 6 if r['bridge'] else None)
    for r in sorted(vis, key=lambda r: r['w']):                       # kerb
        line(r['p'], (r['w'] + 0.8) * scale, (168, 162, 150), 6 if r['bridge'] else None)
    for r in sorted(vis, key=lambda r: r['w']):                       # asphalt
        line(r['p'], r['w'] * scale, (50, 52, 60) if r['w'] >= 8 else (66, 66, 72), 6 if r['bridge'] else None)
    for r in vis:                                                     # dashed centre lines on two-way main roads
        if r['w'] < 8 or r['oneway'] or r['round']: continue
        z = 6 if r['bridge'] else None
        for (px, py, ux, uy) in along(r['p'], 9):
            line([(px, py), (px + ux * 4.5, py + uy * 4.5)], max(1, scale * 0.45), (242, 239, 230, 200), z)
    for r in vis:                                                     # edge lines on the dual carriageways
        if r['hw'] in ('trunk', 'primary') and not r['round']:
            for side in (-1, 1): line(offset(r['p'], side * (r['w'] / 2 - 0.8)), max(1, scale * 0.35), (242, 239, 230, 140), 6 if r['bridge'] else None)
    for r in vis:
        if r['bridge']:
            for side in (-1, 1): line(offset(r['p'], side * r['w'] / 2), max(1.5, scale * 0.6), (240, 236, 226), 7.5)
    # roundabouts: the garden inside the ring
    for r in vis:
        if r['round'] and len(r['p']) > 4 and math.hypot(r['p'][0][0] - r['p'][-1][0], r['p'][0][1] - r['p'][-1][1]) < 2:
            cx = sum(q[0] for q in r['p']) / len(r['p']); cy = sum(q[1] for q in r['p']) / len(r['p'])
            rad = sum(math.hypot(q[0] - cx, q[1] - cy) for q in r['p']) / len(r['p']) - r['w'] / 2 - 1
            if rad > 2:
                ring = [(cx + math.cos(k / 24 * math.tau) * rad, cy + math.sin(k / 24 * math.tau) * rad) for k in range(24)]
                d.polygon([P(x, y) for x, y in ring], fill=(214, 208, 196))
                ring2 = [(cx + math.cos(k / 24 * math.tau) * (rad - 1.2), cy + math.sin(k / 24 * math.tau) * (rad - 1.2)) for k in range(24)]
                d.polygon([P(x, y) for x, y in ring2], fill=(86, 140, 70))
                fx, fy = P(cx, cy); d.ellipse([fx - 3 * scale, fy - 1.5 * scale, fx + 3 * scale, fy + 1.5 * scale], fill=(240, 230, 200))
    # zebra crossings where two main roads meet: stripes across each road just short of the junction
    ends = {}
    for r in vis:
        if r['w'] < 8 or r['round']: continue
        for i in (0, -1):
            k = (round(r['p'][i][0]), round(r['p'][i][1]))
            ends.setdefault(k, []).append((r, i))
    for k, lst in ends.items():
        if len(lst) < 3: continue
        for r, i in lst:
            pts = r['p'] if i == 0 else r['p'][::-1]
            ax, ay = pts[0]; bx, by = pts[1]; L = math.hypot(bx - ax, by - ay)
            if L < r['w'] + 6: continue
            ux, uy = (bx - ax) / L, (by - ay) / L; nx_, ny_ = -uy, ux
            cxz, cyz = ax + ux * (r['w'] / 2 + 3.5), ay + uy * (r['w'] / 2 + 3.5)
            for j in range(-int(r['w'] / 2) + 1, int(r['w'] / 2), 1):
                if j % 2: continue
                p0 = (cxz + nx_ * j - ux * 1.2, cyz + ny_ * j - uy * 1.2); p1 = (cxz + nx_ * j + ux * 1.2, cyz + ny_ * j + uy * 1.2)
                line([p0, p1], max(1, scale * 0.8), (244, 242, 236, 230))
    # avenue trees: rain trees and palms along the riverfront and the big roads, on the pavements
    rnd = random.Random(21)
    avenue = [r for r in vis if r['w'] >= 10 and not r['bridge'] and not r['round']]
    trees = []
    for r in avenue:
        for side in (-1, 1):
            for (px, py, ux, uy) in along(offset(r['p'], side * (r['w'] / 2 + 3)), 14 if r['hw'] != 'trunk' else 22):
                if not (x0 <= px <= x1 and y0 <= py <= y1): continue
                if any(inpoly(wr, px, py) for wr in water if inbox(wr)): continue
                trees.append((px, py, 'palm' if 'Bandodkar' in r['name'] and rnd.random() < 0.5 else 'rain'))
    for pth in paths:
        if not inbox(pth['p']): continue
        z = 6 if pth['bridge'] else None
        line(pth['p'], max(1.5, 2.2 * scale), (222, 206, 168), z)
        if pth['steps']:   # steps: treads across the path
            for (px, py, ux, uy) in along(pth['p'], 1.2):
                line([(px - uy * 1.2, py + ux * 1.2), (px + uy * 1.2, py - ux * 1.2)], 1, (150, 136, 108), z)
    # buildings, back to front, with real outlines extruded by their levels; temples and churches stand out
    LV = 3.2
    blds = [b for b in buildings if inbox(b['r'])]
    blds.sort(key=lambda b: sum(x + y for x, y in b['r']) / len(b['r']))
    rnd = random.Random(9)
    def draw_tree(px, py, kind):
        bx_, by_ = P(px, py)
        if kind == 'palm':
            tx, ty = P(px, py, height(px, py) + 9)
            d.line([(bx_, by_), (tx, ty)], fill=(107, 74, 38), width=max(1, int(scale * 0.8)))
            for k in range(7):
                a = k / 7 * math.tau; d.line([(tx, ty), (tx + math.cos(a) * 5 * scale, ty + math.sin(a) * 2.5 * scale + 2 * scale)], fill=(63, 138, 58), width=max(1, int(scale)))
        else:
            rr = 4.5 * scale
            d.line([(bx_, by_), (bx_, by_ - 3 * scale)], fill=(90, 64, 48), width=max(1, int(scale)))
            d.ellipse([bx_ - rr, by_ - 3 * scale - rr * 1.5, bx_ + rr, by_ - 3 * scale + rr * 0.3], fill=(47, 106, 50), outline=(26, 58, 28))
    items = [(sum(x + y for x, y in b['r']) / len(b['r']), 'b', b) for b in blds] + [(tx + ty, 't', (tx, ty, kd)) for tx, ty, kd in trees]
    items += [(lm['x'] + lm['y'], 'l', lm) for lm in LANDMARKS if x0 - 100 <= lm['x'] <= x1 + 100 and y0 - 100 <= lm['y'] <= y1 + 100]
    items.sort(key=lambda it: it[0])
    blds_in_order = items
    palette = [(242, 194, 48), (224, 118, 58), (47, 111, 208), (232, 224, 204), (47, 160, 138), (232, 163, 58), (208, 52, 74), (224, 122, 138), (74, 143, 224)]
    for _, kind, b in blds_in_order:
        if kind == 't':
            draw_tree(*b); continue
        if kind == 'l':   # a Blender landmark, scaled from its render to this view and pasted at its real spot
            k = scale / (b['px_per_m'] * math.cos(math.radians(45)))
            im = b['img'].resize((max(1, int(b['img'].width * k)), max(1, int(b['img'].height * k))), Image.LANCZOS)
            ax_, ay_ = P(b['x'], b['y'], b.get('deck_z'))
            img.paste(im, (int(ax_ - b['anchor'][0] * k), int(ay_ - b['anchor'][1] * k)), im)
            continue
        r = b['r']; t = b['tags']
        church = t.get('building') in ('church', 'chapel', 'cathedral') or t.get('amenity') == 'place_of_worship' and t.get('religion') == 'christian' or any(r is w for w in wpoly)
        temple = t.get('building') == 'temple' or (t.get('amenity') == 'place_of_worship' and t.get('religion') == 'hindu')
        base = min(height(x, y) for x, y in r)
        top = base + b['lv'] * LV * (1.6 if church else 1.2 if temple else 1)
        col = (250, 248, 242) if church else (236, 214, 160) if temple else palette[hash(id(b)) % len(palette)]
        # walls: each edge whose outside faces the viewer (toward +x+y in the 2:1 view), with a row of windows per floor
        edges = []
        for (ax, ay), (bx, by) in zip(r, r[1:] + r[:1]):
            L = math.hypot(bx - ax, by - ay)
            if L < 0.3: continue
            nx_, ny_ = (by - ay) / L, -(bx - ax) / L
            if inpoly(r, (ax + bx) / 2 + nx_ * 0.3, (ay + by) / 2 + ny_ * 0.3): nx_, ny_ = -nx_, -ny_
            if nx_ + ny_ <= 0.02: continue
            edges.append(((ax, ay), (bx, by), nx_, ny_, L))
        edges.sort(key=lambda e: (e[0][0] + e[1][0] + e[0][1] + e[1][1]))
        floors = max(1, int(round(b['lv'])))
        for (ax, ay), (bx, by), nx_, ny_, L in edges:
            k = 0.95 if ny_ > nx_ else 0.74
            d.polygon([P(ax, ay, base), P(bx, by, base), P(bx, by, top), P(ax, ay, top)], fill=tuple(int(c * k) for c in col), outline=(26, 20, 16))
            if scale >= 0.9 and not church:
                fh = (top - base) / floors
                n = int(L / 3.4)
                for f_ in range(floors):
                    zc = base + f_ * fh + fh * 0.55
                    for i in range(n):
                        t0 = (i + 0.5) / n; wx, wy = ax + (bx - ax) * t0, ay + (by - ay) * t0
                        ux, uy = (bx - ax) / L, (by - ay) / L
                        q = [P(wx - ux * 0.55 + nx_ * 0.05, wy - uy * 0.55 + ny_ * 0.05, zc - fh * 0.22), P(wx + ux * 0.55 + nx_ * 0.05, wy + uy * 0.55 + ny_ * 0.05, zc - fh * 0.22),
                             P(wx + ux * 0.55 + nx_ * 0.05, wy + uy * 0.55 + ny_ * 0.05, zc + fh * 0.22), P(wx - ux * 0.55 + nx_ * 0.05, wy - uy * 0.55 + ny_ * 0.05, zc + fh * 0.22)]
                        d.polygon(q, fill=(246, 242, 234))
                        inner = [(q[0][0] * 0.8 + q[2][0] * 0.2, q[0][1] * 0.8 + q[2][1] * 0.2), (q[1][0] * 0.8 + q[3][0] * 0.2, q[1][1] * 0.8 + q[3][1] * 0.2),
                                 (q[2][0] * 0.8 + q[0][0] * 0.2, q[2][1] * 0.8 + q[0][1] * 0.2), (q[3][0] * 0.8 + q[1][0] * 0.2, q[3][1] * 0.8 + q[1][1] * 0.2)]
                        d.polygon(inner, fill=(255, 214, 140) if rnd.random() < 0.18 else (58, 70, 86))
        # roofs: small, simple buildings get a ridged Mangalore tile roof; big ones a flat terrace with a parapet
        tiled = not church and not temple and b['area'] < 600 and len(r) <= 6
        roofc = (240, 238, 232) if church else (200, 140, 60) if temple else (168, 73, 43) if tiled else (192, 186, 172)
        d.polygon([P(x, y, top) for x, y in r], fill=roofc, outline=(26, 20, 16))
        if tiled:
            # the ridge runs along the long axis, raised a little; tile courses parallel to it
            sides = sorted(((math.hypot(r[(i + 1) % len(r)][0] - r[i][0], r[(i + 1) % len(r)][1] - r[i][1]), i) for i in range(len(r))), reverse=True)
            i = sides[0][1]; (ax, ay), (bx, by) = r[i], r[(i + 1) % len(r)]
            cx = sum(x for x, y in r) / len(r); cy = sum(y for x, y in r) / len(r)
            ux, uy = (bx - ax) / (sides[0][0] or 1), (by - ay) / (sides[0][0] or 1)
            half = sides[0][0] / 2 - min(sides[-1][0] / 2, sides[0][0] / 3)
            rh = min(3.5, sides[-1][0] * 0.3)
            r0, r1 = (cx - ux * half, cy - uy * half), (cx + ux * half, cy + uy * half)
            for (ex0, ey0), (ex1, ey1) in zip(r, r[1:] + r[:1]):
                d.polygon([P(ex0, ey0, top), P(ex1, ey1, top), P(*(r1 if (ex1 - cx) * ux + (ey1 - cy) * uy > 0 else r0), top + rh), P(*(r1 if (ex0 - cx) * ux + (ey0 - cy) * uy > 0 else r0), top + rh)],
                          fill=(150, 62, 36) if ((ex0 + ex1) / 2 - cx) + ((ey0 + ey1) / 2 - cy) > 0 else (184, 84, 50), outline=(70, 26, 12))
            d.line([P(*r0, top + rh), P(*r1, top + rh)], fill=(122, 46, 24), width=max(1, int(scale)))
        elif not church and not temple:
            d.polygon([P(x, y, top + 0.8) for x, y in r], outline=(236, 232, 222))
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
    # street names, laid along the road where it runs longest and straightest in view
    try: sf = ImageFont.truetype('arialbd.ttf', max(11, int(10 * min(1.6, scale * 1.4))))
    except OSError: sf = ImageFont.load_default()
    named = {}
    for r in vis:
        if r['name'] and r['w'] >= 6 and not r['round']:
            for (ax, ay), (bx, by) in zip(r['p'], r['p'][1:]):
                L = math.hypot(bx - ax, by - ay)
                if x0 + 20 < (ax + bx) / 2 < x1 - 20 and y0 + 20 < (ay + by) / 2 < y1 - 20 and L > named.get(r['name'], (0,))[0]:
                    named[r['name']] = (L, (ax, ay), (bx, by), r)
    placed = []
    for nm, (L, (ax, ay), (bx, by), r) in sorted(named.items(), key=lambda kv: -kv[1][0]):
        p0, p1 = P(ax, ay), P(bx, by)
        tw = d.textlength(nm, font=sf)
        if hyp2(p0, p1) < tw * 0.9: continue
        mx, my = (p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2
        if any(abs(mx - qx) < 120 and abs(my - qy) < 30 for qx, qy in placed): continue
        placed.append((mx, my))
        ang = math.degrees(math.atan2(p1[1] - p0[1], p1[0] - p0[0]))
        if ang > 90: ang -= 180
        if ang < -90: ang += 180
        lbl = Image.new('RGBA', (int(tw) + 10, 20), (0, 0, 0, 0)); ld = ImageDraw.Draw(lbl)
        ld.text((5, 2), nm, font=sf, fill=(250, 246, 236, 235), stroke_width=2, stroke_fill=(30, 32, 40, 220))
        rot = lbl.rotate(-ang, expand=True, resample=Image.BICUBIC)
        img.paste(rot, (int(mx - rot.width / 2), int(my - rot.height / 2)), rot)
    d.text((10, Hpx - 22), 'Map data (c) OpenStreetMap contributors (ODbL) · elevation: SRTM via OpenTopoData', fill=(200, 200, 200), font=ImageFont.load_default())
    if name: img.save(OUT / name); print('wrote', OUT / name, img.size)
    return img, P


# names placed where OpenStreetMap's own place points are (the river, creek and bridge from their mapped water and roads)
LABELS = [('Mandovi', 15.5040, 73.8250, 0), ('Panaji', 15.49899, 73.82821, 35), ('Church Square', 15.4987, 73.82891, 25), ('Fontainhas', 15.49666, 73.83108, 25),
          ('São Tomé', 15.49945, 73.83218, 20), ('Mala', 15.49205, 73.82948, 20), ('Altinho', 15.48789, 73.82626, 25), ('Campal', 15.49412, 73.81957, 15),
          ('Santa Inez', 15.48693, 73.81752, 15), ('Patto', 15.49515, 73.83542, 40), ('Panjim Bazaar', 15.49775, 73.82602, 25), ('Neugi Nagar', 15.48931, 73.83119, 15),
          ('Ourém creek', 15.4935, 73.8335, 0), ('Atal Setu', 15.5040, 73.8445, 30), ('Ponte de Linhares', 15.4990, 73.8490, 10)]
if __name__ == '__main__':
    render('panaji_overview.png', 0, 0, W_M, H_M, 0.36, 0.9, LABELS)
    dx, dy = xy(15.5010, 73.8240); ex, ey = xy(15.4880, 73.8370)
    render('panaji_detail.png', dx, dy, ex, ey, 1.25, 2.6, LABELS)
