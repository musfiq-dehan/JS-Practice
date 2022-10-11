function Circle(radius) {
    this.radius = radius;

    this.walk = function () {
        this.draw();
        console.log("Walk");
    }
}

const c1 = new Circle(10);
const c2 = new Circle(20);

Circle.prototype.draw = () => {
    console.log("Draw");
}

Circle.prototype.move = function () {
    this.walk();
    console.log("Move");
}

Circle.prototype.toString = function () {
    return `Radius of circle is = ${this.radius}.`
}

// console.log(c2.move());

// Return Instance or own members
// console.log(Object.keys(c2));

// Return all members
for (let key in c2) console.log(key);


