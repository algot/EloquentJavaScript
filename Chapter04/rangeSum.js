"use strict"

function range(rangeStart, rangeEnd, step = 1) {
  var arr = [];

  if (step < 0) {
    for (var i = rangeStart; i >= rangeEnd; i += step)
      arr.push(i);
  } else {
    for (i = rangeStart; i <= rangeEnd; i += step)
      arr.push(i);
  }

  return arr;
}

function sum(input) {
  return input.reduce(function (initValue, currValue) {
    return initValue + currValue;
  }, 0)
}

// console.log(range(10, 1));
console.log(sum(range(1, 10)));
// console.log(sum(range(1, 1)));