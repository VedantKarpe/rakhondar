"""Our Lady of the Immaculate Conception, Panjim, modelled in Blender for the Rakhondar mock.

    "C:\\Program Files\\Blender Foundation\\Blender 5.1\\blender.exe" -b --python tools/blender_church.py

Built to the church's OpenStreetMap outline (about 42 m east-west by 17 m) and the mapped zig-zag steps that
drop westward from it toward Church Square; its look (white front, two towers, bell gable) from photographs.
Units are metres: Blender x = east, Blender y = north, z = up; the origin is the outline's reference point
(15.49858 N, 73.82972 E) at the platform's level. Rendered from the mock's 2:1 camera at 2x the mock's
detail scale, with heights stretched by the mock's vertical exaggeration, to sprites/landmark_church.png.
"""
import bpy, json, math, os, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'sprites'; OUT.mkdir(exist_ok=True)
ELEV = math.asin(0.5)
S = 1.25 / math.cos(math.radians(45)) * 2      # px per metre across, at 2x the mock detail's 1.25
ZX = (2.6 * 2) / (S * math.cos(ELEV))           # the mock draws heights 2.6 px/m: stretch z to match
RES = 1400


def col(h):
    h = h.lstrip('#'); c = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    return (*[v / 12.92 if v <= 0.04045 else ((v + 0.055) / 1.055) ** 2.4 for v in c], 1)


M = {}
def mat(h, rough=0.8):
    if h in M: return M[h]
    m = bpy.data.materials.new(h); m.use_nodes = True
    b = next(n for n in m.node_tree.nodes if n.type == 'BSDF_PRINCIPLED')
    b.inputs['Base Color'].default_value = col(h); b.inputs['Roughness'].default_value = rough
    M[h] = m; return m


ROOTOBJ = None
def own(o):
    o.parent = ROOTOBJ; return o


