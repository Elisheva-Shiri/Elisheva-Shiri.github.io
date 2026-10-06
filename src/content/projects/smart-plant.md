---
title: 'iPlant: A Self-Monitoring Plant'
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

cover: /projects/smart-plant/cover.webp
coverAlt: A succulent in a white pot on a sensor box marked iPlant, next to a laptop with a dashboard

gallery:
  - src: /projects/smart-plant/demo.mp4
    poster: /projects/smart-plant/demo-poster.webp
    alt: The iPlant pot with its control panel and wiring, filmed close up
    caption: The iPlant system running.
    keywords: [Demo]
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
