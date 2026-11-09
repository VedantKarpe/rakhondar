"""A mock-up of a compressed Panjim for Rakhondar: Altinho's terraces, Church Square, Fontainhas and the riverfront,
modelled in Blender and rendered from the game's own 2:1 camera. Not a game asset; a picture to agree the look.

    "C:\\Program Files\\Blender Foundation\\Blender 5.1\\blender.exe" -b --python tools/mock_panjim.py

Writes mock/panjim_mock.png. Units: 1 Blender unit = 1 game tile; +y is north (the river), -y south (Altinho).
"""
import bpy, math, os, pathlib, random
from mathutils import Vector

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'mock'; OUT.mkdir(exist_ok=True)
random.seed(7)
ELEV = math.asin(0.5)
FLOOR = 0.62            # one storey, in tiles


def hexcol(h):
    h = h.lstrip('#'); c = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    return (*[v / 12.92 if v <= 0.04045 else ((v + 0.055) / 1.055) ** 2.4 for v in c], 1)


MATS = {}
def mat(col, rough=0.8, emit=0.0):
    key = (col, rough, emit)
    if key in MATS: return MATS[key]
    m = bpy.data.materials.new(col); m.use_nodes = True
    b = next(n for n in m.node_tree.nodes if n.type == 'BSDF_PRINCIPLED')
    b.inputs['Base Color'].default_value = hexcol(col); b.inputs['Roughness'].default_value = rough
    if emit:
        b.inputs['Emission Color'].default_value = hexcol(col); b.inputs['Emission Strength'].default_value = emit
    MATS[key] = m
    return m


def tiles():
    """Mangalore tile roofs: rows by height with dark seams."""
    if 'tiles' in MATS: return MATS['tiles']
    m = mat('#a8492b', 0.85); nt = m.node_tree
    b = next(n for n in nt.nodes if n.type == 'BSDF_PRINCIPLED')
    tc = nt.nodes.new('ShaderNodeTexCoord'); sep = nt.nodes.new('ShaderNodeSeparateXYZ'); nt.links.new(tc.outputs['Object'], sep.inputs[0])
    mul = nt.nodes.new('ShaderNodeMath'); mul.operation = 'MULTIPLY'; mul.inputs[1].default_value = 16; nt.links.new(sep.outputs['Z'], mul.inputs[0])
    fr = nt.nodes.new('ShaderNodeMath'); fr.operation = 'FRACT'; nt.links.new(mul.outputs[0], fr.inputs[0])
    ramp = nt.nodes.new('ShaderNodeValToRGB'); e = ramp.color_ramp.elements
    e[0].position = 0; e[0].color = hexcol('#5a2412'); e[1].position = 0.2; e[1].color = hexcol('#a0442a'); e.new(1.0).color = hexcol('#c4603e')
    nt.links.new(fr.outputs[0], ramp.inputs['Fac']); nt.links.new(ramp.outputs['Color'], b.inputs['Base Color'])
    MATS['tiles'] = m
    return m


