class Shape {
    constructor(color) {
        this.color = color;
    }

    move() {
        console.log("Moving");
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);

        this.radius = radius;
    }

    draw() {
        console.log("drawn");
    }

    // Method Overriding
    move() {
        super.move();
        console.log("Circle is moving!");
    }
}

const c = new Circle("Blue", 50);