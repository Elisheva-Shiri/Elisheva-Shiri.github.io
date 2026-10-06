---
title: Automatic Hamster Feeder
summary: >
  An automatic system for a hamster cage. A sensor measures the water level in the hamster's
  bottle and reports it as empty, low or high.
categories:
  - Electronics
date: '2021-05'
dateEnd: '2022-02'
tags:
  - Arduino
  - Water-level sensor
  - Pets
  - Automation

cover: /projects/hamster-feeder/cover.webp
coverAlt: A hamster in a pink cage

gallery:
  - src: /projects/hamster-feeder/cookie.mp4
    poster: /projects/hamster-feeder/cookie-poster.webp
    alt: A hamster in a pink cage with a label in Hebrew below it
    caption: 'The hamster at home. The label reads “Cookie reminds you to drink today”.'
    keywords: [Hamster, Reminder]
  - src: /projects/hamster-feeder/water-level.mp4
    poster: /projects/hamster-feeder/water-level-poster.webp
    alt: A serial monitor printing water level readings, then the bottle on the cage and an LED on a breadboard
    caption: The water level is read from the bottle on the cage and printed as empty, low or high.
    keywords: [Sensor, Serial monitor]
  - src: /projects/hamster-feeder/breadboard.mp4
    poster: /projects/hamster-feeder/breadboard-poster.webp
    alt: A breadboard with a microcontroller, a sensor and a blinking red LED
    caption: The first breadboard version, May 2021.
    keywords: [Prototype]
---

## The system

An automatic helper for a hamster's cage. A **water-level sensor** in the hamster's bottle is
read by an Arduino, which reports the level as **empty, low or high** on the serial monitor and
lights an LED, so the bottle never runs dry.
