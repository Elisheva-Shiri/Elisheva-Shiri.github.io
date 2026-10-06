---
title: 'Blazer Attack: A Hero with Parkinson''s'
summary: >
  A computer game about inclusion whose superhero lives with Parkinson's disease. The tremor isn't
  only part of the story, it's part of the controls, so players feel what everyday movement is like
  and see difference as a source of strength.
categories:
  - Game Development
date: '2025-02'
tags:
  - Python
  - Pygame
  - Inclusion
  - Educational game
  - Accessibility
  - Bezalel

cover: /projects/blazer-attack/cover.webp
coverAlt: Illustrated young superhero in a mask shooting flames, with an energy bar and a "Blazes Attack" button

gallery:
  - src: /projects/blazer-attack/gameplay.mp4
    poster: /projects/blazer-attack/gameplay-poster.webp
    alt: Gameplay of a pixel-art hero in a forest shooting at skeletons and slimes, with the aim and movement trembling
    caption: Real gameplay. The hero's movement and aim tremble on their own, so every shot takes effort.
    keywords: [Gameplay, Tremor mechanic]
  - src: /projects/blazer-attack/hero-art.webp
    alt: Illustrated young superhero in a mask shooting flames, with an energy bar and a "Blazes Attack" button
    caption: Concept art for Alon, a hero with a huge heart whose face hides behind an expression mask that never changes.
    keywords: [Character, Concept art]
  - src: /projects/blazer-attack/gameplay-enemies.webp
    alt: Pixel-art hero surrounded by trees, a slime and a skeleton, with the gun pointing at an angle
    caption: Enemies close in while the aim drifts. Steadiness has to be earned through movement.
    keywords: [Gameplay, Challenge]
---

## Games as a learning space

Research shows that video games can be a **social learning space**: players identify with
characters, try out roles and practise social skills. Superheroes in particular give children and
teenagers a sense of strength, courage and resilience, and serve as role models.

_Blazer Attack_ brings the two together, with a superhero whose difference is a **hidden
disability**.

## Parkinson's disease

Parkinson's is a progressive neurological disease that affects movement: uncontrolled tremor,
stiffness, a fixed facial expression (the "mask face"), shuffling walk, loss of balance and,
often, depression. Physical activity helps people keep and improve their abilities.

## The story

The city of **Brave Heart** has been taken over by the forces of darkness, which frighten and
confuse its helpless citizens. Our hero, **Alon**, is a warrior with a huge heart who hides his face
behind an _expression mask_ that never changes, even in the hardest moments. His hands tremble
slightly, but that doesn't stop him from fighting for good.

His mission: save the citizens, defeat the forces of darkness and show the world that sometimes our
difference is our greatest strength.

## The rules

- **Movement strengthens.** The more the player moves, the fuller the energy meter, and the
  stronger and faster the shots.
- **Standing still weakens.** If Alon stands still too long, his shots become slower and less
  accurate, just as the tremor increases when he doesn't move.
- **Superpower.** When the energy meter is full, Alon can launch a **Blaze Attack** in every
  direction at once.
- **Rescue.** Each level has citizens to save. Once rescued, they cheer Alon on and add to his
  strength.
- **The expression mask.** Small questions about other characters' feelings teach players about
  the challenges of emotional expression.
- **Goal:** defeat the final boss, the _Coward of Darkness_.

## The prototype

The playable prototype, written in Python with pygame, builds the tremor into the controls: every
fraction of a second, the hero's movement and the gun's aim get a small random push. Players
experience what it is like when a body doesn't do exactly what you ask, and that steadiness comes
through effort.

_Made in the course Design of Learning Aids, guided by Shlomi Eiger. The prototype is built on a
pygame "Vampire Survivor" tutorial._
