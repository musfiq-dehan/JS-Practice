// Parent Object
function Shape(color) {
    this.color = color;
}

// Adding method to prototype of parent
Shape.prototype.duplicate = function () {
    console.log("Duplicate Shape parent");
}

// Make a function for resuability
function extend(Child, Parent) {
    // Previous: Circle.prototype = Object.create(Object.prototype);
    Child.prototype = Object.create(Parent.prototype); // Reseting Parent Object
    Child.prototype.constructor = Child; // Reset Constructor
}

// A Child object of Shape
function Circle(radius, color) {
    Shape.call(this, color); // Calling Super/Parent Object for Inheritense

    this.radius = radius;

    this.draw = function () {
        console.log("Draw");
    };
}
extend(Circle, Shape);

// Overriding duplicate method of parent shape
Circle.prototype.duplicate = function () {
    Shape.prototype.duplicate.call(this); // Calling parent duplicate

    console.log("Duplicate Circle"); // Overrided duplicate
}

// A Child object of Shape
function Square(size, color) {
    Shape.call(this, color);

    this.size = size;
}
extend(Square, Shape);

// Overriding duplicate method of parent shape
Square.prototype.duplicate = function () {
    console.log("Duplicate Square"); // Overrided duplicate
}
// A Child object of Shape
function Triangle(type, color) {
    Shape.call(this, color);

    this.type = type;
}
extend(Triangle, Shape);

// Overriding duplicate method of parent shape
Triangle.prototype.duplicate = function () {
    console.log("Duplicate Triangle"); // Overrided duplicate
}

// Creating instances of Objects---
// const shape = new Shape("Orange");
// const circle = new Circle(5, "Purple");
// const square = new Square(10, "Blue");
// const triangle = new Triangle("equilateral", "Black");

const shapes = [
    new Circle(5, "Purple"),
    new Square(10, "Blue"),
    new Triangle("equilateral", "Black")
];

for (shape of shapes) {
    shape.duplicate();
}