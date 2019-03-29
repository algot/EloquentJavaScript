/*
let ages = {
    Boris: 39,
    Liang: 22,
    Julia: 62
};
*/

let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Julia", 62);

console.log(`Julia is ${ages.get("Julia")}`);
console.log("Is jack's age known?", ages.has("Jack"));
console.log(ages.has("toString"));