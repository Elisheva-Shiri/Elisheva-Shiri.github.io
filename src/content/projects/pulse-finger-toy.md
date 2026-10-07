---
title: Pulse Finger Toy for Children
summary: >
  A medical toy for children. A soft felt character slips onto a child's finger and hides a pulse
  sensor, so the heart rate is measured while the child plays with a friendly bird instead of a
  medical clip.
categories:
  - Biomedical Engineering
  - Interaction Design
date: '2023-09'
tags:
  - Pulse sensor
  - Arduino
  - Medical devices
  - Children
  - Felt

cover: /projects/pulse-finger-toy/cover.webp
coverAlt: A felt bird character in orange and light blue worn on a fingertip, in front of a laptop showing a pulse waveform

gallery:
  - src: /projects/pulse-finger-toy/pulse-reading.mp4
    poster: /projects/pulse-finger-toy/pulse-reading-poster.webp
    alt: A hand wearing the felt bird on a finger while the laptop plots a live pulse waveform from an Arduino
    caption: The toy on a finger, with the live pulse waveform on the laptop behind it.
    keywords: [Pulse, Live data]
  - src: /projects/pulse-finger-toy/pulse-closeup.mp4
    poster: /projects/pulse-finger-toy/pulse-closeup-poster.webp
    alt: A close-up of the felt bird on a fingertip, with a small light blinking in time with the pulse
    caption: Up close. A small light on the bird blinks with each heartbeat.
    keywords: [Feedback, Heartbeat]
---

## The idea

Medical measurements can be frightening for children. This toy turns a pulse measurement into
play: a soft **felt bird** in orange and light blue fits over the child's fingertip like a finger
puppet, and hides a **pulse sensor** inside.

## How it works

The sensor reads the pulse from the fingertip and sends it to an **Arduino**. The heartbeat is
plotted live on the computer, and a small light on the toy blinks with each beat, so the child
can see their own heart.
