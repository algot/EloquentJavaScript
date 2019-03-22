function greaterThan(n) {
    return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));



function unless(test, then) {
    if (!test) then();
}

function repeat(times, body) {
    for (var i = 0; i < times; i++) body(i);
}

repeat(3, function(n){
    unless(n % 2, function() {
        console.log(n, "is even");
    });
});