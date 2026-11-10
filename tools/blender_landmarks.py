"""More Panjim landmarks for Rakhondar, each raised on its own OpenStreetMap outline.

    set RK_MODEL=imb & set RK_ROT=0 & "C:\\Program Files\\Blender Foundation\\Blender 5.1\\blender.exe" -b --python tools/blender_landmarks.py

RK_MODEL picks the landmark, RK_ROT (0-3) the side of the view. The outlines are exact (from data/panjim.osm.json);
storeys, colours, roofs and front details are impressions in each building's manner, to check against photographs:
  imb        Institute Menezes Braganza (way 316043006): two yellow storeys with white trim, a tiled awning, arcade, hipped roof (checked against a photograph)
  postoffice Panjim Head Post Office (way 1155877316): two storeys of Goan red with white trim, hipped tile roof
  maruti     Maruti Temple, Altinho (way 1155891473): a tiled hall under a tiered saffron tower and golden kalash
  sebastian  Chapel of St. Sebastian, Fontainhas (way 1428309377): a white chapel, gabled front with a belfry
  donbosco   Don Bosco Shrine (way 1095637824): a white church with a raised gable front and two small towers
  kadamba    Kadamba Bus Terminus (way 316043021): a long flat terminal with a deep canopy and the red Kadamba band
Metres; Blender x = east, y = north; the origin is the outline's centre at ground level.
"""
import bpy, bmesh, json, math, os, pathlib
from mathutils import Vector

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'sprites'; OUT.mkdir(exist_ok=True)
ELEV = math.asin(0.5)
S = 1.25 / math.cos(math.radians(45)) * 2
ZX = (2.6 * 2 * 1.7) / (S * math.cos(ELEV))      # heights stretched as the game draws them
RES = 1400
MODEL = os.environ.get('RK_MODEL', 'imb')
ROT = int(os.environ.get('RK_ROT', 0))
WAYS = {'imb': 316043006, 'postoffice': 1155877316, 'maruti': 1155891473, 'sebastian': 1428309377, 'donbosco': 1095637824, 'kadamba': 316043021}

els = json.load(open(ROOT / 'data/panjim.osm.json', encoding='utf-8'))['elements']
way = next(e for e in els if e['type'] == 'way' and e['id'] == WAYS[MODEL])
g = [p for p in way['geometry'] if p]
if (g[0]['lat'], g[0]['lon']) == (g[-1]['lat'], g[-1]['lon']): g = g[:-1]
LA0 = sum(p['lat'] for p in g) / len(g); LO0 = sum(p['lon'] for p in g) / len(g)
KX = 111320 * math.cos(math.radians(LA0))
OUTLINE = [((p['lon'] - LO0) * KX, (p['lat'] - LA0) * 110540) for p in g]
if sum(OUTLINE[i][0] * OUTLINE[(i + 1) % len(OUTLINE)][1] - OUTLINE[(i + 1) % len(OUTLINE)][0] * OUTLINE[i][1] for i in range(len(OUTLINE))) < 0:
    OUTLINE.reverse()   # counter-clockwise, so every wall's outside is to its right... and normals come out right
CX = sum(x for x, y in OUTLINE) / len(OUTLINE); CY = sum(y for x, y in OUTLINE) / len(OUTLINE)
# the long axis: the direction of the longest side
_e = max(range(len(OUTLINE)), key=lambda i: math.dist(OUTLINE[i], OUTLINE[(i + 1) % len(OUTLINE)]))
_a, _b = OUTLINE[_e], OUTLINE[(_e + 1) % len(OUTLINE)]
A = Vector((_b[0] - _a[0], _b[1] - _a[1])).normalized(); B = Vector((-A.y, A.x)); ANG = math.atan2(A.y, A.x)
U = [Vector(p).dot(A) for p in OUTLINE]; V = [Vector(p).dot(B) for p in OUTLINE]
U0, U1, V0, V1 = min(U), max(U), min(V), max(V)


def col(h):
    h = h.lstrip('#'); c = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    return (*[v / 12.92 if v <= 0.04045 else ((v + 0.055) / 1.055) ** 2.4 for v in c], 1)


M = {}
def mat(h, rough=0.8, metal=0.0):
    if (h, metal) in M: return M[(h, metal)]
    m = bpy.data.materials.new(h); m.use_nodes = True
    b = next(n for n in m.node_tree.nodes if n.type == 'BSDF_PRINCIPLED')
    b.inputs['Base Color'].default_value = col(h); b.inputs['Roughness'].default_value = rough; b.inputs['Metallic'].default_value = metal
    M[(h, metal)] = m; return m


