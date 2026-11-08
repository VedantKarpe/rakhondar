"""The Old Secretariat (the Adil Shah palace) on Panjim's riverfront, modelled in Blender for the Rakhondar mock.

    "C:\\Program Files\\Blender Foundation\\Blender 5.1\\blender.exe" -b --python tools/blender_secretariat.py

The walls rise from the building's OpenStreetMap outline (way 405523397, mapped as 'Goa Museum', beside the
Abade Faria statue on Dayanand Bandodkar Marg). The look (two whitewashed storeys, tall shuttered windows, a
hipped tile roof, a pedimented porch toward the river) is an impression to be checked against photographs.
Metres; Blender x = east, y = north; the origin is the outline's centre (15.50067 N, 73.83003 E) at ground level.
"""
import bpy, bmesh, json, math, os, pathlib
from mathutils import Vector

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'sprites'; OUT.mkdir(exist_ok=True)
ELEV = math.asin(0.5)
S = 1.25 / math.cos(math.radians(45)) * 2
ZX = (2.6 * 2) / (S * math.cos(ELEV))
RES = 1400
OUTLINE = [(-41.3, 12.7), (17.9, 23.8), (19.6, 17.2), (29.1, 18.2), (35.6, 13.0), (41.9, -10.2), (-25.6, -23.7), (-31.2, -2.0), (-38.4, -3.2)]
FLOOR, FLOORS = 6.2, 2
WH = FLOOR * FLOORS + 1.0


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


for o in list(bpy.data.objects): bpy.data.objects.remove(o, do_unlink=True)
bpy.ops.object.empty_add(location=(0, 0, 0)); root = bpy.context.active_object
def own(o): o.parent = root; return o


def prism(pts, z0, z1, h, roof=None):
    """Walls from an outline; with roof=(rise, inset) also a hipped roof over it."""
    me = bpy.data.meshes.new('p'); bm = bmesh.new()
    vs = [bm.verts.new((x, y, z0)) for x, y in pts]
    f = bm.faces.new(vs)
    if sum((pts[(i + 1) % len(pts)][0] - pts[i][0]) * (pts[(i + 1) % len(pts)][1] + pts[i][1]) for i in range(len(pts))) > 0: f.normal_flip()
    ext = bmesh.ops.extrude_face_region(bm, geom=[f])
    top = [g for g in ext['geom'] if isinstance(g, bmesh.types.BMVert)]
    bmesh.ops.translate(bm, verts=top, vec=(0, 0, z1 - z0))
    bm.to_mesh(me); bm.free()
    o = bpy.data.objects.new('p', me); bpy.context.collection.objects.link(o); o.data.materials.append(mat(h)); return own(o)


def hip_roof(pts, z, rise, shrink, h):
    """A hipped roof: the eave follows the outline; the top is the outline drawn in toward its centre and raised."""
    cx = sum(x for x, y in pts) / len(pts); cy = sum(y for x, y in pts) / len(pts); n = len(pts)
    outer = [(x, y, z) for x, y in pts]
    inner = [(cx + (x - cx) * shrink, cy + (y - cy) * shrink, z + rise) for x, y in pts]
    faces = [(i, (i + 1) % n, n + (i + 1) % n, n + i) for i in range(n)] + [tuple(range(n, 2 * n))]
    me = bpy.data.meshes.new('r'); me.from_pydata(outer + inner, [], faces)
    o = bpy.data.objects.new('r', me); bpy.context.collection.objects.link(o)
    o.modifiers.new('t', 'SOLIDIFY').thickness = 0.4; o.data.materials.append(mat(h)); return own(o)


def rbox(cx, cy, ang, w, d, z0, z1, h):
    """A box centred at (cx, cy), turned to angle `ang`, w along the angle, d across."""
    bpy.ops.mesh.primitive_cube_add(size=1, location=(cx, cy, (z0 + z1) / 2), rotation=(0, 0, ang))
    o = bpy.context.active_object; o.scale = (w, d, z1 - z0); o.data.materials.append(mat(h)); return own(o)


