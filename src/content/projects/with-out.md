---
title: 'With/Out: The Sound of Me'
summary: >
  What am I, and what remains when I'm gone? Friends and family sent photos of a moment that is
  "me". Each photo was turned into sound, and by subtracting a version without me, what was left was
  the sound that is me.
categories:
  - Creative Coding
  - Art Installation
date: '2024-02'
dateEnd: '2024-06'
tags:
  - Image to sound
  - Signal processing
  - Spectrogram
  - Python
  - Identity
  - Bezalel

github: https://github.com/Elisheva-Shiri/Image2Sound

cover: /projects/with-out/cover.webp
coverAlt: Exhibition table with several screens and laptops showing photos of friends and a large spectrogram

gallery:
  - src: /projects/with-out/exhibition-screens.webp
    alt: Exhibition table with several screens and laptops showing photos of friends and a large spectrogram
    caption: The exhibition. The photos people sent of “me” play on many screens, with the sound they became shown as a spectrogram above.
    keywords: [Exhibition, Multi-screen]
  - src: /projects/with-out/with-and-without.webp
    alt: The same photo of the designer at a dinner table shown with her and with her erased, above a grid of waveforms and spectrograms
    caption: With and without. The same moment, once with me and once with me erased. Each version becomes a sound, and the difference between them is the sound of me.
    keywords: [Method, Subtraction]
  - src: /projects/with-out/exhibition-spectrogram.webp
    alt: Close-up of screens showing a pink and purple spectrogram above video of a crowd
    caption: Every piece of information becomes a colourful spectrogram, the bridge between the world of images and the world of sound.
    keywords: [Spectrogram, Sound]
  - src: /projects/with-out/exhibition-projection.webp
    alt: A projected portrait in shifting colours above a wall of screens and laptops
    caption: Portraits projected and transformed as their sound plays.
    keywords: [Projection, Transformation]
  - src: /projects/with-out/notebook-walkthrough.mp4
    poster: /projects/with-out/notebook-walkthrough-poster.webp
    alt: Screen recording scrolling through the code, with images, spectrograms and waveforms
    caption: Behind the scenes. Eight ways of turning an image into sound, each with its spectrogram and waveform.
    keywords: [Code, Process]
---

## The question

Our lives are full of randomness: which egg meets which sperm, the country we're born in, the
profession we choose, the relationships that take us to new places. Life's choices move between
complete determinism and a feeling of free will.

_With/Out_ explores the interplay between my surroundings and my place in the world, asking
**“What am I?”** and what will remain on the day I am no longer here.

## The method

I invited friends and family to send me a photo of a single moment that, in their eyes, is “me”.

Each photo is turned into sound. Using operators from signal and image processing and mathematical
equations, every piece of information becomes a colourful **spectrogram**. The spectrum makes it
possible to move between worlds, from image to sound.

Then comes the subtraction: each photo that contains me is compared with a version in which I have
been erased from the scene. What remains after subtracting one sound from the other is a distillation:
**the sound that is “me”**.

## The code

The notebook explores eight different ways to turn an image into sound: mapping pixel brightness to
frequency, FM and AM synthesis, frequency bands, beat-driven energy, a Karplus-Strong plucked-string
model, drones and pulses. It then processes every photo with every method in batch, generating
spectrograms, waveforms and audio, and finally turns the results into video for the exhibition.

_Made in the course Creating Research._
