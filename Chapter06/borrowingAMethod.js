let map = {
    one: true,
    two: true,
    hasOwnProperty: true
};

// console.log(map.hasOwnProperty("one"));
console.log(Object.prototype.hasOwnProperty.call(map, "one"));