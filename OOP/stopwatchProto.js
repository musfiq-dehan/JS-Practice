// This code will not work

function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    Object.defineProperty(this, "startTime", {
        get: () => { return startTime; }
    });

    Object.defineProperty(this, "endTime", {
        get: () => { return endTime; }
    });

    Object.defineProperty(this, "running", {
        get: () => { return running; }
    });

    Object.defineProperty(this, "duration", {
        get: () => { return duration; }
    });
}

const sw = new Stopwatch();

Stopwatch.prototype.start = function () {
    if (this.running) {
        throw new Error("Already Started!");
    }
    this.running = true;

    this.startTime = new Date();
}

Stopwatch.prototype.end = function () {
    if (!this.running) {
        throw new Error("Already Stopped!");
    }
    this.running = false;

    this.endTime = new Date();

    const timeDiff = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    this.duration += timeDiff;
}

Stopwatch.prototype.reset = () => {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this.duration = 0;
};

console.log(sw.reset());
console.log(sw.start());
console.log(sw.end());
console.log(sw.duration);

