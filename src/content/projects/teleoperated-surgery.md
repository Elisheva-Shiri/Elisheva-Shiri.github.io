---
title: Interaction in Teleoperated Surgery
summary: >
  A concept for robotic surgery, where the surgeon has lost the sense of touch and the team cannot
  see what the surgeon sees. Shared views, on-screen guidance and pseudo-haptic cues help close
  both gaps.
categories:
  - Haptics
  - Immersive Experience
date: '2024-06'
tags:
  - Pseudo-haptics
  - Guidance
  - Medical robotics
  - Interaction design
  - Bezalel

cover: /projects/teleoperated-surgery/cover.webp
coverAlt: Mockup of a simple drawing interface over a surgical camera view, with an area highlighted in blue

gallery:
  - src: /projects/teleoperated-surgery/slide-title.webp
    alt: 'Title slide: Interaction in Teleoperation Surgery, presented by Elisheva Shiri Decktor, over an illustrated operating room'
    caption: A conceptual interaction project on teleoperated surgery.
    keywords: [Concept, Interaction design]
  - src: /projects/teleoperated-surgery/slide-how-it-works.webp
    alt: Illustration of a surgeon at a remote console controlling robotic arms over a patient
    caption: In teleoperated surgery, the surgeon controls robotic instruments from a console away from the patient.
    keywords: [Teleoperation, Remote control]
  - src: /projects/teleoperated-surgery/slide-users.webp
    alt: Chart of how surgeons, nurses, anaesthesiologists and nurse anaesthetists rate their collaboration with each other
    caption: Surgeons, nurses and anaesthesia work as one team, but they rate their collaboration very differently.
    keywords: [Users, Teamwork, Research]
    credit: 'Chart: Makary et al., Journal of the American College of Surgeons 202 (5), 2006.'
  - src: /projects/teleoperated-surgery/slide-interaction.webp
    alt: A surgeon at a robotic surgery console while a nurse stands at the patient, and a team member watching monitors
    caption: The surgeon is immersed in the console. The team at the bedside sees only part of the picture.
    keywords: [Context, Operating room]
  - src: /projects/teleoperated-surgery/slide-interfaces.webp
    alt: Diagram of advanced interfaces between surgeon and surgical robot, including haptics, AI assistants, displays and AR/MR
    caption: The space of possible interfaces between the surgeon and the robot, from haptics and wearables to AR and AI assistants.
    keywords: [Landscape, Haptics, AR/MR]
    credit: 'Diagram: "Advanced user interfaces for teleoperated surgical robotic systems", Advanced Sensor Research 2 (4), 2023.'
  - src: /projects/teleoperated-surgery/slide-feedback-senses.webp
    alt: 'Slide listing tactile, visual and audio feedback next to a wheel of the five senses'
    caption: Replacing lost touch. Tactile, visual and audio feedback can stand in for it, which is the basis of pseudo-haptics.
    keywords: [Pseudo-haptics, Multisensory, Feedback]
  - src: /projects/teleoperated-surgery/slide-suggestion.webp
    alt: 'Suggestion slide: a tablet showing the nurse what the surgeon sees, a digital pen as the input tool, and a simple drawing interface'
    caption: The proposal. A tablet shows the nurse what the surgeon sees, with a digital pen and a simple drawing interface for marking it.
    keywords: [Proposal, Shared view, Digital pen]
  - src: /projects/teleoperated-surgery/slide-annotation-mockup.webp
    alt: Mockup of a basic drawing interface over a surgical camera view, with an area of tissue highlighted in blue
    caption: Drawing on the live view. A highlighted area becomes visual guidance that the whole team can share.
    keywords: [Guidance, Annotation, Mockup]
  - src: /projects/teleoperated-surgery/slide-challenges.webp
    alt: 'Challenge slide listing cognitive overload, real-time computing and latency'
    caption: The open challenges are cognitive overload, real-time computing and latency.
    keywords: [Challenges, Constraints]
---

## The problem

In teleoperated surgery, the surgeon sits at a console and controls robotic instruments inside the
patient. The approach is precise and minimally invasive, but it creates two gaps:

- **The surgeon loses touch.** Working through the robot, the surgeon cannot feel tissue the way
  their hands would.
- **The team loses sight.** Nurses and anaesthesia at the bedside cannot see what the surgeon sees
  in the console, even though they operate as one team. Members of the operating-room team rate
  their collaboration very differently: surgeons rate their teamwork with nurses far higher than
  nurses rate theirs with surgeons.

## Challenge 1: pseudo-haptics

When real force feedback isn't available, touch can be **suggested through the other senses**.
This is pseudo-haptic feedback: visual and audio cues, such as changes in colour, motion or sound
as an instrument meets tissue, that the brain reads as resistance and contact. The project maps
these alternative channels (**tactile, visual and audio feedback**) as ways to return a sense of
touch to the surgeon.

## Challenge 2: guidance

The proposal turns the surgeon's view into a **shared, annotatable space**:

- **A tablet** shows the nurse what the surgeon sees, in real time.
- **A digital pen** is the input tool.
- **A simple drawing interface** lets the team mark the live image: highlighting tissue, pointing
  to a location, outlining an area to avoid.

These marks work as **guidance**. The team can point instead of describe, and the surgeon gets
visual cues layered onto the scene. Those cues also act as a visual form of pseudo-haptic
feedback.

## Open challenges

- **Cognitive overload.** The surgeon is already fully immersed, so every added cue must earn its
  place.
- **Real-time computing.** Annotations must follow moving tissue on a live video feed.
- **Latency.** Any delay between drawing and seeing breaks trust in the guidance.

## Sources

- Makary, M. A., et al. "Operating room teamwork among physicians and nurses: teamwork in the eye
  of the beholder." _Journal of the American College of Surgeons_ 202 (5), 746–752, 2006.
- "Advanced user interfaces for teleoperated surgical robotic systems." _Advanced Sensor Research_
  2 (4), 2200036, 2023.
- Madhani, A. J. _Design of Teleoperated Surgical Instruments for Minimally Invasive Surgery_.
  PhD thesis, Massachusetts Institute of Technology, 1998.
- Wang, Z., et al. "Toward Intuitive Teleoperation in Surgery: Human-centric Evaluation of
  Teleoperation Algorithms for Robotic Needle Steering." _IEEE ICRA_, 2018.
- Ai, L., Kazanzides, P., Azimi, E. "Mixed reality based teleoperation robotics."
  doi:10.1049/htl2.12079.
- Lécuyer, A. "Simulating haptic feedback using vision: A survey of research and applications of
  pseudo-haptic feedback." _Presence: Teleoperators and Virtual Environments_ 18 (1), 2009.
