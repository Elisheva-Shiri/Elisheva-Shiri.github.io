---
title: Safe Box
summary: >
  An Arduino safe. It wakes up when someone approaches, asks for a code on a keypad, counts the
  attempts, and opens its servo lock only for the right password.
categories:
  - Electronics
date: '2021-08'
tags:
  - Arduino
  - Ultrasonic sensor
  - Servo
  - Keypad
  - Prototype

github: https://github.com/Elisheva-Shiri/Safebox-main

cover: /projects/safe-box/cover.webp
coverAlt: A cardboard safe with a keypad, a red button, a digital display and a servo lock

gallery:
  - src: /projects/safe-box/demo.mp4
    poster: /projects/safe-box/demo-poster.webp
    alt: Demonstrating the cardboard safe, entering a code and watching the serial interface on a laptop
    caption: The safe in action, with the code entered on the keypad and the interface on the serial monitor.
    keywords: [Demo]
  - src: /projects/safe-box/front.webp
    alt: A cardboard safe with a keypad, a red button, a digital display and a servo lock
    caption: The front, with a keypad, a button, a 7-segment display and a servo that works as the lock.
    keywords: [Interface, Prototype]
  - src: /projects/safe-box/inside.webp
    alt: Inside the cardboard safe, an Arduino Mega, wires and the servo, with an ultrasonic sensor on top
    caption: Inside, an Arduino, the servo lock and an ultrasonic sensor on top.
    keywords: [Electronics]
  - src: /projects/safe-box/prototype.webp
    alt: A hand holding a membrane keypad next to an Arduino and an ultrasonic sensor on a breadboard
    caption: The first prototype on the breadboard.
    keywords: [Prototype]
---

## How it works

- **Presence.** An ultrasonic distance sensor notices when someone comes close, and the safe
  wakes up.
- **Code.** The password is entered on a membrane keypad, and attempts are counted.
- **Lock.** A servo motor works as the bolt and opens only for the right code.
- **Feedback.** LEDs, a 7-segment display and a serial interface on the computer guide the user.

A fast cardboard prototype to test the interaction before building it in a sturdier material.
