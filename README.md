# Rakhondar

An isometric browser game set in Goan villages on festival nights.

The Rakhondar, the guardian spirit who walks the village at night, has blessed a child's clay lamp so its light burns demons. Through the night, villagers get stranded in the lanes. The child finds each one and walks them to safety, but some of them are demons wearing a familiar face.

**Play:** https://vedantkarpe.github.io/rakhondar/ (the shared leaderboard works only in the claude.ai version: https://claude.ai/artifact/5TzkxY3xHZSJuVBJ9FTsXE)

**Feedback:** open an issue at https://github.com/VedantKarpe/rakhondar/issues

## Live in a village (Goa time)

"Live in Tonca" and "Live in Panjim" on the title screen start a village that runs on real Goa time (IST). The clock speed is a setting: real time, ×10, ×60 (a full day in 24 minutes, the default) or ×240.

- **Day:** no demons. A villager with a **!** has the **daily quest**, the same for everyone on a given date: clear the garbage into the bin (Shantabai), deliver hot poee to three doors (Mai the baker), or catch Pinky the hen (Tia Rosa). Quests and good deeds earn **points**; finishing the quest on consecutive days builds a **streak**.
- **Dusk and night:** the light turns gold, then dark; the Rakhondar wakes, demons come out (more on a moonless night), and stranded villagers need walking home. Lose all your courage and you wake at home at dawn, 50 points poorer.
- **The moon** in the corner is the real one, and the darkness follows its phase.
- **Weather** follows the real season, chosen by date so everyone shares it: monsoon rain from June to September, mist in the cool months, haze and the odd pre-monsoon storm in spring.
- **The calendar:** the tithi and lunar month (amanta) are worked out from the moon and sun. Festivals arrive on their days: Narkasur night, Diwali, Ganesh Chaturthi, Shigmo, Gudi Padwa, Tulsi Vivah, Nag Panchami, São João, Bonderam, the Feast of St Francis Xavier, Christmas and Carnival. A festival brings its decorations (effigies, lamps, flags, crackers) and marks its chapter "Tonight". The approximation can land a day off a printed panchang near a tithi boundary; known cases are pinned in `CAL.festivals`.
- **Potholes** on every map's roads throw you off a fast motorbike; in the rain they look like puddles.
- **Panjim** is mapped from OpenStreetMap around the Immaculate Conception church, the Panaji ferry terminal and the Mandovi, with its real building outlines.

Points, the streak and the top-scores board are kept in this browser for now. A shared board and shared village progress need the artifact's shared storage, which is the next step.

## Panjim, the city

Panjim is mapped as a small city, 230 x 120 tiles at 20 m, from Campal and Kala Academy to Patto and the Ponte de Linhares causeway, and from the Mandovi to Altinho. Each real building from OpenStreetMap keeps its own footprint and is drawn as a town building of one to three storeys, with balconies, shop awnings and tiled roofs or terraces; Fontainhas has two-storey row houses in strong colours. The Immaculate Conception Church has its white front and the zig-zag stairways down its square; the Kadamba bus stand has a garden roundabout ringed by painted pillars; the big bridge over the Mandovi has cable-stayed towers and coloured lights at night. Positions of Fontainhas, the pillars and the bus stand are approximate.

Street life: petrol pumps stand where the map has them, and a motorbike that runs dry has to be pushed to one. Poders cycle the lanes from 5:30 to 9:30 with pao and a bulb horn. At night dog packs roam and howl, and chase anyone who runs past.

## Goa by taluka, and the mini map

Every village map is 96 x 80 tiles at 12 m a tile, about 1.15 km by 0.96 km. The **mini map** in the bottom-left corner shows the whole village turned the same way as the view: you are the yellow dot, your next goal pulses green, and landmarks are marked. Tap it or press **G** for the **map of Goa**, laid out by its twelve talukas. Pick another village there to take the bus or ferry; in live mode the clock, points and streak come with you.

| Taluka | Villages mapped |
|---|---|
| Bardez | Siolim, Calangute (the beach) |
| Tiswadi | Panjim, Divar island, Chorão island |
| Ponda | Tonca |
| Pernem, Bicholim, Sattari, Mormugao, Dharbandora, Salcete, Sanguem, Quepem, Canacona | not mapped yet |

**Exploring.** Each village starts in shadow and opens up as you walk it; the browser remembers what you have seen, and the Goa map shows how much of each village you have explored. Woodland from OpenStreetMap is dense with mango, cashew and palms. Named sights (monuments, museums, gardens) stand where OpenStreetMap puts them, are named as you approach, and are worth 25 points the first time you reach each one.

**Quests all day.** In live mode one quest follows another: when you finish, someone else in the vaddo waves you over a few seconds later. The day's first quest moves your streak. Litter lies about the lanes every day; pick it up any time for 5 points a piece.

**Light, night and monsters.** Monsters and the Rakhondar belong to the night: by day there are no demons and the Rakhondar rests in its stone. On a sped-up clock the daytime hours run 2.5 times faster, so more of the playing time is night (real time stays true). Street tubelights stand along the roads and lanes, lit from dusk; about one in three flickers. Demons keep out of every light that is on: lit diyas, holy ground, a tubelight and the beam ahead of a car.

