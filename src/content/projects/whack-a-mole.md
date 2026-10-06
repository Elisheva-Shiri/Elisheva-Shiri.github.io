---
title: Whack-a-Mole Board
summary: >
  A physical Whack-a-Mole game. A 3×3 board with wooden domes and a light matrix plays alongside a
  PyGame game on a Raspberry Pi, with sounds and levels that speed up as you score.
categories:
  - Game Development
  - Electronics
date: '2021-07'
dateEnd: '2021-08'
tags:
  - Python
  - PyGame
  - Raspberry Pi
  - GPIO
  - Physical computing

github: https://github.com/Elisheva-Shiri/Whack-a-Mole

cover: /projects/whack-a-mole/cover.webp
coverAlt: A green 3×3 board with wooden half-sphere domes in each square

gallery:
  - src: /projects/whack-a-mole/gameplay.mp4
    poster: /projects/whack-a-mole/gameplay-poster.webp
    alt: Testing the electronics, then playing on the green board by hitting the wooden domes
    caption: From the first electronics test to playing on the board.
    keywords: [Gameplay, Testing]
  - src: /projects/whack-a-mole/lit-domes.webp
    alt: The green board with nine wooden domes decorated with faces, lit from below
    caption: The finished board, nine moles with faces, lit from underneath.
    keywords: [Finished, Lighting]
  - src: /projects/whack-a-mole/board-wiring.webp
    alt: The green board on a desk with its wiring and boards spread out in front of a monitor
    caption: Wiring the board.
    keywords: [Wiring, Build]
  - src: /projects/whack-a-mole/screen-play.mp4
    poster: /projects/whack-a-mole/screen-play-poster.webp
    alt: Hitting the wooden domes on the board while the green game grid shows on a monitor behind it
    caption: Playing on the board, with the game running on the screen behind it.
    keywords: [Gameplay, Screen]
  - src: /projects/whack-a-mole/domes-light-up.mp4
    poster: /projects/whack-a-mole/domes-light-up-poster.webp
    alt: The domes on the board glowing red one by one as the game runs on the screen
    caption: The domes glow when their mole appears, in sync with the game on screen.
    keywords: [Lights, Gameplay]
  - src: /projects/whack-a-mole/lit-box.mp4
    poster: /projects/whack-a-mole/lit-box-poster.webp
    alt: The finished game box with a glowing Whack a Mole sign on its side and LED strips inside
    caption: The finished box, with a glowing “Whack a Mole” sign and LED strips inside.
    keywords: [Finished, Lighting]
  - src: /projects/whack-a-mole/box-wiring.mp4
    poster: /projects/whack-a-mole/box-wiring-poster.webp
    alt: The green board on a clear box, with the wiring visible inside
    caption: The board on its clear box, with all the wiring inside.
    keywords: [Enclosure, Wiring]
  - src: /projects/whack-a-mole/lights-under.mp4
    poster: /projects/whack-a-mole/lights-under-poster.webp
    alt: Wiring under the board and LEDs lighting up beneath the domes
    caption: The LEDs under the board, lighting the domes from below.
    keywords: [LEDs, Wiring]
  - src: /projects/whack-a-mole/building-box.mp4
    poster: /projects/whack-a-mole/building-box-poster.webp
    alt: Hands assembling the wooden frame and fitting white domes into the board
    caption: Building the wooden frame and fitting the domes.
    keywords: [Fabrication, Assembly]
  - src: /projects/whack-a-mole/fitting-domes.mp4
    poster: /projects/whack-a-mole/fitting-domes-poster.webp
    alt: Hands placing the painted wooden domes into the green 3×3 board
    caption: Placing the painted domes into the board.
    keywords: [Assembly]
  - src: /projects/whack-a-mole/multimeter-test.mp4
    poster: /projects/whack-a-mole/multimeter-test-poster.webp
    alt: Testing each square of the empty green board with a multimeter
    caption: Checking each square's switch with a multimeter.
    keywords: [Testing, Electronics]
  - src: /projects/whack-a-mole/button-test.mp4
    poster: /projects/whack-a-mole/button-test-poster.webp
    alt: Pressing a row of buttons on a breadboard while the game responds on the screen
    caption: Testing the game with a row of buttons on a breadboard.
    keywords: [Prototype, Testing]
  - src: /projects/whack-a-mole/screen-test.mp4
    poster: /projects/whack-a-mole/screen-test-poster.webp
    alt: Testing the game on a screen with a single button
    caption: An early test of the game on screen.
    keywords: [Testing]
  - src: /projects/whack-a-mole/play-2022.mp4
    poster: /projects/whack-a-mole/play-2022-poster.webp
    alt: A hand pressing the wooden domes on the green board
    caption: Still playing, June 2022.
    keywords: [Play]
  - src: /projects/whack-a-mole/board.webp
    alt: A green 3×3 board with wooden half-sphere domes in each square
    caption: The board, nine wooden domes in a green frame, one for each hole in the game.
    keywords: [Board, Fabrication]
  - src: /projects/whack-a-mole/board-play.webp
    alt: A finger pressing one of the wooden domes on the board
    caption: Hit the dome when its mole appears.
    keywords: [Interaction]
  - src: /projects/whack-a-mole/hit.mp4
    poster: /projects/whack-a-mole/hit-poster.webp
    alt: Hitting the wooden domes on the board
    caption: Playing.
    keywords: [Play]
---

## The game

My final project for a **Python programming** course, made for the **Shikma kindergarten** in
Ramla. A classic Whack-a-Mole, brought into the physical world. The game runs in **PyGame** on a
**Raspberry Pi**, with a 3×3 grid of holes. Every 10 points you level up, and moles appear more
often and faster.

## What I added

The game is based on Matt Cowley's open-source PyGame Whack-a-Mole. I adapted it to run on a
Raspberry Pi and added:

- **A light matrix.** The Pi's GPIO pins drive a light for each hole, so the physical board
  shows where the mole is.
- **A physical board.** Nine wooden domes in a green 3×3 frame, one per hole.
- **Sound.** Hit, miss and level-up effects, and background music that can be changed.

The board is made from **recycled wood** offcuts from a local carpentry shop, and the code is open
source on GitHub.
