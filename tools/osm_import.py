"""Turn a real Goan village from OpenStreetMap into a Rakhondar map.

    python tools/osm_import.py fetch NAME LAT LON [--radius 0.007]
    python tools/osm_import.py survey NAME
    python tools/osm_import.py build NAME LAT LON [--tile 9] [--inline rakhondar.html]

`fetch` downloads everything around the point once and caches it in data/NAME.osm.json.
`survey` lists the places of worship, ferry points and bus stops in the cache, to pick a centre.
`build` rasterises the cache onto the game's 72 x 56 tile grid (x east, y south) and writes
data/NAME.map.json; with --inline it also replaces the VILLAGE block inside the game file.

Map data (c) OpenStreetMap contributors, available under the Open Database License (ODbL).
"""
import argparse, json, math, pathlib, re, subprocess, sys, time

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA = ROOT / 'data'
W, H = 72, 56
ENDPOINTS = ['https://overpass-api.de/api/interpreter', 'https://overpass.kumi.systems/api/interpreter',
             'https://overpass.private.coffee/api/interpreter']


def overpass(query):
    wait = 5
    for attempt in range(8):
        for ep in ENDPOINTS:
            out = subprocess.run(['curl', '-s', '-m', '180', '-A', 'rakhondar-game-dev/0.1', '--data-urlencode', 'data=' + query, ep],
                                 capture_output=True, text=True, encoding='utf-8').stdout
            if out.lstrip().startswith('{'):
                return json.loads(out)
        print(f'  Overpass busy, retrying in {wait}s', file=sys.stderr)
        time.sleep(wait)
        wait = min(wait * 2, 60)
    sys.exit('Overpass did not answer; try again later.')


def fetch(name, lat, lon, radius):
    b = f'({lat - radius},{lon - radius * 1.04},{lat + radius},{lon + radius * 1.04})'
    q = (f'[out:json][timeout:150];(way["highway"]{b};way["building"]{b};nwr["landuse"]{b};nwr["natural"]{b};'
         f'nwr["waterway"]{b};nwr["amenity"]{b};nwr["highway"="bus_stop"]{b};nwr["place"]{b};);out geom;')
    d = overpass(q)
    DATA.mkdir(exist_ok=True)
    (DATA / f'{name}.osm.json').write_text(json.dumps(d), encoding='utf-8')
    print(f'{len(d["elements"])} elements cached in data/{name}.osm.json')


def load(name):
    return json.loads((DATA / f'{name}.osm.json').read_text(encoding='utf-8'))['elements']


def centre(e):
    if 'lat' in e:
        return e['lat'], e['lon']
    g = e.get('geometry') or []
    if g:
        return sum(p['lat'] for p in g) / len(g), sum(p['lon'] for p in g) / len(g)
    b = e.get('bounds')
    return ((b['minlat'] + b['maxlat']) / 2, (b['minlon'] + b['maxlon']) / 2) if b else (None, None)


def kind_of(t):
    if t.get('amenity') == 'place_of_worship':
        return {'hindu': 'temple', 'christian': 'chapel'}.get(t.get('religion'), 'worship')
    if t.get('amenity') == 'ferry_terminal':
        return 'ferry'
    if t.get('highway') == 'bus_stop' or t.get('amenity') == 'bus_station':
        return 'bus'
    if 'place' in t:
        return 'place'
    return None


def survey(name):
    for e in load(name):
        k = kind_of(e.get('tags', {}))
        if k:
            la, lo = centre(e)
            t = e['tags']
            print(f'{k:8s} {la:.5f} {lo:.5f}  {t.get("name", "")} {t.get("name:en", "")}')


