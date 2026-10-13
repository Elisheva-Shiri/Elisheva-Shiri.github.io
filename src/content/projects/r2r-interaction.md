---
title: 'R2R Interaction: Playing Music with Your Body'
summary: >
  An interactive music experiment using a webcam. Words you show the camera set the mood, and
  gestures recognised by a neural network play the sounds.
categories:
  - Creative Coding
date: '2024-03'
dateEnd: '2025-05'
tags:
  - Computer vision
  - Machine learning
  - MediaPipe
  - LSTM
  - Python
  - Sound

cover: /projects/r2r-interaction/pipeline.webp
coverAlt: Diagram showing words leading to a mood and background music, and body movement leading to gestures and sounds

gallery:
  - src: /projects/r2r-interaction/pipeline.webp
    alt: 'Diagram: words read by the camera choose a mood and background music; the tracked body is recognised as gestures that trigger sounds'
    caption: Two layers of interaction. What you write sets the mood, and how you move plays the music.
    keywords: [System, Interaction flow]

# Cards, archive chapter, the two lenses and the body map (see README).
chapter: touch
order: 3
short: 'Your body as the instrument: written words set the mood, and gestures recognised by a neural network play the sounds.'
tools: ['MediaPipe', 'LSTM network', 'OCR', 'Python']
mechanics: 'MediaPipe follows the face, body and both hands. A stacked LSTM network, trained on my own recordings, recognises two gestures — “wow” and “sing” — and plays a drum or voice sample.'
human: 'The body is the instrument, with no controller and no keyboard: words held up to the camera set the mood, gestures play the sounds, and the height of a hand sets the volume.'
body:
  - at: whole
    dir: in
    label: 'Face, body and both hands, followed by the camera'
  - at: rhand
    dir: in
    label: 'Gestures play the sounds; hand height sets the volume'
  - at: ear
    dir: out
    label: 'Drum and voice samples over a mood track'
---

## The idea

What if your body were the instrument? R2R Interaction turns a webcam into a musical interface,
with no controllers and no keyboard, only words and movement.

## How it works

1. **Words → mood.** Hold up written words to the camera. Optical character recognition
   (EasyOCR) reads them, and they choose a mood: _happy_, _sad_ or _angry_. A matching background
   track starts looping.
2. **Body → tracking.** MediaPipe Holistic follows the face, body and both hands in real time, as
   1,662 keypoint values per frame.
3. **Gestures → sound.** I recorded my own training data (30 sequences of 20 frames for each
   gesture) and trained a stacked **LSTM neural network** to recognise two gestures, _wow_ and
   _sing_. When it detects one, a drum or voice sample plays on its own audio channel. In one
   version, the height of your hand controls the volume.

## Iterations

The project went through three versions: three gesture-triggered sounds, then two sounds with
hand-controlled volume, and then full action recognition, which is still in progress.

## Credits

The gesture-recognition pipeline is based on Nicholas Renotte's
[Action Detection for Sign Language](https://github.com/nicknochnack/ActionDetectionforSignLanguage)
tutorial, adapted from sign language to musical interaction.
