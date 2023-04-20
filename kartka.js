// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

// add a piece of text at position (120, 80)




loadSprite("tlo","Tło.png")
loadSprite("mikolaj","Mikołaj Wazowski.png")
loadSound("muzyka", "DzisiajwBetlejem.mp3")



play("muzyka")

add([
    sprite("tlo")
])


const mikolaj =add([
    pos(100,125),
    scale(0.7),
    sprite ("mikolaj")
])


let wprawo = true

mikolaj.onUpdate (() => {

    if (wprawo && mikolaj.pos.x < 350)
        mikolaj.pos.x += 1

    else if(!wprawo && mikolaj.pos.x > 50)
        mikolaj.pos.x -=1
    else wprawo ^= true

}
)

