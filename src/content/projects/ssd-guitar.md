---
title: 'SSD Guitar: One-Handed Playing'
summary: >
  An adaptive guitar for a man who plays with one hand after severe injuries. Servo motors pluck
  the strings in fingerpicking patterns while he frets the chords, and buttons switch between
  patterns. A Tikkun Olam Makers project.
categories:
  - Electronics
  - Interaction Design
date: '2021-09'
dateEnd: '2021-10'
tags:
  - Arduino
  - Servo motors
  - 3D printing
  - SolidWorks
  - Accessibility
  - Tikkun Olam Makers

github: https://github.com/Elisheva-Shiri/SSD-Guitar

cover: /projects/ssd-guitar/cover.webp
coverAlt: Blue 3D-printed parts, a wedge-shaped box with three button holes and a bracket

gallery:
  - src: /projects/ssd-guitar/printed-parts.webp
    alt: Blue 3D-printed parts, a wedge-shaped box with three button holes and a bracket
    caption: The 3D-printed parts. The control box with three button holes, and the bracket that holds the picker over the strings.
    keywords: [3D printing, Parts]
  - src: /projects/ssd-guitar/sketch-picker.webp
    alt: Sketch of a long bar holding a row of servos with picks hanging down over the strings
    caption: 'Part B, the picker: a row of servos, each with a pick for one string.'
    keywords: [Sketch, Mechanism]
  - src: /projects/ssd-guitar/sketch-box.webp
    alt: Sketch of a wedge-shaped box with three holes on its sloped top
    caption: 'Part A, the control box: a wedge with three holes for buttons.'
    keywords: [Sketch, Enclosure]
  - src: /projects/ssd-guitar/sketch-buttons.webp
    alt: Sketch of the wedge box with a blue board inside and one red and two yellow buttons on top
    caption: The control box with its board and three buttons.
    keywords: [Interface, Buttons]
  - src: /projects/ssd-guitar/sketch-parts.webp
    alt: Sketches of part A, the wedge box, and part B, the picker bracket
    caption: The two parts side by side.
    keywords: [Sketch, Design]
  - src: /projects/ssd-guitar/cad-parts.webp
    alt: SolidWorks renders of the control box and the bracket
    caption: Modelled in SolidWorks for 3D printing.
    keywords: [CAD, SolidWorks]
  - src: /projects/ssd-guitar/sketch-board.webp
    alt: Sketch of a perforated board with a row of components soldered along its edges
    caption: The circuit board for the picker.
    keywords: [Electronics]
  - src: /projects/ssd-guitar/sketch-wiring.webp
    alt: Wiring sketch connecting a microcontroller to one red and two yellow buttons
    caption: Wiring the buttons to the controller.
    keywords: [Wiring, Buttons]
  - src: /projects/ssd-guitar/sketch-assembly.webp
    alt: Sketch of the board placed inside the wedge box under the three buttons
    caption: Placing the board inside the box.
    keywords: [Assembly]
  - src: /projects/ssd-guitar/breadboard.webp
    alt: Fritzing diagram of an Arduino Uno wired to six servos and two buttons on a breadboard
    caption: The circuit. An Arduino drives six servos, one per string, and reads the buttons.
    keywords: [Circuit, Fritzing]
---

## The need

This guitar was made for a man who, after severe injuries, manages almost everything with one
hand. For him it was a chance to play music again. With one hand he can fret chords, but he
can't pluck the strings at the same time.

## The solution

A picker sits over the strings: **six servo motors**, one per string, each with a pick. An
**Arduino** plays them in **fingerpicking patterns**: a bass string first, then the treble
strings in turn. He frets the chords with his hand, and the guitar plays the rhythm.

A small **control box** with three buttons, connected by a long cable, lets him switch to the
next or previous pattern. The team also explored foot pedals, sliders and thumb joysticks for
controlling the rhythm.

## The build

The parts were sketched, modelled in **SolidWorks** and 3D-printed. Then the electronics were
soldered and everything was fitted onto the guitar. It was a **Tikkun Olam Makers (TOM)**
project, built with a team of makers and the guitarist himself.
