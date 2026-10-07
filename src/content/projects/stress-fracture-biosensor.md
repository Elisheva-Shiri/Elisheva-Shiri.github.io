---
title: 'Lab-on-a-Chip for Early Detection of Stress Fractures'
summary: >
  A wearable biosensor concept for athletes and soldiers. A microneedle patch continuously measures
  alkaline phosphatase (ALP), a blood marker of bone damage, so a stress fracture can be caught before
  the pain and the damage set in.
categories:
  - Biomedical Engineering
date: '2024-01'
dateEnd: '2024-07'
tags:
  - Biosensors
  - Lab-on-a-chip
  - Electrochemistry
  - Microneedles
  - Simulation
  - QuickField
  - BGU

pdf: /projects/stress-fracture-biosensor/stress-fractures-poster.pdf

cover: /projects/stress-fracture-biosensor/cover.webp
coverAlt: Diagram of a patch whose microneedle reaches a vein, with gold and platinum electrodes measuring alkaline phosphatase

gallery:
  - src: /projects/stress-fracture-biosensor/poster.webp
    alt: "The Stress Fractures poster, with radiographs of a healing fracture over nine months and the challenge proposal"
    caption: "The research poster: how a stress fracture looks over nine months, and the proposal for a lab-on-a-chip sensor that detects osteocalcin in a small sample."
    keywords: [Poster, Research]
    credit: "Radiographs from the cited literature"
  - src: /projects/stress-fracture-biosensor/concept-diagram.webp
    alt: Diagram of a patch whose microneedle reaches a vein, with gold and platinum electrodes measuring alkaline phosphatase
    caption: The concept. A patch on the leg with a microneedle that reaches the vein, where gold and platinum electrodes read the ALP level as an electric current.
    keywords: [Concept, Sensing principle]
  - src: /projects/stress-fracture-biosensor/potential-map.webp
    alt: Colour map of the electric potential between two parallel microelectrodes, from orange to blue
    caption: A simulated electric potential between the working and reference microelectrodes.
    keywords: [QuickField, Electrostatics]
  - src: /projects/stress-fracture-biosensor/field-map.webp
    alt: Colour map of the electric field around two parallel microelectrodes, concentrated at their tips
    caption: The electric field around the electrode pair, concentrated at the electrode tips.
    keywords: [Field map, Electrode design]
  - src: /projects/stress-fracture-biosensor/field-strength.webp
    alt: Line plot of field strength along the electrode gap, peaking near the middle
    caption: Field strength along the gap, peaking near the midpoint.
    keywords: [Field strength, Analysis]
  - src: /projects/stress-fracture-biosensor/field-gradient.webp
    alt: Line plot of the field gradient across the electrode gap, decreasing almost linearly
    caption: A near-linear field gradient across the gap.
    keywords: [Field gradient]
  - src: /projects/stress-fracture-biosensor/energy-density.webp
    alt: Line plot of electric energy density along the electrode gap
    caption: The energy-density profile, used to compare electrode geometries.
    keywords: [Energy density, Optimisation]
---

## The problem

Stress fractures are common among **athletes and combat soldiers**. Repeated loading damages the
bone faster than it can remodel. Today they are diagnosed by physical examination and imaging (X-ray,
CT, MRI), which depend on the patient reporting pain. By then, significant damage has already been
done, and continued training makes it worse.

## Choosing what to measure

When bone is damaged, the balance between the cells that build bone and the cells that break it down
shifts, and **alkaline phosphatase (ALP)** rises in the blood. I chose ALP over osteocalcin, whose
tests (ELISA, RIA) need large samples and complex lab steps. ALP levels are stable in men, which
suits the target population.

To read ALP, I compared enzyme substrates: pNPP, BCIP/NBT, Naphthol AS-MX, PAPP and 4-APP. I chose
**4-APP** for its sensitivity, specificity and **real-time electrochemical readout**.

## The sensor

- **Reaction.** ALP removes a phosphate group from 4-APP, and the product changes the current at the
  working electrode, so the current reflects the ALP level.
- **Electrodes.** A gold working electrode coated with 4-APP and a platinum counter electrode, as thin
  films made by photolithography and deposition on silicon or glass.
- **Models.** Faraday's law for the current, Michaelis-Menten enzyme kinetics and the Nernst equation.
- **Form factor.** A wearable patch, like an insulin patch, with a flexible, biocompatible microneedle
  about 1.2 mm long that samples blood from the great saphenous vein in the leg. An external
  controller on the skin reads the signal for continuous monitoring.

## Simulation

I modelled the electrode pair electrostatically in **QuickField** and tuned its geometry,
analysing the potential, the field strength and gradient, and the energy density across the gap.

## Next steps

The design works with nano- to picolitre volumes and enables passive, continuous monitoring. It
still needs in-vivo and clinical validation, and work on material durability, safety (preventing
4-APP from entering the body) and the control electronics.

_Made in the course Biosensors and Lab-on-a-Chip, Ben-Gurion University of the Negev, 2024._