for o in list(bpy.data.objects): bpy.data.objects.remove(o, do_unlink=True)
bpy.ops.object.empty_add(location=(0, 0, 0)); root = bpy.context.active_object
def own(o): o.parent = root; return o
def at(u, v): p = A * u + B * v; return (p.x, p.y)


def prism(pts, z0, z1, h):
    me = bpy.data.meshes.new('p'); bm = bmesh.new()
    f = bm.faces.new([bm.verts.new((x, y, z0)) for x, y in pts])
    bmesh.ops.recalc_face_normals(bm, faces=[f])
    if f.normal.z > 0: f.normal_flip()
    ext = bmesh.ops.extrude_face_region(bm, geom=[f])
    bmesh.ops.translate(bm, verts=[v for v in ext['geom'] if isinstance(v, bmesh.types.BMVert)], vec=(0, 0, z1 - z0))
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces[:])
    bm.to_mesh(me); bm.free()
    o = bpy.data.objects.new('p', me); bpy.context.collection.objects.link(o); o.data.materials.append(mat(h)); return own(o)


def grow(pts, k):
    return [(CX + (x - CX) * k, CY + (y - CY) * k) for x, y in pts]


def inset(pts, d):
    """The outline moved d metres inward (mitred corners), so a roof follows wings and courtyards."""
    n = len(pts); out = []
    for i in range(n):
        p0, p1, p2 = Vector(pts[i - 1]), Vector(pts[i]), Vector(pts[(i + 1) % n])
        e0, e1 = (p1 - p0).normalized(), (p2 - p1).normalized()
        n0, n1 = Vector((-e0.y, e0.x)), Vector((-e1.y, e1.x))      # left normals: inward for a counter-clockwise outline
        m = n0 + n1; m = m.normalized() if m.length > 1e-6 else n0
        q = p1 + m * (d / max(0.35, m.dot(n1))); out.append((q.x, q.y))
    return out


def hip_roof(pts, z, rise, shrink, h):
    n = len(pts)
    vs = [(x, y, z) for x, y in pts] + [(x, y, z + rise) for x, y in inset(pts, rise * 1.1)]
    faces = [(i, (i + 1) % n, n + (i + 1) % n, n + i) for i in range(n)] + [tuple(range(n, 2 * n))]
    me = bpy.data.meshes.new('r'); me.from_pydata(vs, [], faces)
    o = bpy.data.objects.new('r', me); bpy.context.collection.objects.link(o)
    o.modifiers.new('t', 'SOLIDIFY').thickness = 0.4; o.data.materials.append(mat(h)); return own(o)


def rbox(cx, cy, ang, w, d, z0, z1, h):
    bpy.ops.mesh.primitive_cube_add(size=1, location=(cx, cy, (z0 + z1) / 2), rotation=(0, 0, ang))
    o = bpy.context.active_object; o.scale = (w, d, z1 - z0); o.data.materials.append(mat(h)); return own(o)


def ubox(u0, u1, v0, v1, z0, z1, h):
    cx, cy = at((u0 + u1) / 2, (v0 + v1) / 2); return rbox(cx, cy, ANG, u1 - u0, v1 - v0, z0, z1, h)


def mesh(verts, faces, h, thick=0):
    me = bpy.data.meshes.new('m'); me.from_pydata(verts, [], faces)
    o = bpy.data.objects.new('m', me); bpy.context.collection.objects.link(o)
    if thick: o.modifiers.new('t', 'SOLIDIFY').thickness = thick
    o.data.materials.append(mat(h)); return own(o)


def windows(floors, fh, z_base, spacing, frame, fill, every=3, alt=None, pts=None):
    """Tall openings in frames along every wall of the outline."""
    pts = pts or OUTLINE
    for i in range(len(pts)):
        (ax, ay), (bx, by) = pts[i], pts[(i + 1) % len(pts)]
        L = math.hypot(bx - ax, by - ay)
        if L < spacing * 0.8: continue
        ux, uy = (bx - ax) / L, (by - ay) / L; nx, ny = uy, -ux
        if ((ax + bx) / 2 - CX) * nx + ((ay + by) / 2 - CY) * ny < 0: nx, ny = -nx, -ny
        ang = math.atan2(uy, ux); n = max(1, int(L / spacing))
        for k in range(n):
            t = (k + 0.5) / n; wx, wy = ax + (bx - ax) * t + nx * 0.15, ay + (by - ay) * t + ny * 0.15
            for f in range(floors):
                z0 = z_base + f * fh + fh * 0.25
                rbox(wx, wy, ang, 1.9, 0.3, z0 - 0.3, z0 + fh * 0.55 + 0.3, frame)
                rbox(wx + nx * 0.1, wy + ny * 0.1, ang, 1.4, 0.3, z0, z0 + fh * 0.55, (alt or fill) if (k + f) % every == 0 else fill)


