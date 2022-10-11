const address = {
    street: "Master Para",
    city: "Noakhali",
    zipCode: 3800
}

function showAddress(address) {
    for (let key in address) {
        console.log(key, address[key]);
    }
}

showAddress(address);

///////////////////////////

function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    }
}

const add1 = createAddress('a', 'b', 'c');
console.log(add1)

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const add2 = new Address('a', 'b', 'c');
console.log(add2)