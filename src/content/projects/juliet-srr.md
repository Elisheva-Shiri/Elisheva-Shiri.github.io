---
title: 'JULIET-SRR: Skin-Stretch Feedback for the Fingertip'
summary: >
  A wearable fingertip interface for multidirectional skin-stretch feedback. A five-gram,
  3D-printed parallel mechanism on the fingertip is driven by off-finger actuators through Bowden
  cables, for teleoperation and virtual interaction. It grew out of a design-research map of how
  technology reshapes the hand.
featured: true
categories:
  - Haptics
date: '2024-11'
dateEnd: '2026-01'
tags:
  - Design research
  - Rhizomatic mapping
  - Hand anatomy
  - 3D printing
  - Bezalel

collaborators:
  - Prof. Ilana Nisky (supervisor)
  - Noa Kadosh
  - Malte Kuhlmann
  - Tomer Fadael
  - Dr. Nicolás Navarro-Guerrero
  - Dr. Galit Katarivas Levy
  - Prof. David Zarrouk

github: https://github.com/Elisheva-Shiri/SRR_IK

cover: /projects/juliet-srr/cover.webp
coverAlt: Research board with images of gloves, a prosthetic thumb and illustrations of human evolution

gallery:
  - src: /projects/juliet-srr/device-video.mp4
    poster: /projects/juliet-srr/device-video-poster.webp
    alt: "The JULIET-SRR project video: the green fingertip module on a finger, the Bowden cables, 3D printing, the haptic rendering diagram and the workspace"
    caption: "The project video. A wearable fingertip interface for multidirectional skin-stretch feedback."
    keywords: [Video, Device]
  - src: /projects/juliet-srr/video-module-legs.webp
    alt: "Diagram of the fingertip module, a frame with three SRR legs and a moving platform with a dome-shaped tactor"
    caption: "The fingertip module: three SRR legs, a moving platform with a dome-shaped tactor, and a frame."
    keywords: [Mechanism, Tactor]
  - src: /projects/juliet-srr/video-printing.webp
    alt: "Five hands wearing the device on different fingers, with the wrist unit and cables"
    caption: "Tested across four non-thumb fingers, without finger-specific sizing."
    keywords: [Fabrication, 3D printing]
  - src: /projects/juliet-srr/poster-presentation.webp
    alt: "The research poster on finger-pair cutaneous feedback in stiffness perception, with the coloured 3D-printed mechanism held in front of it"
    caption: "Presenting the research poster, with the 3D-printed mechanism in hand."
    keywords: [Poster, Conference]
  - src: /projects/juliet-srr/kinematics-research.gif
    alt: "Animation of whiteboard sketches of the parallel mechanism, frames and a Denavit–Hartenberg table"
    caption: "Working out the kinematics on the whiteboard, summer 2024."
    keywords: [Kinematics, Process]
  - src: /projects/juliet-srr/mechanism-motion.gif
    alt: Animation of the yellow 3D-printed parallel mechanism with red legs, its centre platform moving between positions
    caption: "The finger mechanism in motion, January 2026. As the red legs move, the yellow fingertip platform shifts and tilts."
    keywords: [Mechanism, Motion]
  - src: /projects/juliet-srr/glove-parts.webp
    alt: "White 3D-printed glove parts laid out on a workbench: a curved hand plate, slotted straps, rows of finger segments and two small actuators"
    caption: "The glove parts, December 2025: a hand plate, straps, rows of finger segments and two actuators."
    keywords: [Glove, 3D printing]
  - src: /projects/juliet-srr/whiteboard-workspace.webp
    alt: The whiteboard of kinematics notes in the studio
    caption: "Working out the kinematics on the whiteboard: the working space, the forward and inverse kinematics, and a Denavit–Hartenberg table for each leg."
    keywords: [Process]
  - src: /projects/juliet-srr/board-question.webp
    alt: 'Research board asking: How can we show the deformations that technology will create in us in the future? With images of gloves, a prosthetic extra thumb and human evolution'
    caption: The research question. How can we show the deformations that technology will create in us in the future?
    keywords: [Research question, Speculative design]
    credit: "Includes: cover of Gloves and Glove-Making, Mike Redwood (Shire Publications, 2016); video still, Liberare (@liberare.co); The Third Thumb, Dani Clode (2017); a variation on Rudolph Zallinger's “March of Progress” (1965)."
  - src: /projects/juliet-srr/map-wall.webp
    alt: The research map printed and pinned across a white wall
    caption: The map printed and pinned up across a wall, ready to be read and rearranged.
    keywords: [Physical map, Studio wall]
  - src: /projects/juliet-srr/board-fingers.webp
    alt: 'Research board titled The Glove, Rhizomatic Research 2024, describing the role of each finger next to hand anatomy charts'
    caption: The role of each finger, mapped from hand anatomy. Which fingers grip, which steady, which add precision.
    keywords: [Hand anatomy, Function, Translated board]
    credit: 'Anatomy charts: The Hand, BarCharts, Inc. (2013).'
