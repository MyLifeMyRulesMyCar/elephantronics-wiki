---
title: Single Board Computers
description: An overview of single-board computers for embedded Linux work, including the RISC-V Muse Pro Pi, and how they differ from microcontrollers.
---

A single-board computer (SBC) puts a processor, memory, storage interfaces, and
I/O connectors on one board and runs a full operating system, usually Linux.
That makes it a different tool from a microcontroller: you get processes, file
systems, networking, and package managers, but you also get boot times, power
draw, and thermal behaviour that need planning.

## SBC or microcontroller?

| Need | Better fit |
| --- | --- |
| Read a sensor and switch a relay, every time, with minimal power | Microcontroller |
| Run Python, a web service, or a camera pipeline | Single-board computer |
| Deterministic microsecond timing | Microcontroller |
| Local AI inference or a desktop environment | Single-board computer |
| Battery-powered device that sleeps for months | Microcontroller, usually |

Many projects use both: an SBC for the user interface and connectivity, and a
microcontroller for real-time I/O. They can talk over UART, I2C, SPI, or USB.

## Power and thermal expectations

An SBC is a small computer. It needs a supply that can deliver the board's peak
current, not just its idle current, and it needs airflow or a heatsink if it will
run at full load. Undervoltage symptoms often look like software faults: random
reboots, dropped USB devices, or filesystem errors.

:::note[Check the vendor's power specification]
USB power delivery, barrel jacks, and USB-C ports are not interchangeable. Use
the supply the board vendor specifies, including its voltage and current
ratings. A charger that works for a phone may not negotiate the profile the
board expects.
:::

## Muse Pro Pi

The **Muse Pro Pi** is a RISC-V single-board computer aimed at AI, robotics,
education, and embedded projects. Our introduction covers the published
specifications, what to prepare for first boot, and the checks to make before
connecting anything to its 40-pin header.

[Muse Pro Pi: introduction and first boot →](/single-board-computers/muse-pro-pi/)

## Planned topics

- Installing and updating Bianbu Linux on the Muse Pro Pi.
- Using the 40-pin GPIO header with Python and Linux.
- Comparing local AI workloads on RISC-V and ARM boards.
- Power monitoring, thermal management, and reliable unattended operation.
- Choosing storage: eMMC, microSD, and NVMe.
