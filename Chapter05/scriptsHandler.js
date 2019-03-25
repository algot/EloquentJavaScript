let SCRIPTS = require('./scripts.js');

console.log(SCRIPTS.length);
// console.log(filter(SCRIPTS, script => script.living));
console.log(SCRIPTS.filter(script=> script.living));

function filter(array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}