---

_JULIET-SRR is a larger haptic project. This page shows one part of it: the design research
behind the glove._

## The device

**JULIET-SRR** is a wearable fingertip interface that delivers **multidirectional skin-stretch
feedback**. The part on the finger is a **five-gram module**. The actuators stay off the finger,
and their motion reaches the fingertip through **Bowden cables**, so the hand keeps its natural
movement during teleoperation and virtual interaction.

- **Mechanism.** The fingertip module is a **three-leg SRR parallel mechanism** that moves a
  dome-shaped tactor across the fingertip, in a measured **8.3 × 8.9 mm** planar workspace. One
  module size fits every finger.
- **Fabrication.** It is FDM-printed in PLA+ without supports, designed for straightforward
  fabrication and easy assembly, and documented in a step-by-step guide.
- **Haptic rendering.** A camera tracks the fingertip in real time. When the finger moves into a
  virtual object, Hooke's law turns the displacement into an opposing force, the software computes
  the inverse kinematics and motor commands, and the device turns them into skin stretch.

## The study

We evaluated JULIET-SRR in a **two-alternative forced-choice stiffness-discrimination study**: 43
participants, four non-thumb fingers and eight feedback levels. Participants reached **81%**
accuracy, and the pooled point of subjective equality was **8.41 mm/m** against an 8.5 mm/m
standard, with no bias between fingers or setups.

## Where it began: the research

The project started as design research into how technology reshapes the hand.

### The question

How can we show the deformations that technology will create in us in the future?

### Method: a rhizomatic map

Instead of a linear process, the research grew as a **rhizome**, a non-hierarchical web where every
idea can connect to any other. Starting from gloves and glove-making, it branched into the anatomy
of the hand, the evolution of the primate hand, and the ways our bodies have changed alongside
the tools we use.

### The body keeps changing

The map traced how human bodies have adapted across eras:

- **Prehistory.** The discovery of fire brought changes to the human jaw, and the use of tools
  began to change the shape of the body.
- **The agricultural revolution.** Studies of farmers' arm bones from about 5,000 years ago trace
  the overall decline in strength since pre-agricultural times.
- **The industrial revolution.** The move to factory work and repetitive tasks, and more time
  spent indoors.
- **The modern era.** Some people are developing an extra artery in the forearm. There is evidence
  of shorter faces and of people born without wisdom teeth, possibly linked to changes in diet
  and lifestyle.

Today our hands are shaped by screens. Typing on a touchscreen relies mostly on the thumb or index
finger. Scrolling a smartphone means swiping up and down with the thumb. Gesture recognition uses
the whole hand.

### The role of the fingers

Each finger has its own job. The **thumb** opposes the other fingers and makes precise tasks
possible. The **index finger** adds precision and secondary strength. The **middle finger**, the
longest, carries heavy loads and keeps the hand steady. The **ring finger** completes the grip and
helps with delicate holds.

