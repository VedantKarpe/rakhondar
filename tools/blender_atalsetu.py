"""A pylon of the Atal Setu, Panjim's cable-stayed bridge over the Mandovi, for the Rakhondar mock.

    "C:\\Program Files\\Blender Foundation\\Blender 5.1\\blender.exe" -b --python tools/blender_atalsetu.py

One pylon: a tall white mast in the median between the two carriageways, a fan of stay cables running both
ways along the bridge, and the strip of lights along its edges; the deck itself is drawn by the mock, which
also places a copy of this sprite at each pylon. The bridge's bearing comes from its OpenStreetMap route
(about 7 degrees west of north). Pylon count and spacing are approximate.
Metres; Blender x = east, y = north, z = up; the origin is the mast's foot at deck level.
"""
import bpy, json, math, os, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'sprites'; OUT.mkdir(exist_ok=True)
ELEV = math.asin(0.5)
S = 1.25 / math.cos(math.radians(45)) * 2
ZX = (2.6 * 2 * 1.7) / (S * math.cos(ELEV))
RES = 1400
# the bridge's direction, from its OpenStreetMap route (south end at Patto to the north bank)
dx, dy = (73.83508 - 73.83756) * 107268, (15.51503 - 15.49653) * 110540
AX = math.atan2(dx, dy)          # radians west (negative) of north
MAST, SPAN = 46.0, 90.0          # mast height above the deck; how far the cables reach each way


def col(h):
    h = h.lstrip('#'); c = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    return (*[v / 12.92 if v <= 0.04045 else ((v + 0.055) / 1.055) ** 2.4 for v in c], 1)


M = {}
def mat(h, rough=0.7, emit=0):
    k = (h, emit)
    if k in M: return M[k]
    m = bpy.data.materials.new(h); m.use_nodes = True
    b = next(n for n in m.node_tree.nodes if n.type == 'BSDF_PRINCIPLED')
    b.inputs['Base Color'].default_value = col(h); b.inputs['Roughness'].default_value = rough
    if emit: b.inputs['Emission Color'].default_value = col(h); b.inputs['Emission Strength'].default_value = emit
    M[k] = m; return m


for o in list(bpy.data.objects): bpy.data.objects.remove(o, do_unlink=True)
bpy.ops.object.empty_add(location=(0, 0, 0)); root = bpy.context.active_object


def own(o):
    o.parent = root; return o


def cyl(p0, p1, r, h, n=8):
    from mathutils import Vector
    p0, p1 = Vector(p0), Vector(p1); d = p1 - p0
    bpy.ops.mesh.primitive_cylinder_add(vertices=n, radius=r, depth=d.length, location=(p0 + p1) / 2)
    o = bpy.context.active_object; o.rotation_mode = 'QUATERNION'; o.rotation_quaternion = Vector((0, 0, 1)).rotation_difference(d)
    o.data.materials.append(h); return own(o)


WHITE = mat('#f4f2ec', 0.5)
# the mast: tapering, split into two legs below the deck line and joined above, with a cap
for side in (-1, 1):
    cyl((side * 1.6, 0, -18), (side * 0.7, 0, 4), 0.9, WHITE, 10)
cyl((0, 0, 0), (0, 0, MAST), 1.0, WHITE, 12)
cyl((0, 0, MAST), (0, 0, MAST + 4), 0.6, WHITE, 10)
bpy.ops.mesh.primitive_cube_add(size=1, location=(0, 0, MAST - 10)); o = bpy.context.active_object; o.scale = (2.6, 1.0, 22); o.data.materials.append(WHITE); own(o)
# the stay cables: a fan from the top of the mast down to the deck, both ways along the bridge
CABLE = mat('#dcd8cc', 0.4)
for way in (-1, 1):
    for k in range(1, 9):
        cyl((0, 0, MAST - 1.5 - k * 1.6), (0, way * SPAN * k / 8, 0.6), 0.12, CABLE, 4)
# the lights along the deck edges near the pylon (they glow pink at night)
LED = mat('#ff5ad0', 0.4, 2.5)
for side in (-1, 1):
    for k in range(-12, 13):
        bpy.ops.mesh.primitive_uv_sphere_add(radius=0.35, location=(side * 9.5, k * 7.5, 1.0), segments=8, ring_count=4)
        bpy.context.active_object.data.materials.append(LED); own(bpy.context.active_object)
root.rotation_euler = (0, 0, -AX)      # turn the bridge's axis from north to its real bearing
root.scale = (1, 1, ZX)

sc = bpy.context.scene
sc.render.engine = 'CYCLES'; sc.cycles.samples = 32; sc.cycles.use_denoising = True
sc.render.resolution_x = sc.render.resolution_y = RES
sc.render.film_transparent = True; sc.render.image_settings.color_mode = 'RGBA'
sc.view_settings.view_transform = 'Standard'
sc.render.use_freestyle = False   # outlines swamp thin cables; the white mast reads on its own
sc.render.line_thickness_mode = 'ABSOLUTE'; sc.render.line_thickness = 1.4
fs = sc.view_layers[0].freestyle_settings; ls = fs.linesets[0] if fs.linesets else fs.linesets.new('ink')
ls.linestyle.color = (0.1, 0.08, 0.06); ls.select_by_edge_types = True; ls.select_silhouette = ls.select_border = True; ls.select_crease = False
w = sc.world or bpy.data.worlds.new('W'); sc.world = w; w.use_nodes = True
bg = next(n for n in w.node_tree.nodes if n.type == 'BACKGROUND'); bg.inputs['Color'].default_value = (0.8, 0.84, 0.9, 1); bg.inputs['Strength'].default_value = 0.8
ROT = int(os.environ.get('RK_ROT', 0)); theta = math.radians(45 + 90 * ROT)
cd = bpy.data.cameras.new('cam'); cd.type = 'ORTHO'; cd.ortho_scale = RES / S
cam = bpy.data.objects.new('cam', cd); bpy.context.collection.objects.link(cam)
fwd = (-math.sin(theta) * math.cos(ELEV), math.cos(theta) * math.cos(ELEV), -math.sin(ELEV))
cam.location = tuple(-400 * f for f in fwd); cam.rotation_euler = (math.pi / 2 - ELEV, 0, theta); sc.camera = cam
sun = bpy.data.objects.new('sun', bpy.data.lights.new('sun', 'SUN')); bpy.context.collection.objects.link(sun)
sun.data.energy = 3.0; sun.rotation_euler = (math.radians(45), 0, theta + math.radians(70))
name = 'landmark_atalsetu.png' if ROT == 0 else f'landmark_atalsetu_r{ROT}.png'
sc.render.filepath = str(OUT / name)
bpy.ops.render.render(write_still=True)
if ROT == 0:
    # pylons over the river, in the median between the two carriageways, every ~210 m north of the Patto bank
    pylons = [[15.4995 + 0.0019 * k, 73.83727 - 0.000255 * k * 1.0] for k in range(1, 4)]
    json.dump({'file': name, 'anchor': [RES / 2, RES / 2], 'px_per_m': S, 'deck_z': 22, 'instances': pylons,
               'covers': {'x': [0, 0], 'y': [0, 0]}}, open(OUT / 'landmark_atalsetu.json', 'w'))
print('done')
