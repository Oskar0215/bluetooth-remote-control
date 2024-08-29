input.onGesture(Gesture.LogoUp, function () {
    basic.showNumber(1)
    mycontrol = 1
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showNumber(3)
    mycontrol = 3
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showNumber(0)
    mycontrol = 0
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showNumber(4)
    mycontrol = 4
})
input.onGesture(Gesture.LogoDown, function () {
    mycontrol = 2
    basic.showNumber(2)
})
let mycontrol = 0
radio.setGroup(1)
mycontrol = 0
basic.forever(function () {
    radio.sendNumber(mycontrol)
})