Demons differ by where they rise. The names come from Goan and Konkan folklore and are kept simple; check them with people from the villages before writing more about any of them.

| Where | Demon | How it plays |
|---|---|---|
| Lanes, roads, crossroads | Devchar, in a wide black hat | quick |
| Forest and big trees | Brahmarakshas, pale, with a sacred thread | slow, takes twice the burning |
| Paddy fields | Chedvan, hair over her face | ordinary |
| Water, mangroves, the beach | Jalpari, sea-green with fins | a little quick and tough |

**The beach.** Calangute, in Bardez, has the sea, a strip of sand with surf, shacks with strings of bulbs and beach umbrellas. The importer paints the sea from OpenStreetMap's coastline (land on its left, sea on its right) and a band of sand along it.

**Village life.** By day villagers stroll the lanes and stop to chat, and shopkeepers stand at the doors of the village shops (kirana store, bakery, pharmacy, fish market and others), each with a striped awning and a painted sign. The roads carry cars, a Kadamba bus, racing private buses with their names on the side and horns going, black-and-yellow rickshaws and the yellow-mudguard motorcycle pilots; the buses pull in at the bus stop. From dusk, candles burn at every cross. The diyas you light sit in front of the tulsis and the little roadside devlis where lanes meet, not out on the open lanes.

**Names and directions.** Every house has a family name, shown on a nameplate by its door as you come near (Catholic families keep a cross in the yard, Hindu families a tulsi). Villagers and shopkeepers have names too. Walk up to one by day and press E, or tap Ask the way, then pick a place, a quest house or any family: they tell you how far and which way, and what you pass on the way, and can mark it for you.

**The postman.** One of the day's quests: Anton has three letters and no house numbers. Each house is described by its colour and size, what stands in its yard, how far and which way it lies from the nearest landmark, and which way its lane runs. The mini map has a north marker so the directions read on screen. Take each letter to the right door; a wrong door tells you so.

**Finding places.** Tap the mini map or press P for the village map: every temple, church, stop, ferry, devli and sight, the day's quest giver and the nearest litter, numbered on the map with their distances. Guide me puts an arrow on the way and the distance in the objective line until you arrive.

To add a village, import it with `tools/osm_import.py` (below) and add it to `VILLAGE_TALUKA` and `VILLAGE_TITLES` in `rakhondar.html`. The importer's `--size` must match `W` and `H` in the game.

## Chapters

Each chapter is one night in a real village, mapped from OpenStreetMap, with its own traps, puzzles and ending. All four are open from the title screen; the game remembers which ones you have seen through to dawn.

| # | Night | Village | Traps | Puzzles | How it ends |
|---|---|---|---|---|---|
| 1 | Narkasur night | Tonca | open wells, dogs, firecrackers | marked stones | Narkasur's effigy walks at 4 a.m.; lead him to the pyre |
| 2 | Bonderam | Divar island | open wells, dogs, the voice, sluice gates | the sacristan's key | catch the last ferry before 4 a.m., or be stranded |
| 3 | Zagor night | Siolim | dogs, firecrackers, the voice | marked stones, the temple bell | ring the bell to clear the Zagreshwar temple square, then hold it until the singers come |
| 4 | São João | Chorão island | open wells (brimming, like puddles), sluice gates, dogs, the voice | the sacristan's key, marked stones | the tide floods the khazan; reach the church before the water takes the lanes |

The festival notes in the chapter text are short summaries. Check them with people from each village before writing more story.

## Every night

1. **Five rescues, 9 p.m. to 4 a.m.** Each stranded villager has a destination: their house, the temple, the chapel or church, the Rakhondar's devli, the bus stop or the ferry.
2. **Trust or banish.** A disguised demon has no shadow, its feet point backwards, the Rakhondar flickers red near it, and it asks for odd things.
   - Trust a real person: walk them home. Their fear grows when demons are near and your light isn't covering them; at full fear they panic and run.
   - Trust a demon: it drops the act near holy ground, at the ride home, or somewhere dark, and ambushes you.
   - Banish a demon: it reveals itself, you burn it, and the Rakhondar rewards you.
   - Banish a real person: they walk off hurt, and that rescue is lost.
3. **The chapter's ending** at 4 a.m. (see the table).

## Traps

- **Open wells** sit on wide lanes. Walk into one and you lose a courage, spend a moment climbing out, and every demon nearby hears the splash. In the monsoon they brim over and look like puddles.
- **Stray dogs** sleep beside the lanes. Pass at full speed and they wake and bark, calling demons from far around. Creep past (Shift, or a short drag on a phone) and they sleep on.
- **Firecracker strings** lie across lanes. Stepping on one sets it off: the bang stuns demons close by, but calls the rest, wakes dogs and frightens the person you are escorting.
- **Khazan sluice gates.** When the tide turns, each open gate floods the paddy and bunds behind it, which slows you and soaks your lamp. Stand at a gate to shut it until the tide turns again.
- **The voice in the dark** calls you by the name you gave on the title screen, in violet rather than the Rakhondar's green, and drifts away as you follow. Reach it and it is an ambush.