def build(name, lat, lon, tile, inline):
    kx = 111320 * math.cos(math.radians(lat)) / tile
    ky = 110540 / tile

    def xy(la, lo):
        return (lo - lon) * kx + W / 2, (lat - la) * ky + H / 2

    grid = [['G'] * W for _ in range(H)]

    def paint_poly(pts, ch, only=None):
        if len(pts) < 3:
            return
        ys = [p[1] for p in pts]
        for ty in range(max(0, int(min(ys))), min(H, int(max(ys)) + 1)):
            cy = ty + 0.5
            xs = []
            for (x1, y1), (x2, y2) in zip(pts, pts[1:] + pts[:1]):
                if (y1 <= cy < y2) or (y2 <= cy < y1):
                    xs.append(x1 + (cy - y1) * (x2 - x1) / (y2 - y1))
            xs.sort()
            for a, b in zip(xs[::2], xs[1::2]):
                for tx in range(max(0, math.ceil(a - 0.5)), min(W, math.floor(b - 0.5) + 1)):
                    if only is None or grid[ty][tx] in only:
                        grid[ty][tx] = ch

    def paint_line(pts, width, ch, keep=()):
        r = width / 2
        for (x1, y1), (x2, y2) in zip(pts, pts[1:]):
            for ty in range(max(0, int(min(y1, y2) - r - 1)), min(H, int(max(y1, y2) + r + 2))):
                for tx in range(max(0, int(min(x1, x2) - r - 1)), min(W, int(max(x1, x2) + r + 2))):
                    px, py = tx + 0.5, ty + 0.5
                    dx, dy = x2 - x1, y2 - y1
                    L = dx * dx + dy * dy or 1e-9
                    u = max(0, min(1, ((px - x1) * dx + (py - y1) * dy) / L))
                    if math.hypot(px - x1 - u * dx, py - y1 - u * dy) <= r and grid[ty][tx] not in keep:
                        grid[ty][tx] = ch

    els = load(name)
    geo = lambda e: [xy(p['lat'], p['lon']) for p in e.get('geometry') or [] if p]

    def rings(e):
        """Closed outlines of an area: a closed way, or a multipolygon's outer members stitched end to end."""
        if e['type'] == 'way':
            return [geo(e)]
        parts = [[xy(p['lat'], p['lon']) for p in m.get('geometry') or [] if p]
                 for m in e.get('members', []) if m.get('type') == 'way' and m.get('role', 'outer') in ('outer', '')]
        parts = [p for p in parts if len(p) > 1]
        out = []
        while parts:
            ring = parts.pop(0)
            grown = True
            while grown and ring[0] != ring[-1]:
                grown = False
                for i, p in enumerate(parts):
                    if p[0] == ring[-1]: ring += p[1:]
                    elif p[-1] == ring[-1]: ring += p[-2::-1]
                    elif p[-1] == ring[0]: ring = p[:-1] + ring
                    elif p[0] == ring[0]: ring = p[:0:-1] + ring
                    else: continue
                    parts.pop(i); grown = True; break
            out.append(ring)
        return out

    def area(e, ch):
        for r in rings(e):
            paint_poly(r, ch)

    # paint in layers: fields (khazan farmland counts, even when also tagged wetland), mangroves, water, then roads on top
    tagged = lambda e: e.get('tags', {})
    for e in els:
        t = tagged(e)
        if (t.get('landuse') in ('farmland', 'paddy', 'meadow') or t.get('crop') == 'rice') and t.get('wetland') != 'mangrove':
            area(e, 'P')
    for e in els:
        t = tagged(e)
        if t.get('wetland') == 'mangrove' or (t.get('natural') == 'wetland' and t.get('landuse') != 'farmland'):
            area(e, 'M')
    for e in els:
        t = tagged(e)
        if t.get('natural') == 'water' or t.get('waterway') in ('riverbank', 'dock'):
            area(e, 'W')
        if t.get('waterway') in ('river', 'canal', 'stream', 'drain', 'ditch', 'tidal_channel') and e['type'] == 'way':
            w = {'river': float(t.get('width', 40)), 'canal': 12, 'stream': 5, 'tidal_channel': 8}.get(t['waterway'], 3) / tile
            paint_line(geo(e), max(1.2, w), 'W')
    ROADS = {'trunk': 2.4, 'primary': 2.4, 'secondary': 2.2, 'tertiary': 2.0}
    LANES = {'unclassified': 1.6, 'residential': 1.6, 'living_street': 1.6, 'service': 1.3, 'track': 1.3, 'path': 1.1, 'footway': 1.1}
    for e in els:
        t = e.get('tags', {})
        hw = t.get('highway')
        if e['type'] != 'way' or not hw:
            continue
        if hw in ROADS:
            paint_line(geo(e), ROADS[hw], 'R')
        elif hw in LANES:
            paint_line(geo(e), LANES[hw], 'L', keep=('R',))
    houses = []
    for e in els:
        t = e.get('tags', {})
        if 'building' in t and e['type'] == 'way':
            pts = geo(e)
            if not pts:
                continue
            x0, x1 = int(min(p[0] for p in pts)), int(max(p[0] for p in pts))
            y0, y1 = int(min(p[1] for p in pts)), int(max(p[1] for p in pts))
            w, h = max(3, min(4, x1 - x0 + 1)), 3
            if 1 <= x0 and x0 + w < W - 1 and 1 <= y0 and y0 + h < H - 1:
                houses.append([x0, y0, w, h])
    anchors, names = {}, {}
    for e in els:
        t = e.get('tags', {})
        k = kind_of(t)
        if k in ('temple', 'chapel', 'ferry', 'bus') or (k == 'worship' and 'worship' not in anchors):
            la, lo = centre(e)
            if la is None:
                continue
            x, y = xy(la, lo)
            if 0 <= x < W and 0 <= y < H:
                d = math.hypot(x - W / 2, y - H / 2)
                if k not in anchors or d < anchors[k][2]:
                    anchors[k] = (round(x, 1), round(y, 1), d)
                    names[k] = t.get('name:en') or t.get('name') or ''
    out = {'name': name.title(), 'centre': [lat, lon], 'tile': tile, 'W': W, 'H': H,
           'credit': 'Map data © OpenStreetMap contributors (ODbL)',
           'rows': [''.join(r) for r in grid], 'houses': houses,
           'anchors': {k: [v[0], v[1]] for k, v in anchors.items()}, 'names': names}
    (DATA / f'{name}.map.json').write_text(json.dumps(out), encoding='utf-8')
    for r in out['rows']:
        print(r)
    print('anchors', out['anchors'], names)
    print('houses', len(houses))
    if inline:
        f = pathlib.Path(inline)
        src = f.read_text(encoding='utf-8')
        block = 'const VILLAGE = ' + json.dumps(out, ensure_ascii=False, separators=(',', ':')) + ';'
        src, n = re.subn(r'/\* VILLAGE-DATA \*/.*?/\* END VILLAGE-DATA \*/',
                         lambda m: '/* VILLAGE-DATA */' + block + '/* END VILLAGE-DATA */', src, flags=re.S)
        if n != 1:
            sys.exit('VILLAGE-DATA markers not found in ' + inline)
        f.write_text(src, encoding='utf-8')
        print('inlined into', inline)


if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    ap.add_argument('cmd', choices=['fetch', 'survey', 'build'])
    ap.add_argument('name')
    ap.add_argument('lat', type=float, nargs='?')
    ap.add_argument('lon', type=float, nargs='?')
    ap.add_argument('--radius', type=float, default=0.007)
    ap.add_argument('--tile', type=float, default=9)
    ap.add_argument('--inline')
    a = ap.parse_args()
    if a.cmd == 'fetch':
        fetch(a.name, a.lat, a.lon, a.radius)
    elif a.cmd == 'survey':
        survey(a.name)
    else:
        build(a.name, a.lat, a.lon, a.tile, a.inline)
