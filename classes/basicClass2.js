const _total = new WeakMap();
const _walk = new WeakMap();

// ES6 Class
class Circle {
    // Constructor function
    constructor(radius, total) {
        this.radius = radius;
        // Private Property
        _total.set(this, total);

        this.move = function () {
            console.log("Lets Move");
        };

        // Private Method
        _walk.set(this, () => {
            console.log(`A circle of walk ${this.radius}`);
        });

    }

    // Will be added to prototype
    draw() {
        _walk.get(this);
        console.log(`Draw a circle of radius ${this.radius}`);
    }


    // static Method
    static run(speed) {
        console.log("Circle is running at " + speed);
    }
}

const c2 = new Circle(12);
c2.draw();
console.log(c2);
Circle.run(120);