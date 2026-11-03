# Rakhondar

An isometric browser game set in a Goan village on Naraka Chaturdashi night.

The Rakhondar, the guardian spirit who walks the village at night, has blessed a child's clay lamp so its light burns demons. Through the night, villagers get stranded in the lanes. The child finds each one and walks them to safety, but some of them are Narkasur's demons wearing a familiar face.

**Play:** https://claude.ai/artifact/5TzkxY3xHZSJuVBJ9FTsXE

## Chapter 1: Narkasur night

1. **Five rescues, 9 p.m. to 4 a.m.** Each stranded villager has a destination: their house, the temple, the chapel, the Rakhondar's devli, the bus stop or the ferry jetty.
2. **Trust or banish.** When you meet someone, decide. A disguised demon has no shadow, its feet point backwards, the Rakhondar flickers red near it, and it asks for odd things (a shortcut through the dark, no holy places, no lamplight).
   - Trust a real person: walk them home. Their fear grows when demons are near and your light isn't covering them; at full fear they panic and run.
   - Trust a demon: it drops the act near holy ground, at the ride home, or somewhere dark, and ambushes you.
   - Banish a demon: it reveals itself, you burn it, and the Rakhondar rewards you.
   - Banish a real person: they walk off hurt, and that rescue is lost.
3. **4 a.m.: Narkasur wakes.** The biggest effigy walks. A child's lamp can't kill him (his boon from the legend), only slow him. Lead him to the pyre on the chapel square, where the village burns him at dawn.

The night ends with a summary and a score you can copy and share.

## Controls

| Action | Keyboard | Phone |
|---|---|---|
| Move | Arrow keys or WASD (two together to follow a lane) | Drag anywhere |
| Trust / banish | E / Q | Buttons on the card |
| Call the Rakhondar | Space | Button, bottom right |
| Zoom | Mouse wheel or + / − | |

The lamp burns the nearest demon in front of the child (about 55° either side of where you last walked, or anything touching you) while it has oil, so turn to face what's coming. Refill it at lit diyas (walk over one to light it) and at holy places. Calling the Rakhondar lights footsteps toward your next goal and drives back nearby demons; diyas and unmasked demons recharge it.

## The code

Everything is in `rakhondar.html`: plain canvas 2D, no build step, no dependencies besides two Google Fonts.

The file is written as an artifact page body, without `<!doctype>`, `<html>` or `<head>` tags. Open it directly in a desktop browser to run it locally.

- **Village generation** (`gen`): a winding lane network (a minimum spanning tree between vaddo hubs, carved with noisy Dijkstra), river and mangroves, houses, walls, trees and props. Each game builds a new village.
- **Rendering** (`render`): ground pre-painted once, standing objects depth-sorted by `x + y`, then a moonlit darkness layer with lights cut into it as ground-plane ellipses.
- **Isometric helpers:** `iso`, `P`, `box`, `hipRoof`, `octPrism` and `dome` draw Goan buildings from map coordinates.

- **The night** (`startRescue`, `updateNpc`, `reveal`, `startBoss`, `updateBoss`): rescues, escort, disguises and the dawn boss. Roles and their lines live in `ROLES`.

## Real villages

The default map is **Tonca, Goa**, built from OpenStreetMap: its roads, the Mandovi and the tidal channel with the road bridge, khazan paddy, mangroves, the Tonca ferry, the Shantadurga temple and the Christ the King monument (used as the chapel square). Houses, walls, trees and people are generated around that real layout. "Random village" on the start screen still gives a generated one.

Import another village:

```bash
python tools/osm_import.py fetch NAME LAT LON --radius 0.009
python tools/osm_import.py survey NAME
python tools/osm_import.py build NAME LAT LON --tile 12 --inline rakhondar.html
```

`survey` lists temples, churches, ferry points and bus stops to choose a centre; `build` prints the tile grid so you can check it before playing. Rural Goa has few building outlines in OpenStreetMap, so houses mostly come from the generator.

Map data © OpenStreetMap contributors, available under the [Open Database License](https://opendatacommons.org/licenses/odbl/). The cached extract (`data/*.osm.json`) and the derived grids (`data/*.map.json`) are under the ODbL too. Keep the credit line the game shows on real maps.

## Billboards and sponsors

Five billboards stand by the roads and lanes. Their ads live in `ADS` near the top of the script. The current ones are **fictional placeholders** (a bakery, bike hire, a tailor, bebinca and a "your ad here" slot). Only replace them with ads from businesses that have agreed. A sponsor entry can carry `img`, a picture published next to the page (about 4:1, e.g. 480 x 120), which is drawn instead of the text.

## Ideas not built yet

- More chapters from Goan folklore (the Devchar, Zagor, Sao Joao, Shigmo), each its own night with new rules. Check the folklore with real sources first.
- Blessings from each holy place (temple flare, chapel shield, devli ally).
- A leaderboard by vaddo.
- The sea: a beach, fishing boats on the sand, a shack.
- Real recordings to replace some synthesised sounds: a Narkasur-night dhol and tasha session, temple and chapel bells. Use CC0 sources (Freesound CC0, Sonniss GDC bundles) or your own recordings; avoid non-commercial licences if the game will be sold.

## Sound

Every sound is synthesised in the browser with the Web Audio API (the `SFX` module), so there are no audio files or licences to track. Beds: wind, river, demon growl, lamp hum, pyre fire. Ambience: crickets, frogs near water and paddy, dhol and tasha from the effigy crews (louder near them, faster once the pyre is lit), temple and chapel bells. Events: whispers, diya chime, Rakhondar call, banish, shrieks, the boss's roar, footsteps and slam, firecrackers, the pilot's horn, the ferry horn, dawn birds. `M` or the HUD button mutes; the choice is remembered per browser.
