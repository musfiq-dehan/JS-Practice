const _radius = new WeakMap();

export class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        return `Draw a circle of radius ${_radius.get(this)}`;
    }
}