def gable(u0, u1, half, z, rise, h, thick=0.3):
    for side in (-1, 1):
        p = [at(u0, side * half), at(u1, side * half), at(u1, 0), at(u0, 0)]
        mesh([(p[0][0], p[0][1], z), (p[1][0], p[1][1], z), (p[2][0], p[2][1], z + rise), (p[3][0], p[3][1], z + rise)], [(0, 1, 2, 3)], h, thick)


def front_gable(u, half, z, rise, h, thick=0.8):
    p0, p1, pc = at(u, -half), at(u, half), at(u, 0)
    mesh([(p0[0], p0[1], z), (p1[0], p1[1], z), (pc[0], pc[1], z + rise)], [(0, 1, 2)], h, thick)


def cross(u, v, z, s=1.0):
    cx, cy = at(u, v)
    rbox(cx, cy, ANG, 0.25 * s, 0.25 * s, z, z + 2.4 * s, '#f2efe8'); rbox(cx, cy, ANG + math.pi / 2, 1.4 * s, 0.25 * s, z + 1.4 * s, z + 1.7 * s, '#f2efe8')


WHITE, TRIM, LAT, TILE, SHUT, GLASS, DARK, GOLD = '#f7f4ec', '#e2dccf', '#a85a34', '#a8492b', '#3d5a44', '#2c3442', '#3a2a22', '#d8a63a'

if MODEL in ('imb', 'postoffice'):
    FH, FL = 5.2, 2
    wall, band = ('#e0a52e', '#f7f4ec') if MODEL == 'imb' else ('#b8432e', '#f4efe4')   # the Institute is yellow with white trim (checked against a photograph)
    WH = FH * FL + 1
    prism(OUTLINE, 0, 1.0, LAT)
    prism(OUTLINE, 1.0, WH, wall)
    prism(grow(OUTLINE, 1.008), WH - 0.9, WH, band)
    prism(grow(OUTLINE, 1.008), FH + 0.6, FH + 1.1, band)
    hip_roof(grow(OUTLINE, 1.04), WH, 4.5, 0.55, TILE)
    windows(FL, FH, 1.0, 5.0, '#f7f4ec', '#34424f' if MODEL == 'imb' else '#2f4a3a', alt=GLASS)
    if MODEL == 'imb': prism(grow(OUTLINE, 1.03), FH + 0.1, FH + 0.55, TILE)   # the tiled awning over the ground-floor windows
    # the arcaded entrance on the long side facing the street, with a pediment
    for k in range(-2, 3):
        ubox(k * 3 - 0.45, k * 3 + 0.45, V0 - 3.4, V0 - 2.6, 1.0, FH + 0.6, band if MODEL == 'postoffice' else WHITE)
    ubox(-7.5, 7.5, V0 - 3.8, V0 + 0.2, FH + 0.6, FH + 1.5, band)
    p0, p1, pc = at(-7.5, V0 - 3.6), at(7.5, V0 - 3.6), at(0, V0 - 3.6)
    mesh([(p0[0], p0[1], FH + 1.5), (p1[0], p1[1], FH + 1.5), (pc[0], pc[1], FH + 4.3)], [(0, 1, 2)], band, 0.6)