def box(x0, x1, y0, y1, z0, z1, m):
    bpy.ops.mesh.primitive_cube_add(size=1, location=((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2))
    o = bpy.context.active_object; o.scale = (x1 - x0, y1 - y0, z1 - z0)
    o.data.materials.append(m); return o


def poly_prism(pts, z0, z1, m):
    """An upright prism over a ground outline."""
    me = bpy.data.meshes.new('prism'); n = len(pts)
    verts = [(x, y, z0) for x, y in pts] + [(x, y, z1) for x, y in pts]
    faces = [list(range(n))[::-1], list(range(n, 2 * n))] + [[i, (i + 1) % n, n + (i + 1) % n, n + i] for i in range(n)]
    me.from_pydata(verts, [], faces); o = bpy.data.objects.new('prism', me); bpy.context.collection.objects.link(o)
    o.data.materials.append(m); return o


def hip(x0, x1, y0, y1, z, h, m):
    inset = min((y1 - y0) / 2, (x1 - x0) / 2) * (1 if x1 - x0 >= y1 - y0 else 1)
    along_x = x1 - x0 >= y1 - y0
    if along_x:
        ym = (y0 + y1) / 2; r0, r1 = (x0 + inset, ym, z + h), (x1 - inset, ym, z + h)
    else:
        xm = (x0 + x1) / 2; r0, r1 = (xm, y0 + inset, z + h), (xm, y1 - inset, z + h)
    c = [(x0, y0, z), (x1, y0, z), (x1, y1, z), (x0, y1, z)]
    me = bpy.data.meshes.new('roof')
    faces = [(0, 1, 5, 4), (1, 2, 5), (2, 3, 4, 5), (3, 0, 4)] if along_x else [(0, 1, 4), (1, 2, 5, 4), (2, 3, 5), (3, 0, 4, 5)]
    me.from_pydata(c + [r0, r1], [], faces); o = bpy.data.objects.new('roof', me); bpy.context.collection.objects.link(o)
    o.modifiers.new('t', 'SOLIDIFY').thickness = 0.05; o.data.materials.append(m); return o


WALLS = ['#f2c230', '#e8a33a', '#2f6fd0', '#e8e0cc', '#2fa08a', '#e0763a', '#d0344a', '#e07a8a', '#4a8fe0', '#8a5ab8']
WHITE, GLASS = mat('#f6f2ea', 0.6), mat('#2c3a4a', 0.2)
WARM = mat('#ffd38a', 0.5, 6.0)


def townhouse(x0, x1, y0, y1, z, floors, col, front='-y', flat=False, lit=0.3):
    """Storeys of windows over a laterite plinth, white bands and cornice, a balcony, and a tiled roof or a terrace."""
    wall = mat(col, 0.9); hgt = floors * FLOOR
    box(x0, x1, y0, y1, z, z + 0.12, mat('#9a4a2c'))
    box(x0, x1, y0, y1, z + 0.12, z + hgt, wall)
    box(x0 - 0.03, x1 + 0.03, y0 - 0.03, y1 + 0.03, z + hgt - 0.07, z + hgt, WHITE)
    for f in range(1, floors): box(x0 - 0.02, x1 + 0.02, y0 - 0.02, y1 + 0.02, z + f * FLOOR - 0.03, z + f * FLOOR + 0.02, WHITE)
    # windows on all four faces, white-framed; some lit warm
    for f in range(floors):
        zc = z + f * FLOOR + 0.32
        for side in ('-y', '+y', '-x', '+x'):
            if side in ('-y', '+y'):
                n = max(1, round((x1 - x0) / 0.55)); yy = y0 if side == '-y' else y1; s = -1 if side == '-y' else 1
                for i in range(n):
                    xc = x0 + (i + 0.5) * (x1 - x0) / n
                    if f == 0 and side == front and i == n // 2:
                        box(xc - 0.13, xc + 0.13, yy + s * 0.0 - 0.03, yy + s * 0.0 + 0.03, z + 0.12, z + 0.5, mat('#4a2a18'))   # door
                        box(xc - 0.17, xc + 0.17, yy - 0.025, yy + 0.025, z + 0.5, z + 0.55, WHITE)
                        continue
                    box(xc - 0.14, xc + 0.14, yy - 0.025, yy + 0.025, zc - 0.17, zc + 0.17, WHITE)
                    box(xc - 0.1, xc + 0.1, yy - 0.035, yy + 0.035, zc - 0.13, zc + 0.13, WARM if random.random() < lit else GLASS)
            else:
                n = max(1, round((y1 - y0) / 0.55)); xx = x0 if side == '-x' else x1
                for i in range(n):
                    yc = y0 + (i + 0.5) * (y1 - y0) / n
                    box(xx - 0.025, xx + 0.025, yc - 0.14, yc + 0.14, zc - 0.17, zc + 0.17, WHITE)
                    box(xx - 0.035, xx + 0.035, yc - 0.1, yc + 0.1, zc - 0.13, zc + 0.13, WARM if random.random() < lit else GLASS)
    if floors > 1 and front == '-y':   # a balcony with a white rail
        box(x0 + 0.08, x1 - 0.08, y0 - 0.22, y0, z + FLOOR, z + FLOOR + 0.04, WHITE)
        box(x0 + 0.08, x1 - 0.08, y0 - 0.23, y0 - 0.19, z + FLOOR + 0.04, z + FLOOR + 0.22, mat('#2a2420'))
    if flat:
        box(x0, x1, y0, y1, z + hgt, z + hgt + 0.03, mat('#bdb6a6'));
        for a, b, c, d in [(x0, x1, y0, y0 + 0.05), (x0, x1, y1 - 0.05, y1), (x0, x0 + 0.05, y0, y1), (x1 - 0.05, x1, y0, y1)]: box(a, b, c, d, z + hgt, z + hgt + 0.16, WHITE)
    else:
        hip(x0 - 0.12, x1 + 0.12, y0 - 0.12, y1 + 0.12, z + hgt, min(0.5, 0.2 + min(x1 - x0, y1 - y0) * 0.18), tiles())


def palm(x, y, z, h=1.8):
    bpy.ops.mesh.primitive_cylinder_add(vertices=6, radius=0.05, depth=h, location=(x, y, z + h / 2), rotation=(random.uniform(-0.12, 0.12), random.uniform(-0.12, 0.12), 0))
    bpy.context.active_object.data.materials.append(mat('#7a5a36'))
    for k in range(8):
        a = k / 8 * math.tau + random.random() * 0.3
        bpy.ops.mesh.primitive_plane_add(size=1, location=(x + math.cos(a) * 0.35, y + math.sin(a) * 0.35, z + h - 0.08), rotation=(0.5 * math.sin(a), -0.5 * math.cos(a), a))
        o = bpy.context.active_object; o.scale = (0.75, 0.16, 1); o.data.materials.append(mat('#3f8a3a', 0.7))


def tree(x, y, z, r=0.6):
    bpy.ops.mesh.primitive_cylinder_add(vertices=6, radius=0.07, depth=0.6, location=(x, y, z + 0.3)); bpy.context.active_object.data.materials.append(mat('#5a4030'))
    for k in range(5):
        bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=1, radius=r * random.uniform(0.55, 0.8), location=(x + random.uniform(-r, r) * 0.5, y + random.uniform(-r, r) * 0.5, z + 0.75 + random.uniform(0, r * 0.6)))
        bpy.context.active_object.data.materials.append(mat(random.choice(['#2f6a32', '#3a7a3a', '#2a5e2e']), 0.85))