def box(x0, x1, y0, y1, z0, z1, h):
    bpy.ops.mesh.primitive_cube_add(size=1, location=((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2))
    o = bpy.context.active_object; o.scale = (x1 - x0, y1 - y0, z1 - z0); bpy.ops.object.transform_apply(scale=True)
    o.data.materials.append(mat(h)); return own(o)


def mesh(verts, faces, h, thick=0):
    me = bpy.data.meshes.new('m'); me.from_pydata(verts, [], faces)
    o = bpy.data.objects.new('m', me); bpy.context.collection.objects.link(o)
    if thick: o.modifiers.new('t', 'SOLIDIFY').thickness = thick
    o.data.materials.append(mat(h)); return own(o)


def cone(x, y, z, r, hgt, h, n=4):
    bpy.ops.mesh.primitive_cone_add(vertices=n, radius1=r, depth=hgt, location=(x, y, z + hgt / 2))
    o = bpy.context.active_object; o.data.materials.append(mat(h)); return own(o)


def arch(xf, y, w, z0, zt, h, depth=0.4):
    """An arched opening on a west-facing wall at x = xf: a dark recess with a round top."""
    n = 10; pts = [(xf - 0.02, y - w / 2, z0), (xf - 0.02, y + w / 2, z0)]
    for k in range(n + 1):
        a = k / n * math.pi; pts.append((xf - 0.02, y + w / 2 * math.cos(a), zt + w / 2 * math.sin(a)))
    mesh(pts, [list(range(len(pts)))], h)


for o in list(bpy.data.objects): bpy.data.objects.remove(o, do_unlink=True)
bpy.ops.object.empty_add(location=(0, 0, 0)); ROOTOBJ = bpy.context.active_object
WHITE, SHADE, TILE, DARK, GLASS, BELL, CROSS = '#fbf9f3', '#e9e5dc', '#a8492b', '#2c2a2c', '#3a4c62', '#c9a24a', '#c82a2a'

# ---- the platform the church stands on: a white-walled terrace, its top at z = 0 ----
box(-30, 26, -16, 8, -9, 0, '#e8e4da')
box(-30.3, 26.3, -16.3, 8.3, -0.2, 0.3, WHITE)
# ---- the nave: from the front (west, x = -19.5) to the apse end (east, x = 22.5), 17 m wide ----
box(-19.5, 22.5, -12.4, 4.6, 0, 14, WHITE)
for y in (-12.4, 4.6):          # the white pilasters and window bays along the sides
    for x in range(-15, 22, 6):
        box(x - 0.5, x + 0.5, y - 0.3, y + 0.3, 0, 14, SHADE)
        if x < 20: box(x + 2.2, x + 3.8, y - 0.35 if y < 0 else y - 0.05, y + 0.05 if y < 0 else y + 0.35, 6, 10.5, GLASS)
# the gable roof, ridge along the nave
mesh([(-19.5, -12.9, 14), (22.8, -12.9, 14), (22.8, -3.9, 19.5), (-19.5, -3.9, 19.5)], [(0, 1, 2, 3)], TILE, 0.3)
mesh([(-19.5, 5.1, 14), (22.8, 5.1, 14), (22.8, -3.9, 19.5), (-19.5, -3.9, 19.5)], [(0, 1, 2, 3)], TILE, 0.3)
# ---- the west front: a tall white facade, a central bell gable with the bell and a cross, two towers ----
F = -20.2
box(F, -19.4, -12.8, 5.0, 0, 21, WHITE)
for zb in (7.5, 14.5, 21):      # cornices across the front
    box(F - 0.4, -19.4, -13.2, 5.4, zb - 0.6, zb, SHADE)
# the central gable rising in curves to the bell
gy0, gy1, gz = -7.6, -0.2, 21
mesh([(F, gy0, gz), (F, gy1, gz), (F, gy1 - 1.2, gz + 6), (F, (gy0 + gy1) / 2 + 1.0, gz + 11.5), (F, (gy0 + gy1) / 2 - 1.0, gz + 11.5), (F, gy0 + 1.2, gz + 6)],
     [(0, 1, 2, 3, 4, 5)], WHITE, 0.8)
arch(F - 0.85, (gy0 + gy1) / 2, 2.2, gz + 4.5, gz + 7, DARK)
bpy.ops.mesh.primitive_cone_add(vertices=16, radius1=0.9, radius2=0.35, depth=1.6, location=(F - 0.7, (gy0 + gy1) / 2, gz + 6.0))
bpy.context.active_object.data.materials.append(mat(BELL)); own(bpy.context.active_object)
box(F - 0.6, F - 0.2, (gy0 + gy1) / 2 - 0.12, (gy0 + gy1) / 2 + 0.12, gz + 11.5, gz + 15, CROSS)
box(F - 0.6, F - 0.2, (gy0 + gy1) / 2 - 1.1, (gy0 + gy1) / 2 + 1.1, gz + 13.4, gz + 13.9, CROSS)
# the two towers at the corners of the front, with balustrades and pinnacles
for ty in (-11.2, 3.4):
    box(F - 0.5, F + 4.2, ty - 2.4, ty + 2.4, 0, 27, WHITE)
    box(F - 0.9, F + 4.6, ty - 2.8, ty + 2.8, 26.4, 27.2, SHADE)
    for k in range(6):
        box(F - 0.9 + k * 1.1, F - 0.6 + k * 1.1, ty - 2.8, ty - 2.5, 27.2, 28.6, WHITE); box(F - 0.9 + k * 1.1, F - 0.6 + k * 1.1, ty + 2.5, ty + 2.8, 27.2, 28.6, WHITE)
    for k in range(5):
        box(F - 0.9, F - 0.6, ty - 2.8 + k * 1.3, ty - 2.5 + k * 1.3, 27.2, 28.6, WHITE)
    box(F - 0.9, F + 4.6, ty - 2.8, ty + 2.8, 28.6, 29.0, SHADE)
    for dy in (-2.4, 2.4):
        cone(F - 0.6, ty + dy, 29.0, 0.4, 2.2, WHITE)
    arch(F - 0.55, ty, 1.4, 17.5, 20.5, DARK)
    arch(F - 0.55, ty, 1.2, 9, 11.5, GLASS)
# the main door and the round window above it
arch(F - 0.45, -3.9, 3.4, 0, 4.5, '#3a2a20')
bpy.ops.mesh.primitive_cylinder_add(vertices=24, radius=1.5, depth=0.3, location=(F - 0.45, -3.9, 17.5), rotation=(0, math.pi / 2, 0))
bpy.context.active_object.data.materials.append(mat(GLASS)); own(bpy.context.active_object)
for wy in (-8.6, 0.8):
    arch(F - 0.45, wy, 1.4, 9.5, 12, GLASS)

# ---- the zig-zag stairs: four flights stepping west and down from the platform, white parapets with points ----
levels = [0, -2.3, -4.6, -6.9, -9.2]
xs = [-30, -38, -46, -54, -62]
for k in range(4):
    xa, xb = xs[k + 1], xs[k]
    z0, z1 = levels[k + 1], levels[k]
    # the landing of this level, a terrace the full width of the stairs
    box(xa, xb, -18, 10, -9.5, z0, '#ebe6db')
    # two flights per level, mirrored, rising toward the middle, each a ramp of steps
    for side in (-1, 1):
        y_out, y_in = (-17 if side < 0 else 9), (-6 if side < 0 else -2)
        # one smooth ramp per flight (individual steps drown in outlines at this size), climbing toward the middle
        ya_, yb_ = y_out, y_in
        mesh([(xa + 0.6, ya_, z0), (xb - 0.6, ya_, z0), (xb - 0.6, yb_, z1), (xa + 0.6, yb_, z1)], [(0, 1, 2, 3)], '#f4f0e8', 0.4)
        # the parapet walls along the flight's outer edge and across the front of the level, topped with white points
    for (ya, yb) in ((-18, -17.4), (9.4, 10)):
        box(xa, xb, ya, yb, z0, z0 + 1.2, WHITE)
        for xx in [xa + (xb - xa) * u for u in (0.15, 0.5, 0.85)]:
            cone(xx, (ya + yb) / 2, z0 + 1.2, 0.35, 0.8, WHITE)
    box(xa - 0.4, xa, -18, -6.8, z0 - 0.3, z0 + 1.0, WHITE); box(xa - 0.4, xa, -1.2, 10, z0 - 0.3, z0 + 1.0, WHITE)
    for yy in (-14, -9, 2, 6):
        cone(xa - 0.2, yy, z0 + 1.0, 0.35, 0.8, WHITE)
# a statue on a plinth at the foot of the stairs, as in the square
box(-66, -63, -5.6, -2.6, -9.2, -6.6, WHITE)
bpy.ops.mesh.primitive_cylinder_add(vertices=10, radius=0.6, depth=2.6, location=(-64.5, -4.1, -5.3)); bpy.context.active_object.data.materials.append(mat('#3a6ab0')); own(bpy.context.active_object)

# stretch the heights as the mock does
ROOTOBJ.scale = (1, 1, ZX)

# ---- the mock's camera: 2:1 isometric, looking from map (+x, +y) i.e. from the south-east ----
sc = bpy.context.scene
sc.render.engine = 'CYCLES'; sc.cycles.samples = 48; sc.cycles.use_denoising = True
sc.render.resolution_x = sc.render.resolution_y = RES
sc.render.film_transparent = True; sc.render.image_settings.color_mode = 'RGBA'
sc.view_settings.view_transform = 'Standard'
sc.render.use_freestyle = True; sc.render.line_thickness_mode = 'ABSOLUTE'; sc.render.line_thickness = 1.6
fs = sc.view_layers[0].freestyle_settings; ls = fs.linesets[0] if fs.linesets else fs.linesets.new('ink')
ls.linestyle.color = (0.1, 0.08, 0.06); ls.select_by_edge_types = True; ls.select_silhouette = ls.select_border = True; ls.select_crease = False
w = sc.world or bpy.data.worlds.new('W'); sc.world = w; w.use_nodes = True
bg = next(n for n in w.node_tree.nodes if n.type == 'BACKGROUND'); bg.inputs['Color'].default_value = (0.8, 0.84, 0.9, 1); bg.inputs['Strength'].default_value = 0.7
ROT = int(os.environ.get('RK_ROT', 0))   # which side the view is from: 0 south-east (the mock's), 1 north-east, 2 north-west, 3 south-west
theta = math.radians(45 + 90 * ROT)
cd = bpy.data.cameras.new('cam'); cd.type = 'ORTHO'; cd.ortho_scale = RES / S
cam = bpy.data.objects.new('cam', cd); bpy.context.collection.objects.link(cam)
fwd = (-math.sin(theta) * math.cos(ELEV), math.cos(theta) * math.cos(ELEV), -math.sin(ELEV))
cam.location = tuple(-300 * f for f in fwd); cam.rotation_euler = (math.pi / 2 - ELEV, 0, theta); sc.camera = cam
sun = bpy.data.objects.new('sun', bpy.data.lights.new('sun', 'SUN')); bpy.context.collection.objects.link(sun)
sun.data.energy = 3.0; sun.data.angle = math.radians(3); sun.rotation_euler = (math.radians(45), 0, theta + math.radians(70))
sc.render.filepath = str(OUT / ('landmark_church.png' if ROT == 0 else f'landmark_church_r{ROT}.png'))
bpy.ops.render.render(write_still=True)
# where the origin lands in the image, for placing the sprite in the mock
if ROT == 0: json.dump({'file': 'landmark_church.png', 'anchor': [RES / 2, RES / 2], 'px_per_m': S, 'scale_in_mock': 0.5, 'lat': 15.49858, 'lon': 73.82972,
           'covers': {'x': [-70, 27], 'y': [-11, 19]}}, open(OUT / 'landmark_church.json', 'w'))
print('done')
