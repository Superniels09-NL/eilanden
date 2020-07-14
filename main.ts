gamePad.onEvent(GamerBitPin.P14, GamerBitEvent.Down, function () {
    Wis_scherm()
    X += 1
})
gamePad.onEvent(GamerBitPin.P15, GamerBitEvent.Down, function () {
    Wis_scherm()
    X += -1
})
function Wis_scherm () {
    basic.clearScreen()
}
gamePad.onEvent(GamerBitPin.P8, GamerBitEvent.Down, function () {
    for (let index = 0; index < 4; index++) {
        if (!(led.point(2, 1))) {
            Wis_scherm()
            Y += 1
            basic.pause(100)
        }
    }
})
let tel = 0
let Y = 0
let X = 0
let eilanden_X_X3 = [0]
let eilanden_Y_X3 = [0]
for (let index = 0; index < randint(10, 20); index++) {
    eilanden_X_X3.push(randint(-5, 5))
    eilanden_Y_X3.push(randint(-5, 5))
}
basic.forever(function () {
    tel = 0
    for (let index = 0; index < eilanden_X_X3.length; index++) {
        led.plot(eilanden_X_X3[tel] * 3 + X, eilanden_Y_X3[tel] * 3 + Y)
        led.plot(eilanden_X_X3[tel] * 3 + X + 1, eilanden_Y_X3[tel] * 3 + Y)
        led.plot(eilanden_X_X3[tel] * 3 + X - 1, eilanden_Y_X3[tel] * 3 + Y)
        tel += 1
    }
    led.plot(2, 2)
})
basic.forever(function () {
    if (!(led.point(2, 3))) {
        Y += -1
        Wis_scherm()
        basic.pause(100)
    }
})
basic.forever(function () {
    if (Y < -20) {
        Y = 20
    }
})
