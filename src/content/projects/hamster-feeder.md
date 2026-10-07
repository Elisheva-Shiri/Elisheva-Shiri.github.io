---
title: Automatic Hamster Feeder
summary: >
  An automatic system for a hamster cage that watches the food and water. A sensor checks whether
  the food bowl is full or empty and a servo dispenses more food, while a second sensor reports the
  water level in the bottle as empty, low or high.
categories:
  - Electronics
date: '2021-05'
dateEnd: '2022-02'
tags:
  - Arduino
  - Servo
  - Water-level sensor
  - Pets
  - Automation

cover: /projects/hamster-feeder/cover.webp
coverAlt: A hamster in a pink cage

gallery:
  - src: /projects/hamster-feeder/food-dispenser.mp4
    poster: /projects/hamster-feeder/food-dispenser-poster.webp
    alt: A yellow food dispenser tube on the cage above the food bowl, with the serial monitor printing food is full and food is empty
    caption: The food dispenser on the cage. The serial monitor reports "food is FULL" or "food is Empty", and the servo releases food when the bowl is empty.
    keywords: [Food sensor, Servo]
  - src: /projects/hamster-feeder/cage.webp
    alt: A red wire hamster cage with a blue plastic base and house
    caption: "The cage the system was built for, December 2020."
    keywords: [Cage, Context]
  - src: /projects/hamster-feeder/cookie.mp4
    poster: /projects/hamster-feeder/cookie-poster.webp
    alt: A hamster in a pink cage with a label in Hebrew below it
    caption: 'The hamster at home. The label reads “Cookie reminds you to drink today”.'
    keywords: [Hamster, Reminder]
  - src: /projects/hamster-feeder/water-level.mp4
    poster: /projects/hamster-feeder/water-level-poster.webp
    alt: A serial monitor printing water level readings, then the bottle on the cage and an LED on a breadboard
    caption: The water level is read from the bottle on the cage and printed as empty, low or high.
    keywords: [Water sensor, Serial monitor]
  - src: /projects/hamster-feeder/water-sensor-test.mp4
    poster: /projects/hamster-feeder/water-sensor-test-poster.webp
    alt: An Arduino with a water sensor and LEDs on a breadboard, and the serial monitor listing water level readings
    caption: Testing the water sensor on the bench, January 2022.
    keywords: [Testing, Sensor]
  - src: /projects/hamster-feeder/servo-test.mp4
    poster: /projects/hamster-feeder/servo-test-poster.webp
    alt: A hand holding a small servo whose arm turns while an LED on the breadboard lights up
    caption: Testing the servo that opens the food dispenser.
    keywords: [Servo, Testing]
  - src: /projects/hamster-feeder/arduino-sensors.webp
    alt: An Arduino Uno on a breadboard wired to a sensor, a relay and a small servo
    caption: "Arduino with the sensors, a relay and the dispenser servo."
    keywords: [Electronics, Arduino]
  - src: /projects/hamster-feeder/three-boards.webp
    alt: Three breadboards with a microcontroller, a temperature sensor and a servo
    caption: "Spreading the parts over three breadboards to test each one."
    keywords: [Prototype, Testing]
  - src: /projects/hamster-feeder/breadboard-detail.webp
    alt: A breadboard of components with a pink arrow pointing to one part
    caption: "A breadboard detail, with the part being tested marked."
    keywords: [Detail, Debugging]
  - src: /projects/hamster-feeder/dashboard.webp
    alt: A cloud dashboard with gauges for humidity and light level
    caption: "The readings sent to a cloud dashboard, May 2021."
    keywords: [Dashboard, IoT]
  - src: /projects/hamster-feeder/breadboard.mp4
    poster: /projects/hamster-feeder/breadboard-poster.webp
    alt: A breadboard with a microcontroller, a sensor and a blinking red LED
    caption: The first breadboard version, May 2021.
    keywords: [Prototype]
---

## The system

An automatic helper for a hamster's cage, run by an **Arduino**:

- **Food.** A sensor at the food bowl checks whether it is **full or empty**. When it is empty, a
  **servo** opens the yellow dispenser tube above the bowl and releases more food.
- **Water.** A **water-level sensor** in the bottle reports the level as **empty, low or high** on
  the serial monitor and lights an LED, so the bottle never runs dry.
