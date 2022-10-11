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

// for (let item in circle) {
//     console.log(item)
// }

// for (let item of Object.keys(circle)) {
//     console.log(item)
// }

for (let item of Object.entries(circle)) {
    console.log(item[0])
}

if ('radius' in circle) {
    console.log("Yes")
}
else {
    console.log("No")
}