elif MODEL == 'maruti':
    HALF = (V1 - V0) / 2 - 1.0; um = (U0 + U1) / 2; vm = (V0 + V1) / 2
    ubox(U0, U1, V0, V1, 0, 1.2, LAT)
    ubox(U0 + 1, U1 - 1, V0 + 1, V1 - 1, 1.2, 8.0, '#fbf6ea')
    ubox(U0 + 0.8, U1 - 0.8, V0 + 0.8, V1 - 0.8, 7.2, 8.0, '#e8862a')
    ubox(U0 + 0.8, U1 - 0.8, V0 + 0.8, V1 - 0.8, 1.2, 2.0, '#e8862a')
    for side, v in ((-1, V0 + 0.9), (1, V1 - 0.9)):
        for k in range(5):
            u = U0 + 4 + k * (U1 - U0 - 8) / 4
            ubox(u - 0.7, u + 0.7, v - 0.12, v + 0.12, 3.0, 6.0, DARK)
    for side in (-1, 1):   # the hall's tiled roof, hipped toward the tower
        p = [at(U0 + 0.4, vm + side * ((V1 - V0) / 2 - 0.2)), at(U1 - 0.4, vm + side * ((V1 - V0) / 2 - 0.2)), at(U1 - 6, vm), at(U0 + 6, vm)]
        mesh([(p[0][0], p[0][1], 8.0), (p[1][0], p[1][1], 8.0), (p[2][0], p[2][1], 12.5), (p[3][0], p[3][1], 12.5)], [(0, 1, 2, 3)], TILE, 0.3)
    # the tower over the sanctum at the far end: stepped tiers in white and saffron, then the kalash
    tu = U1 - 6; tx, ty = at(tu, vm)
    for k in range(6):
        r = 5.2 - k * 0.7; z0 = 8.0 + k * 3.0
        bpy.ops.mesh.primitive_cylinder_add(vertices=8, radius=r, depth=3.0, location=(tx, ty, z0 + 1.5)); bpy.context.active_object.data.materials.append(mat('#fbf6ea' if k % 2 else '#f0a040')); own(bpy.context.active_object)
    bpy.ops.mesh.primitive_uv_sphere_add(radius=1.6, location=(tx, ty, 27.0), segments=16, ring_count=8); bpy.context.active_object.data.materials.append(mat(GOLD, 0.3, 0.8)); own(bpy.context.active_object)
    bpy.ops.mesh.primitive_cone_add(vertices=8, radius1=0.4, depth=2.2, location=(tx, ty, 29.4)); bpy.context.active_object.data.materials.append(mat(GOLD, 0.3, 0.8)); own(bpy.context.active_object)
    # a saffron flag on a pole at the entrance end
    fx, fy = at(U0 - 2, vm); rbox(fx, fy, 0, 0.25, 0.25, 0, 14, '#e2dccf'); rbox(fx + 0.9, fy, ANG, 1.6, 0.08, 12.0, 13.4, '#ff8a1e')
elif MODEL in ('sebastian', 'donbosco'):
    big = MODEL == 'donbosco'
    HALF = (V1 - V0) / 2 - 0.3; vm = (V0 + V1) / 2; WH = 9.0 if big else 7.0
    ubox(U0, U1, V0, V1, 0, 0.8, LAT)
    ubox(U0 + 0.3, U1 - 0.3, V0 + 0.3, V1 - 0.3, 0.8, WH, WHITE)
    ubox(U0 + 0.2, U1 - 0.2, V0 + 0.2, V1 - 0.2, WH - 0.6, WH, '#2f6fd0' if not big else '#d9a441')
    for v in (V0 + 0.25, V1 - 0.25):
        for k in range(4 if big else 3):
            u = U0 + 5 + k * (U1 - U0 - 8) / max(1, (3 if big else 2))
            ubox(u - 0.6, u + 0.6, v - 0.1, v + 0.1, 2.5, WH - 2.0, DARK)
    for side in (-1, 1):
        p = [at(U0 + 0.1, vm + side * (HALF + 0.6)), at(U1 + 0.3, vm + side * (HALF + 0.6)), at(U1 + 0.3, vm), at(U0 + 0.1, vm)]
        mesh([(p[0][0], p[0][1], WH), (p[1][0], p[1][1], WH), (p[2][0], p[2][1], WH + HALF * 0.7), (p[3][0], p[3][1], WH + HALF * 0.7)], [(0, 1, 2, 3)], TILE, 0.3)
    # the front: a raised white facade at the low-u end with a gable, a door, a belfry (or two towers) and a cross
    fu = U0 + 0.2
    ubox(fu - 0.6, fu + 0.4, V0 - 0.2, V1 + 0.2, 0.8, WH + 2.0, WHITE)
    p0, p1, pc = at(fu - 0.6, V0 - 0.2), at(fu - 0.6, V1 + 0.2), at(fu - 0.6, vm)
    mesh([(p0[0], p0[1], WH + 2.0), (p1[0], p1[1], WH + 2.0), (pc[0], pc[1], WH + 2.0 + HALF * 0.9)], [(0, 1, 2)], WHITE, 1.0)
    ubox(fu - 0.75, fu - 0.55, vm - 1.2, vm + 1.2, 0.8, 4.8, '#5a3a24')
    ubox(fu - 0.75, fu - 0.55, vm - 0.8, vm + 0.8, WH - 1.0, WH + 0.6, DARK)
    if big:
        for v in (V0 + 1.6, V1 - 1.6):
            ubox(fu - 0.8, fu + 2.4, v - 1.6, v + 1.6, 0.8, WH + 7.0, WHITE)
            ubox(fu - 0.9, fu + 2.5, v - 1.7, v + 1.7, WH + 2.0, WH + 2.6, '#d9a441')
            cx, cy = at(fu + 0.8, v)
            bpy.ops.mesh.primitive_cone_add(vertices=4, radius1=2.3, depth=3.0, location=(cx, cy, WH + 8.5), rotation=(0, 0, ANG + math.pi / 4)); bpy.context.active_object.data.materials.append(mat(WHITE)); own(bpy.context.active_object)
        cross(fu - 0.6, vm, WH + 2.0 + HALF * 0.9, 1.2)
    else:
        bz = WH + 2.0 + HALF * 0.9
        ubox(fu - 0.6, fu + 0.6, vm - 1.0, vm + 1.0, bz - 1.0, bz + 2.4, WHITE)
        ubox(fu - 0.7, fu - 0.5, vm - 0.5, vm + 0.5, bz, bz + 1.6, DARK)
        cross(fu, vm, bz + 2.4, 0.9)
