const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 2,
    },
    draw: function () {
        console.log("draw")
    }
}

// console.log(circle.location.x)

function createCircle(radius) {
    return {
        radius,
        draw(radius) {
            console.log(`draw ${radius}`)
        }
    }
}

const circle1 = createCircle(7);
console.log(circle1)