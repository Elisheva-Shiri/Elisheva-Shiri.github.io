---
title: Sheet Music Reader
summary: >
  An image- and signal-processing project that reads printed sheet music and plays it. The
  program finds the staves, removes the lines, detects each note head and its pitch, and turns
  the notes into sound that can be shifted up or down an octave.
categories:
  - Creative Coding
date: '2022-07'
dateEnd: '2022-10'
tags:
  - MATLAB
  - Octave
  - Image processing
  - Signal processing
  - Computer vision
  - Music
  - Python
  - OpenCV

cover: /projects/sheet-music-reader/cover.webp
coverAlt: Two staves with the detected notes marked in red, climbing up the treble and bass clefs

gallery:
  - src: /projects/sheet-music-reader/input-sheet.webp
    alt: A scanned page of sheet music with two systems of treble and bass staves and Hebrew lyrics
    caption: The input, a scanned page of sheet music (Hatikvah).
    keywords: [Input, Scan]
    credit: Public-domain sheet music used as test input
  - src: /projects/sheet-music-reader/inverted.webp
    alt: The same sheet turned to pure black and white and inverted, white notes on black
    caption: 'Step 1: thresholding to black and white, then inverting, so the notes are white on black.'
    keywords: [Threshold, Contrast]
  - src: /projects/sheet-music-reader/staves-only.webp
    alt: Only the horizontal staff lines left in white on black
    caption: 'Step 2: eroding with a long horizontal window (65 pixels) leaves only the staff lines, which tells the program where each stave is.'
    keywords: [Erosion, Staves]
  - src: /projects/sheet-music-reader/staves-split.webp
    alt: Three staves cut out of the page, each with its notes
    caption: 'Step 3: the page is split into separate staves.'
    keywords: [Segmentation]
  - src: /projects/sheet-music-reader/note-heads.webp
    alt: Black strips with small white dots where the solid note heads are
    caption: 'Step 4: eroding and dilating with a small disk, sized from the line spacing, keeps only the solid note heads.'
    keywords: [Morphology, Note heads]
  - src: /projects/sheet-music-reader/detected-notes.webp
    alt: Two staves with every detected note marked in red, a scale climbing in treble and bass clefs
    caption: 'Step 5: every detected note marked in red. Its height on the stave gives its pitch.'
    keywords: [Detection, Pitch]
---

## The goal

A program that **teaches you to read music by recognising notes and playing them**. Each note on
the stave stands for a clear frequency, so music is a natural subject for a signal-processing
course. The tools from the course can filter noise, apply low-pass and high-pass filters, or
shift the whole piece to another key.

## How it works

1. **Contrast.** The scanned sheet is turned to pure black and white with an automatic threshold,
   then inverted.
2. **Finding the staves.** Erosion with a long horizontal line removes everything except the five
   staff lines, so the program knows where each stave is and how far apart the lines are.
3. **Finding the notes.** Erosion and dilation with a small disk, sized from the line spacing,
   remove the stems and lines and keep the solid note heads.
4. **Reading the pitch.** The height of each note head relative to its stave lines gives the
   note, in the treble or bass clef.
5. **Playing.** The notes become tones, and the whole piece can be raised or lowered an octave or
   by any interval.

## Testing

The plan was to compare **smoothing against contrast enhancement**, to clean out dirt and stains
added on purpose, and to aim for 90% of notes read correctly. Results were shown as spectrograms
before and after filtering. I wrote the reader in MATLAB, adapted it to run in Octave, and tested
it on several sheets, from simple scales to full songs.

## Next: a Python version

I started rewriting the reader in **Python** with **OpenCV**: a class that loads the sheet,
converts it to grey, plots its histogram, blurs it with a Gaussian filter, and marks the detected
lines, notes and text on the image.

Final project for **Signal and Image Processing** with Dr. Zeev Wizman, at Shenkar.
