const _radius = new WeakMap();

// ES6 Class
class Circle {
    // Constructor function
    constructor(radius) {

        // Private Property
        _radius.set(this, radius);
    }

    // Getter Method
    get radius() {
        return _radius.get(this);
    }

    // Setter Method
    set radius(value) {
        if (value <= 0) throw new Error("Invalid Value");
        _radius.set(this, value);
    }
}

const c = new Circle();
