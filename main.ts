let x_position = 0
let y_position = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    led.toggle(x_position, y_position)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    x_position += 1
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    basic.showLeds(`
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    `)
})
basic.forever(function on_forever() {
    
    if (x_position > 4) {
        x_position = 0
        y_position += 1
    }
    
    if (y_position > 4) {
        y_position = 0
    }
    
})
