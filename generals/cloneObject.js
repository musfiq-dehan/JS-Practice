// Article about cloning an object

const book = {
    title: "Time Management",
    author: "Brian Tracy",
    totalPage: 112,
    isBestseller: true,
    read: function () {
        console.log("Reading Daily!");
    }
}


// Brute Force
const anotherBook1 = {};

for (let key in book) {
    anotherBook1[key] = book[key]
}

// Object.assign()
const anotherBook2 = Object.assign({ price: "10$", publishedYear: 2006 }, book);

// Spread Operator
const anotherBook3 = { ...book }


console.log(anotherBook2)
console.log("Space")
console.log(book)