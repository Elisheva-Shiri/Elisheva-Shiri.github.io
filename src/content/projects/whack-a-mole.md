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

A classic Whack-a-Mole, brought into the physical world. The game runs in **PyGame** on a
**Raspberry Pi**, with a 3×3 grid of holes. Every 10 points you level up, and moles appear more
often and faster.

## What I added

The game is based on Matt Cowley's open-source PyGame Whack-a-Mole. I adapted it to run on a
Raspberry Pi and added:

- **A light matrix.** The Pi's GPIO pins drive a light for each hole, so the physical board
  shows where the mole is.
- **A physical board.** Nine wooden domes in a green 3×3 frame, one per hole.
- **Sound.** Hit, miss and level-up effects and background music.
