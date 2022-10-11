function getRandoms(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

console.log(getRandoms(1, 10))