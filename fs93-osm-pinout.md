# F&S 93 OSM-SF Pinout

| Pin  | Name                            | Type             | VDomain | LinHT signal   |
| ---- | ------------------------------- | ---------------- | ------- | -------------- |
| A2   | CSI_DATA1_N                     | Passive Line     |
| A3   | CSI_DATA1_P                     | Passive Line     |
| A5   | CSI_DATA2_N                     | Passive Line     |
| A6   | CSI_DATA2_P                     | Passive Line     |
| A14  | UART_A_RX                       | Passive Line     | 1.8V    | UART_RX        |
| A22  | UART_C_RX                       | Passive Line     |
| AA3  | DSI_TE                          | Passive Line     |
| AA9  | PWR_BTN#                        | Passive Line     | 1.8V    | ON/OFF         |
| AA15 | I2C_A_SCL                       | Passive Line     | 1.8V    | I2C_SCL        |
| AA16 | I2C_A_SDA                       | Passive Line     | 1.8V    | I2C_SDA        |
| AA20 | I2C_B_SCL                       | Passive Line     | 1.8V    |
| AA21 | I2C_B_SDA                       | Passive Line     | 1.8V    |
| AA23 | SPI_B_CS0#                      | Passive Line     | 1.8V    | SPI_CS_RF      |
| AB1  | PCIe_A_HSI0_P                   | Passive Line     |
| AB2  | PCIe_A_HSI0_N                   | Passive Line     |
| AB4  | DSI_DATA3_P                     | Passive Line     |
| AB5  | DSI_DATA3_N                     | Passive Line     |
| AB7  | DSI_CLOCK_P                     | Passive Line     |
| AB8  | DSI_CLOCK_N                     | Passive Line     |
| AB10 | DSI_DATA0_P                     | Passive Line     |
| AB11 | DSI_DATA0_N                     | Passive Line     |
| AB13 | USB_A_D_N                       | Passive Line     | USB    | USB_DN          |
| AB14 | USB_A_ID                        | Passive Line     | 1.8V   |
| AB16 | USB_A_VBUS                      | Passive Line     | 5V     |
| AB20 | USB_B_VBUS                      | Passive Line     | 5V     |
| AB22 | USB_B_ID                        | Passive Line     |
| AB23 | USB_B_D_N                       | Passive Line     |
| AC2  | PCIe_A_HSO0_P                   | Passive Line     |
| AC3  | PCIe_A_HSO0_N                   | Passive Line     |
| AC5  | DSI_DATA2_P                     | Passive Line     |
| AC6  | DSI_DATA2_N                     | Passive Line     |
| AC8  | DSI_DATA1_P                     | Passive Line     |
| AC9  | DSI_DATA1_N                     | Passive Line     |
| AC14 | USB_A_D_P                       | Passive Line     | USB    | USB_DP          |
| AC15 | USB_A_OC#                       | Passive Line     |
| AC16 | USB_A_EN                        | Passive Line     |
| AC20 | USB_B_EN                        | Passive Line     |
| AC21 | USB_B_OC#                       | Passive Line     |
| AC22 | USB_B_D_P                       | Passive Line     |
| B1   | CSI_DATA0_P                     | Passive Line     |
| B3   | CSI_CLOCK_N                     | Passive Line     |
| B4   | CSI_CLOCK_P                     | Passive Line     |
| B6   | CSI_DATA3_N                     | Passive Line     |
| B7   | CSI_DATA3_P                     | Passive Line     |
| B13  | UART_A_TX                       | Passive Line     | 1.8V    | UART_TX (BOOT_MODE1) |
| B23  | UART_C_TX                       | Passive Line     |
| C1   | CSI_DATA0_N                     | Passive Line     |
| C2   | CAM_MCK                         | Passive Line     |
| C3   | I2C_CAM_SDA/CSI_TX_N            | Passive Line     |
| C4   | I2C_CAM_SCL/CSI_TX_P            | Passive Line     |
| C13  | UART_A_RTS                      | Passive Line     | 1.8V    | BOOT_MODE3  ?? SAI1_TXD0/I2S0_DOUT  |
| C14  | UART_A_CTS                      | Passive Line     | 1.8V    | ?? SAI1_TXC/I2S0_CLK |
| C20  | SDIO_A_IOPWR                    | Power output     | 1.8/3.3 |
| D3   | GPIO_C_0                        | Passive Line     |
| D4   | GPIO_C_1                        | Passive Line     | 1.8V    | EXT_PTT        |
| D13  | UART_B_TX                       | Passive Line     |
| D14  | UART_B_RX                       | Passive Line     |
| D15  | UART_B_RTS                      | Passive Line     |
| D16  | UART_B_CTS                      | Passive Line     |
| D17  | GPIO_A_0                        | Passive Line     | 1.8V    | /MIC_MUTE      |
| D19  | GPIO_B_0                        | Passive Line     |
| D20  | SDIO_A_WP                       | Passive Line     | 1.8/3.3 |
| D21  | SDIO_A_PWR_EN                   | Passive Line     | 1.8/3.3 |
| D22  | UART_CON_RX                     | Passive Line     |
| D23  | UART_CON_TX                     | Passive Line     | 1.8V    | BOOT_MODE0     |
| E3   | GPIO_C_2                        | Passive Line     | 1.8V    | INT_PTT        |
| E4   | GPIO_C_3                        | Passive Line     | 1.8V    | SIDE_BTN       |
| E17  | GPIO_A_1                        | Passive Line     | 1.8V    | RF_RST         |
| E18  | PWM_0/DISP_BL_PWM               | Passive Line     | 1.8V    | LCD_PWM        |
| E19  | GPIO_B_1                        | Passive Line     |
| E20  | SDIO_A_CMD                      | Passive Line     | 1.8/3.3 |
| F2   | SAI2_RX_DATA/ETH_B_RGMII_TXD3   | Digital IO       | 1.8V    | I2S1_DIN       |
| F3   | GPIO_C_4/DISP_VDD_EN            | Passive Line     |
| F4   | GPIO_C_5/DISP_BL_EN             | Passive Line     |
| F17  | GPIO_A_2                        | Passive Line     | 1.8V    | LCD_RS         |
| F18  | PWM_1                           | Passive Line     |
| F19  | GPIO_B_2                        | Passive Line     | 1.8V    | MIC_GAIN       |
| F21  | SDIO_A_CLK                      | Passive Line     | 1.8/3.3 |
| G3   | CAM_PWR/GPIO_C_6                | Passive Line     |
| G4   | CAM_RST#/GPIO_C_7               | Passive Line     |
| G15  | ETH_A_RGMII_TXD1                | Passive Line     | 1.8V    | KBD_D1         |
| G16  | ETH_A_RGMII_TXD3                | Passive Line     | 1.8V    | KBD_D2         |
| G17  | GPIO_A_3                        | Passive Line     |
| G18  | PWM_2                           | Passive Line     | 1.8V    | LIGHT          |
| G19  | GPIO_B_3                        | Passive Line     | 1.8V    | RF_SW_CTRL     |
| G20  | SDIO_A_D0                       | Passive Line     | 1.8/3.3 |
| G21  | SDIO_A_D1                       | Passive Line     | 1.8/3.3 |
| H1   | SAI2_TX_BCLK/ETH_B_RGMII_TX_CLK | Digital IO       | 1.8V    | I2S1_BCLK      |
| H15  | ETH_A_RGMII_TXD0                | Passive Line     | 1.8V    | KBD_D3         |
| H16  | ETH_A_RGMII_TXD2                | Passive Line     | 1.8V    | KBD_D4         |
| H17  | GPIO_A_4                        | Passive Line     |
| H18  | PWM_3                           | Passive Line     | 1.8V    | KBD_PWM        |
| H19  | GPIO_B_4                        | Passive Line     |
| H20  | SDIO_A_D2                       | Passive Line     | 1.8/3.3 |
| H21  | SDIO_A_D3                       | Passive Line     | 1.8/3.3 |
| J2   | SAI2_TX_SYNC/ETH_B_RGMII_TX_EN  | Digital  IO      | 1.8V    | I2S1_WS        |
| J15  | ETH_A_RGMII_TX_CLK              | Passive Line     | 1.8V    | KBD_D5         |
| J17  | GPIO_A_5                        | Passive Line     |
| J19  | GPIO_B_5                        | Passive Line     |
| J21  | SDIO_A_CD#                      | Passive Line     | 1.8/3.3 |
| K15  | ETH_A_RGMII_RXD0                | Passive Line     | 1.8V    | KBD_D6         |
| K16  | ETH_A_RGMII_TX_EN(\_ER)         | Passive Line     |
| K17  | GPIO_A_6/SPI_A_CS1#             | Passive Line     | 1.8V    |
| K19  | GPIO_B_6                        | Passive Line     | 1.8V    | LED_A          |
| K20  | SDIO_B_CLK                      | Passive Line     |
| K21  | SDIO_B_CMD                      | Passive Line     |
| L1   | SAI2_TX_DATA/ETH_B_RGMII_RX_DV  | Digital IO       | 1.8V    | I2S1_DOUT      |
| L15  | ETH_A_RGMII_RXD1                | Passive Line     | 1.8V    | KBD_D7         |
| L17  | GPIO_A_7/SPI_B_CS1#             | Passive Line     | 1.8V    |
| L19  | GPIO_B_7                        | Passive Line     | 1.8V    | LED_B          |
| L20  | SDIO_B_D0                       | Passive Line     |
| L21  | SDIO_B_D1                       | Passive Line     |
| M1   | SAI2_MCLK / ETH_B_RGMII_RXD2    | Digital IO       | 1.8V    | I2S1_MCLK      |
| M15  | ETH_A_RGMII_RX_DV(\_ER)         | Passive Line     | 1.8V    | KBD_D8         |
| M17  | ETH_IOPWR                       | Power input Line |
| M18  | ADC_0                           | Analog input     | 0-1.8V  | VOL_ADC        |
| M19  | VCC_2_TEST                      | Passive Line     |
| M21  | SDIO_B_D2                       | Passive Line     |
| N15  | ETH_A_RGMII_RXD2                | Passive Line     | 1.8V    | KBD_D9         |
| N17  | JTAG_TCK(SWCLK)                 | Passive Line     |
| N18  | ADC_1                           | Analog input     | 0-1.8V  | U_BAT_MON      |
| N19  | JTAG_TMS(SWDIO)                 | Passive Line     |
| N20  | SDIO_B_D3                       | Passive Line     |
| N21  | SDIO_B_D4                       | Passive Line     |
| P15  | ETH_A_RGMII_RXD3                | Passive Line     |
| P17  | JTAG_TDI                        | Passive Line     |
| P20  | SDIO_B_D5                       | Passive Line     |
| P21  | SDIO_B_D6                       | Passive Line     |
| R2   | PCIe_SM_ALERT#                  | Passive Line     |
| R15  | ETH_A_RGMII_RX_CLK              | Passive Line     |
| R17  | JTAG_TDO(SWO)                   | Passive Line     |
| R19  | JTAG_nTRST                      | Passive Line     |
| R21  | SDIO_B_D7                       | Passive Line     |
| T1   | PCIe_SMCLK                      | Passive Line     |
| T2   | PCIe_WAKE#                      | Passive Line     |
| T15  | ETH_MDIO                        | Passive Line     |
| T16  | ETH_MDC                         | Passive Line     |
| T17  | FORCE_RECOVERY#                 | Passive Line     | 1.8V    | USB_BOOT (active low) |
| T20  | SDIO_B_IOPWR                    | Passive Line     |
| T21  | SDIO_B_CD#                      | Passive Line     |
| U1   | PCIe_SMDAT                      | Passive Line     |
| U15  | SPI_A_SDI_(IO0)                 | Passive Line     | 1.8V    | SPI1_MISO          |
| U16  | SPI_A_SCK                       | Passive Line     | 1.8V    | SPI1_SCK           |
| U17  | SYS_RST#                        | Passive Line     | 1.8V    | /RST               |
| U18  | VCC_OUT_IO                      | Power output     | 1.8V    | 1V8                |
| U20  | SDIO_B_WP                       | Passive Line     |
| U21  | SDIO_B_PWR_EN                   | Passive Line     |
| V2   | PCIe_A_PERST#                   | Passive Line     |
| V15  | SPI_A_SDO_(IO1)                 | Passive Line     | 1.8V    | SPI1_MOSI          |
| V17  | CARRIER_PWR_EN                  | Passive Line     | 1.8V    | BOOT_MODE2         |
| V18  | I2S_MCLK                        | Passive Line     | 1.8V    | I2S0_MCLK (if needed) |
| V21  | I2S_A_DATA_IN                   | Passive Line     | 1.8V    | I2S0_DIN           |
| W1   | PCIe_REFCLK_P                   | Passive Line     |
| W2   | PCIe_CLKREQ#                    | Passive Line     |
| W15  | SPI_A_/HOLD_(IO3)               | Passive Line     | 1.8V    |
| W16  | SPI_A_/WP_(IO2)                 | Passive Line     | 1.8V    |
| W17  | RTC_PWR                         | Power input Line |
| W18  | I2S_A_LRCLK                     | Passive Line     | 1.8V    | I2S0_WS            |
| W20  | I2S_A_BITCLK                    | Passive Line     | 1.8V    | I2S0_BCLK          |
| W21  | I2S_A_DATA_OUT                  | Passive Line     | 1.8V    | I2S0_DOUT          |
| Y1   | PCIe_REFCLK_N                   | Passive Line     |
| Y8   | VCC_IN_5V                       | Power input Line | 5V      | 5V                 |
| Y9   | VCC_IN_5V                       | Power input Line | 5V      | 5V                 |
| Y10  | VCC_IN_5V                       | Power input Line | 5V      | 5V                 |
| Y11  | VCC_IN_5V                       | Power input Line | 5V      | 5V                 |
| Y13  | CARRIER_STBY#                   | Passive Line     | 1.8V    |
| Y15  | SPI_A_CS0#                      | Passive Line     | 1.8V    | SPI_CS_LCD         |
| Y17  | VCC_IN_5V                       | Power input Line | 5V      | 5V                 |
| Y21  | SPI_B_SCK                       | Passive Line     | 1.8V    | SPI0_SCK           |
| Y22  | SPI_B_SDI                       | Passive Line     | 1.8V    | SPI0_MISO          |
| Y23  | SPI_B_SDO                       | Passive Line     | 1.8V    | SPI0_MOSI          |

