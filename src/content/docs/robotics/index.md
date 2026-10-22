---
title: Robotics
description: An overview of the robotics stack for small builds, covering actuators, motor drivers, sensors, power budgets, and safety.
---

A robot is a set of mechanical, electrical, and software systems that have to
agree with each other. Most beginner failures are not control-theory problems.
They are power problems: a motor driver that cannot supply stall current, a
battery that sags when the motors start, or a shared ground that was never
connected.

This section will build up the stack in that order, with working examples rather
than disconnected theory.

## The stack

| Layer | What it covers | Typical parts |
| --- | --- | --- |
| Power | Supply, protection, distribution, grounding | Battery, fuse, regulator, connectors |
| Actuation | Moving something | DC motors, steppers, servos, motor drivers |
| Sensing | Measuring the world | Encoders, IMUs, distance sensors, cameras |
| Control | Deciding what to do | Microcontroller or SBC, control loop, firmware |
| Mechanics | Holding it together | Frame, mounts, wheels, fasteners |
| Safety | Failing without damage | Current limits, fuses, emergency stop, software limits |

## Power comes first

Before choosing a motor driver, find the motor's **stall current** in its
datasheet. That is the current the motor will try to draw when it is stopped but
still powered, and it is often several times the running current. The driver and
supply must survive it, even briefly.

- Never power a motor from a microcontroller's 5 V or 3.3 V pin.
- Use a motor driver or H-bridge rated for the stall current, not the no-load
  current.
- Give motors their own supply, and join its ground to the logic ground.
- Add a fuse or current limit so a stalled motor does not cook the wiring.

:::caution[Stored energy and moving parts]
Motors, batteries, and springs can hurt you even at low voltage. Secure the robot
before testing, keep hair and cables away from shafts, and disconnect the battery
before changing wiring. Lithium batteries need their own protection and charging
rules; do not improvise them.
:::

## Control loops in one paragraph

A closed-loop controller measures the output, compares it with the target, and
adjusts the input. For a motor with an encoder, the error is the difference
between the desired speed and the measured speed. A proportional term reacts to
the current error, an integral term corrects accumulated offset, and a derivative
term damps oscillation. Tuning starts with the proportional term alone, at a low
output limit, on a robot that cannot drive off the bench.

## Planned topics

- Driving a DC motor with a PWM motor driver, including a current-limited bench
  test.
- Reading quadrature encoders and measuring speed.
- A first PID speed loop with plots from real data.
- I2C and SPI sensors: bus addresses, pull-ups, and shared buses.
- Running ROS 2 on a single-board computer and talking to a microcontroller.
- Power distribution and emergency-stop wiring for a small mobile robot.

Robotics pages will be marked as drafts until the build has actually been run.
Schematic-only examples will say so.

## Related sections

- [Microcontrollers](/microcontrollers/) for real-time I/O and motor control.
- [Single Board Computers](/single-board-computers/) for Linux, vision, and ROS.
- [Circuit Design](/circuit-design/) for power and grounding checks.
- [Troubleshooting](/troubleshooting/) when the robot does not move as expected.
