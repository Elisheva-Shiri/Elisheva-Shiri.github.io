---
title: Adaptive MIDI Controller
summary: >
  A DJ controller built for accessibility. Oversized arcade buttons, faders and joysticks in a
  laser-cut box let you play music in Mixxx without fine finger movements. It runs on an Arduino
  and starts automatically on a Raspberry Pi.
featured: true
categories:
  - Electronics
date: '2021-07'
dateEnd: '2022-03'
tags:
  - Arduino
  - Teensy
  - Raspberry Pi
  - MIDI
  - Mixxx
  - Accessibility
  - Tikkun Olam Makers
  - Laser cutting

github: https://github.com/Elisheva-Shiri/adaptive-MIDI-controller

cover: /projects/adaptive-midi-controller/cover.webp
coverAlt: The finished black controller with glowing arcade buttons and joysticks next to a laptop running Mixxx

gallery:
  - src: /projects/adaptive-midi-controller/playing-mixxx.mp4
    poster: /projects/adaptive-midi-controller/playing-mixxx-poster.webp
    alt: Playing music in Mixxx on a laptop using the black controller with glowing arcade buttons
    caption: The finished controller playing music in Mixxx. Big glowing buttons, faders and joysticks replace a small DJ deck.
    keywords: [Demo, Mixxx]
  - src: /projects/adaptive-midi-controller/tom-product.mp4
    poster: /projects/adaptive-midi-controller/tom-product-poster.webp
    alt: Close-up shots of the finished black controller with coloured arcade buttons and soft joystick caps, ending with the Tikkun Olam Makers logo
    caption: The finished controller, from the Tikkun Olam Makers project video.
    keywords: [Finished, TOM]
    credit: Tikkun Olam Makers
  - src: /projects/adaptive-midi-controller/tom-finished.webp
    alt: The black angled controller with green, yellow, blue and red arcade buttons and white joystick caps
    caption: The final controller, with oversized arcade buttons and soft joystick caps.
    keywords: [Finished, Design]
    credit: Still from the Tikkun Olam Makers project video
  - src: /projects/adaptive-midi-controller/tom-cardboard.webp
    alt: A hand pressing large red and green arcade buttons mounted in a cardboard box
    caption: An early cardboard prototype, testing button size and reach.
    keywords: [Prototype, Cardboard]
    credit: Still from the Tikkun Olam Makers project video
  - src: /projects/adaptive-midi-controller/boot-to-mixxx.mp4
    poster: /projects/adaptive-midi-controller/boot-to-mixxx-poster.webp
    alt: The controller next to a screen that boots the Raspberry Pi and opens Mixxx
    caption: Plug and play. The Raspberry Pi boots and opens Mixxx on its own, ready for the controller.
    keywords: [Raspberry Pi, Plug and play]
  - src: /projects/adaptive-midi-controller/waveforms.gif
    alt: Animation of oscilloscope readings showing sine and square waves and modulated signals
    caption: Measuring the signals on an oscilloscope while developing the electronics.
    keywords: [Oscilloscope, Signals]
  - src: /projects/adaptive-midi-controller/arcade-button.mp4
    poster: /projects/adaptive-midi-controller/arcade-button-poster.webp
    alt: A hand pressing a large blue arcade button wired to a laptop
    caption: Testing a large arcade button, easy to press with a whole hand.
    keywords: [Accessibility, Input]
  - src: /projects/adaptive-midi-controller/three-buttons.mp4
    poster: /projects/adaptive-midi-controller/three-buttons-poster.webp
    alt: Pressing red, yellow and green arcade buttons in a cardboard box while Mixxx runs on a laptop
    caption: An early cardboard version with three arcade buttons playing Mixxx.
    keywords: [Prototype, Mixxx]
  - src: /projects/adaptive-midi-controller/small-button.mp4
    poster: /projects/adaptive-midi-controller/small-button-poster.webp
    alt: A small lit button being pressed while the Hairless MIDI bridge shows the message on screen
    caption: Each press becomes a MIDI message, passed to the computer through the Hairless MIDI bridge.
    keywords: [MIDI, Testing]
  - src: /projects/adaptive-midi-controller/faders-mixxx.mp4
    poster: /projects/adaptive-midi-controller/faders-mixxx-poster.webp
    alt: Moving yellow slide faders while Mixxx responds on the screen
    caption: The faders driving Mixxx live.
    keywords: [Faders, Mixxx]
  - src: /projects/adaptive-midi-controller/fader-board.webp
    alt: A board with three slide potentiometers and two joystick modules mounted on it
    caption: The control board, with three slide potentiometers and two joysticks.
    keywords: [Components, Layout]
  - src: /projects/adaptive-midi-controller/enclosure-cut.webp
    alt: Laser-cut black panels assembled into an angled box with holes for buttons and faders
    caption: The laser-cut enclosure, angled so every control is within easy reach.
    keywords: [Laser cutting, Enclosure]
  - src: /projects/adaptive-midi-controller/enclosure-assembled.webp
    alt: The black enclosure assembled, seen from the front
    caption: The assembled enclosure.
    keywords: [Fabrication]
  - src: /projects/adaptive-midi-controller/buttons-fitted.webp
    alt: The black box with green, yellow, blue and red arcade buttons and slide faders fitted
    caption: Arcade buttons and faders fitted into the box.
    keywords: [Assembly, Colour coding]
  - src: /projects/adaptive-midi-controller/joystick.webp
    alt: A hand fitting a thumb joystick module under a hole in the black panel
    caption: Fitting a joystick.
    keywords: [Assembly]
  - src: /projects/adaptive-midi-controller/wiring-inside.webp
    alt: Inside the box, wires connecting the buttons and faders
    caption: The wiring inside.
    keywords: [Wiring]
---

## The idea

Standard DJ controllers are dense: small knobs, thin faders and tightly packed buttons that need
fine motor control. This **adaptive MIDI controller** keeps the same musical possibilities but
makes them physically easier: **large arcade buttons** you can press with a whole hand, long
**faders**, and **thumb joysticks**, all colour-coded in an angled box.

It was made as a **Tikkun Olam Makers (TOM)** project, designed together with the person who
uses it, and presented at Impact Labs in September 2021.

## How it works

- **Controls.** Up to 9 buttons, 3 slide potentiometers and 2 joysticks are read by an Arduino or
  Teensy.
- **MIDI.** Button presses become MIDI notes. Faders and joysticks send control values, and they
  only send while being moved, which filters out noise.
- **Music.** The controller drives **Mixxx**, the open-source DJ software.
- **Plug and play.** Scripts make a **Raspberry Pi** start Mixxx automatically on boot, so the
  controller works as a standalone instrument.

## The build

A laser-cut enclosure in black, with every control placed for easy reach. It was developed from
breadboard tests, measured on an oscilloscope, then assembled and wired by hand.