ROAD, KERB, LINE, PAVE = mat('#2e2f35', 0.9), mat('#d9d4c6'), mat('#f2efe6', 0.5), mat('#9a8f80')


def road(pts, w, z=0.0, centre=True, kerb=True):
    """A road along a polyline: asphalt, a dashed centre line and pale kerbs."""
    for (x0, y0, z0), (x1, y1, z1) in zip(pts, pts[1:]):
        d = Vector((x1 - x0, y1 - y0)); L = d.length; d.normalize(); n = Vector((-d.y, d.x))
        a, b = Vector((x0, y0)), Vector((x1, y1))
        quad = [a + n * w / 2, b + n * w / 2, b - n * w / 2, a - n * w / 2]
        me = bpy.data.meshes.new('road'); me.from_pydata([(q.x, q.y, zz + 0.02) for q, zz in zip(quad, [z0, z1, z1, z0])], [], [(0, 1, 2, 3)])
        o = bpy.data.objects.new('road', me); bpy.context.collection.objects.link(o); o.data.materials.append(ROAD)
        if kerb:
            for s in (1, -1):
                q = [a + n * s * w / 2, b + n * s * w / 2, b + n * s * (w / 2 + 0.12), a + n * s * (w / 2 + 0.12)]
                me = bpy.data.meshes.new('kerb'); me.from_pydata([(p.x, p.y, zz + 0.06) for p, zz in zip(q, [z0, z1, z1, z0])], [], [(0, 1, 2, 3)])
                o = bpy.data.objects.new('kerb', me); bpy.context.collection.objects.link(o); o.data.materials.append(KERB)
        if centre:
            k = 0.0
            while k < L - 0.3:
                p0 = a + d * k; p1 = a + d * min(L, k + 0.35); t0, t1 = k / L, min(1, (k + 0.35) / L)
                q = [p0 + n * 0.025, p1 + n * 0.025, p1 - n * 0.025, p0 - n * 0.025]
                zz = [z0 + (z1 - z0) * t0, z0 + (z1 - z0) * t1]
                me = bpy.data.meshes.new('dash'); me.from_pydata([(p.x, p.y, h + 0.035) for p, h in zip(q, [zz[0], zz[1], zz[1], zz[0]])], [], [(0, 1, 2, 3)])
                o = bpy.data.objects.new('dash', me); bpy.context.collection.objects.link(o); o.data.materials.append(LINE)
                k += 0.7