## Grounds
A4, A7, A10, AA1, AA4, AA7, AA8, AA10, AA11, AA14, AA17, AA19, AA22, AB3, AB6,
AB9, AB15, AB21, AC4, AC7, AC10, B2, B5, B8, B9, C11, D1, D5, D8, D18, E2, E15,
E21, F16, F20, H2, H4, J16, J20, L2, L4, L18, M16, M20, P2, P4, P18, R1, R16,
R20, U2, U4, V1, V16, V20, W3, Y2, Y18

## Not connected pins
A8, A9, A15, A16, A17, A18, A19, A20, A21, AA2, AA5, AA6, AA13, AA18, AB17,
AB18, AB19, AC17, AC18, AC19, B10, B11, B15, B16, B17, B18, B19, B20, B21, B22,
C5, C6, C7, C8, C9, C10, C15, C16, C17, C18, C19, C21, C22, C23, D2, D6, D7,
D9, D10, D11, E1, E16, F1, F15, G1, G2, H3, J1, J3, J4, J18, K1,
K2, K3, K4, K18, L3, L16, M2, M3, M4, N1, N2, N3, N4, N16,
P1, P3, P16, P19, R3, R4, R18, T3, T4, T18, T19, U3, U19, V3, V4, V19, W4,
W19, Y3, Y4, Y5, Y6, Y7, Y14, Y16, Y19, Y20
