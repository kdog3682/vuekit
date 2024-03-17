import {path, revolve} from "/home/kdog3682/2024-javascript/js-toolkit/animate.js"
import {World} from "/home/kdog3682/2024-javascript/shapelang/World.js"

const options = {
    mode: 'elt',
    padding: 20,
    border: true
}
const world = new World()
world.setOptions(options)

const svg = world.canvas(({point, line, register}) => {
    const a = line(point(0, 0), point(100, 100))

    for (let i = 0; i < 5; i++) {
        register(a.rotate(45 * i, 'center').stroke(world.palette.next()))
    }
})

async function anime() {
    const children = svg.children
    for (const child of children) {
        await revolve(child, 1000)
        // await path(child)
    }
}


anime()
