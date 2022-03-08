namespace ConnectionKind {
    export const asdf = ConnectionKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`empty cave`, function (sprite, location) {
    game.splash("You win level 1")
    tiles.loadMap(tiles.createMap(tilemap`level2`))
    speed = 0
    mySprite.vx = speed
    mySprite.setPosition(tiles.tilemapColumns(), 78)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -150
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    speed += -50
    mySprite.vx = speed
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`spikes`, function (sprite, location) {
    game.over(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    speed += 50
    mySprite.vx = speed
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`acid`, function (sprite, location) {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(assets.image`truck2crashed`)
    pause(1000)
    game.over(false)
})
let mySprite: Sprite = null
let speed = 0
speed = 100
scene.setBackgroundColor(9)
scene.setBackgroundImage(assets.image`background`)
tiles.setTilemap(tilemap`level0`)
mySprite = sprites.create(assets.image`truck0`, SpriteKind.Player)
mySprite.ay = 400
scene.cameraFollowSprite(mySprite)
animation.runImageAnimation(
mySprite,
assets.animation`truck2 animated`,
100,
true
)
