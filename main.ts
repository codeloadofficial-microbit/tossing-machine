input.onButtonPressed(Button.A, function () {
    basic.showString("Tossing...")
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Skull)
        heads += 1
    } else {
        basic.showIcon(IconNames.Square)
        tales += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Skull)
    basic.showNumber(heads)
    basic.showIcon(IconNames.Square)
    basic.showNumber(tales)
})
let tales = 0
let heads = 0
basic.showString("Let's Toss!")
heads = 0
tales = 0
basic.showString("Useful for Cricket and other sports!!!")
