---
title: Visible Light Communication with a Commercial RGB LED
summary: >
  A research review of sending data through ordinary lighting. The lamp that lights the room
  also carries information, by changing its brightness faster than the eye can notice. The
  article explains the physics and the modulation behind it, and analyses an experiment that
  reached 806 Mbit/s with an off-the-shelf RGB LED.
categories:
  - Electronics
date: '2021'
tags:
  - Optical communication
  - Visible light communication
  - RGB LED
  - Photodiode
  - QAM
  - DMT
  - WDM
  - Research review
collaborators:
  - Dr. Gabriel Dorfman

cover: /projects/visible-light-communication/cover.webp
coverAlt: A ceiling lamp whose cone of red, green and blue light carries ones and zeros down to a small photodiode on a desk

gallery:
  - src: /projects/visible-light-communication/link-diagram.webp
    alt: 'Block diagram: a computer feeds a signal generator, an amplifier and a bias tee that drive an RGB LED; the light crosses 8 to 30 cm to a lens and photodiode, then a low-pass filter and an oscilloscope lead back to the computer'
    caption: 'The link I analysed, redrawn: from the computer to light and back.'
    keywords: [Block diagram, Transmit, Receive]
  - src: /projects/visible-light-communication/data-rates.webp
    alt: 'Line chart of data rate against distance for the red, blue and green channels: 806, 707 and 639 Mbit/s at 8 cm, falling to 397, 132 and 171 Mbit/s at 30 cm'
    caption: 'Data rate of each colour at the three distances. The red channel holds up best as the light gets weaker.'
    keywords: [Results, Data rate]

# Cards, archive chapter, the two lenses and the body map (see README).
short: 'A research review of sending data through ordinary lighting: an RGB LED, a photodiode, and up to 806 Mbit/s.'
chapter: research
order: 11
tools: ['RGB LED', 'Si-PIN photodiode', 'QAM over DMT', 'WDM']
mechanics: 'Each colour of a commercial RGB LED is a separate channel. Data is spread over 128 subcarriers in a 200 MHz band (QAM over DMT), and a silicon PIN photodiode behind a lens turns the light back into a signal.'
human: 'The same light you read by carries the data. The changes in brightness are too small and too fast for the eye to notice, and because light does not pass through walls, the data stays in the room.'
body:
  - at: above
    dir: in
    label: 'The ceiling lamp is also the transmitter'
  - at: eyes
    dir: out
    label: 'Light to see by, flickering with data too fast for the eye to notice'
  - at: front
    dir: out
    label: 'A photodiode on the desk receives the data'
---

## The idea

Lamps are everywhere: in ceilings, screens, traffic signs and car headlights. **Visible light
communication (VLC)** uses them to send data as well as to light a room, by changing the
brightness of an LED very quickly. A photodiode on the other side turns the light back into an
electrical signal.

It adds capacity next to radio rather than replacing it. The visible band offers about 300 THz
of licence-free bandwidth, it does not interfere with radio frequencies, and it can ride on
lighting that is already installed.

## Where the person is

- **You must not see it.** Nobody wants the light at home to flicker. The changes in brightness
  that carry the data are small and fast enough that the human eye does not notice them.
- **It has to stay good light.** In the experiment I analysed, the brightness at the receiver was
  kept at the levels recommended for a place where people work.
- **It stays in the room.** Light does not pass through walls, so a signal cannot be picked up
  from the next room: someone would have to stand inside, in line of sight of the lamp.

## What the article covers

The article starts from the physics and builds up to a working link:

1. **Light.** Electromagnetic waves, the visible spectrum, the inverse-square law, white light,
   colour temperature, illuminance and additive RGB colour mixing.
2. **The components.** How an LED emits light, how an RGB LED combines three chips, and how a
   silicon PIN photodiode turns light into current.
3. **The electronics around them.** Bias and bias tees, DC coupling, low-pass filtering and
   amplifying the received signal.
4. **Communication.** Bits, bit error ratio, bandwidth, the Shannon limit, noise and
   signal-to-noise ratio, and forward error correction.
5. **Modulation.** Amplitude modulation, quadrature amplitude modulation (QAM), discrete
   multitone (DMT), and wavelength division multiplexing (WDM), which sends a separate data
   stream on each colour.

## The experiment I analysed

The second part reviews one experiment in detail: a one-way link built at the Fraunhofer Heinrich
Hertz Institute in Berlin (Kottke et al., 2012).

- **Transmitter.** A commercially available RGB LED with red, green and blue chips, driven by a
  custom amplifier with a modulation bandwidth of up to 180 MHz.
- **Receiver.** A silicon PIN photodiode with an active area only 0.8 mm across, behind a glass
  lens, followed by a 200 MHz low-pass filter and an oscilloscope.
- **Signal.** QAM over DMT with 128 subcarriers in a 200 MHz band. The number of bits and the
  power on each subcarrier were adjusted again and again until the error ratio met the target.
- **Three distances, three light levels.** 8 cm (2,200 lux, a brightly lit spot), 20 cm (750 lux,
  typical office lighting) and 30 cm (320 lux, slightly below the recommended level).

| Distance | Red | Green | Blue |
| --- | --- | --- | --- |
| 8 cm | 806 Mbit/s | 639 Mbit/s | 707 Mbit/s |
| 20 cm | 639 Mbit/s | 462 Mbit/s | 391 Mbit/s |
| 30 cm | 397 Mbit/s | 171 Mbit/s | 132 Mbit/s |

The red channel does best because the photodiode responds more strongly to red light. As the
distance grows, less light arrives, the signal-to-noise ratio falls, and above 40 to 50 MHz the
green and blue signals can no longer be detected.

## My reading of it

The article presents its experiment and its measurements clearly. But I found points that a
reader who wants to build on it should not take on trust:

- **The link is short.** A single LED chip with a wide beam and no extra optics reaches tens of
  centimetres. The authors say a few metres could be reached with several LED modules, but they
  do not show it.
- **It is hard to reproduce.** The details of the custom LED driver, of the LED itself and of the
  lens (its material and where it sits) were not published.
- **The error-correction claim is not shown.** The measured error ratio is said to be correctable
  down to 10⁻¹⁶ with forward error correction, but the article does not demonstrate it.

When that work was published, 800 Mbit/s in one direction was a record. Since then, other methods
have reached 3.8 Gbit/s.

## About

Written with Dr. Gabriel Dorfman in the Electrical Engineering Department at Shenkar. The
figures on this page are my own drawings; the measurements in them are from the cited article.

## Sources

- Kottke, C., Habel, K., Grobe, L., Hilt, J., del Rosal, L. F., Paraskevopoulos, A., & Langer,
  K. D. "Single-channel wireless transmission at 806 Mbit/s using a white-light LED and a
  PIN-based receiver." _14th International Conference on Transparent Optical Networks (ICTON)_,
  IEEE, 2012.
- Grobe, L., et al. "High-speed visible light communication systems." _IEEE Communications
  Magazine_ 51 (12), 60–66, 2013.
- Elgala, H., Mesleh, R., & Haas, H. "Indoor optical wireless communication: potential and
  state-of-the-art." _IEEE Communications Magazine_ 49 (9), 56–62, 2011.
- European standard EN 12464-1: Lighting of indoor work places, 2003.
