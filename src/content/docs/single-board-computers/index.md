---
title: Single Board Computers
description: An overview of single-board computers for embedded Linux work, including the RISC-V Muse Pro Pi and the RK3576 Purple Pi OH2, and how they differ from microcontrollers.
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

## Boards in this wiki

| Board | Architecture | Vendor-rated AI | Focus |
| --- | --- | --- | --- |
| Muse Pro Pi | 8-core RISC-V | Up to 2 TOPS | AI, robotics, education |
| Purple Pi OH2 | Rockchip RK3576, 4 × Cortex-A72 + 4 × Cortex-A53 | 6 TOPS NPU | Industrial I/O, connectivity, edge AI |

Specifications are vendor-published and vary by SKU. Confirm the exact board
revision before designing around them.

## Power and thermal expectations

An SBC is a small computer. It needs a supply that can deliver the board's peak
current, not just its idle current, and it needs airflow or a heatsink if it will
run at full load. Undervoltage symptoms often look like software faults: random
reboots, dropped USB devices, or filesystem errors.

:::note[Check the vendor's power specification]
Power inputs are not interchangeable. Use the supply the board vendor specifies,
including its voltage and current ratings. The Purple Pi OH2 uses a DC 9–24 V
barrel jack, while many other boards use USB-C or USB power delivery.
:::

## Muse Pro Pi

The **Muse Pro Pi** is a RISC-V single-board computer aimed at AI, robotics,
education, and embedded projects. Start with the published specifications and
first-boot checks, then go deeper into performance and computer vision:

- [Introduction and first boot](/single-board-computers/muse-pro-pi/) — specifications, hardware interfaces, and setup.
- [Benchmark deep dive](/single-board-computers/muse-pro-pi/benchmark-deep-dive/) — storage, CPU, memory, thermal, and GPU results.
- [Object detection with YOLOv8](/single-board-computers/muse-pro-pi/object-detection/) — SpacemiT AI SDK, models, and real-world troubleshooting.

## Purple Pi OH2

The **Purple Pi OH2** is an industrial-oriented RK3576 board with dual Gigabit
Ethernet, M.2 NVMe, three MIPI CSI camera interfaces, a 40-pin header, and a
vendor-rated 6 TOPS NPU.

- [Overview and quick start](/single-board-computers/purple-pi-oh2/) — specifications, ports, connectivity, storage, camera, and audio.
- [GPIO and interfaces](/single-board-computers/purple-pi-oh2/gpio/) — pin map, digital I/O, I2C OLED, UART, and SPI.
- [Applications](/single-board-computers/purple-pi-oh2/applications/) — Docker, Node-RED, OpenCV, ROS 2, and Home Assistant.
- [Industrial protocols](/single-board-computers/purple-pi-oh2/industrial-protocols/) — Modbus RTU, MQTT, and CAN bus.
- [NPU and YOLOv5](/single-board-computers/purple-pi-oh2/npu/) — verify the NPU and run the RKNN vision demo.

## Planned topics

- Installing and updating operating-system images on both boards.
- Power monitoring, thermal management, and reliable unattended operation.
- Comparing local AI workloads on RISC-V and ARM boards.
- Choosing storage: eMMC, microSD, and NVMe.
