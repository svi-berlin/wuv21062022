function alarm () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.setLedColor(0xff0000)
    servo = randint(20, 150)
    pins.servoWritePin(AnalogPin.P1, servo)
    basic.pause(2000)
}
let mikro = 0
let servo = 0
servo = 0
let grenzwert = 530
basic.forever(function () {
    mikro = pins.analogReadPin(AnalogPin.MIC)
    basic.showNumber(mikro)
    if (mikro < grenzwert) {
        basic.setLedColor(0x00ff00)
    } else {
        alarm()
    }
    basic.pause(500)
})
