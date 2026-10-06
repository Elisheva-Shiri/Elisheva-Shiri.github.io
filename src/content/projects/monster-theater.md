---
title: Monster Theater
summary: >
  An automated monster theatre that moves with the music, closer to a concert than a play. A row of
  servo motors, driven by an Arduino, brings the show to life.
categories:
  - Electronics
  - Art Installation
date: '2021-09'
dateEnd: '2022-01'
tags:
  - Arduino
  - Servo motors
  - MIDI
  - Automation
  - Music
  - Performance

cover: /projects/monster-theater/cover.webp
coverAlt: An Arduino on a wooden frame wired to a row of servo motors

gallery:
  - src: /projects/monster-theater/servos-in-motion.mp4
    poster: /projects/monster-theater/servos-in-motion-poster.webp
    alt: A row of servo motors under a wooden board moving in sequence
    caption: The servo rig in motion. Each motor drives a part of the show.
    keywords: [Servo motors, Motion]
  - src: /projects/monster-theater/servo-test.mp4
    poster: /projects/monster-theater/servo-test-poster.webp
    alt: Testing the Arduino and servo motors mounted on a wooden frame
    caption: Testing the electronics and servos on the frame.
    keywords: [Testing, Arduino]
  - src: /projects/monster-theater/servo-rig.webp
    alt: An Arduino on a wooden frame wired to a row of servo motors
    caption: The rig. An Arduino, a breadboard and a row of servos mounted on a wooden frame.
    keywords: [Hardware, Build]
  - src: /projects/monster-theater/electronics.webp
    alt: Side view of the wooden frame with the Arduino and a bundle of wires
    caption: The electronics, wired and mounted.
    keywords: [Wiring, Electronics]
  - src: /projects/monster-theater/servo-test-2022.mp4
    poster: /projects/monster-theater/servo-test-2022-poster.webp
    alt: A micro servo connected to an Arduino through a small breadboard, turning back and forth
    caption: A later servo test, January 2022.
    keywords: [Servo, Testing]
  - src: /projects/monster-theater/servo-arduino-2022.webp
    alt: An Arduino Uno-compatible board wired to a mini breadboard and a micro servo on a chipboard surface
    caption: The test setup, an Arduino, a mini breadboard and a micro servo.
    keywords: [Arduino, Servo]
---

## The show

The Monster Theater is an automated performance. Instead of actors following a script, the
monsters move with the music, so the piece feels **more like a concert than a theatre play**.

## How it moves

A row of **servo motors** mounted on a wooden frame drives the monsters. An Arduino controls the
servos, so their movement can follow the music.

## The controller

Alongside the rig is a custom **Arduino MIDI controller**. Buttons, potentiometers and thumb
joysticks are read by the Arduino and translated into MIDI messages:

- **Buttons** trigger notes (debounced, with LED feedback in the simplified version).
- **Potentiometers** send smooth values only while they're being turned, filtering out noise.
- **Joysticks** nudge values up and down in steps and spring back to the centre when released.

The Arduino sends MIDI over USB serial, and the Hairless MIDI bridge passes it to a loopMIDI virtual
port, which the music software uses as its input.
