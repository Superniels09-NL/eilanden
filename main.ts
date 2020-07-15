function ververs_scherm () {
    basic.clearScreen()
    tel = 0
    tel3 = -30
    if (Y > -30) {
        for (let index = 0; index < eilanden_X_X3.length; index++) {
            led.plot(eilanden_X_X3[tel] + X, eilanden_Y_X3[tel] + Y)
            led.plot(eilanden_X_X3[tel] + X + 1, eilanden_Y_X3[tel] + Y)
            led.plot(eilanden_X_X3[tel] + X - 1, eilanden_Y_X3[tel] + Y)
            tel += 1
        }
    } else {
        tel4 = 40
        for (let index = 0; index < 4; index++) {
            for (let index = 0; index < 60; index++) {
                led.plot(X + tel3, tel4 + Y)
                tel3 += 1
            }
            tel4 += 1
            tel3 = -30
        }
    }
    led.plotBrightness(2, 2, 69)
}
gamePad.onEvent(GamerBitPin.P14, GamerBitEvent.Down, function () {
    ververs_scherm()
    lampje(200)
    X += 1
})
input.onButtonPressed(Button.A, function () {
    ververs_scherm()
    lampje(200)
    X += 1
})
gamePad.onEvent(GamerBitPin.P15, GamerBitEvent.Down, function () {
    lampje(200)
    ververs_scherm()
    X += -1
})
function lampje (hoe_lang: number) {
    gamePad.led(gamePad.Led.ON)
    basic.pause(hoe_lang)
    gamePad.led(gamePad.Led.OFF)
}
gamePad.onEvent(GamerBitPin.P13, GamerBitEvent.Down, function () {
    if (modus_C_en_S == "C") {
        Y += 1
    }
})
gamePad.onEvent(GamerBitPin.P8, GamerBitEvent.Down, function () {
    if (modus_C_en_S == "S") {
        lampje(200)
        spriengen = 1
        for (let index = 0; index < 8; index++) {
            if (!(led.point(2, 1))) {
                ververs_scherm()
                Y += 1
                basic.pause(100)
            }
        }
        spriengen = 0
    } else {
        Y += 1
    }
})
gamePad.onEvent(GamerBitPin.P1, GamerBitEvent.Down, function () {
    modus_C_en_S = "S"
})
input.onButtonPressed(Button.B, function () {
    lampje(200)
    ververs_scherm()
    X += -1
})
gamePad.onEvent(GamerBitPin.P2, GamerBitEvent.Down, function () {
    modus_C_en_S = "C"
})
let spriengen = 0
let tel4 = 0
let tel3 = 0
let Y = 0
let X = 0
let tel = 0
let eilanden_Y_X3: number[] = []
let eilanden_X_X3: number[] = []
let modus_C_en_S = ""
modus_C_en_S = "S"
eilanden_X_X3 = [0]
eilanden_Y_X3 = [0]
for (let index = 0; index < randint(30, 50); index++) {
    eilanden_X_X3.push(randint(30, -30))
    eilanden_Y_X3.push(randint(30, -30))
    eilanden_Y_X3.push(1)
}
tel = 0
for (let index = 0; index < eilanden_X_X3.length; index++) {
    led.plot(eilanden_X_X3[tel] * 3 + X, eilanden_Y_X3[tel] * 3 + Y)
    led.plot(eilanden_X_X3[tel] * 3 + X + 1, eilanden_Y_X3[tel] * 3 + Y)
    led.plot(eilanden_X_X3[tel] * 3 + X - 1, eilanden_Y_X3[tel] * 3 + Y)
    tel += 1
}
led.plot(2, 2)
basic.forever(function () {
    if (modus_C_en_S == "S") {
        if (!(led.point(2, 3)) && spriengen == 0) {
            Y += -1
            ververs_scherm()
            basic.pause(100)
        }
    }
})
