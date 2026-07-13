# LinHT-hw

**Open-source, Linux-based, SDR handheld transceiver**

[![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]
![GitHub Actions](https://github.com/M17-Project/LinHT-hw/actions/workflows/main.yml/badge.svg)
[![Docs](https://img.shields.io/badge/docs-GitHub%20Pages-blue)](https://m17-project.github.io/LinHT-hw/)
![Status](https://img.shields.io/badge/status-active%20development-orange)

## What is LinHT?

**LinHT** is an open-source handheld **software-defined radio (SDR) transceiver**
built around a modern Linux System-on-Module and a true IQ RF front-end.

It is the **successor of the OpenHT project**, with focus on:

* simpler and more maintainable hardware,
* no FPGA in the signal path,
* tight integration with Linux, GNU Radio, and modern SDR tooling,
* long-term openness and hackability.

LinHT is developed by members of the [**M17 community**](https://m17project.org) and is intended primarily
for **radio amateurs, SDR experimenters, and developers**.

This repository contains the **hardware design files** for LinHT.

> 📅 **July 2026 status**<br>
> Rev B was manufactured and tested; the results are summarized in the
> [Rev B status report](https://m17project.org/2026/06/16/linht-rev-b-status-what-works-what-broke-and-why-rev-c-is-next/).<br>
> Rev C is the current development revision on `main`. It has not yet been
> tagged, manufactured, or validated.

> ⚠️ **Important**<br>
> LinHT is **not a consumer product** yet.<br>
> It is an experimental, community-driven open hardware project.

## Key ideas behind LinHT

* **True SDR**: IQ baseband access, not FM-only
* **Linux-first**: Linux runs the UI, DSP, and radio control; the ATtiny handles
  power sequencing
* **No FPGA**: easier development, lower entry barrier
* **Open everything**: hardware, software, toolchains
* **Hackable handheld**: not just another black box walkie-talkie

## Hardware overview

LinHT is built around a Linux SoM and a wideband IQ transceiver.

* **System on Module:** [CompuLab MCM-iMX93](https://www.compulab.com/products/computer-on-modules/mcm-imx93-nxp-i-mx-93-som-smd-system-on-module)
* **RF front-end:** [Semtech SX1255](https://www.semtech.com/products/wireless-rf/lora-core/sx1255)

**CPU**

* Dual-core ARM Cortex-A55 @ 1.7 GHz
* ARM Cortex-M33 coprocessor @ 250 MHz
* Floating-Point Unit
* ARM Ethos-U65 microNPU (TensorFlow Lite support)

**Memory**

* 2 GB LPDDR4
* 32 GB eMMC

### Main components

| Device | Role in LinHT | Main features |
| ------ | ------------- | ------------- |
| `MCM-iMX93-C1700D-D2-N32` | Linux System-on-Module | Dual Cortex-A55, Cortex-M33, 2 GB LPDDR4, 32 GB eMMC |
| `SX1255IWLTRT` | Direct-IQ RF front-end | Programmable UHF RX/TX signal chain with separate I/Q baseband paths |
| `GRF5604` | RF power amplifier | 100–600 MHz, 6 W class; about 4.5 W CW measured on Rev B |
| 2× `PE4312C-Z` | Receive-path attenuation | 6-bit digital step attenuator, 0.5 dB steps, 31.5 dB range per device |
| `SKY13330-397LF` | RF TX/RX switching | SPDT RF switch covering 0.1–6.0 GHz |
| `TLV320AIC3100IRHBR` | Audio codec | Low-power codec with audio processing and mono Class-D speaker amplifier |
| `LG77LICMD` | GNSS receiver | Single-band, multi-constellation GPS, GLONASS, Galileo, BDS, and QZSS |
| `BQ25792RQMR` | USB-C battery charger and power path | Buck-boost charger for the 2S battery, I2C control and telemetry |
| `ATtiny826-MU` | Always-on power-management controller | Rail sequencing, button handling, boot-mode control, and shutdown coordination |
| `TPS565242DRLR` | Main 5 V supply | 5 A synchronous step-down converter |

### RF capabilities

The values below describe the tested Rev B hardware and the current Rev C
design. Rev C retains the same main RF chain but must be measured again after
manufacturing.

| Parameter       | Value                                                         |
| --------------- | ------------------------------------------------------------- |
| Frequency range | **UHF band** (exact limits depend on PA/filter configuration) |
| Bandwidth       | up to **500 kHz IQ**                                          |
| Architecture    | Direct IQ (complex baseband)                                  |
| TX power        | about **4.5 W CW** measured on Rev B; around 3.5 W during an M17 test |
| RX features     | Two programmable step attenuators and gain control             |
| Modes           | FM, SSB, M17, experimental digital modes                      |

> 📌 **UHF only!**<br>
> VHF is not supported by the current hardware revisions.
> The current priority is **stability, manufacturability, and software maturity**.

## Software overview

LinHT runs a **custom Yocto-based Linux distribution** designed for SDR and
embedded radio use.

### Supported development models

* C / C++
* Python
* GNU Radio flowgraphs
* SoapySDR
* Custom DSP pipelines

Standard Linux tools (gcc, gdb, strace, etc.) are available directly on the device.

### Supported modes

This list reflects software and hardware work demonstrated with Rev A and Rev B.
Rev C hardware has not yet been tested.

* ✅ FM (TX/RX) with pre-/de-emphasis and CTCSS
* ✅ SSB (TX/RX)
* ✅ **M17** (TX/RX)
* ✅ TETRA (RX only)
* 🧪 Experimental 64-QAM @ 2 Mbps
* ⏳ Planned / possible: FreeDV, APRS, packet radio, custom modulations

## Hardware revisions

LinHT is developed iteratively. Each revision serves a specific purpose.

| Revision   | Status                                        | Purpose                                      |
| ---------- | --------------------------------------------- | -------------------------------------------- |
| **Rev. A** | Completed | Architecture proof of concept |
| **Rev. B** | Prototype tested | Integrated feature prototype and system testing |
| **Rev. C** | In development (`main`) | Targeted corrections based on Rev B testing |

See the [project changelog](CHANGELOG.md) for the changes introduced by each
hardware revision.

## Repository contents

This repository contains:

* KiCad 9.0 project files
* Schematics
* PCB layout
* Manufacturing outputs (generated automatically)

Gerbers, BOM, pick-and-place files, and schematics are:

* generated automatically via **GitHub Actions**
* published on [**GitHub Pages**](https://m17-project.github.io/LinHT-hw/)

Generated outputs follow the current `main` branch and therefore currently
represent the unvalidated Rev C design. Use the `revA` and `revB` Git tags for
historical revision snapshots.

## Required hardware (donor radio)

LinHT is designed as a **replacement mainboard** for the
**Retevis C62 handheld radio**. You will need:

* a Retevis C62 (donor device)
* its:
    * enclosure
    * display
    * keypad
    * battery
    * side-button PCB
    * SMA connector and audio jacks
    * rotary encoder, springs, and mechanical hardware

More details (Rev. A focused, older but useful): [LinHT Open SDR Handheld For Radio Amateurs](https://uart.cz/2811/linht-open-sdr-handheld-for-radio-amateurs/)

## Firmware images

Prebuilt Linux images for LinHT are available here:
[https://m17project.org/linht/](https://m17project.org/linht/)

Documentation:

* [https://wiki.m17foundation.org/index.php?title=LinHT_Image_Build](https://wiki.m17foundation.org/index.php?title=LinHT_Image_Build)

Yocto layers:

* [meta-linht-hardware](https://github.com/M17-Project/meta-linht-hardware)
* [meta-linht-software](https://github.com/M17-Project/meta-linht-software)
* [meta-linht-sdr](https://github.com/M17-Project/meta-linht-sdr)

## Flashing the device

Flashing is done using **NXP Universal Update Utility (uuu)**.

The intended Rev C workflow is to hold the secondary side button while powering
on. The ATtiny then requests USB boot from the SoM through the corrected
level-domain interface. This Rev C workflow has not yet been validated on
manufactured hardware.

Rev B cannot use the side-button USB-boot function reliably. Its ATtiny firmware
disables that behavior; development boards are flashed by interrupting U-Boot
over the Kenwood connector and running `ums 0 mmc 0`, or by manually driving the
SoM `USB_BOOT` input. See the
[Rev B status report](https://m17project.org/2026/06/16/linht-rev-b-status-what-works-what-broke-and-why-rev-c-is-next/)
for the hardware background.

Once the board is in USB boot mode, flash it using:

```bash
uuu -v -b emmc_all imx-boot-mcm-imx93-sd.bin-flash_singleboot linht-image-mcm-imx93.rootfs.wic.zst
```

Tool download: [mfgtools](https://github.com/nxp-imx/mfgtools/releases)

To access LinHT’s USB network device on Windows, install the **RNDIS driver**: [microsoft.com USB RNDIS Gadget](https://www.catalog.update.microsoft.com/Search.aspx?q=USB%20RNDIS%20Gadget)

## Documentation & Wiki

Primary documentation lives on the **M17 Wiki**:

* [LinHT overview](https://wiki.m17foundation.org/index.php?title=LinHT)
* [Image build instructions](https://wiki.m17foundation.org/index.php?title=LinHT_Image_Build)
* [Image usage & manual](https://wiki.m17foundation.org/index.php?title=LinHT_Image_Manual)

## Contributing

LinHT is a **community project** and contributions are welcome. The best way to
get involved is [**joining the M17 Discord**](https://discord.gg/4brEP8wwVp), look for channel: **#linht**.

This is the preferred place to:

* discuss ideas,
* coordinate work,
* ask questions,
* avoid duplicated effort.

Other ways to contribute:

* Open issues in this repository (design notes, questions, suggestions)
* Help on the **software side** (especially welcome):
    * Yocto recipes
    * device tree improvements
    * CI / GitHub Actions
    * build automation
* Explore and extend [LinHT-utils](https://github.com/M17-Project/LinHT-utils)

If you’re an experienced **embedded Linux or SDR developer**, we would love
your help.

## FAQ – Frequently Asked Questions

### ❓ Where can I buy LinHT hardware?

You currently **cannot buy LinHT as a product**. To build LinHT, you need to:

* manufacture the PCB yourself (using provided Gerbers),
* source components,
* assemble the board,
* reuse the parts listed under [Required hardware](#required-hardware-donor-radio)
  from a **Retevis C62** donor radio.

This may change in the future.

### ❓ Is LinHT suitable for everyday radio use?

Not yet. And maybe never in the "consumer radio" sense. LinHT is currently best
suited for:

* developers,
* radio amateurs comfortable with Linux,
* SDR experimenters,
* people who enjoy building and debugging hardware.

You should **not** expect:

* plug-and-play user experience,
* polished UI,
* certification,
* warranty,
* commercial-grade RF compliance.

### ❓ Does LinHT support VHF?

**No. The current LinHT hardware revisions are UHF-only.**

VHF support is a **frequently requested feature**, but it is
not currently planned. Adding another band significantly increases:

* RF complexity,
* filtering requirements,
* PCB area,
* development time.

Right now, the project is focused on:

* manufacturing and validating Rev C,
* improving software and DSP,
* validating the RF chain, power management, audio, and GNSS integration.

VHF is **not ruled out** for future revisions, but it is
**not a current priority**.

### ❓ Is LinHT certified / legal to transmit with?

LinHT itself is **not certified**. Responsibility lies with the builder and
the operator. LinHT is intended primarily for:

* amateur radio use,
* experimental licenses,
* lab and research environments.

Always follow your local radio regulations.

### ❓ I want to help. Where do I start?

The best starting point is **discussion**. Join the M17 Discord, channel: **#linht**.

Good ways to contribute:

* software development (Yocto, drivers, tooling),
* testing and feedback,
* documentation,
* RF/DSP experiments,
* CI and automation improvements.

If you’re unsure where to help - just ask.

## License

This project is licensed under: **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International**

You are free to:

* share
* adapt

Under the conditions:

* attribution
* non-commercial use
* share alike

[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

## Acknowledgements

LinHT is developed by the **M17 community**, with contributions from many individuals.
Thanks to everyone testing prototypes, reviewing schematics, writing software, and sharing ideas.

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg
