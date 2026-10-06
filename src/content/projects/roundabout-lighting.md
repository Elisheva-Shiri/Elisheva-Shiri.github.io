---
title: Roundabout Street Lighting
summary: >
  Road-lighting design for a roundabout and its approach roads in AGI32. Three solutions were
  compared, two with high-pressure sodium lamps and one with LED, for light level, uniformity,
  glare and energy. The LED design used 43% less power.
categories:
  - Immersive Experience
date: '2022-06'
dateEnd: '2022-07'
tags:
  - Lighting design
  - AGI32
  - Road lighting
  - EN 13201
  - Energy efficiency

cover: /projects/roundabout-lighting/cover.webp
coverAlt: A photorealistic top-down render of a lit roundabout with a green planted island and pedestrian crossings

gallery:
  - src: /projects/roundabout-lighting/render-top.webp
    alt: A photorealistic top-down render of a lit roundabout with a green planted island, a blue water feature and pedestrian crossings
    caption: The photorealistic render of the roundabout, with a planted island and pedestrian crossings.
    keywords: [Render, Roundabout]
  - src: /projects/roundabout-lighting/render-perspective.webp
    alt: A perspective render of the roundabout at night
    caption: The roundabout in perspective.
    keywords: [Render, Night]
  - src: /projects/roundabout-lighting/site-plan.webp
    alt: The plan of the roundabout and its four approach roads
    caption: The site, a roundabout with four approach roads, imported from AutoCAD.
    keywords: [Plan, AutoCAD]
  - src: /projects/roundabout-lighting/optimizer.webp
    alt: The AGI32 Roadway Optimizer window with layout settings and results
    caption: The Roadway Optimizer, working to EN 13201-3:2015 with an R-table and a 0.07 reflection factor, to find the best pole spacing.
    keywords: [AGI32, Optimisation]
  - src: /projects/roundabout-lighting/isolines-hps.webp
    alt: Isolux lines along the approach road and roundabout for the high-pressure sodium design
    caption: 'Option 1: high-pressure sodium, poles 39 m apart, balancing uniformity against glare.'
    keywords: [HPS, Isolux]
  - src: /projects/roundabout-lighting/isolines-hps-250w.webp
    alt: Isolux lines for the 250 W high-pressure sodium design with poles further apart
    caption: 'Option 2: a 250 W, 33,000-lumen sodium lamp, poles 45 m apart, with no needless over-lighting.'
    keywords: [HPS, Spacing]
  - src: /projects/roundabout-lighting/isolines-led.webp
    alt: Isolux lines for the LED design with poles in the central reservation and on the outer edges
    caption: 'Option 3: LED, with poles on the traffic island between the lanes and extra poles on the outer edges to control glare.'
    keywords: [LED, Layout]
  - src: /projects/roundabout-lighting/glare-points.webp
    alt: The roundabout plan with calculation points at the pedestrian crossings for the glare ratio
    caption: Glare at the pedestrian crossings, with observers up to 20 m from the roundabout. Point 17 was the worst.
    keywords: [Glare, Pedestrians]
  - src: /projects/roundabout-lighting/energy.webp
    alt: A bar chart of total power, 4750 W and 3500 W for the two sodium designs and 2700 W for LED
    caption: 'Energy: 4,750 W and 3,500 W for the two sodium designs, and 2,700 W for LED.'
    keywords: [Energy, Comparison]
---

## The brief

Light a roundabout and its approach roads with as few 10 m poles as possible:

- **Approach roads.** An average of at least 25 lux, with uniformity of at least 0.4 (minimum to
  average) and 0.2 (minimum to maximum).
- **Roundabout.** 50% more light, including the pedestrian crossings, with uniformity of at least
  0.5 and 0.25.
- **Maintenance factor.** 0.8 for discharge lamps and 0.9 for LED.

## The approach

I treated the road as a main collector street in a dark area, so it needs arterial-road lighting
and 50% more light at the junction, following the Israeli Ministry of Transport's road-lighting
guidelines. I worked to the **European standard**, with an observer 1.5 m high looking 60 m ahead.
**Uniformity and glare pull against each other**: the more even the light, the more glare.

## Three solutions

1. **High-pressure sodium.** Two rows, near side, poles 39 m apart.
2. **High-pressure sodium, 250 W (33,000 lm).** Poles 45 m apart, so nothing is over-lit.
3. **LED.** Poles on the 1.6 m traffic island between the lanes, about 21 m apart for an average
   luminance above 1.5. The threshold increment (TI) was too high in the lanes next to the island,
   so I spread the poles 1.5 times further apart and added fittings on the outer edges. The
   roundabout needed extra fittings because of how the LEDs spread their light.

## Results

The LED design used **2,700 W**, against 3,500 W and 4,750 W for the two sodium designs, 43% less
than the first. I also calculated the glare ratio for pedestrians on the crossings and made a
photorealistic render of the roundabout.

The final project of the **Optical Design** course at Shenkar.
