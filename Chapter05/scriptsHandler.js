let SCRIPTS = require('./scripts.js');

console.log(SCRIPTS.length);


// console.log(filter(SCRIPTS, script => script.living));
console.log(SCRIPTS.filter(script => script.living));

let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
// let rtlScriptsNames = map(rtlScripts, s=> s.name);
// console.log(rtlScriptsNames);
console.log(rtlScripts.map(s => s.name));

// console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
console.log([1, 2, 3, 4].reduce((a, b) => a + b));

console.log(SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
}));

console.log(Math.round(average(SCRIPTS.filter(s => s.living).map(s => s.year))));
console.log(Math.round(average(SCRIPTS.filter(s => !s.living).map(s => s.year))));

function filter(array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}

function map(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}

function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}

function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0);
}

function average(array) {
    return array.reduce((a, b) => a + b) / array.length;
}