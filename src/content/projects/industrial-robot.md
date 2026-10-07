---
title: Industrial Robot Pick and Place
summary: >
  Programming a Universal Robots collaborative arm with an OnRobot gripper to pick blocks from a
  conveyor and place them in order. The program was built and tested in the URSim simulator before
  running on the real robot.
categories:
  - Electronics
date: '2023-05'
dateEnd: '2023-06'
tags:
  - Universal Robots
  - URSim
  - Robotics
  - Pick and place
  - Automation

cover: /projects/industrial-robot/cover.webp
coverAlt: A Universal Robots arm with an OnRobot gripper above a conveyor belt and three white blocks

gallery:
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
