function alarm () {
    basic.setLedColor(0x0000ff)
    serialmp3.playMp3Folder(1, Mp3Repeat.No)
    basic.pause(2000)
    basic.setLedColor(0xff0000)
    servo = randint(20, 150)
    pins.servoWritePin(AnalogPin.P1, servo)
    basic.pause(2000)
}
let mikro = 0
let servo = 0
serialmp3.connectSerialMp3(DigitalPin.C16, DigitalPin.C17)
serialmp3.setMp3Volume(30)
servo = 0
let grenzwert = 520
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
