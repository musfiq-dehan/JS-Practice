function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    this.start = () => {
        if (running) {
            throw new Error("Already Started!");
        }
        running = true;

        startTime = new Date();
    };

    this.end = () => {
        if (!running) {
            throw new Error("Already Stopped!");
        }
        running = false;

        endTime = new Date();

        const timeDiff = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += timeDiff;
    };

    this.reset = () => {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, "duration", {
        get: () => { return duration; }
    });
}

const sw = new Stopwatch();

console.log(sw.start());
console.log(sw.end());
console.log(sw.duration);