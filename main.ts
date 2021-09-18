input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        # . . . #
        . # # # .
        `)
    music.playMelody("C E C E G G C E ", 120)
    music.playMelody("C E G G C5 B A G ", 120)
    music.playMelody("F A G F E D C C ", 120)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # # .
        . . # # .
        . . # # .
        . . # # .
        . # . . #
        `)
    music.playMelody("C D E F G A B C5 ", 120)
})
basic.forever(function () {
	
})
