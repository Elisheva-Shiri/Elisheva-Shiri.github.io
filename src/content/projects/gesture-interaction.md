---
title: Hand-Gesture Interaction
summary: >
  Mapping hand gestures to interactions. A webcam tracks a hand in the air, and its movements
  turn and move a 3D object on screen, with no mouse or touch.
categories:
  - Interaction Design
date: '2022-05'
tags:
  - Gesture recognition
  - Computer vision
  - Webcam
  - 3D

cover: /projects/gesture-interaction/cover.webp
coverAlt: A raised hand in front of a monitor showing a 3D cube and a small webcam view

gallery:
  - src: /projects/gesture-interaction/gesture-demo.mp4
    poster: /projects/gesture-interaction/gesture-demo-poster.webp
    alt: A hand moving in the air while a 3D cube on the monitor turns and moves to follow it
    caption: Moving a hand in the air turns and moves the 3D cube on screen.
    keywords: [Gestures, Demo]
  - src: /projects/gesture-interaction/tracking-setup.webp
    alt: The setup, a laptop and a monitor showing the webcam view and the 3D cube, with a hand raised to the side
    caption: The setup. The webcam view in the corner shows what the tracker sees.
    keywords: [Setup, Computer vision]
---

## The aim

To **map hand gestures to interactions**. Instead of a mouse or a touch screen, a webcam watches
the user's hand, and each movement controls an object on screen.

## The prototype

A 3D cube on a monitor follows the hand: move or tilt your hand, and the cube moves and turns
with it. The webcam view in the corner of the screen shows the hand being tracked.
