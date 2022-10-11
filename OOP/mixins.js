function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

const canEat = {
    eat: function () {
        this.hunger--;
        console.log("Eating");
    }

};

const canWalk = {
    walk: () => {
        console.log("Walking");
    }
};

const canSwim = {
    swim: () => {
        console.log("Swimming");
    }
};

// const Person = Object.assign({}, canWalk, canEat);

function Person() {

}

// Object.assign(Person.prototype, canWalk, canEat);
mixin(Person.prototype, canWalk, canEat);

const person = new Person();
console.log(person);

function GoldFish() {

}

// Object.assign(Person.prototype, canWalk, canEat);
mixin(GoldFish.prototype, canSwim, canEat);

const goldFish = new GoldFish();
console.log(goldFish);