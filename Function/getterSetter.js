const person = {
    firstName: "Musfiq",
    lastName: "Dehan",
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

person.fullName = "Jariatul Maowa";

console.log(person.fullName);

console.log(person);