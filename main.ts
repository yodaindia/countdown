for (let index = 0; index <= 5; index++) {
    music.playTone(494, music.beat(BeatFraction.Quarter))
    basic.showNumber(5 - index)
}
music.playTone(392, music.beat(BeatFraction.Whole))
basic.showString("go")
basic.forever(function () {
	
})