## Puzzles

- **Marked stones:** the devli is sealed until you kneel at three stones around it in the order of their marks (one, two, three). The wrong stone puts them all out.
- **The sacristan:** the church is locked for the night. Find the sacristan at his front door for the key, then open the door.
- **The temple bell:** shadows hold the temple square. Stand under the bell for three seconds while they come at you; a hit restarts it.
- **The last ferry:** in Bonderam the ferry leaves at 4 a.m. Miss it and the night is lost.

A locked place sends the objective, the screen-edge arrow and the Rakhondar's footsteps to its puzzle first.

## Controls

| Action | Keyboard | Phone |
|---|---|---|
| Move | Arrow keys or WASD (two together to follow a lane) | Drag anywhere |
| Creep | Hold Shift while moving | Drag only a little |
| Trust / banish | E / Q | Buttons on the card |
| Call the Rakhondar | Space | Button, bottom right |
| Zoom | Mouse wheel or + / − | |
| Turn the view | Right-drag, or Z / X | ⟲ ⟳ buttons |
| Motorbike | B beside a parked bike | Ride button |
| Pause, back to the title | Esc | |

The lamp burns the nearest demon in front of the child (about 55° either side of where you last walked, or anything touching you) while it has oil, so turn to face what's coming. Refill it at lit diyas (walk over one to light it) and at holy places. Calling the Rakhondar lights footsteps toward your next goal and drives back nearby demons; diyas and unmasked demons recharge it.

## The code

Everything is in `rakhondar.html`: plain canvas 2D, no build step, no dependencies besides two Google Fonts.

It is one self-contained HTML page. Open it directly in a browser to run it locally.

- **Chapters** (`CHAPTERS`, `ROLE_LINES`): village, festival props, traps, puzzles, finale and text for each night.
- **Village generation** (`gen`, `layoutReal`, `placeChapterThings`): the real or random map, then houses, props, and the chapter's traps and puzzles.
- **The night** (`update`, `updateChapter`, `updateNpc`, `startFinale`, `updateBoss`): rescues, escort, traps, puzzles and endings.
- **Rendering** (`render`): ground pre-painted once, standing objects depth-sorted by `x + y`, then a moonlit darkness layer with lights cut into it as ground-plane ellipses.

## Real villages

Four villages are built in: Tonca, Divar (around Piedade), Siolim (around the Zagreshwar temple) and Chorão (around Salvador do Mundo church). Roads, lanes, rivers, khazan paddy, mangroves and landmarks come from OpenStreetMap; houses, walls, trees and people are generated around that real layout. Where OpenStreetMap has house outlines (much of Divar), the game uses them.

Import another village:

```bash
python tools/osm_import.py fetch NAME LAT LON --radius 0.012
python tools/osm_import.py sights NAME LAT LON --radius 0.012
python tools/osm_import.py survey NAME
python tools/osm_import.py build NAME LAT LON --tile 12 --inline rakhondar.html
```

`survey` lists temples, churches, ferry points and bus stops to choose a centre; `build` prints the tile grid so you can check it before playing, and `--inline` adds or replaces that village in the game's `VILLAGES`. Pin a landmark the tags don't mark with `--anchor kind=lat,lon,name` (for example a particular temple, or a ferry jetty). A ferry pinned beyond the map edge becomes "the ferry road" where the road leaves the map, as in Divar. Then add a chapter for it in `CHAPTERS`.

Map data © OpenStreetMap contributors, available under the [Open Database License](https://opendatacommons.org/licenses/odbl/). The cached extracts (`data/*.osm.json`) and the derived grids (`data/*.map.json`) are under the ODbL too. Keep the credit line the game shows on real maps.

## Billboards and sponsors

Five billboards stand by the roads and lanes. Their ads live in `ADS` near the top of the script. The current ones are **fictional placeholders** (a bakery, bike hire, a tailor, bebinca and a "your ad here" slot). Only replace them with ads from businesses that have agreed. A sponsor entry can carry `img`, a picture published next to the page (about 4:1, e.g. 480 x 120), which is drawn instead of the text.

## Sound

Every sound is synthesised in the browser with the Web Audio API (the `SFX` module), so there are no audio files or licences to track. Beds: wind, river, rain, demon growl, lamp hum, pyre fire. Ambience: crickets, frogs near water and paddy, dhol and tasha near the festival props, temple and chapel bells. Events: whispers, the voice, diya chime, Rakhondar call, banish, shrieks, barking, a well's splash, firecrackers, sluice gates, the bell, the boss, the pilot's horn, the ferry horn, dawn birds. `M` or the HUD button mutes; the choice is remembered per browser.

## Ideas not built yet

- 3D-looking characters: render models in Blender from the game's isometric angle and use them as sprite sheets.
- Blessings from each holy place (temple flare, chapel shield, devli ally).
- A leaderboard by vaddo.
- The sea: a beach, fishing boats on the sand, a shack.
- Real recordings to replace some synthesised sounds (CC0 sources such as Freesound CC0, or your own recordings).
