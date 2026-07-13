# Changelog

All notable hardware changes to LinHT are documented in this file. The project
uses board revisions instead of semantic versioning.

## [Unreleased] - Revision C

Current `main`; board date 2026-07-10. This revision applies corrections found
while testing Revision B.

### Changed

- Isolated the side button voltage domains: the ATtiny826 reads the physical
  button and drives the 1.8 V SoM input as open-drain.
- Connected the TLV320AIC3100 reset input to SoM GPIO pin 110.
- Replaced the 12.288 MHz audio oscillator with a 12 MHz ECS-2520MV oscillator
  and removed the codec MCLK connection to the SoM.
- Replaced obsolete inductors with `SRN6028C-4R7M` and `0402HP-20NXGRW`.
- Replaced the on-board GNSS chip antenna with a TE `1909763-1` U.FL-class
  connector for an external antenna.
- Added thermal relief to small ground-connected footprints and resolved PCB
  DRC errors and warnings.

## [Rev B] - 2026-02-16

### Added

- Added a `GRF5604` RF power amplifier and `SKY13330-397LF` RF switch.
- Added two `PE4312C-Z` digital step attenuators to the RF input path.
- Added the Quectel `LG77LICMD` GNSS receiver with an
  `ANT8010LL05R1516A` chip antenna.
- Added USB-C battery charging based on `BQ25792RQMR`, including a battery
  PPTC fuse and thermistor interface.
- Added an `ATtiny826` power-management controller and changed the 5 V
  converter to `TPS565242DRLR`.

### Changed

- Replaced the WM8960 audio codec with `TLV320AIC3100IRHBR` and added a
  dedicated 1.8 V I/O supply.
- Updated the PCB layout, grounding, component metadata, fabrication outputs,
  and panelization for prototype manufacturing.

## [Rev A] - 2025-09-14

- Built four proof-of-concept prototypes around the MCM-iMX93 SoM and SX1255
  direct-IQ RF front-end.
- Validated Linux boot, USB development access, display integration, and the
  initial SDR and DSP architecture.

[Unreleased]: https://github.com/M17-Project/LinHT-hw/compare/revB...HEAD
[Rev B]: https://github.com/M17-Project/LinHT-hw/releases/tag/revB
[Rev A]: https://github.com/M17-Project/LinHT-hw/releases/tag/revA
