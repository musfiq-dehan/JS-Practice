function sums(...args) {
    if (args.length === 1 && Array.isArray(args[0]) === true) {
        args = [...args[0]]
    }
    return args.reduce((a, b) => a + b);
}

console.log(sums([1, 2, 3, 4]));