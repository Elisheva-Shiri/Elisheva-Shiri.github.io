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
tags:
  - LED
  - ESP32
  - Raspberry Pi
  - xLights
  - Recycling
  - Light art

cover: /projects/galactic-forest/cover.webp
coverAlt: A dark preview of rows of vertical light poles, with green and white points of light running along them

gallery:
  - src: /projects/galactic-forest/light-sequence.mp4
    poster: /projects/galactic-forest/light-sequence-poster.webp
    alt: A dark preview of rows of glowing vertical poles, with green, white and blue light running up and down them
    caption: The light show in the 3D preview. Every line is one pole of the forest.
    keywords: [Light show, Preview]
  - src: /projects/galactic-forest/xlights-sequencer.webp
    alt: The xLights sequencer, with the forest preview, colour and effect settings, an audio waveform and timelines of effects for groups of poles
    caption: Sequencing in xLights. Effects are placed on a timeline against the music, for groups such as circles, columns and odd and even poles.
    keywords: [xLights, Sequencing]
---

## The installation

**The Galactic Forest** is a forest of light: **100 poles**, each **2.5 metres** high, built from
**recycled aluminium tubes**. Visitors walk among the poles while light runs up, down and across
them.

## The system

- **Controllers.** **Ten ESP32** boards drive the lights on the poles.
- **Sync.** A **Raspberry Pi** communicates with all of them, so the whole forest moves together.
- **Sequencing.** The shows were sequenced in **xLights**. The poles are mapped into groups, such
  as circles, columns, and odd and even poles, and effects like morphs, fades and sparkles are
  placed on a timeline against the beats of the music.
