[![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]

# LinHT-hw
Open-source hardware, Linux-based, SDR handheld transceiver. [OpenHT](https://github.com/M17-Project/OpenHT-hw) successor with greatly simplified hardware - no FPGAs involved.
This project offers a replacement board for the Retevis C62 radio, greatly expanding its capabilities.

## Hardware
The device uses an [MCM-iMX93](https://www.compulab.com/products/computer-on-modules/mcm-imx93-nxp-i-mx-93-som-smd-system-on-module) System on Module (SoM) running Linux. The RF front-end is based on the [Semtech SX1255](https://www.semtech.com/products/wireless-rf/lora-core/sx1255). The chip is used as a complete IQ modulator/demodulator, allowing for true all-mode support.

### Resources
**CPU:**

* Dual-core ARM Cortex-A55 @ 1.7GHz
* ARM Cortex-M33 coprocessor @ 250MHz
* Floating Point Unit
* ARM Ethos U-65 microNPU (Neural Processing Unit with Tensor Flow Lite support)

**Memory:**

* 2GB LPDDR4
* 32GB eMMC

**RF:**

* 500kHz bandwidth complete IQ transceiver

## Software
Developers can use C/C++/Python as well as (or in conjunction with) GNU Radio flowgraphs. Tools such as gcc are built-in. The Linux image will be published later.

### Supported modes (so far):

* M17 - transmission and reception,
* TETRA - reception only,
* Demo 64QAM transmission at 2Mbps

Other modes can be added later (analog FM/AM/SSB, FreeDV, APRS, etc.).

## License
This work is licensed under a
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc-by-nc-sa].

[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg
