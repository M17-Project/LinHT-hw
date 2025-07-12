# Pinout mcm-imx93

| GPIO            | MCM Ref         | PIN     | LinHT Ref     | VDomain   | imx93-pinfunc.h                       |
| --------------- | --------------- | ------- | ------------- | --------- | ------------------------------------- |
|                 | USB1_ID         | Pin 1   |               |           |                                       |
|                 | USB1_VBUS_3V3   | Pin 2   | USB_VSENSE    |           |                                       |
|                 | ONOFF           | Pin 3   | ON/OF         |           |                                       |
|                 | V_SOM           | Pin 4   | 5V            |           |                                       |
|                 | ALT_BOOT_USB    | Pin 5   | USB_BOOT      |           |                                       |
|                 | V_SOM           | Pin 6   | 5V            |           |                                       |
|                 | ADC_IN3         | Pin 7   |               |           |                                       |
|                 | ADC_IN2         | Pin 8   |               |           |                                       |
|                 | ADC_IN1         | Pin 9   |               |           |                                       |
|                 | ADC_IN0         | Pin 10  |               |           |                                       |
|                 | V_SOM           | Pin 11  | 5V            |           |                                       |
|                 | TAMPER0         | Pin 12  |               |           |                                       |
|                 | TAMPER1         | Pin 13  |               |           |                                       |
|                 | SYS_NRST        | Pin 14  | /RST          |           |                                       |
|                 | V_SOM           | Pin 15  | 5V            |           |                                       |
|                 | PMIC_STBY_REQ   | Pin 16  | STBY          |           |                                       |
|                 | RESERVED        | Pin 17  |               |           |                                       |
|                 | CSI_CLK_N       | Pin 18  |               |           |                                       |
|                 | CSI_CLK_P       | Pin 19  |               |           |                                       |
|                 | CSI_D0_P        | Pin 20  |               |           |                                       |
|                 | CSI_D0_N        | Pin 21  |               |           |                                       |
|                 | CSI_D1_P        | Pin 22  |               |           |                                       |
|                 | CSI_D1_N        | Pin 23  |               |           |                                       |
|                 | DSI_CLK_N       | Pin 24  |               |           |                                       |
|                 | DSI_CLK_P       | Pin 25  |               |           |                                       |
|                 | DSI_D3_P        | Pin 26  |               |           |                                       |
|                 | DSI_D3_N        | Pin 27  |               |           |                                       |
|                 | DSI_D2_N        | Pin 28  |               |           |                                       |
|                 | DSI_D2_P        | Pin 29  |               |           |                                       |
|                 | DSI_D1_N        | Pin 30  |               |           |                                       |
|                 | DSI_D1_P        | Pin 31  |               |           |                                       |
|                 | DSI_D0_N        | Pin 32  |               |           |                                       |
|                 | DSI_D0_P        | Pin 33  |               |           |                                       |
|                 | LVDS_TX0_N      | Pin 34  |               |           |                                       |
|                 | LVDS_TX0_P      | Pin 35  |               |           |                                       |
|                 | LVDS_TX1_N      | Pin 36  |               |           |                                       |
|                 | LVDS_TX1_P      | Pin 37  |               |           |                                       |
|                 | LVDS_CLK_N      | Pin 38  |               |           |                                       |
|                 | LVDS_CLK_P      | Pin 39  |               |           |                                       |
|                 | LVDS_TX2_N      | Pin 40  |               |           |                                       |
|                 | LVDS_TX2_P      | Pin 41  |               |           |                                       |
|                 | LVDS_TX3_N      | Pin 42  |               |           |                                       |
|                 | LVDS_TX3_P      | Pin 43  |               |           |                                       |
|                 | PMIC_ON_REQ     | Pin 44  |               |           |                                       |
| SPI6_SIN        | GPIO2_IO[1]     | Pin 45  | SPI1_MISO     | 3.3V      | MX93_PAD_GPIO_IO01__LPSPI6_SIN        |
|                 | POR_B_3P3       | Pin 46  |               |           |                                       |
| SAI3_TX_SYNC    | GPIO2_IO[26]    | Pin 47  | I2S1_WS       | 3.3V      | MX93_PAD_GPIO_IO26__SAI3_TX_SYNC      |
| GPIO2_IO[27]    | GPIO2_IO[27]    | Pin 48  |               | 3.3V      | MX93_PAD_GPIO_IO27__GPIO2_IO27        |
| GPIO4_IO[15]    | ENET2_MDIO      | Pin 49  |               | 1.8V      | MX93_PAD_ENET2_MDIO__GPIO4_IO15       |
| GPIO4_IO[14]    | ENET2_MDC       | Pin 50  |               | 1.8V      | MX93_PAD_ENET2_MDC__GPIO4_IO14        |
| GPIO4_IO[16]    | ENET2_TD3       | Pin 51  | KBD_D1        | 1.8V      | MX93_PAD_ENET2_TD3__GPIO4_IO16        |
| GPIO4_IO[19]    | ENET2_TD0       | Pin 52  | KBD_D2        | 1.8V      | MX93_PAD_ENET2_TD0__GPIO4_IO19        |
| GPIO4_IO[18]    | ENET2_TD1       | Pin 53  | KBD_D3        | 1.8V      | MX93_PAD_ENET2_TD1__GPIO4_IO18        |
| GPIO4_IO[20]    | ENET2_TX_CTL    | Pin 54  | KBD_D4        | 1.8V      | MX93_PAD_ENET2_TX_CTL__GPIO4_IO20     |
| GPIO4_IO[17]    | ENET2_TD2       | Pin 55  | KBD_D5        | 1.8V      | MX93_PAD_ENET2_TD2__GPIO4_IO17        |
| GPIO4_IO[21]    | ENET2_TXC       | Pin 56  | KBD_D6        | 1.8V      | MX93_PAD_ENET2_TXC__GPIO4_IO21        |
| GPIO4_IO[23]    | ENET2_RXC       | Pin 57  | KBD_D7        | 1.8V      | MX93_PAD_ENET2_RXC__GPIO4_IO23        |
| GPIO4_IO[22]    | ENET2_RX_CTL    | Pin 58  | KBD_D8        | 1.8V      | MX93_PAD_ENET2_RX_CTL__GPIO4_IO22     |
| GPIO4_IO[24]    | ENET2_RD0       | Pin 59  | KBD_D9        | 1.8V      | MX93_PAD_ENET2_RD0__GPIO4_IO24        |
| GPIO4_IO[25]    | ENET2_RD1       | Pin 60  |               | 1.8V      | MX93_PAD_ENET2_RD1__GPIO4_IO25        |
| GPIO4_IO[26]    | ENET2_RD2       | Pin 61  |               | 1.8V      | MX93_PAD_ENET2_RD2__GPIO4_IO26        |
| GPIO4_IO[27]    | ENET2_RD3       | Pin 62  |               | 1.8V      | MX93_PAD_ENET2_RD3__GPIO4_IO27        |
| UART1_TX        | UART1_TX        | Pin 63  | UART_TX       |           |                                       |
| UART1_RX        | UART1_RX        | Pin 64  | UART_RX       |           |                                       |
| GPIO3_IO[7]     | SDIO2_RESET_B   | Pin 65  |               | 3.3V/1.8V | MX93_PAD_SD2_RESET_B__GPIO3_IO07      |
| SAI1_TX_DATA[0] | SAI1_TX_DATA[0] | Pin 66  | I2S0_DOUT     |           | MX93_PAD_SAI1_TXD0__SAI1_TX_DATA00    |
| GPIO3_IO[6]     | SDIO2_DATA3     | Pin 67  | MIC_GAIN      | 3.3V/1.8V | MX93_PAD_SD2_DATA3__GPIO3_IO06        |
| GPIO3_IO[5]     | SDIO2_DATA2     | Pin 68  | /MIC_MUTE     | 3.3V/1.8V | MX93_PAD_SD2_DATA2__GPIO3_IO05        |
| GPIO3_IO[2]     | SDIO2_CMD       | Pin 69  |               | 3.3V/1.8V | MX93_PAD_SD2_CMD__GPIO3_IO02          |
| GPIO3_IO[1]     | SDIO2_CLK       | Pin 70  |               | 3.3V/1.8V | MX93_PAD_SD2_CLK__GPIO3_IO01          |
|                 | RESERVED        | Pin 71  |               |           |                                       |
| GPIO3_IO[3]     | SDIO2_DATA0     | Pin 72  |               | 3.3V/1.8V | MX93_PAD_SD2_DATA0__GPIO3_IO03        |
| GPIO3_IO[4]     | SDIO2_DATA1     | Pin 73  |               | 3.3V/1.8V | MX93_PAD_SD2_DATA1__GPIO3_IO04        |
| GPIO3_IO[0]     | SDIO2_CD_B      | Pin 74  |               | 3.3V/1.8V | MX93_PAD_SD2_CD_B__GPIO3_IO00         |
|                 | GND             | Pin 75  |               |           |                                       |
|                 | ALT_BOOT        | Pin 76  |               |           |                                       |
| GPIO3_IO[28]    | JTAG_TDI        | Pin 77  |               | 1.8V      | MX93_PAD_DAP_TDI__GPIO3_IO28          |
| GPIO3_IO[29]    | JTAG_TMS        | Pin 78  |               | 1.8V      | MX93_PAD_DAP_TMS_SWDIO__GPIO3_IO29    |
| GPIO3_IO[30]    | JTAG_TCLK       | Pin 79  |               | 1.8V      | MX93_PAD_DAP_TCLK_SWCLK__GPIO3_IO30   |
| GPIO3_IO[31]    | JTAG_TDO        | Pin 80  |               | 1.8V      | MX93_PAD_DAP_TDO_TRACESWO__GPIO3_IO31 |
| GPIO4_IO[6]     | ENET1_TX_CTL    | Pin 81  |               | 1.8V      | MX93_PAD_ENET1_TX_CTL__GPIO4_IO06     |
| GPIO4_IO[4]     | ENET1_TD1       | Pin 82  |               | 1.8V      | MX93_PAD_ENET1_TD1__GPIO4_IO04        |
| GPIO4_IO[3]     | ENET1_TD2       | Pin 83  |               | 1.8V      | MX93_PAD_ENET1_TD2__GPIO4_IO03        |
| GPIO4_IO[5]     | ENET1_TD0       | Pin 84  |               | 1.8V      | MX93_PAD_ENET1_TD0__GPIO4_IO05        |
| GPIO4_IO[2]     | ENET1_TD3       | Pin 85  |               | 1.8V      | MX93_PAD_ENET1_TD3__GPIO4_IO02        |
| GPIO4_IO[7]     | ENET1_TXC       | Pin 86  |               | 1.8V      | MX93_PAD_ENET1_TXC__GPIO4_IO07        |
| GPIO4_IO[8]     | ENET1_RX_CTL    | Pin 87  |               | 1.8V      | MX93_PAD_ENET1_RX_CTL__GPIO4_IO08     |
| GPIO4_IO[10]    | ENET1_RD0       | Pin 88  |               | 1.8V      | MX93_PAD_ENET1_RD0__GPIO4_IO10        |
| GPIO4_IO[9]     | ENET1_RXC       | Pin 89  |               | 1.8V      | MX93_PAD_ENET1_RXC__GPIO4_IO09        |
| GPIO4_IO[11]    | ENET1_RD1       | Pin 90  |               | 1.8V      | MX93_PAD_ENET1_RD1__GPIO4_IO11        |
| GPIO4_IO[12]    | ENET1_RD2       | Pin 91  |               | 1.8V      | MX93_PAD_ENET1_RD2__GPIO4_IO12        |
| GPIO4_IO[13]    | ENET1_RD3       | Pin 92  |               | 1.8V      | MX93_PAD_ENET1_RD3__GPIO4_IO13        |
| GPIO4_IO[1]     | ENET1_MDIO      | Pin 93  |               | 1.8V      | MX93_PAD_ENET1_MDIO__GPIO4_IO01       |
| GPIO4_IO[0]     | ENET1_MDC       | Pin 94  |               | 1.8V      | MX93_PAD_ENET1_MDC__GPIO4_IO00        |
| GPIO2_IO[25]    | GPIO2_IO[25]    | Pin 95  |               | 3.3V      | MX93_PAD_GPIO_IO25__GPIO2_IO25        |
| GPIO2_IO[23]    | GPIO2_IO[23]    | Pin 96  |               | 3.3V      | MX93_PAD_GPIO_IO23__GPIO2_IO23        |
| I2C3_SCL        | GPIO2_IO[29]    | Pin 97  | I2C_SCL       | 3.3V      | MX93_PAD_GPIO_IO29__LPI2C3_SCL        |
| I2C3_SDA        | GPIO2_IO[28]    | Pin 98  | I2C_SDA       | 3.3V      | MX93_PAD_GPIO_IO28__LPI2C3_SDA        |
| GPIO2_IO[24]    | GPIO2_IO[24]    | Pin 99  |               | 3.3V      | MX93_PAD_GPIO_IO24__GPIO2_IO24        |
| SAI3_MCLK       | GPIO2_IO[17]    | Pin 100 | SPI1_MCLK     | 3.3V      | MX93_PAD_GPIO_IO17__SAI3_MCLK         |
| SAI3_TX_BCLK    | GPIO2_IO[16]    | Pin 101 | I2S1_CLK      | 3.3V      | MX93_PAD_GPIO_IO16__SAI3_TX_BCLK      |
| GPIO2_IO[14]    | GPIO2_IO[14]    | Pin 102 |               | 3.3V      | MX93_PAD_GPIO_IO14__GPIO2_IO14        |
| GPIO2_IO[15]    | GPIO2_IO[15]    | Pin 103 |               | 3.3V      | MX93_PAD_GPIO_IO15__GPIO2_IO15        |
| GPIO2_IO[13]    | GPIO2_IO[13]    | Pin 104 |               | 3.3V      | MX93_PAD_GPIO_IO13__GPIO2_IO13        |
| GPIO2_IO[12]    | GPIO2_IO[12]    | Pin 105 |               | 3.3V      | MX93_PAD_GPIO_IO12__GPIO2_IO12        |
| GPIO2_IO[7]     | GPIO2_IO[7]     | Pin 106 |               | 3.3V      | MX93_PAD_GPIO_IO07__GPIO2_IO07        |
| GPIO2_IO[6]     | GPIO2_IO[6]     | Pin 107 |               | 3.3V      | MX93_PAD_GPIO_IO06__GPIO2_IO06        |
| SPI6_SCK        | GPIO2_IO[3]     | Pin 108 | SPI1_SCK      | 3.3V      | MX93_PAD_GPIO_IO03__LPSPI6_SCK        |
| GPIO3_IO[20]    | SDIO3_CLK       | Pin 109 |               | 1.8V      | MX93_PAD_SD3_CLK__GPIO3_IO20          |
| GPIO3_IO[24]    | SDIO3_DATA2     | Pin 110 |               | 1.8V      | MX93_PAD_SD3_DATA2__GPIO3_IO24        |
| GPIO3_IO[25]    | SDIO3_DATA3     | Pin 111 |               | 1.8V      | MX93_PAD_SD3_DATA3__GPIO3_IO25        |
| GPIO3_IO[23]    | SDIO3_DATA1     | Pin 112 | EXT_PTT       | 1.8V      | MX93_PAD_SD3_DATA1__GPIO3_IO23        |
| GPIO3_IO[21]    | SDIO3_CMD       | Pin 113 | INT_PTT       | 1.8V      | MX93_PAD_SD3_CMD__GPIO3_IO21          |
| GPIO3_IO[22]    | SDIO3_DATA0     | Pin 114 | SIDE_BTN      | 1.8V      | MX93_PAD_SD3_DATA0__GPIO3_IO22        |
| GPIO2_IO[22]    | GPIO2_IO[22]    | Pin 115 | RF_RST        | 3.3V      | MX93_PAD_GPIO_IO22__GPIO2_IO22        |
| SAI_RX_DATA00   | GPIO2_IO[20]    | Pin 116 | I2S1_DIN      | 3.3V      | MX93_PAD_GPIO_IO20__SAI3_RX_DATA00    |
| SAI_TX_DATA00   | GPIO2_IO[21]    | Pin 117 | I2S1_DOUT     | 3.3V      | MX93_PAD_GPIO_IO21__SAI3_TX_DATA00    |
| GPIO2_IO[18]    | GPIO2_IO[18]    | Pin 118 | LIGHT         | 3.3V      | MX93_PAD_GPIO_IO18__GPIO2_IO18        |
| GPIO2_IO[19]    | GPIO2_IO[19]    | Pin 119 | LCD_RS        | 3.3V      | MX93_PAD_GPIO_IO19__GPIO2_IO19        |
| GPIO2_IO[8]     | GPIO2_IO[8]     | Pin 120 | SPI_CS_RF     | 3.3V      | MX93_PAD_GPIO_IO08__GPIO2_IO08        |
| SPI3_SIN        | GPIO2_IO[9]     | Pin 121 | SPI0_MISO     | 3.3V      | MX93_PAD_GPIO_IO09__LPSPI3_SIN        |
| SPI3_SCK        | GPIO2_IO[11]    | Pin 122 | SPI0_SCK      | 3.3V      | MX93_PAD_GPIO_IO11__LPSPI3_SCK        |
| SPI3_SOUT       | GPIO2_IO[10]    | Pin 123 | SPI0_MOSI     | 3.3V      | MX93_PAD_GPIO_IO10__LPSPI3_SOUT       |
| GPIO2_IO[5]     | GPIO2_IO[5]     | Pin 124 | STATUS LED A  | 3.3V      | MX93_PAD_GPIO_IO05__GPIO2_IO05        |
| GPIO2_IO[4]     | GPIO2_IO[4]     | Pin 125 | STATUS LED B  | 3.3V      | MX93_PAD_GPIO_IO04__GPIO2_IO04        |
| SAI1_TX_SYNC    | SAI1_TX_SYNC    | Pin 126 | I2S0_WS       |           | MX93_PAD_SAI1_TXFS__SAI1_TX_SYNC      |
|                 | VCC_RTC         | Pin 127 |               |           |                                       |
| SPI6_SOUT       | GPIO2_IO[2]     | Pin 128 | SPI1_MOSI     | 3.3V      | MX93_PAD_GPIO_IO02__LPSPI6_SOUT       |
| GPIO2_IO[0]     | GPIO2_IO[0]     | Pin 129 | SPI_CS_LCD    | 3.3V      | MX93_PAD_GPIO_IO00__GPIO2_IO00        |
|                 | UART2_TX        | Pin 130 |               |           |                                       |
| SAI1_RX_DATA00  | SAI1_RX_DATA[0] | Pin 131 | I2S0_DIN      | 3.3V      | MX93_PAD_SAI1_RXD0__SAI1_RX_DATA00    |
| SAI1_TX_BCLK    | SAI1_TX_BCLK    | Pin 132 | I2S0_CLK      | 3.3V      | MX93_PAD_SAI1_TXC__SAI1_TX_BCLK       |
| GPIO1_IO[6]     | UART2_RX        | Pin 133 |               | 3.3V      | MX93_PAD_UART2_RXD__GPIO1_IO06        |
|                 | VSD_3V3         | Pin 134 | 3.3V          |           |                                       |
|                 | USB2_ID         | Pin 135 |               |           |                                       |
|                 | USB2_DP         | Pin 136 |               |           |                                       |
|                 | USB2_DN         | Pin 137 |               |           |                                       |
|                 | USB2_VBUS_3V3   | Pin 138 |               |           |                                       |
|                 | USB1_DP         | Pin 139 | USB_DP        |           |                                       |
|                 | USB1_DN         | Pin 140 | USB_DN        |           |                                       |
