---
title: Microcontrollers
description: An overview of microcontroller boards used in Elephantronics tutorials, including the Arduino UNO, ESP32, and RP2040, with guidance on choosing a board.
---

A microcontroller is a complete small computer on a single chip: processor,
memory, and input/output peripherals. Add a power supply, a clock, and a way to
program it, and you have a board that can read sensors, drive outputs, and run
the same program every time it is powered on.

Most beginner projects do not need an operating system. A microcontroller runs
one program directly on the hardware, which makes timing predictable and
power consumption low.

## Common board families

| Family | Typical logic level | Wireless | Notes |
| --- | --- | --- | --- |
| Arduino UNO (classic, ATmega328P) | 5 V | No | Large library ecosystem; 5 V logic is convenient for older sensors |
| ESP32 | 3.3 V | Wi-Fi and Bluetooth | Fast, dual-core variants, built-in wireless |
| RP2040 (Raspberry Pi Pico) | 3.3 V | No | Dual-core, flexible I/O, low cost |
| STM32 | 3.3 V (varies by board) | Depends on board | Wide range of parts; often used with STM32Cube |

The logic level is the voltage used by the GPIO pins. It is not the same as the
board's input supply range. Check both before connecting anything.

:::caution[Verify your board]
Board names are not pinouts. "ESP32 DevKit" covers several layouts, and clone
Arduino boards may use different USB-serial chips. Always confirm the pin
labels, logic level, and supply limits for the exact board in front of you.
:::

## Choosing a board

Start with the constraint that matters most:

- **5 V sensors and shields:** a classic Arduino UNO is often the shortest path.
- **Wi-Fi or Bluetooth in the project:** an ESP32 removes the need for a separate
  radio module.
- **Deterministic timing and lots of GPIO:** an RP2040 or STM32 board is worth
  considering.
- **Linux tools, cameras, or AI models:** a single-board computer is a better fit
  than a microcontroller. See [Single Board Computers](/single-board-computers/).

There is no universally "best" board. The useful question is which one matches
the voltage, connectivity, and power budget of the project.

## Start with a complete build

The first full tutorial wires a DHT22 temperature and humidity sensor and an I2C
OLED display to an Arduino UNO:

[Build the DHT22 + Arduino UNO tutorial →](/microcontrollers/dht22-arduino-uno-oled/)

It covers the example pin map, the libraries, the sketch, and the checks to run
when the display stays blank. The tutorial is marked as a draft: verify the
wiring against your own modules before powering up.

## Planned topics

- ESP32: toolchain setup, Wi-Fi, and deep sleep, with the same DHT22 sensor as a
  comparison project.
- RP2040: programming with the Arduino core and with MicroPython.
- Reading a datasheet: absolute maximum ratings, recommended operating
  conditions, and the pins that are not GPIO.
- Logic-level shifting between 5 V and 3.3 V devices.
