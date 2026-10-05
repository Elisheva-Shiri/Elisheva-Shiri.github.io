---
title: Monster Theater
summary: >
  An automated monster theatre that moved with the music, closer to a concert than a play. A
  custom Arduino MIDI controller links physical controls to the music behind the show.
categories:
  - Electronics
  - Art Installation
date: '2024-12'
dateEnd: '2025-02'
tags:
  - Arduino
  - MIDI
  - Automation
  - Music
  - Performance
---

## The show

The Monster Theater is an automated performance. Instead of actors following a script, the
monsters move with the music, so the piece feels **more like a concert than a theatre play**.

## The controller

Behind the show is a custom **Arduino MIDI controller**. Buttons, potentiometers and thumb
joysticks are read by the Arduino and translated into MIDI messages:

- **Buttons** trigger notes (debounced, with LED feedback in the simplified version).
- **Potentiometers** send smooth values only while they're being turned, filtering out noise.
- **Joysticks** nudge values up and down in steps and spring back to the centre when released.

The Arduino sends MIDI over USB serial, and the Hairless MIDI bridge passes it to a loopMIDI virtual
port, which the music software uses as its input.

Two versions exist: a full controller (9 buttons, 3 potentiometers, 2 joysticks) and a simplified
one (2 buttons with LEDs, 2 potentiometers).

_Photos of the show coming soon._
