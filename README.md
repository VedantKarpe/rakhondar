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

The lamp fires by itself at the nearest demon while it has oil. Refill it at lit diyas (walk over one to light it) and at holy places. Calling the Rakhondar lights footsteps toward your next goal and drives back nearby demons; diyas and unmasked demons recharge it.

## The code

Everything is in `rakhondar.html`: plain canvas 2D, no build step, no dependencies besides two Google Fonts.

The file is written as an artifact page body, without `<!doctype>`, `<html>` or `<head>` tags. Open it directly in a desktop browser to run it locally.

- **Village generation** (`gen`): a winding lane network (a minimum spanning tree between vaddo hubs, carved with noisy Dijkstra), river and mangroves, houses, walls, trees and props. Each game builds a new village.
- **Rendering** (`render`): ground pre-painted once, standing objects depth-sorted by `x + y`, then a moonlit darkness layer with lights cut into it as ground-plane ellipses.
- **Isometric helpers:** `iso`, `P`, `box`, `hipRoof`, `octPrism` and `dome` draw Goan buildings from map coordinates.

- **The night** (`startRescue`, `updateNpc`, `reveal`, `startBoss`, `updateBoss`): rescues, escort, disguises and the dawn boss. Roles and their lines live in `ROLES`.

## Ideas not built yet

- More chapters from Goan folklore (the Devchar, Zagor, Sao Joao, Shigmo), each its own night with new rules. Check the folklore with real sources first.
- Blessings from each holy place (temple flare, chapel shield, devli ally).
- A leaderboard by vaddo.
- The sea: a beach, fishing boats on the sand, a shack.
- Real recordings to replace some synthesised sounds: a Narkasur-night dhol and tasha session, temple and chapel bells. Use CC0 sources (Freesound CC0, Sonniss GDC bundles) or your own recordings; avoid non-commercial licences if the game will be sold.

## Sound

Every sound is synthesised in the browser with the Web Audio API (the `SFX` module), so there are no audio files or licences to track. Beds: wind, river, demon growl, lamp hum, pyre fire. Ambience: crickets, frogs near water and paddy, dhol and tasha from the effigy crews (louder near them, faster once the pyre is lit), temple and chapel bells. Events: whispers, diya chime, Rakhondar call, banish, shrieks, the boss's roar, footsteps and slam, firecrackers, the pilot's horn, the ferry horn, dawn birds. `M` or the HUD button mutes; the choice is remembered per browser.
