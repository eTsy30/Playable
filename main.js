// const position = { // Example
//     from: {
//         x: 5,
//         y: 5
//     },
//     to: {
//         x: 5,
//         y: 5
//     }
// }

function stepWithSpeed(from, to, offset, i, speed) {
    if (to > from) {
        return Math.round(offset * i * speed + from)
    } else if (to < from) {
        return from - Math.round((offset * i)) * speed
    }
}

function step(from, to, offset, i) {
    if (to > from) {
        return Math.round(offset * i + from)
    }
    if (to < from) {
        return from - Math.round((offset * i))
    }
    if (to === from) {
        return to
    }
}

function offset(from, to) {
    if (to > from) {
        return ((to - from))
    } else {
        if (to < from) {
            return ((from - to))
        }
    }
}

const getSpeed = (progress) => {
    return 1 - Math.sin((1 - progress) * Math.PI / 2)
}

function moveTo({ position, duration, framePerSeconded }) {
    const arrMove = []
    const frame = duration / framePerSeconded
    const offsetX = offset(position.from.x, position.to.x) / frame
    const offsetY = offset(position.from.y, position.to.y) / frame

    for (let i = 0; i <= frame; i++) {
        const x = step(position.from.x, position.to.x, offsetX, i)
        const y = step(position.from.y, position.to.y, offsetY, i)
        arrMove.push({ x, y })
    }

    return arrMove
}

function accelerationBraking({ position, duration, framePerSecond }) {
    const arrMove = []
    const frame = duration / framePerSecond
    const offsetX = offset(position.from.x, position.to.x) / frame
    const offsetY = offset(position.from.y, position.to.y) / frame

    for (let i = 0; i <= frame; i++) {
        const progress = i / frame
        const speed = getSpeed(progress)
        const x = step(position.from.x, position.to.x, offsetX, i, speed)
        const y = step(position.from.y, position.to.y, offsetY, i, speed)
        arrMove.push({ x, y })
    }

    return arrMove
}

function rotate({ position, duration, framePerSecond, alpha }) {
    const arrMove = []
    const frame = duration / framePerSecond

    for (let i = 0; i <= frame; i++) {
        const angle = alpha / frame * i
        const deg = (alpha / frame * i) * (Math.PI / 180)
        const x = (position.from.x * Math.cos(deg)) - (position.from.x * Math.sin(deg))
        const y = (position.from.x * Math.sin(deg)) + (position.from.y * Math.cos(deg));
        arrMove.push({ x, y, angle })
    }

    return arrMove
}


