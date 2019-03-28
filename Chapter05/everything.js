function every(array, predicate) {
    for (let element of array) {
        if (!predicate(element)) return false;
    }
    return true;
}

function every2(array, predicate) {
    return !array.some(element => !predicate(element));
}

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));