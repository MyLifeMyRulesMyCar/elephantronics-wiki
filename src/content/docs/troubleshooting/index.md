---
title: Troubleshooting
description: A repeatable first-checks routine for low-voltage electronics, from supply voltage and grounds to logic levels and isolating a faulty stage.
---

When a circuit does not work, the useful move is to stop changing things and
start measuring. Work from the power source outward, change one thing at a time,
and write down what you observed. A short list of measurements is worth more than
another round of re-uploading the same sketch.

## The first-checks routine

1. **Power off and inspect.** Look for reversed connectors, loose jumpers, solder
   bridges, and components that are hot or discoloured.
2. **Check the supply.** Measure the voltage at the load, not just at the supply
   terminals. Confirm polarity and that the supply can deliver the required
   current.
3. **Check the grounds.** Every board that shares a signal must share a ground.
   Measure continuity between the ground points with power removed.
4. **Check continuity and shorts.** With power removed, verify there is no short
   between the supply rails and that each signal reaches the intended pin.
5. **Check logic levels.** Confirm that a 5 V signal is not driving a 3.3 V
   input, and that a pin configured as an output is not being driven by another
   output.
6. **Check the software.** Confirm the correct board and port, the expected baud
   rate, and that the code actually reached the line you think it did.
7. **Isolate.** Disconnect stages until the fault disappears. Replace the
   suspect stage with a known-good one, or test it alone.
8. **Stop if something heats.** Disconnect power immediately. A hot part is a
   fault, not a warm-up.

## Symptom → first check

| Symptom | Check first | Why |
| --- | --- | --- |
| Nothing powers on | Supply voltage at the board, polarity, fuse | A good supply at the plug can still be a bad cable or connector |
| Board reboots randomly | Supply sag under load, USB cable, current limit | Radios and motors draw short bursts that a weak supply cannot hold |
| Display stays blank | Power, ground, I2C address, SDA/SCL order | A blank display is usually a bus problem, not a drawing problem |
| Sensor returns `NaN` or zeros | Data line, power, pull-up, sensor type | The library cannot decode a missing or malformed response |
| Serial Monitor is empty | Port, baud rate, data cable | Charge-only cables have no data lines |
| Servo or motor twitches | Shared supply, ground return, driver rating | Motor current is disturbing the logic supply |
| Communication works briefly then fails | Bus pull-ups, wire length, address conflict | I2C and SPI are sensitive to capacitance and multiple devices |
| Code runs but output is wrong | Pin mapping, logic inversion, timing | The program may be correct for a different board revision |

## Measure, do not guess

- **Voltage:** measure at the point of load, with the circuit running. A rail that
  reads 5.0 V unloaded can collapse when a display or radio starts.
- **Continuity:** use the resistance or continuity mode with power removed. A
  beep between VCC and GND means a short.
- **Current:** if your supply has a current readout, compare it with the expected
  budget. A sudden jump suggests a short or a stalled motor.
- **Signals:** a multimeter is enough to confirm a static logic level. For buses
  and PWM, a logic analyser or oscilloscope is the right tool.

## Common mistakes

- Two boards powered from separate supplies with no common ground.
- A 5 V sensor output connected directly to a 3.3 V input.
- A motor powered from the same 5 V rail as the microcontroller.
- I2C devices with the same address on one bus.
- A breadboard rail split in the middle but treated as continuous.
- Code for one board revision uploaded to another.

:::note[Change one variable at a time]
If you rewire three things and the circuit starts working, you have not learned
which change mattered. Make one change, test, and record the result. That record
is what turns a fix into knowledge.
:::

## Safety

Disconnect power before rewiring. Beware of capacitors that stay charged after
power is removed, and of batteries that can deliver very high current into a
short. Do not probe mains voltage with a hobby multimeter. If a build involves
mains power or a high-current battery pack, stop and get qualified help.

## Planned topics

- Using an oscilloscope without damaging the probe or the circuit.
- Scanning an I2C bus and resolving address conflicts.
- Debugging UART: baud rate, inversion, and crossed TX/RX lines.
- Measuring supply noise and choosing decoupling values.
- Reading a datasheet to find the pin you actually need.

## Related sections

- [Circuit Design](/circuit-design/) for the checks to do before power-up.
- [Electronics Fundamentals](/electronics-fundamentals/) for the formulas behind
  voltage, current, and power measurements.
- [Microcontrollers](/microcontrollers/) for board-specific examples.
