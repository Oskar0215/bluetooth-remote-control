input.onGesture(Gesture.LogoUp, function () {
    basic.showNumber(1)
    mycontrol = 1
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showNumber(0)
    mycontrol = 0
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
