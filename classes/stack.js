const _arr = new WeakMap();

class Stack {
    // count
    // peek()
    // push()
    // pop()

    constructor() {
        _arr.set(this, []);
    }

    push(value) {
        const arr = _arr.get(this);
        arr.push(value);
    }

    pop() {
        const arr = _arr.get(this);
        let count = arr.length;

        if (count == 0) throw new Error("Stack is empty.");
        return arr.pop();
    }

    peek() {
        const arr = _arr.get(this);
        let count = arr.length;

        if (count == 0) throw new Error("Stack is empty.");
        return arr[count - 1]
    }

    get count() {
        const arr = _arr.get(this);
        let count = arr.length;

        return count;
    }
}

const stack = new Stack();