input.onButtonPressed(Button.AB, function () {
    basic.showString("base menor=")
    basic.showString("base mayor=")
    basic.showString("altura=")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Area del trapecio=")
    area = base_mayor + base_menor
})
let area = 0
let base_menor = 0
let base_mayor = 0
basic.showString("Anette A01285180")
base_mayor = 20
base_menor = 12
let altura = randint(1, 200)
basic.forever(function () {
	
})
