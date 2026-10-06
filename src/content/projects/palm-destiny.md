---
title: 'Palm Destiny: A Computer That Reads Your Future'
summary: >
  A fortune-telling installation where a computer reads your palm. A camera finds your heart, head
  and life lines, turns them into a palmistry reading, and AI turns the reading into a song about
  your destiny.
categories:
  - Creative Coding
  - Art Installation
date: '2024-07'
tags:
  - Computer vision
  - OpenCV
  - Generative AI
  - Python
  - Installation
  - Bezalel

cover: /projects/palm-destiny/cover.webp
coverAlt: A fortune-teller's table with a red cloth, a glowing candle, two face-shaped plant pots, crystals and tarot cards

gallery:
  - src: /projects/palm-destiny/installation.webp
    alt: A fortune-teller's table with a red cloth, a glowing candle, two face-shaped plant pots, crystals and tarot cards
    caption: The installation. A fortune-teller's table where the reader is a computer.
    keywords: [Installation, Atmosphere]
  - src: /projects/palm-destiny/palm-lines.webp
    alt: An open palm with its main lines traced in different colours
    caption: Palmistry's map of the hand. Each line is said to tell a different part of your story.
    keywords: [Palmistry, Research]
  - src: /projects/palm-destiny/reading-output.webp
    alt: Close-up camera image of a palm with detected lines drawn in green, blue and red, and a written reading at the top
    caption: The computer's reading. Detected lines are drawn in colour, and the reading is written over the image.
    keywords: [Computer vision, Output]
  - src: /projects/palm-destiny/presenting.webp
    alt: The designer standing in front of a projected screen of code, next to a laptop
    caption: Presenting the project, with the code that decides your “destiny” projected behind.
    keywords: [Presentation, Code]
---

## The idea

Palmistry claims to read the future in the lines of your hand. What happens when the fortune-teller
is a computer? _Palm Destiny_ turns palm reading into a data-driven ritual: the camera measures, the
code interprets, and AI sings the result back to you.

## How it works

1. **Are you ready?** The screen asks the visitor whether they're ready to hear their future.
2. **The camera looks.** The live image of the palm is processed with OpenCV: grayscale, blur, edge
   detection and contours.
3. **The lines are found.** Contours are sorted by where they sit on the palm into the **heart
   line**, **head line** and **life line**, and drawn in colour on the image.
4. **The reading.** The length and position of each line are matched to one of dozens of palmistry
   descriptions, such as _“Life Line: Moderately long. Indicates good overall health and a positive
   outlook.”_
5. **The song.** The reading becomes the lyrics of a song, generated with AI (Suno) in a
   _“mysterious, gypsy”_ style, titled _Palm Destiny_.

## Process

The notebook documents the whole journey: hand tracking with MediaPipe, masks to isolate the palm,
many rounds of edge-detection tuning, and finally the full pipeline from camera to song.

_Made in the course Data Driven Design._
