---
title: Start here
description: How to use the Elephantronics Wiki, choose a learning path, and interpret verification labels and example values.
---

The Elephantronics Wiki is a working knowledge base for electronics, embedded
Linux, robotics, and edge AI. It is organised as a learning path rather than a
product catalogue: each section builds on the one before it, and each article
tells you how far its content has been verified.

## Choose a path

| If you are… | Start with | Then |
| --- | --- | --- |
| New to electronics | [Electronics Fundamentals](/electronics-fundamentals/) | [DHT22 + Arduino UNO](/microcontrollers/dht22-arduino-uno-oled/) |
| Comfortable with a breadboard | [DHT22 + Arduino UNO](/microcontrollers/dht22-arduino-uno-oled/) | [Circuit Design](/circuit-design/) |
| Moving to embedded Linux | [Single Board Computers](/single-board-computers/) | [Muse Pro Pi](/single-board-computers/muse-pro-pi/) |
| Debugging a build | [Troubleshooting](/troubleshooting/) | [Circuit Design](/circuit-design/) |

## How to read a page

### Verification status

Tutorials begin with a short overview panel:

- **Draft — not yet verified** means the article was written from cited sources
  but has not been built and measured for this wiki. Wiring and code may still
  be correct; you are the verification step.
- **Reviewed** means the circuit or procedure was checked on hardware. The page
  should say what was tested.

There are no reviewed tutorials yet. Pages will be labelled only after a real
build has been checked, not because a draft has been proofread.

### Example values

Pin numbers, I2C addresses, resistor values, and serial output are examples
unless the page explicitly calls them requirements. Development boards often
look alike but break out different pins, and sensor modules from different
manufacturers can use different pin orders.

Before connecting anything:

1. Read the labels printed on the board and module.
2. Find the datasheet or pinout for the exact revision you own.
3. Confirm the supply voltage and logic level.

### Code blocks

Code examples use Starlight's native code blocks. Hover a block to copy it, and
look for the filename in the block header. Code is shown as a starting point;
compile it and read the warnings before uploading it to hardware.

### Sources and shop links

Technical claims link to their source. Vendor specifications are marked as
published values, not independent measurements. Some component lists link to
Elephantronics; these are convenience links, not a claim that a part is required
or in stock.

## Safety and scope

The wiki covers low-voltage DC electronics, microcontroller boards, and
single-board computers.

:::caution[Out of scope]
Mains voltage, high-voltage supplies, and high-current battery packs are not
covered. If a project needs mains power, use a certified module or adapter and
get help from someone qualified to work on it.
:::

Always disconnect power before rewiring a circuit. Check polarity before
connecting a supply, and do not leave a build powered while you are away from it.

## Next steps

- Read [Electronics Fundamentals](/electronics-fundamentals/) for the core
  quantities.
- Build the [DHT22 + Arduino UNO tutorial](/microcontrollers/dht22-arduino-uno-oled/).
- Use the [circuit design checklist](/circuit-design/) before your next power-up.
