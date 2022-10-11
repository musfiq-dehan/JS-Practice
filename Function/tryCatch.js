const person = {
    firstName: "Musfiq",
    lastName: "Dehan",
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        if (typeof value !== "string") {
            throw Error("Value is not string.");
        }
        parts = value.split(" ");
        if (parts.length != 2) {
            throw Error("Please enter first and last name.")
        }
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

try {
    person.fullName = null;
}
catch (e) {
    console.log(e);
}

// console.log(person.fullName);

// console.log(person);