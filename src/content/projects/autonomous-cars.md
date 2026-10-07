---
title: Self-Driving Cars on a Ring Road
summary: >
  A traffic simulation of self-driving cars on a ring road. Each car follows the one in front with
  a car-following model, and the project explores how a single automated car can smooth out the
  stop-and-go waves that human drivers create.
categories:
  - Creative Coding
date: '2022-05'
dateEnd: '2022-08'
tags:
  - Python
  - Traffic simulation
  - SUMO
  - Autonomous vehicles
  - Control

cover: /projects/autonomous-cars/cover.webp
coverAlt: A traffic simulator on a green background showing an oval ring road with cars on it

gallery:
  - src: /projects/autonomous-cars/ring-road-sim.webp
    alt: A traffic simulator showing an oval ring road on a green background, with small cars spread around it
    caption: The ring road in the simulator, August 2022. Cars drive in a loop, each following the one in front.
    keywords: [Simulation, Ring road]
  - src: /projects/autonomous-cars/car-following-code.webp
    alt: A screen of Python code with a car-following function that finds the leader car and computes acceleration from speed and distance
    caption: The car-following model in Python. Each car finds the car in front and sets its acceleration from its speed, the speed difference and the gap.
    keywords: [Python, Car following]
  - src: /projects/autonomous-cars/intersection-code.webp
    alt: A screen of Python code computing car speed, steering angle and position, with comments about the safety zone and intersections
    caption: Steering and position updates, with a safety zone around each car and rules for intersections.
    keywords: [Python, Kinematics]
---

## The problem

On a ring road, human drivers create **stop-and-go waves**. One driver brakes a little, the next
brakes a little more, and a traffic jam appears with no obstacle at all. Field experiments have
shown that a single automated car, driving smoothly, can absorb these waves, so the whole ring
uses less fuel and brakes less.

## The simulation

I built a simulation of cars on a ring road. Each car follows a **car-following model**: it looks
only forward, keeps a safe distance and sets its acceleration from its own speed, the speed
difference with the car in front and the gap between them, so there is no overtaking and the
cars keep their order. I wrote the model and the kinematics (speed, steering angle and position)
in Python, with a safety zone around each car and rules for intersections. I studied the ring in
**SUMO**, the open-source traffic simulator, to see how one controlled car changes the flow.
