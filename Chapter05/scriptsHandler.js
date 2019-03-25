let SCRIPTS = require('./scripts.js');

console.log(SCRIPTS.length);
// console.log(filter(SCRIPTS, script => script.living));
console.log(SCRIPTS.filter(script => script.living));

let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
// let rtlScriptsNames = map(rtlScripts, s=> s.name);
// console.log(rtlScriptsNames);
console.log(rtlScripts.map(s => s.name));

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