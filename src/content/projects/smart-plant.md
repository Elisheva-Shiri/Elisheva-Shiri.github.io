---
title: 'iPlant: A Self-Caring Plant'
summary: >
  A plant pot that looks after itself. Sensors track soil moisture, the water tank, temperature,
  humidity and light. The plant waters itself, shades itself, and reports to a live cloud dashboard.
categories:
  - Electronics
date: '2021-05'
dateEnd: '2021-08'
tags:
  - ESP32
  - IoT
  - Adafruit IO
  - Sensors
  - Arduino

github: https://github.com/Elisheva-Shiri/SmartPlant

cover: /projects/smart-plant/setup.webp
coverAlt: A succulent in a white pot on a sensor box marked iPlant, next to a laptop with a dashboard

gallery:
  - src: /projects/smart-plant/demo.mp4
    poster: /projects/smart-plant/demo-poster.webp
    alt: The iPlant pot with its control panel and wiring, filmed close up
    caption: "The iPlant pot on its cardboard control panel, with the status LED on."
    keywords: [Demo]
  - src: /projects/smart-plant/shade-demo.mp4
    poster: /projects/smart-plant/shade-demo-poster.webp
    alt: The plant pot with a white servo-driven shade arm, next to a laptop showing the dashboard
    caption: The servo shade at work, with the dashboard on the laptop.
    keywords: [Shade, Servo]
  - src: /projects/smart-plant/phone-control.mp4
    poster: /projects/smart-plant/phone-control-poster.webp
    alt: A phone showing the plant dashboard with toggle buttons being pressed
    caption: Controlling the plant remotely from a phone.
    keywords: [Remote control, IoT]
  - src: /projects/smart-plant/breadboard-test.mp4
    poster: /projects/smart-plant/breadboard-test-poster.webp
    alt: A breadboard with an ESP32, a sensor, a relay and blinking LEDs
    caption: An early breadboard test, May 2021.
    keywords: [Prototype, Testing]
  - src: /projects/smart-plant/setup.webp
    alt: A succulent in a white pot on a sensor box marked iPlant, next to a laptop with a dashboard
    caption: The plant and its live dashboard on Adafruit IO.
    keywords: [IoT, Dashboard]
  - src: /projects/smart-plant/control-panel.webp
    alt: 'Cardboard control panel labelled iplant with an on/off switch, an LED and buttons labelled Love you, Miss you, Want you'
    caption: 'The control panel, with on/off, a status LED and three message buttons: “Love you”, “Miss you”, “Want you”.'
    keywords: [Interface, Emotion]
  - src: /projects/smart-plant/pot-top.webp
    alt: Succulents in a terracotta pot inside a white ceramic pot, with a sensor wire in the soil
    caption: A moisture sensor sits in the soil.
    keywords: [Sensors]
  - src: /projects/smart-plant/dashboard.mp4
    poster: /projects/smart-plant/dashboard-poster.webp
    alt: The plant system next to a laptop showing the serial monitor and live readings
    caption: Live readings streaming from the plant.
    keywords: [Data, Serial monitor]
  - src: /projects/smart-plant/prototype-dht.webp
    alt: A blue DHT temperature and humidity sensor wired to an ESP32 board on a breadboard
    caption: The first prototype, a temperature and humidity sensor on an ESP32.
    keywords: [Prototype, ESP32]
  - src: /projects/smart-plant/prototype-breadboard.webp
    alt: Three breadboards with an ESP32, a DHT sensor, an LED and a micro servo
    caption: The full breadboard prototype with sensors, LED and servo.
    keywords: [Prototype, Breadboard]
  - src: /projects/smart-plant/sketch-concept.webp
    alt: 'White line sketch on a dark background: a flower in a pot with a ring of lights, a proximity sensor and a speaker, on a base with three buttons labelled I love U, I think on U and I miss U'
    caption: 'The first concept sketch, May 2021: a pot with a proximity sensor and a speaker, on a base with three message buttons.'
    keywords: [Sketch, Concept]
  - src: /projects/smart-plant/sketch-forms.webp
    alt: 'Four white line sketches on a dark background: a pot on a box with switches, a pot standing in a water tank with a tube, the box alone, and a tilted pot on a base'
    caption: 'Sketches of the form: the pot on its control box, and a version standing in its own water tank.'
    keywords: [Sketch, Form]

# Cards, archive chapter, the two lenses and the body map (see README).
short: 'A plant pot that waters and shades itself, and reports how it feels to a live cloud dashboard.'
chapter: motion
order: 11
tools: ['ESP32', 'Adafruit IO', 'Sensors', 'Servo']
mechanics: 'An ESP32 reads soil moisture, the water tank, light, temperature and humidity. A pump waters the plant through a relay when the soil is dry, and a servo shades it when the sun is too strong.'
human: 'Planned as two matching pots for two people who are apart: press “Love you” on one, and a light in that colour turns on at the other. The plant looks after itself, and carries the message.'
body:
  - at: rhand
    dir: in
    label: 'Three message buttons: love you, thinking of you, miss you'
  - at: away
    dir: out
    label: 'A light in that colour turns on at the other person’s pot'
  - at: front
    dir: out
    label: 'The plant waters and shades itself'
---

## The idea

A plant that tells you how it feels, and takes care of itself when you can't. **iPlant** is an
IoT pot built on an **ESP32** and connected to the **Adafruit IO** cloud.

## Four systems

1. **Water.** A soil-moisture sensor and a water-level sensor in the tank control a pump through a
   relay. When the soil is dry, the plant waters itself; LEDs warn when the tank runs low.
2. **Light and shade.** A light sensor (LDR) drives a servo that shades the plant when the sun is
   too strong.
3. **Climate.** A DHT22 sensor measures temperature and humidity.
4. **Messages.** Three buttons on the panel, “Love you”, “Miss you” and “Want you”, light an RGB
   LED. They can also be pressed remotely from the dashboard.

All readings are published to cloud feeds (temperature, humidity, moisture and water level) and
shown on a live dashboard.

## The original plan: two matching plants

The first work plan, from May 2021, was for **two matching pots** in two homes, connected through
the cloud. Each pot looks after its own plant, and the pair carries small messages between the
two people:

- **Three message buttons on each pot.** Pressing one lights a lamp in the matching colour on the
  other person's pot: red for "love you", yellow for "I'm thinking of you", orange for "I miss
  you".
- **A gesture.** A proximity sensor reads a hand movement near the plant and answers with a
  colour-changing light and a sound from a small speaker.
- **Care without the cloud.** Each pot was to react on its own: water from a pump when the soil
  is dry, a plant light when it gets dark, and a servo fan when it gets too hot.
- **A phone dashboard** to switch things on and off and see the state of the lights.

The first sketches show both sides of the idea: a pot that senses what is around it, on a base
with three buttons for messages between people. The pot that was built keeps the self-care, the
cloud dashboard and the three message buttons.