for o in list(bpy.data.objects): bpy.data.objects.remove(o, do_unlink=True)

# ---------------- ground: the river to the north, the flat town, Altinho rising in terraces to the south ----------------
GRASS, LAT, PLAZA = mat('#5f8a48', 0.95), mat('#a4532f', 0.95), mat('#c9b48e', 0.9)
box(-20, 22, -16, 12, -0.4, 0, GRASS)
water = mat('#1f5a6e', 0.08); box(-20, 22, 12, 22, -0.45, -0.12, water)
box(-20, 22, 11.6, 12, -0.4, 0.05, mat('#8a7a64'))                     # the river wall
# Altinho: four terraces, each a laterite wall topped with green, edges wandering
for k in range(1, 5):
    edge = -3.0 - k * 2.3
    pts = [(-20, -16)] + [(x, edge + 0.6 * math.sin(x * 0.45 + k)) for x in [-20 + i * 1.5 for i in range(29)]] + [(22, -16)]
    poly_prism(pts, (k - 1) * 0.55, k * 0.55, LAT)
    pts2 = [(x, y - 0.12) for x, y in pts[1:-1]]
    poly_prism([(-20, -16)] + pts2 + [(22, -16)], k * 0.55, k * 0.55 + 0.03, GRASS)

# ---------------- roads ----------------
road([(-20, 10, 0), (22, 10, 0)], 1.5)                                      # the riverfront avenue
road([(-20, 2, 0), (14, 2, 0)], 1.2)                                        # through the town, below Church Square
road([(0, 2, 0), (0, 10, 0)], 1.0, centre=False)                            # up past the square to the river
road([(14, -8, 0), (14, 10, 0)], 1.0, centre=False)                         # Fontainhas' main lane
road([(-14, 2, 0), (-14, -3.5, 0), (-6, -5.5, 0.5), (-2, -8.0, 1.05), (-12, -10.3, 1.6), (-7, -12.6, 2.15)], 1.0)   # winding up Altinho
for xl in (17.5, 20.5):
    road([(14, -1 if xl < 19 else 5, 0), (21.6, -1 if xl < 19 else 5, 0)], 0.6, centre=False, kerb=False)            # narrow lanes of the Latin quarter
# the promenade along the river, with palms and street lamps
box(-20, 22, 10.9, 11.6, 0, 0.06, PAVE)
for x in range(-18, 22, 3):
    palm(x + 0.2, 11.25, 0.06, random.uniform(1.6, 2.1))
    box(x + 1.4, x + 1.46, 11.0, 11.06, 0.06, 1.1, mat('#9a9a94')); box(x + 1.3, x + 1.6, 10.95, 11.1, 1.1, 1.14, mat('#f4fbff', 0.3, 4))

# ---------------- Church Square: the church on its platform, the zig-zag stairs down to the square ----------------
box(-5, 5, 2.8, 9.8, 0, 0.05, PLAZA)
box(-3.6, 3.6, 6.6, 9.6, 0, 1.3, mat('#f2efe8', 0.8))                       # the white platform
for k in range(4):                                                         # the stairs: four flights zig-zagging down, white parapets
    z = 1.3 - (k + 1) * 0.3; y = 6.6 - k * 0.9
    box(-3.0 + k * 0.3, 3.0 - k * 0.3, y - 0.9, y, 0, z, mat('#e9e4da'))
    for side in (-1, 1):
        x0, x1 = (0.15, 2.8 - k * 0.3) if side > 0 else (-2.8 + k * 0.3, -0.15)
        box(x0, x1, y - 0.12, y, z, z + 0.32, WHITE)
        for xx in [x0 + (x1 - x0) * t for t in (0.1, 0.5, 0.9)]:
            bpy.ops.mesh.primitive_cone_add(vertices=4, radius1=0.08, depth=0.16, location=(xx, y - 0.06, z + 0.4)); bpy.context.active_object.data.materials.append(WHITE)
