---
title: The Phone as a Physics Lab
summary: >
  Physics experiments measured with a smartphone's sensors and analysed in MATLAB. A pendulum
  timed by the phone's gyroscope at four string lengths, and a free fall timed by sound.
categories:
  - Creative Coding
date: '2020-08'
tags:
  - MATLAB
  - Sensors
  - Data analysis
  - Physics

cover: /projects/phone-physics-lab/cover.webp
coverAlt: Four plots of a pendulum's angular velocity over time, for string lengths of 5, 10, 15 and 20 cm

gallery:
  - src: /projects/phone-physics-lab/pendulum-gyro.webp
    alt: Four plots of angular velocity over time for a pendulum with string lengths of 5, 10, 15 and 20 cm, each a decaying oscillation
    caption: The phone swings as the pendulum bob, and its gyroscope records the angular velocity. Each swing slowly dies down, and the longer the string, the slower the swing.
    keywords: [Gyroscope, Pendulum]
  - src: /projects/phone-physics-lab/acoustic-stopwatch.webp
    alt: A plot of fall time against height, a theoretical square-root curve and five measured points below it
    caption: 'An acoustic stopwatch: the phone starts and stops timing on sound, to time a free fall from five heights, compared with t = √(2h/g).'
    keywords: [Acoustic stopwatch, Free fall]
---

## The idea

A smartphone is full of sensors: a gyroscope, an accelerometer, a microphone. In my first-year
electronics course I used them as lab instruments and analysed the recordings in **MATLAB**.

## The experiments

- **Pendulum.** The phone hung on a string as the pendulum, at lengths of 5, 10, 15 and 20 cm.
  The gyroscope recorded its angular velocity, and I plotted each run and compared the results
  with the pendulum formula ω = √(g/l).
- **Free fall.** With an acoustic stopwatch, the phone started timing at one sound and stopped at
  the next, the moment an object hit the ground. I compared the fall times from five heights with
  the theory, t = √(2h/g). The measurements came out shorter than the theory, which shows how hard
  it is to time a fall by sound.
- **Movement.** The accelerometer recorded the phone's movement on three axes.

The plots here were redrawn from my measurements and MATLAB scripts.
