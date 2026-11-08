"""The Mahalaxmi temple, Panjim, modelled in Blender for the Rakhondar mock.

    "C:\\Program Files\\Blender Foundation\\Blender 5.1\\blender.exe" -b --python tools/blender_mahalaxmi.py

Laid on the temple's OpenStreetMap outline (way 1411213480, 'Mahalakshimi Temple': a hall about 54 x 13 m running
south-west to north-east) in the Goan temple manner: a whitewashed hall with an ochre band and a tiled roof, the
sanctum at the south-west end under an octagonal drum, dome and golden kalash, a porch at the north-east end and a
deepastambha (lamp tower) before it. Which end is the entrance, and the dome and colours, are to check against
photographs. Metres; Blender x = east, y = north; origin = the outline's centre (15.49573 N, 73.82647 E).
"""
import bpy, json, math, os, pathlib
from mathutils import Vector

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'sprites'; OUT.mkdir(exist_ok=True)
ELEV = math.asin(0.5)
S = 1.25 / math.cos(math.radians(45)) * 2
ZX = (2.6 * 2 * 1.7) / (S * math.cos(ELEV))
RES = 1400
# the hall's axis, south-west to north-east, and its size, from the outline's corners
A = Vector((22.6, 12.7)).normalized(); B = Vector((-A.y, A.x))
HALF, HW = 26.0, 6.6
ANG = math.atan2(A.y, A.x)


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


def ubox(u0, u1, v0, v1, z0, z1, h):
    """A box in the hall's own axes (u along, v across)."""
    cx, cy = at((u0 + u1) / 2, (v0 + v1) / 2)
    bpy.ops.mesh.primitive_cube_add(size=1, location=(cx, cy, (z0 + z1) / 2), rotation=(0, 0, ANG))
    o = bpy.context.active_object; o.scale = (u1 - u0, v1 - v0, z1 - z0); o.data.materials.append(mat(h)); return own(o)


def mesh(verts, faces, h, thick=0):
    me = bpy.data.meshes.new('m'); me.from_pydata(verts, [], faces)
    o = bpy.data.objects.new('m', me); bpy.context.collection.objects.link(o)
    if thick: o.modifiers.new('t', 'SOLIDIFY').thickness = thick
    o.data.materials.append(mat(h)); return own(o)


WHITE, OCHRE, TILE, LAT, DARK, GOLD = '#f8f5ee', '#d9a441', '#a8492b', '#a85a34', '#3a2a22', '#d8a63a'
# the plinth under the whole temple, and the hall
ubox(-HALF, HALF, -HW, HW, 0, 1.2, LAT)
ubox(-12, HALF - 4, -HW + 0.3, HW - 0.3, 1.2, 8.5, WHITE)
for z0, z1 in ((1.2, 2.0), (7.6, 8.5)):
    ubox(-12, HALF - 4, -HW + 0.2, HW - 0.2, z0, z1, OCHRE)
for k in range(7):     # arched windows down both sides
    u = -9 + k * 4.6
    for side in (-1, 1):
        ubox(u - 0.7, u + 0.7, side * (HW - 0.32) - 0.1, side * (HW - 0.32) + 0.1, 3.0, 6.0, DARK)
# the hall's tiled gable roof
ridge = 12.5
for side in (-1, 1):
    p = [at(-12.4, side * (HW + 0.6)), at(HALF - 3.6, side * (HW + 0.6)), at(HALF - 3.6, 0), at(-12.4, 0)]
    mesh([(p[0][0], p[0][1], 8.5), (p[1][0], p[1][1], 8.5), (p[2][0], p[2][1], ridge), (p[3][0], p[3][1], ridge)], [(0, 1, 2, 3)], TILE, 0.3)
# the sanctum at the south-west end: a square shrine, an octagonal drum, a dome and a golden kalash
ubox(-HALF, -12, -HW, HW, 1.2, 11.5, WHITE)
ubox(-HALF - 0.2, -11.8, -HW - 0.2, HW + 0.2, 10.6, 11.5, OCHRE)
cu, cv = -19.0, 0.0
cx, cy = at(cu, cv)
bpy.ops.mesh.primitive_cylinder_add(vertices=8, radius=5.2, depth=4.5, location=(cx, cy, 13.75)); bpy.context.active_object.data.materials.append(mat(WHITE)); own(bpy.context.active_object)
bpy.ops.mesh.primitive_cylinder_add(vertices=8, radius=5.5, depth=0.7, location=(cx, cy, 16.2)); bpy.context.active_object.data.materials.append(mat(OCHRE)); own(bpy.context.active_object)
bpy.ops.mesh.primitive_uv_sphere_add(radius=5.0, location=(cx, cy, 16.5), segments=24, ring_count=12)
o = bpy.context.active_object; o.scale = (1, 1, 1.15); o.data.materials.append(mat(WHITE)); own(o)
bpy.ops.mesh.primitive_cylinder_add(vertices=8, radius=0.9, depth=1.6, location=(cx, cy, 22.8)); bpy.context.active_object.data.materials.append(mat(WHITE)); own(bpy.context.active_object)
for z, r in ((24.0, 1.1), (25.3, 0.8), (26.3, 0.5)):
    bpy.ops.mesh.primitive_uv_sphere_add(radius=r, location=(cx, cy, z), segments=12, ring_count=8); bpy.context.active_object.data.materials.append(mat(GOLD, 0.3, 0.8)); own(bpy.context.active_object)
