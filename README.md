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
* ARM Ethos U-65 microNPU (Neural Processing Unit with TensorFlow Lite support)

**Memory:**

* 2GB LPDDR4
* 32GB eMMC

**RF:**

* 500kHz bandwidth complete IQ transceiver

## Software
Developers can use C/C++/Python as well as (or in conjunction with) GNU Radio flowgraphs. Tools such as gcc are built-in.

### Supported modes (so far):

* FM transmission and reception with pre-/de-emphasis and CTCSS,
* SSB transmission and reception,
* M17 - transmission and reception,
* TETRA - reception only,
* Demo 64QAM transmission at 2Mbps

Other modes can be added later (FreeDV, APRS, etc.).

## Images

### Download images

Prebuilt images for LinHT can be downloaded [here](https://m17project.org/linht/).

### Building images

Instructions for setting up the Yocto build environment can be found in the [M17 Wiki](https://wiki.m17foundation.org/index.php?title=LinHT_Image_Build).
All layers required to build the image are located in the M17 Project GitHub:

- [meta-linht-hardware](https://github.com/M17-Project/meta-linht-hardware): Provides machine configuration and hardware support for the LinHT hardware.
- [meta-linht-software](https://github.com/M17-Project/meta-linht-software): Provides application software, libraries, and system configuration.
- [meta-linht-sdr](https://github.com/M17-Project/meta-linht-sdr): A modified version of [meta-sdr](https://github.com/balister/meta-sdr), providing the GNU Radio package.

### Flashing

To flash the images to LinHT the [Universal Update Utility](https://github.com/nxp-imx/mfgtools/releases) is needed.
LinHT needs to be booted into flash mode (holding the secondary side button while booting).
Once in flash mode, the image can be written with uuu:
```bash
uuu -v -b emmc_all imx-boot-mcm-imx93-sd.bin-flash_singleboot linht-image-mcm-imx93.rootfs.wic.zst
```

## Driver

To access LinHTs network device under windows, [RNDIS driver](https://www.catalog.update.microsoft.com/Search.aspx?q=USB%20RNDIS%20Gadget) need to be installed.

## License
This work is licensed under a
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc-by-nc-sa].

[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg
