let ANCESTRY_FILE = require('./ancestry.js');
let ancestry = JSON.parse(ANCESTRY_FILE);


console.log('ancestry.length: ' + ancestry.length + "\n");
console.log(filter(ancestry, function (person) {
    return person.born > 1900 && person.born < 1925;
}));

function filter(array, test) {
    var passed = [];
    for (var i = 0; i < array.length; i++) {
        if (test(array[i]))
            passed.push(array[i]);
    }
    return passed;
}