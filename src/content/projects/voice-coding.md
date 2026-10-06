---
title: 'What If We Coded by Voice?'
summary: >
  An interaction-design study of the coding experience in Visual Studio. Typing all day causes
  back pain, arthritis and eye strain, and it can lock out people with motor or cognitive
  difficulties. The proposed interaction is to speak your code comments instead of typing them.
categories:
  - Interaction Design
date: '2021-05'
dateEnd: '2021-07'
tags:
  - Interaction design
  - Experience analysis
  - Speech recognition
  - VS Code
  - Accessibility

github: https://github.com/Elisheva-Shiri/voice-comments

cover: /projects/voice-coding/cover.webp
coverAlt: A blue banner reading Voice comment generator for VSC, with a comment slash and a microphone icon

gallery:
  - src: /projects/voice-coding/icon.webp
    alt: A blue banner reading Voice comment generator for VSC, with two comment slashes and a microphone
    caption: Voice Comments, a VS Code extension that turns speech into code comments.
    keywords: [Extension, Speech]
    credit: Artwork from the open-source voice-comments project by 4a1c0 and contributors
---

## The experience

For an **Introduction to Interaction** course, I analysed the coding experience in **Visual
Studio**, both from person to machine and from machine to person:

- **Input.** Characters typed on the keyboard, with variables, strings, functions and operators,
  each with its own rules.
- **Feedback.** Colour-coding for the parts of the language, auto-correct, and reading from top to
  bottom.
- **Metaphor.** Keywords taken from everyday life and built into the language.

## The problem

Coding is almost all typing. Long hours at the keyboard cause **back pain, arthritis and vision
problems**. Limited motor skills can prevent use altogether, and the experience is harder for
people with cognitive difficulties such as dyslexia, dyscalculia or ADHD. The result is that a lot
of code ends up with few comments, or none at all.

## What if…?

…we could **speak** instead of type? I explored **voice comments**: you talk while you code, and
speech recognition turns your words into comments in the right place, inline or on the line
above. I forked and tested the open-source
[voice-comments](https://github.com/4a1c0/voice-comments) extension for VS Code, which uses
Python's SpeechRecognition on Mac and Linux and Microsoft's Speech SDK on Windows.
