---
title: Electronics Fundamentals
description: A practical primer on voltage, current, resistance, and power, with the formulas used in low-voltage DC circuits.
---

Every circuit conversation comes back to four quantities: voltage, current,
resistance, and power. This page is a working reference for the rest of the
wiki. It covers low-voltage DC only.

## The four quantities

| Quantity | Symbol | Unit | What it describes |
| --- | --- | --- | --- |
| Voltage | V | volt (V) | Electrical potential difference between two points |
| Current | I | ampere (A) | Rate of charge flow through a conductor |
| Resistance | R | ohm (Ω) | Opposition to current flow |
| Power | P | watt (W) | Rate of energy transfer |

A useful mental model is water in pipes: voltage is pressure, current is flow,
and resistance is a narrow section of pipe. The analogy breaks down quickly, but
it is enough to reason about the first few circuits.

## Ohm's law

For a resistive element at a steady temperature:

```text
V = I × R
I = V / R
R = V / I
```

:::note[Worked example]
A 220 Ω resistor is connected across a 5 V supply.

- Current: `I = V / R = 5 / 220 ≈ 0.0227 A`, or about **22.7 mA**.
- Power in the resistor: `P = V × I ≈ 5 × 0.0227 ≈ 0.114 W`.

A common 0.25 W resistor is fine for this example. The numbers are illustrative;
measure your own supply and resistor before relying on them.
:::

## Power

Power can be calculated from any pair of the three quantities:

```text
P = V × I
P = I² × R
P = V² / R
```

The result matters for part selection. A resistor has a power rating, a
regulator has a thermal limit, and a wire has a current limit. A circuit can
have the correct voltage at every node and still overheat because a part is
dissipating more power than it can handle.

## Series and parallel

### Series

Components in series share the same current. Resistances add:

```text
R_total = R1 + R2 + R3 + …
```

The supply voltage is divided across the components in proportion to their
resistance. An unloaded divider made from `R1` and `R2` gives:

```text
V_out = V_in × R2 / (R1 + R2)
```

Any load connected to `V_out` changes the result. This is why a divider is a
poor power supply but a reasonable reference or measurement point.

### Parallel

Components in parallel share the same voltage. Their conductances add, so their
resistances combine as:

```text
1 / R_total = 1 / R1 + 1 / R2 + …
```

Two equal resistors in parallel give half the resistance of one. Two 10 kΩ
resistors in parallel are equivalent to 5 kΩ.

## Units and prefixes

| Prefix | Symbol | Multiplier | Example |
| --- | --- | --- | --- |
| kilo | k | × 1,000 | 4.7 kΩ = 4,700 Ω |
| milli | m | × 0.001 | 20 mA = 0.020 A |
| micro | µ | × 0.000001 | 100 µF = 0.0001 F |

Case matters: `m` is milli and `M` is mega. A 1 MΩ resistor is a million ohms;
1 mΩ is one thousandth of an ohm.

## Where this shows up on a breadboard

- **Supply rails are shared.** Every component that needs the same voltage
  connects to the same rail.
- **Ground is the reference.** Voltages are measured relative to a common
  ground. Two circuits that do not share a ground do not share a reliable signal.
- **Never connect a supply directly across another supply.** Check polarity and
  voltage before applying power.
- **Logic levels are not universal.** A 5 V Arduino output is not automatically
  safe for a 3.3 V input. Check the input's absolute maximum ratings.

## What to read next

- [Circuit Design](/circuit-design/) turns these ideas into a pre-power checklist.
- [DHT22 + Arduino UNO](/microcontrollers/dht22-arduino-uno-oled/) applies them
  to a real sensor and display.
- [Troubleshooting](/troubleshooting/) covers what to measure when a circuit
  does not behave as expected.

## Planned topics

Ohm's law and power are the foundation. Future pages will cover capacitor and
inductor behaviour, RC filters, diodes, transistors, and op-amps, each with
worked low-voltage examples and a clear note on what has been measured.
