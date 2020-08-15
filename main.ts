sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.setPosition(randint(0, 160), randint(0, 120))
})
scene.setBackgroundColor(7)
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . . . . . . . . . 
    . . . . f f f 2 2 f f f . . . . . . . . . . . . 
    . . . f f f 2 2 2 2 f f f . . . . . . . . . . . 
    . . f f f e e e e e e f f f . . . . . . . . . . 
    . . f f e 2 2 2 2 2 2 e e f . . . . . . . . . . 
    . . f e 2 f f f f f f 2 e f . . . . . . . . . . 
    . . f f f f e e e e f f f f . . . . . . c c c . 
    . f f e f b f 4 4 f b f e f f . . . . c d d c . 
    . f f e f b f 4 4 f b f e f f . . . c d d c . . 
    . f e e 4 d d d d d d 4 e e f . c c d d c . . . 
    f d f e e d d d d d 4 e e f f e c d d c . . . . 
    f b f f e e 4 4 4 4 e e 4 f d d c c c . . . . . 
    f b f 4 f 2 2 2 2 2 2 f 1 e d d e . . . . . . . 
    f c f . f 2 2 2 2 2 2 f 4 4 e e . . . . . . . . 
    . f f . f 4 4 5 5 4 4 f . . . . . . . . . . . . 
    . . . . f f f f f f f f . . . . . . . . . . . . 
    . . . . . f f . . f f . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
let piza = sprites.create(img`
    . . . . . . b b b b . . . . . . 
    . . . . . . b 4 4 4 b . . . . . 
    . . . . . . b b 4 4 4 b . . . . 
    . . . . . b 4 b b b 4 4 b . . . 
    . . . . b d 5 5 5 4 b 4 4 b . . 
    . . . . b 3 2 3 5 5 4 e 4 4 b . 
    . . . b d 2 2 2 5 7 5 4 e 4 4 e 
    . . . b 5 3 2 3 5 5 5 5 e e e e 
    . . b d 7 5 5 5 3 2 3 5 5 e e e 
    . . b 5 5 5 5 5 2 2 2 5 5 d e e 
    . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
    . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
    b d 3 2 d 5 5 5 d d d 4 4 . . . 
    b 5 5 5 5 d d 4 4 4 4 . . . . . 
    4 d d d 4 4 4 . . . . . . . . . 
    4 4 4 4 . . . . . . . . . . . . 
    `, SpriteKind.Food)