WHITE, TRIM, LAT, TILE, SHUT, GLASS = '#f7f4ec', '#e2dccf', '#a85a34', '#a8492b', '#3d5a44', '#2c3442'
prism(OUTLINE, 0, 1.0, LAT)                                   # a laterite plinth
prism(OUTLINE, 1.0, WH, WHITE)                                # the whitewashed walls
prism([(x * 1.004, y * 1.004) for x, y in OUTLINE], WH - 0.9, WH, TRIM)    # the cornice
prism([(x * 1.004, y * 1.004) for x, y in OUTLINE], FLOOR + 0.6, FLOOR + 1.1, TRIM)   # the band between floors
hip_roof([(x * 1.03, y * 1.03) for x, y in OUTLINE], WH, 5.5, 0.55, TILE)
# windows: tall shuttered openings in white frames along every wall, both floors
cx0 = sum(x for x, y in OUTLINE) / len(OUTLINE); cy0 = sum(y for x, y in OUTLINE) / len(OUTLINE)
for i in range(len(OUTLINE)):
    (ax, ay), (bx, by) = OUTLINE[i], OUTLINE[(i + 1) % len(OUTLINE)]
    L = math.hypot(bx - ax, by - ay)
    if L < 5: continue
    ux, uy = (bx - ax) / L, (by - ay) / L; nx, ny = uy, -ux
    if (ax + bx) / 2 * nx + (ay + by) / 2 * ny < cx0 * nx + cy0 * ny: nx, ny = -nx, -ny
    ang = math.atan2(uy, ux); n = int(L / 6.0)
    for k in range(n):
        t = (k + 0.5) / n; wx, wy = ax + (bx - ax) * t + nx * 0.15, ay + (by - ay) * t + ny * 0.15
        for f in range(FLOORS):
            z0 = f * FLOOR + 2.2
            rbox(wx, wy, ang, 1.9, 0.3, z0 - 0.3, z0 + 3.6, TRIM)
            rbox(wx + nx * 0.1, wy + ny * 0.1, ang, 1.4, 0.3, z0, z0 + 3.2, SHUT if (k + f) % 3 else GLASS)
# the porch at the middle of the river front: four columns and a pediment
(ax, ay), (bx, by) = OUTLINE[0], OUTLINE[1]
L = math.hypot(bx - ax, by - ay); ux, uy = (bx - ax) / L, (by - ay) / L; nx, ny = -uy, ux
mx, my = (ax + bx) / 2, (ay + by) / 2; ang = math.atan2(uy, ux)
for k in (-1.5, -0.5, 0.5, 1.5):
    rbox(mx + ux * k * 3.2 + nx * 4.5, my + uy * k * 3.2 + ny * 4.5, ang, 0.9, 0.9, 1.0, FLOOR + 0.6, WHITE)
rbox(mx + nx * 2.4, my + ny * 2.4, ang, 12.5, 5.2, FLOOR + 0.6, FLOOR + 1.4, TRIM)
me = bpy.data.meshes.new('ped'); bm = bmesh.new()
pa, pb = Vector((mx - ux * 6.6 + nx * 4.9, my - uy * 6.6 + ny * 4.9, FLOOR + 1.4)), Vector((mx + ux * 6.6 + nx * 4.9, my + uy * 6.6 + ny * 4.9, FLOOR + 1.4))
pc = Vector((mx + nx * 4.9, my + ny * 4.9, FLOOR + 4.2))
bm.faces.new([bm.verts.new(pa), bm.verts.new(pb), bm.verts.new(pc)]); bm.to_mesh(me); bm.free()
o = bpy.data.objects.new('ped', me); bpy.context.collection.objects.link(o); o.modifiers.new('t', 'SOLIDIFY').thickness = 0.6; o.data.materials.append(mat(WHITE)); own(o)
root.scale = (1, 1, ZX)

sc = bpy.context.scene
sc.render.engine = 'CYCLES'; sc.cycles.samples = 40; sc.cycles.use_denoising = True
sc.render.resolution_x = sc.render.resolution_y = RES
sc.render.film_transparent = True; sc.render.image_settings.color_mode = 'RGBA'; sc.view_settings.view_transform = 'Standard'
sc.render.use_freestyle = True; sc.render.line_thickness_mode = 'ABSOLUTE'; sc.render.line_thickness = 0.9
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
name = 'landmark_secretariat.png' if ROT == 0 else f'landmark_secretariat_r{ROT}.png'
sc.render.filepath = str(OUT / name)
bpy.ops.render.render(write_still=True)
if ROT == 0:
    json.dump({'file': name, 'anchor': [RES / 2, RES / 2], 'px_per_m': S, 'lat': 15.50067, 'lon': 73.83003,
               'covers': {'x': [-44, 44], 'y': [-26, 26]}}, open(OUT / 'landmark_secretariat.json', 'w'))
print('done')