CH = mat('#fbfaf6', 0.7)
box(-1.6, 1.6, 7.4, 9.4, 1.3, 3.6, CH)                                      # the nave
hip(-1.7, 1.7, 7.3, 9.5, 3.6, 0.5, tiles())
box(-1.9, 1.9, 7.0, 7.45, 1.3, 4.1, CH)                                     # the front
for tx in (-1.55, 1.55):                                                    # the two towers with balustrades
    box(tx - 0.35, tx + 0.35, 6.95, 7.55, 1.3, 4.9, CH); box(tx - 0.4, tx + 0.4, 6.9, 7.6, 4.9, 5.0, CH)
    for i in range(5): box(tx - 0.32 + i * 0.16, tx - 0.28 + i * 0.16, 6.92, 6.98, 5.0, 5.2, CH)
    box(tx - 0.12, tx + 0.12, 6.93, 6.97, 3.9, 4.5, GLASS)
box(-0.5, 0.5, 6.98, 7.4, 4.1, 5.6, CH)                                     # the central gable with the bell
box(-0.22, 0.22, 6.95, 7.0, 4.8, 5.3, mat('#2a2a33')); box(-0.14, 0.14, 6.94, 6.99, 4.85, 5.05, mat('#c9a24a', 0.3))
box(-0.04, 0.04, 7.15, 7.25, 5.6, 6.2, mat('#c82a2a')); box(-0.18, 0.18, 7.15, 7.25, 5.95, 6.03, mat('#c82a2a'))
box(-0.32, 0.32, 6.97, 7.0, 1.3, 2.4, mat('#3a2a20'))                       # the door
for x in (-1.2, 1.2): box(x - 0.14, x + 0.14, 6.97, 7.0, 2.6, 3.2, GLASS)

# ---------------- the town round the square ----------------
for (x0, x1, y0, y1, f) in [(-12, -9.2, 3.3, 5.6, 3), (-9, -6.5, 3.3, 5.8, 2), (-12, -8.5, 6.5, 9.0, 2), (6.5, 9.2, 3.3, 5.7, 2), (9.4, 12.6, 3.3, 6.0, 3), (6.5, 12.6, 6.6, 9.1, 2),
                            (-19, -15.5, 3.2, 6.0, 2), (-19, -15.8, 6.6, 9.2, 3), (-6, -3, -1.6, 0.8, 2), (3, 6.4, -1.5, 0.8, 2), (7, 11.6, -1.8, 0.8, 1), (-12.5, -9, -1.9, 0.8, 2)]:
    townhouse(x0, x1, y0, y1, 0, f, random.choice(WALLS), flat=(f == 3 and random.random() < 0.5))
# Fontainhas: tight rows of two-storey houses in strong colours along the lanes
for row_y, z in [(-0.4, 0), (2.6, 0), (5.8, 0), (8.3, 0)]:
    x = 15.0
    while x < 21.5:
        w = random.uniform(1.0, 1.5)
        townhouse(x, min(21.6, x + w), row_y - 1.0, row_y + 0.2, z, 2, random.choice(['#f2c230', '#e0763a', '#2f6fd0', '#d0344a', '#2fa08a', '#e8a33a', '#8a5ab8']), lit=0.45)
        x += w + 0.05
