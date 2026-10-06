---
title: Robot Control Simulations
summary: >
  Control simulations from my robotics course, written in MATLAB. A differential-drive robot
  steers itself to a goal with a PID controller and swerves around obstacles. Three robots meet
  at one point, and linearised pendulums swing.
categories:
  - Creative Coding
date: '2022-02'
dateEnd: '2022-06'
tags:
  - MATLAB
  - PID control
  - Mobile robots
  - State space
  - Multi-robot systems

cover: /projects/robotics-control/cover.webp
coverAlt: Two plots of a robot's path from start to goal, one straight and one curving around two obstacles

gallery:
  - src: /projects/robotics-control/obstacles.gif
    alt: Animation of a robot driving from a green start mark to a red goal, curving around two pink obstacles
    caption: Go-to-goal around two obstacles. Near an obstacle the robot's target heading turns 90° away from it, then the PID steers it back towards the goal.
    keywords: [Obstacle avoidance, PID]
  - src: /projects/robotics-control/go-to-goal.gif
    alt: Animation of a robot driving in a straight line from the start to the goal
    caption: PID go-to-goal. The robot starts facing up, turns, and drives straight to the goal.
    keywords: [PID, Go-to-goal]
  - src: /projects/robotics-control/paths.webp
    alt: Two plots of the robot's path, a straight line without obstacles and a path that bends around two obstacles
    caption: Both paths side by side, with Kp = 6, Ki = 1 and Kd = 0.015.
    keywords: [Paths, Comparison]
  - src: /projects/robotics-control/rendezvous.gif
    alt: Animation of three robots, an x, a circle and a square, moving from different points until they meet at one point
    caption: Three-robot rendezvous. Each robot moves towards the others (a consensus system, x(t) = e^(At)·x₀), and all three meet at their average position.
    keywords: [Multi-robot, Consensus]
  - src: /projects/robotics-control/pendulum.gif
    alt: Animation of two pendulums of different lengths swinging at different rates
    caption: Two linearised pendulums, 0.5 m and 0.8 m long, solved in state space. The shorter one swings faster.
    keywords: [State space, Pendulum]
---

## The course

A robotics course on modelling and controlling dynamic systems. Each week I wrote MATLAB
simulations: numerical solutions of differential equations, P, PI and PID controllers, robot
motion, state-space models, linearisation and stability.

## Go-to-goal with PID

A **differential-drive robot** moves at a constant speed. Each step, it computes the heading
towards the goal, and a **PID controller** on the heading error turns it:

```matlab
phi_d(i) = atan2(y_d - y(i), x_d - x(i));
e(i)     = phi_d(i) - phi(i);
phi(i+1) = phi(i) + (K_p*e(i) + K_i*sum(e)*dt + K_d*diff_e/dt)*dt;
```

To **avoid obstacles**, when the robot comes within 0.5 m of one, its target heading is set 90°
away from the obstacle until it has passed. I generalised this to any number of obstacles. In
another script I swept 8,000 (P, I, D) combinations and scored each by its time of arrival and
how evenly the left and right wheels turned, to find the best gains.

## More than one robot

In the **rendezvous** problem, each robot moves towards the others. The whole system is
x′ = Ax, solved with the matrix exponential, so the robots all meet at one point. Another
version had the robots heading towards each other.

## Pendulums

Linearising the pendulum near its resting point gives a simple state-space model. I solved it
with eigenvalues and animated two pendulums of different lengths.

The animations here were re-rendered from my MATLAB code, using the same equations and
parameters.