elif MODEL == 'kadamba':
    prism(OUTLINE, 0, 0.6, '#9a958c')
    prism(grow(OUTLINE, 0.92), 0.6, 9.5, '#e9e6de')
    prism(grow(OUTLINE, 0.925), 3.2, 4.0, '#c8322a')
    prism(grow(OUTLINE, 0.925), 8.6, 9.5, '#c8322a')
    windows(1, 5.0, 4.0, 4.0, '#d8d4ca', GLASS, pts=grow(OUTLINE, 0.92))
    prism(grow(OUTLINE, 1.04), 3.6, 4.2, '#d8d4ca')   # the deep canopy over the bays all round
    prism(grow(OUTLINE, 0.9), 9.5, 10.2, '#bdb8ac')
    sx, sy = at(0, V0 - 0.5); rbox(sx, sy, ANG, 22, 0.4, 10.2, 12.4, '#c8322a')
root.scale = (1, 1, ZX)

sc = bpy.context.scene
sc.render.engine = 'CYCLES'; sc.cycles.samples = 32; sc.cycles.use_denoising = True
sc.render.resolution_x = sc.render.resolution_y = RES
sc.render.film_transparent = True; sc.render.image_settings.color_mode = 'RGBA'; sc.view_settings.view_transform = 'Standard'
sc.render.use_freestyle = True; sc.render.line_thickness_mode = 'ABSOLUTE'; sc.render.line_thickness = 0.9
fs = sc.view_layers[0].freestyle_settings; ls = fs.linesets[0] if fs.linesets else fs.linesets.new('ink')
ls.linestyle.color = (0.1, 0.08, 0.06); ls.select_by_edge_types = True; ls.select_silhouette = ls.select_border = True; ls.select_crease = False
w = sc.world or bpy.data.worlds.new('W'); sc.world = w; w.use_nodes = True
bg = next(n for n in w.node_tree.nodes if n.type == 'BACKGROUND'); bg.inputs['Color'].default_value = (0.8, 0.84, 0.9, 1); bg.inputs['Strength'].default_value = 1.1
theta = math.radians(45 + 90 * ROT)
cd = bpy.data.cameras.new('cam'); cd.type = 'ORTHO'; cd.ortho_scale = RES / S
cam = bpy.data.objects.new('cam', cd); bpy.context.collection.objects.link(cam)
fwd = (-math.sin(theta) * math.cos(ELEV), math.cos(theta) * math.cos(ELEV), -math.sin(ELEV))
cam.location = tuple(-300 * f for f in fwd); cam.rotation_euler = (math.pi / 2 - ELEV, 0, theta); sc.camera = cam
sun = bpy.data.objects.new('sun', bpy.data.lights.new('sun', 'SUN')); bpy.context.collection.objects.link(sun)
sun.data.energy = 3.0; sun.data.angle = math.radians(3); sun.rotation_euler = (math.radians(45), 0, theta + math.radians(70))
name = f'landmark_{MODEL}.png' if ROT == 0 else f'landmark_{MODEL}_r{ROT}.png'
sc.render.filepath = str(OUT / name)
bpy.ops.render.render(write_still=True)
if ROT == 0:
    ex = max(abs(x) for x, y in OUTLINE) + 2; ey = max(abs(y) for x, y in OUTLINE) + 2
    json.dump({'file': name, 'anchor': [RES / 2, RES / 2], 'px_per_m': S, 'lat': LA0, 'lon': LO0, 'covers': {'x': [-ex, ex], 'y': [-ey, ey]}}, open(OUT / f'landmark_{MODEL}.json', 'w'))
print('done', MODEL, ROT)