# the Ourem creek and a small bridge to Patto
box(21.8, 22, -16, 12, -0.4, -0.15, water)
# houses up Altinho, each on its terrace
for (x, y, k) in [(-17, -6.5, 1), (-9.5, -7.2, 1), (4, -6.6, 1), (9, -6.9, 1), (-16, -9.0, 2), (-4.5, -9.4, 2), (6, -9.2, 2), (11, -9.6, 2),
                  (-17.5, -11.6, 3), (-9.5, -12.0, 3), (2, -11.7, 3), (9.5, -12.2, 3), (-14, -14.2, 4), (-2, -14.4, 4), (8, -14.6, 4)]:
    townhouse(x, x + random.uniform(2.0, 2.8), y - random.uniform(1.4, 1.9), y, k * 0.55, random.choice([1, 2]), random.choice(WALLS), lit=0.25)
# greenery: mango and rain trees on the hill and in the town, palms by the river
for _ in range(38):
    k = random.randint(0, 4); y = random.uniform(-15.5, -4) if k else random.uniform(-3, 1.5)
    x = random.uniform(-19.5, 21); ty = y; z = 0
    for kk in range(4, 0, -1):
        if y < -3.0 - kk * 2.3: z = kk * 0.55; break
    tree(x, ty, z, random.uniform(0.5, 0.8))
for x, y in [(-4.5, 3.5), (4.5, 3.5), (-4.5, 9.5), (4.5, 9.5)]: palm(x, y, 0.05, 1.7)

# ---------------- the river: a casino boat and a ferry at the jetty ----------------
box(-12, -7, 15, 17, -0.15, 0.6, mat('#f4f0e6')); box(-11.7, -7.3, 15.3, 16.7, 0.6, 1.2, mat('#2a3a5a', 0.3)); box(-11.8, -7.2, 15.2, 16.8, 1.2, 1.3, mat('#d8a63a', 0.3, 3))
box(2, 3, 11.6, 14.5, -0.1, 0.12, mat('#6a4a2e')); box(1.2, 3.8, 14.5, 16.2, -0.15, 0.4, mat('#e8e2d0')); box(1.6, 3.4, 14.8, 15.9, 0.4, 0.9, mat('#3a6a8a'))

# ---------------- camera and light: the game's own view ----------------
sc = bpy.context.scene
sc.render.engine = 'CYCLES'; sc.cycles.samples = 20; sc.cycles.use_denoising = True
sc.render.resolution_x, sc.render.resolution_y = 1440, 900
sc.view_settings.view_transform = 'AgX'; sc.view_settings.look = 'AgX - Medium High Contrast'
sc.render.use_freestyle = False; sc.render.line_thickness_mode = 'ABSOLUTE'; sc.render.line_thickness = 1.2
fs = sc.view_layers[0].freestyle_settings; ls = fs.linesets[0] if fs.linesets else fs.linesets.new('ink')
ls.linestyle.color = (0.1, 0.08, 0.06); ls.select_by_edge_types = True; ls.select_silhouette = ls.select_border = True; ls.select_crease = False
w = sc.world or bpy.data.worlds.new('W'); sc.world = w; w.use_nodes = True
bg = next(n for n in w.node_tree.nodes if n.type == 'BACKGROUND'); bg.inputs['Color'].default_value = hexcol('#bcd6ee'); bg.inputs['Strength'].default_value = 0.8
theta = math.radians(45)
cam_d = bpy.data.cameras.new('cam'); cam_d.type = 'ORTHO'; cam_d.ortho_scale = 34
cam = bpy.data.objects.new('cam', cam_d); bpy.context.collection.objects.link(cam)
target = Vector((1.5, -1.5, 0))
fwd = Vector((-math.sin(theta) * math.cos(ELEV), math.cos(theta) * math.cos(ELEV), -math.sin(ELEV)))
cam.location = target - fwd * 60; cam.rotation_euler = (math.pi / 2 - ELEV, 0, theta); sc.camera = cam
sun_d = bpy.data.lights.new('sun', 'SUN'); sun_d.energy = 4.0; sun_d.angle = math.radians(3); sun_d.color = (1.0, 0.92, 0.8)
sun = bpy.data.objects.new('sun', sun_d); bpy.context.collection.objects.link(sun); sun.rotation_euler = (math.radians(50), 0, theta + math.radians(70))
sc.render.filepath = str(OUT / 'panjim_mock.png')
bpy.ops.render.render(write_still=True)
print('done', sc.render.filepath)
