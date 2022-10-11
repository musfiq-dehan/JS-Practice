const circle = {
    radius: 2,

    get area() {
        return Math.PI * this.radius * this.radius;
    }
};

circle.radius = 5;
console.log(circle.radius);
console.log(circle.area);
