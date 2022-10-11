// let course = courses.find(function (c) {
//     return c.name === 'a';
// });
// console.log(course);

const courses = [
    {
        id: 1,
        name: 'a'
    },

    {
        id: 2,
        name: 'b'
    }
]

let course = courses.find((c) => c.name === 'a');
console.log(course);