function Circle(radius) {
    let defaultLocation = { x: 0, y: 0 };

    let computeOptimumLocation = function (factor) {
        console.log("computeOptimumLocation called", factor);
    }

    this.radius = radius;

    this.draw = function () {
        console.log("draw");
    }

    Object.defineProperty(this, "defaultLocation", {
        get: function () {
            return defaultLocation;
        },

        set: function (value) {
            if (!value.x || !value.y)
                throw new Error("Invalid location.");
            defaultLocation = value;
        }
    });


}

const circle = new Circle(12);
console.log(circle.draw());

circle.defaultLocation = 5;
console.log(circle.draw());