## The mechanism

The finger mechanism is a small **parallel robot**: three legs, each with a spherical joint and two
revolute joints (S-R-R), connect a base to a fingertip platform. I worked out its working space and
its forward and **inverse kinematics**, with a Denavit–Hartenberg table for each leg, and wrote code
that calculates the joint angles needed to reach a desired fingertip position.

### The concept

**A glove that shows the typical deformation**, built with 3D-printed aids. It imagines the hand
that technology is shaping: longer, more flexible fingers for typing and touch devices, and
stronger thumb muscles from using smartphones.

The idea was then tested physically with 3D-printed finger extensions. See
[What If? Imagining Different Fingers](../what-if-fingers/).

## Credits

This is my thesis work, supervised by **Prof. Ilana Nisky**. I carried out most of it, together
with and under her supervision: the design of the device, its software, the validation, the user
study and the analysis. A manuscript based on the thesis was submitted for publication.

- **Malte Kuhlmann** and **Dr. Nicolás Navarro-Guerrero** are partners in the
  [ROMEO project](https://www.l3s.de/research-at-l3s/all-projects/romeo/), which this thesis is
  part of, and took part in discussions throughout. Malte Kuhlmann also rebuilt the device in
  Germany, validating the assembly guide.
- **Noa Kadosh**, under the supervision of **Dr. Galit Katarivas Levy**, and **Tomer Fadael**
  helped refine earlier versions of the mechanism for 3D printing. Tomer Fadael also took part in
  brainstorming on the mechanism design.
- **Prof. David Zarrouk** advised on the kinematics of the parallel mechanism and its validation.
- **Ayal Regev** advised on the architecture of the parallel software pipeline, to lower its
  latency.

Thanks to the members of the Biomedical Robotics Lab, especially Dr. Shani Arusi, and to everyone
who took part in the experiments.

The research was partially funded by the Niedersächsisches Ministerium für Wissenschaft und Kultur
via the Volkswagen Foundation, under the programme zukunft.niedersachsen: Forschungskooperation
Niedersachsen–Israel (ROMEO, project No. 15-76251-5616/2023). It was supported by the Agricultural,
Biological and Cognitive (ABC) Robotics Initiative and the Zelman Center for Brain Science Research,
Ben-Gurion University of the Negev. The user study was approved by the Human Participants Research
Committee of Ben-Gurion University of the Negev, and participants gave written informed consent.

## Sources

- BarCharts, Inc. _The Hand_. BarCharts Publishing, 2013.
- Timothy M. Ryan and Colin N. Shaw. "Gracility of the modern _Homo sapiens_ skeleton is the result
  of decreased biomechanical loading." _PNAS_ 112 (2), 372–377, 2015.
  [doi:10.1073/pnas.1418646112](https://doi.org/10.1073/pnas.1418646112)
- Tracy L. Kivell, Pierre Lemelin, Brian G. Richmond and Daniel Schmitt (eds.). _The Evolution of
  the Primate Hand: Anatomical, Developmental, Functional, and Paleontological Evidence_.
  Springer, 2016.
- Mike Redwood. _Gloves and Glove-Making_. Shire Publications, 2016.

## Image credits

Research boards include images by others, collected for study:

- _The Third Thumb_ by Dani Clode, a 3D-printed extra robotic thumb (2017).
  ([TED talk](https://www.ted.com/talks/dani_clode_why_i_created_a_third_thumb))
- Video still from Liberare, an adaptive-clothing brand ([@liberare.co](https://www.tiktok.com/@liberare.co)).
- Book covers: _Gloves and Glove-Making_ (Shire Publications) and _The Evolution of the Primate
  Hand_ (Springer).
- Anatomy charts from _The Hand_ (BarCharts, Inc.).
- Variations on the "March of Progress", originally _The Road to Homo Sapiens_ by Rudolph Zallinger
  for Time-Life's _Early Man_ (1965).