bpy.ops.mesh.primitive_cone_add(vertices=8, radius1=0.25, depth=1.6, location=(cx, cy, 27.4)); bpy.context.active_object.data.materials.append(mat(GOLD, 0.3, 0.8)); own(bpy.context.active_object)
# the porch at the north-east end: four columns under a small tiled gable
for v in (-4.5, -1.5, 1.5, 4.5):
    ubox(HALF - 1.4, HALF - 0.4, v - 0.5, v + 0.5, 1.2, 7.0, WHITE)
ubox(HALF - 4, HALF, -HW, HW, 7.0, 7.8, OCHRE)
for side in (-1, 1):
    p = [at(HALF - 4.2, side * (HW + 0.3)), at(HALF + 0.3, side * (HW + 0.3)), at(HALF + 0.3, 0), at(HALF - 4.2, 0)]
    mesh([(p[0][0], p[0][1], 7.8), (p[1][0], p[1][1], 7.8), (p[2][0], p[2][1], 10.6), (p[3][0], p[3][1], 10.6)], [(0, 1, 2, 3)], TILE, 0.3)
# the deepastambha before the porch: a tapering white tower ringed with lamp ledges, capped with a little dome
du = HALF + 8; dx, dy = at(du, 0)
ubox(du - 1.6, du + 1.6, -1.6, 1.6, 0, 1.6, LAT)
for k in range(7):
    r = 1.15 - k * 0.1; z0 = 1.6 + k * 2.0
    bpy.ops.mesh.primitive_cylinder_add(vertices=8, radius=r, depth=2.0, location=(dx, dy, z0 + 1.0)); bpy.context.active_object.data.materials.append(mat(WHITE)); own(bpy.context.active_object)
    bpy.ops.mesh.primitive_cylinder_add(vertices=8, radius=r + 0.35, depth=0.25, location=(dx, dy, z0 + 1.8)); bpy.context.active_object.data.materials.append(mat(OCHRE)); own(bpy.context.active_object)
bpy.ops.mesh.primitive_uv_sphere_add(radius=0.8, location=(dx, dy, 16.2), segments=12, ring_count=8); bpy.context.active_object.data.materials.append(mat(GOLD, 0.3, 0.8)); own(bpy.context.active_object)
root.scale = (1, 1, ZX)

sc = bpy.context.scene
sc.render.engine = 'CYCLES'; sc.cycles.samples = 40; sc.cycles.use_denoising = True
sc.render.resolution_x = sc.render.resolution_y = RES
sc.render.film_transparent = True; sc.render.image_settings.color_mode = 'RGBA'; sc.view_settings.view_transform = 'Standard'
sc.render.use_freestyle = True; sc.render.line_thickness_mode = 'ABSOLUTE'; sc.render.line_thickness = 1.0
fs = sc.view_layers[0].freestyle_settings; ls = fs.linesets[0] if fs.linesets else fs.linesets.new('ink')
ls.linestyle.color = (0.1, 0.08, 0.06); ls.select_by_edge_types = True; ls.select_silhouette = ls.select_border = True; ls.select_crease = False
w = sc.world or bpy.data.worlds.new('W'); sc.world = w; w.use_nodes = True
bg = next(n for n in w.node_tree.nodes if n.type == 'BACKGROUND'); bg.inputs['Color'].default_value = (0.8, 0.84, 0.9, 1); bg.inputs['Strength'].default_value = 0.7
ROT = int(os.environ.get('RK_ROT', 0)); theta = math.radians(45 + 90 * ROT)
cd = bpy.data.cameras.new('cam'); cd.type = 'ORTHO'; cd.ortho_scale = RES / S
cam = bpy.data.objects.new('cam', cd); bpy.context.collection.objects.link(cam)
fwd = (-math.sin(theta) * math.cos(ELEV), math.cos(theta) * math.cos(ELEV), -math.sin(ELEV))
cam.location = tuple(-300 * f for f in fwd); cam.rotation_euler = (math.pi / 2 - ELEV, 0, theta); sc.camera = cam
sun = bpy.data.objects.new('sun', bpy.data.lights.new('sun', 'SUN')); bpy.context.collection.objects.link(sun)
sun.data.energy = 3.0; sun.data.angle = math.radians(3); sun.rotation_euler = (math.radians(45), 0, theta + math.radians(70))
name = 'landmark_mahalaxmi.png' if ROT == 0 else f'landmark_mahalaxmi_r{ROT}.png'
sc.render.filepath = str(OUT / name)
bpy.ops.render.render(write_still=True)
if ROT == 0:
    json.dump({'file': name, 'anchor': [RES / 2, RES / 2], 'px_per_m': S, 'lat': 15.49573, 'lon': 73.82647,
               'covers': {'x': [-28, 28], 'y': [-20, 20]}}, open(OUT / 'landmark_mahalaxmi.json', 'w'))
print('done')
