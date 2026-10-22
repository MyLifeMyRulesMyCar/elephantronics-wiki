---
title: Circuit Design
description: A practical pre-power checklist for low-voltage circuits, covering power budgets, grounds, decoupling, logic levels, and first power-up checks.
---

Most destroyed components are not killed by a difficult design problem. They are
killed by a supply connected backwards, two grounds that were never joined, or a
part run outside its ratings. This section collects the checks worth doing
before a circuit is powered for the first time.

## Before you draw the schematic

Write down the answers to four questions:

1. **What is the supply?** Voltage, current limit, connector, and polarity.
2. **What are the loads?** Every part that draws current, including displays,
   radios, motors, and status LEDs.
3. **What are the logic levels?** Which devices are 5 V, which are 3.3 V, and
   which pins are inputs versus outputs.
4. **What happens if it fails?** A shorted sensor is annoying; a shorted battery
   is dangerous. Add protection accordingly.

If any answer is "I will find out later", stop and find out now.

## Power budget

Add the typical and worst-case current for each load. Compare the total with the
supply's continuous rating, not its peak marketing number.

| Load | Typical current | Worst case | Notes |
| --- | --- | --- | --- |
| Microcontroller board | Board-dependent | Peak during radio transmit | Check the board documentation |
| Sensor | Milliamps | Depends on the part | DHT22-family sensors are low current |
| OLED display | Tens of milliamps | All pixels on | Varies with module and brightness |
| Motors | No-load current | Stall current, often far higher | Never power from the logic supply |

The exact numbers are not the point. The point is that a supply rated for the
sum of typical currents may still brown out when a motor starts or a radio
transmits.

:::caution[Use a separate motor supply]
Motor stall currents are much larger than running currents. Power motors from a
dedicated supply or driver, join the grounds deliberately, and keep the motor
current out of the logic board's supply path.
:::

## Grounds and returns

- **Join the grounds.** Two boards that exchange signals need a common reference.
  A signal wire without a ground return is not a circuit.
- **Think about return paths.** High-current returns should not share a thin
  wire with a sensitive analog reference.
- **Star grounds for mixed loads.** Connect noisy loads and sensitive loads at a
  common point rather than daisy-chaining them along the same trace.

## Decoupling and bulk capacitance

Digital parts draw short current spikes when they switch. A small ceramic
capacitor placed close to each IC's supply pins gives those spikes a local
source. A larger electrolytic capacitor near the supply input covers slower
load changes.

Common practice is 100 nF per IC supply pin plus a bulk capacitor on the rail.
The right values depend on the parts; check the datasheet and the reference
design rather than treating those numbers as universal.

## Voltage, polarity, and logic levels

- Verify the **absolute maximum** and **recommended operating** ratings, not just
  the nominal voltage.
- Check connector polarity twice. Many JST and barrel connectors exist in
  centre-positive and centre-negative variants.
- A 5 V output can destroy a 3.3 V input. Use a level shifter or a resistor
  divider where appropriate, and check that the signal speed survives the
  translation.
- Do not back-power a board through its I/O pins. Power it through its intended
  input.

## Protection

Add protection where a mistake is likely:

- A fuse or resettable polyfuse on the supply input.
- Reverse-polarity protection for battery-powered builds.
- A series resistor or TVS diode on exposed signal lines.
- Flyback diodes across inductive loads such as relays and motors.

Protection components have their own limits. A polyfuse that never trips is not
protecting anything, and a diode rated below the load current will fail short.

## First power-up

1. Inspect the board for solder bridges, stray wire strands, and reversed parts.
2. Check continuity between the supply rails before connecting power. A beep
   between VCC and GND is a short.
3. Set a bench supply to the expected voltage with a low current limit if you
   have one. Otherwise use the intended supply and be ready to disconnect it.
4. Measure the rail voltage at the load, not only at the supply.
5. Check for hot parts and smell. If anything heats unexpectedly, disconnect
   power immediately.
6. Only then connect the microcontroller and start testing signals.

## Planned topics

- Schematic capture conventions and readable net names.
- PCB layout basics: return paths, trace width, and connector placement.
- Power supply topologies for small projects.
- ESD, fusing, and reverse-polarity protection in more depth.
- Reading a datasheet's absolute maximum ratings without guessing.
