---
title: The Galactic Forest
summary: >
  A light installation: a forest of 100 poles, each 2.5 metres tall, made from recycled aluminium
  tubes. Ten ESP32 controllers and a Raspberry Pi play choreographed light shows across the forest,
  sequenced to music.
categories:
  - Art Installation
  - Electronics
date: '2023-09'
dateEnd: '2024-04'
tags:
  - LED
  - ESP32
  - Raspberry Pi
  - xLights
  - Recycling
  - Light art

cover: /projects/galactic-forest/cover.webp
coverAlt: A 3D preview of a circular forest of glowing vertical poles in teal and violet over a green grid

gallery:
  - src: /projects/galactic-forest/forest-3d-preview.mp4
    poster: /projects/galactic-forest/forest-3d-preview-poster.webp
    alt: A 3D preview of the whole forest, poles lighting up in waves of white, teal, blue and violet over a green grid
    caption: The whole forest in the 3D preview. Light sweeps through the poles in waves of colour.
    keywords: [Light show, 3D preview]
  - src: /projects/galactic-forest/forest-teal-violet.webp
    alt: The circular forest of poles lit in alternating teal and violet
    caption: The poles stand in rings. Here they alternate teal and violet.
    keywords: [Layout, Colour]
  - src: /projects/galactic-forest/forest-colours.mp4
    poster: /projects/galactic-forest/forest-colours-poster.webp
    alt: The forest preview cycling through cyan, blue, green, orange and purple
    caption: A sequence cycling through the palette.
    keywords: [Colour, Sequence]
  - src: /projects/galactic-forest/light-sequence.mp4
    poster: /projects/galactic-forest/light-sequence-poster.webp
    alt: A front view of rows of glowing poles, with green, white and blue light running up and down them
    caption: The show from the front, with light running up and down every pole.
    keywords: [Light show, Preview]
  - src: /projects/galactic-forest/xlights-sequencer.webp
    alt: The xLights sequencer, with the forest preview, colour and effect settings, an audio waveform and timelines of effects for groups of poles
    caption: Sequencing in xLights. Effects are placed on a timeline against the music, for groups such as circles, columns and odd and even poles.
    keywords: [xLights, Sequencing]
  - src: /projects/galactic-forest/sketch-pole.webp
    alt: A pen sketch of a pole with its LED strips and a base, with notes
    caption: 'Sketching a pole, its LED strips and its base.'
    keywords: [Sketch, Pole]
  - src: /projects/galactic-forest/sketch-pole-2.webp
    alt: A second pen sketch of the pole base with wiring notes
    caption: 'The pole base and wiring, sketched.'
    keywords: [Sketch, Wiring]
  - src: /projects/galactic-forest/pole-map-phone.webp
    alt: A phone screenshot of the forest map, rings of yellow and green lines
    caption: 'The map of the forest, rings of poles seen from above.'
    keywords: [Map, Layout]
  - src: /projects/galactic-forest/pcb-sparklezord.webp
    alt: A PCB layout for an ESP32 board with ten LED outputs, a microphone and power inputs
    caption: 'The controller board, an ESP32 with ten LED outputs and a microphone, one board for every ten poles.'
    keywords: [PCB, ESP32]
    credit: Board design “Sparklezord” by Jon Levin
  - src: /projects/galactic-forest/schematic.webp
    alt: The schematic of the controller board with level shifters and LED channels
    caption: 'The board schematic.'
    keywords: [Schematic]
    credit: Schematic by Jon Levin
  - src: /projects/galactic-forest/pcb-in-hand.webp
    alt: A finished blue controller board held in a hand
    caption: 'A finished controller board.'
    keywords: [PCB, Hardware]
  - src: /projects/galactic-forest/power-wiring.mp4
    poster: /projects/galactic-forest/power-wiring-poster.webp
    alt: Hands wiring power cables and plugs on the floor beside the open power box
    caption: 'Wiring the power for the forest, April 2024.'
    keywords: [Power, Wiring]
  - src: /projects/galactic-forest/control-box.webp
    alt: An open grey control box with power supplies, boards and many wires
    caption: 'The control box, with the power supplies and controllers.'
    keywords: [Power, Control box]
  - src: /projects/galactic-forest/pole-mapping.mp4
    poster: /projects/galactic-forest/pole-mapping-poster.webp
    alt: A grid view on a screen mapping every pole's LEDs, in red and white
    caption: Mapping the LEDs of every pole onto the grid.
    keywords: [Mapping, Setup]
  - src: /projects/galactic-forest/wave-effect.mp4
    poster: /projects/galactic-forest/wave-effect-poster.webp
    alt: A screen showing a wave effect being designed and previewed on the poles
    caption: Designing a wave effect.
    keywords: [Effects, Design]
  - src: /projects/galactic-forest/early-simulation.mp4
    poster: /projects/galactic-forest/early-simulation-poster.webp
    alt: An early 3D simulation of the forest, poles flashing white, orange and green
    caption: An early simulation of the forest, September 2023.
    keywords: [Simulation, Early test]
  - src: /projects/galactic-forest/numbered-pole.mp4
    poster: /projects/galactic-forest/numbered-pole-poster.webp
    alt: A white pole marked with the number 44 and symbols, standing on straw
    caption: Every pole is numbered, so it matches its place in the light map. This is pole 44.
    keywords: [Build, Installation]
---

## The installation

**The Galactic Forest** is a forest of light: **100 poles**, each **2.5 metres** high, built from
**recycled aluminium tubes**. Visitors walk among the poles while light runs up, down and across
them.

## The system

- **Controllers.** **Ten ESP32** boards drive the lights, each with ten LED outputs and a
  microphone, on a custom board (designed by Jon Levin).
- **Sync.** A **Raspberry Pi** communicates with all of them, so the whole forest moves together.
- **Mapping.** Every pole is numbered and mapped to its position, so effects can travel through
  the forest as rings, rows, waves and sweeps.
- **Sequencing.** The shows were sequenced in **xLights**, with effects like morphs, fades and
  sparkles placed on a timeline against the beats of the music, and checked in a 3D preview before
  they reached the real poles.
