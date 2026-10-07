---
title: Industrial Robot Pick and Place
summary: >
  Programming a Universal Robots collaborative arm with an OnRobot gripper to pick blocks from a
  conveyor and place them in order, first in the URSim simulator, then on the real robot. Later,
  muscle signals (EMG) from the arm were added, so each hand movement triggers a programmed robot
  movement.
categories:
  - Electronics
date: '2023-05'
dateEnd: '2025-03'
tags:
  - Universal Robots
  - URSim
  - Robotics
  - Pick and place
  - Automation
  - EMG
  - MyoWare

cover: /projects/industrial-robot/cover.webp
coverAlt: A Universal Robots arm with an OnRobot gripper above a conveyor belt and three white blocks

gallery:
  - src: /projects/industrial-robot/emg-gestures.mp4
    poster: /projects/industrial-robot/emg-gestures-poster.webp
    alt: A hand with EMG electrodes on it making different gestures while a plotter on the laptop shows muscle signal peaks
    caption: 'Reading muscle signals with EMG electrodes. Each hand movement makes a distinct pattern of peaks, which is mapped to a robot movement.'
    keywords: [EMG, Gestures]
  - src: /projects/industrial-robot/myoware-sensor.webp
    alt: A red triangular MyoWare muscle sensor board held in a hand, with its cables
    caption: 'The MyoWare muscle sensor that reads the EMG signal.'
    keywords: [Sensor, Hardware]
  - src: /projects/industrial-robot/pick-and-place.mp4
    poster: /projects/industrial-robot/pick-and-place-poster.webp
    alt: The robot arm picking white blocks from a conveyor belt and placing them on a tray
    caption: The robot picks blocks from the conveyor and places them in order on the tray.
    keywords: [Pick and place, Robot]
  - src: /projects/industrial-robot/pick-and-place-2.mp4
    poster: /projects/industrial-robot/pick-and-place-2-poster.webp
    alt: Another run of the pick-and-place program
    caption: Another run of the program.
    keywords: [Testing]
  - src: /projects/industrial-robot/ursim-program.mp4
    poster: /projects/industrial-robot/ursim-program-poster.webp
    alt: The URSim simulator on a screen, showing the program tree and a 3D view of the arm moving through waypoints
    caption: The program in the URSim simulator, with the program tree and the arm moving through its waypoints.
    keywords: [URSim, Simulation]
  - src: /projects/industrial-robot/ursim-waypoints.webp
    alt: The URSim screen with a robot program tree of waypoints and the 3D arm
    caption: 'The program tree, a loop of MoveL and MoveP steps through named waypoints.'
    keywords: [URSim, Waypoints]
  - src: /projects/industrial-robot/ursim-program-tree.webp
    alt: The URSim program on a screen, showing the waypoint list
    caption: 'The waypoint list in URSim.'
    keywords: [URSim, Program]
---

## The task

Program an industrial **collaborative robot**, a Universal Robots arm with an **OnRobot gripper**,
to pick blocks from a **conveyor belt** and place them in order on a tray.

## How

The program was written and tested in **URSim**, Universal Robots' simulator, which runs in a
virtual machine. In the simulator the arm moves through the same waypoints, gripper actions and
conveyor steps, so the motion could be checked safely before running it on the real robot in the
lab.

## Controlling the robot with muscles

In a later stage (2025), I added **EMG** control. A **MyoWare** muscle sensor with electrodes on
the arm reads the electrical activity of the muscles. Each hand movement produces its own pattern
of signal peaks, and each one is **pre-programmed to a robot movement**, so the arm can be driven
by moving your hand.
