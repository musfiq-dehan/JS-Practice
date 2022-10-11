const _total = Symbol();
const _walk = Symbol();

// ES6 Class
class Circle {
    // Constructor function
    constructor(radius, total) {
        this.radius = radius;
        // Private Property
        this[_total] = total;

        this.move = function () {
            console.log("Lets Move");
        };
    }

    // Will be added to prototype
    draw() {
        console.log(`Draw a circle of radius ${this.radius}`);
    }

    // Private Method
    [_walk]() {
        console.log(`A circle of walk ${this.radius}`);
    }

    // static Method
    static run(speed) {
        console.log("Circle is running at " + speed);
    }
}

const c2 = new Circle(12);
console.log(c2);
Circle.run(120);