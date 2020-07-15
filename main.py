def ververs_scherm():
    global tel
    basic.clear_screen()
    tel = 0
    for index in range(len(eilanden_X_X3)):
        led.plot(eilanden_X_X3[tel] + X, eilanden_Y_X3[tel] + Y)
        led.plot(eilanden_X_X3[tel] + X + 1, eilanden_Y_X3[tel] + Y)
        led.plot(eilanden_X_X3[tel] + X - 1, eilanden_Y_X3[tel] + Y)
        tel += 1
    led.plot_brightness(2, 2, 69)

def my_function():
    global X
    ververs_scherm()
    lampje(200)
    X += 1
gamePad.on_event(GamerBitPin.P14, GamerBitEvent.DOWN, my_function)

def my_function2():
    global X
    lampje(200)
    ververs_scherm()
    X += -1
gamePad.on_event(GamerBitPin.P15, GamerBitEvent.DOWN, my_function2)

def lampje(hoe_lang: number):
    gamePad.led(gamePad.Led.ON)
    basic.pause(hoe_lang)
    gamePad.led(gamePad.Led.OFF)

def my_function3():
    global Y
    if modus_C_en_S == "C":
        Y += 1
gamePad.on_event(GamerBitPin.P13, GamerBitEvent.DOWN, my_function3)

def my_function4():
    global spriengen, Y
    if modus_C_en_S == "S":
        lampje(200)
        spriengen = 1
        for index2 in range(8):
            if not (led.point(2, 1)):
                ververs_scherm()
                Y += 1
                basic.pause(100)
        spriengen = 0
    else:
        Y += 1
gamePad.on_event(GamerBitPin.P8, GamerBitEvent.DOWN, my_function4)

def my_function5():
    global modus_C_en_S
    modus_C_en_S = "S"
gamePad.on_event(GamerBitPin.P1, GamerBitEvent.DOWN, my_function5)

def my_function6():
    global modus_C_en_S
    modus_C_en_S = "C"
gamePad.on_event(GamerBitPin.P2, GamerBitEvent.DOWN, my_function6)

spriengen = 0
modus_C_en_S = ""
Y = 0
X = 0
tel = 0
eilanden_Y_X3: List[number] = []
eilanden_X_X3: List[number] = []
eilanden_X_X3 = [0]
eilanden_Y_X3 = [0]
for index3 in range(randint(30, 50)):
    eilanden_X_X3.append(randint(30, -30))
    eilanden_Y_X3.append(randint(30, -30))
    eilanden_Y_X3.append(1)
tel = 0
for index4 in range(len(eilanden_X_X3)):
    led.plot(eilanden_X_X3[tel] * 3 + X, eilanden_Y_X3[tel] * 3 + Y)
    led.plot(eilanden_X_X3[tel] * 3 + X + 1, eilanden_Y_X3[tel] * 3 + Y)
    led.plot(eilanden_X_X3[tel] * 3 + X - 1, eilanden_Y_X3[tel] * 3 + Y)
    tel += 1
led.plot(2, 2)

def on_forever():
    global Y
    if modus_C_en_S == "S":
        if not (led.point(2, 3)) and spriengen == 0:
            Y += -1
            ververs_scherm()
            basic.pause(100)
basic.forever(on_forever)

def on_forever2():
    global Y
    if modus_C_en_S == "S":
        if Y < -40:
            Y = 40
basic.forever(on_forever2)
