x_position = 0
y_position = 0

def on_button_pressed_a():
    led.toggle(x_position, y_position)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global x_position
    x_position += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    global x_position, y_position
    if x_position > 4:
        x_position = 0
        y_position += 1
    if y_position > 4:
        y_position = 0
basic.forever(on_forever)