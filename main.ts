input.onButtonPressed(Button.A, function () {
    if (asdfa == 0) {
        for (let index = 0; index < 9; index++) {
            led.plot(randint(0, 1), randint(0, 4))
        }
        asdfa += 1
    }
})
function sdfasd () {
    while (asdfa == 1 && sdfa == 1) {
    	
    }
    basic.pause(5000)
    basic.clearScreen()
    led.plotBrightness(2, 0, 50)
    led.plotBrightness(2, 1, 50)
    led.plotBrightness(2, 2, 50)
    led.plotBrightness(2, 3, 50)
    led.plotBrightness(2, 4, 50)
    asdfa = 0
    sdfa = 0
}
input.onButtonPressed(Button.B, function () {
    if (sdfa == 0) {
        for (let index = 0; index < 9; index++) {
            led.plot(randint(3, 4), randint(0, 4))
        }
        sdfa += 1
    }
})
let sdfa = 0
let asdfa = 0
led.plotBrightness(2, 0, 50)
led.plotBrightness(2, 1, 50)
led.plotBrightness(2, 2, 50)
led.plotBrightness(2, 3, 50)
led.plotBrightness(2, 4, 50)
asdfa = 0
sdfa = 0
sdfasd()
