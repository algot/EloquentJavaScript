var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};


function arrayToList(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    var nextRest = list || null;
    var list = {};

    list["value"] = arr[i];
    list["rest"] = nextRest;
  }

  return list;
}

function listToArray(list) {
  var arr = [];
  arr.push(list.value);
  var rest = list.rest;

  while (rest) {
    arr.push(rest.value);
    rest = rest["rest"];
  }

  return arr;
}

function prepend(elem, list) {
  return {
    value: elem,
    rest: list
  }
}

function nth(list, index) {
  if (!list.rest && index != 0) return undefined;
  return (index != 0) ? nth(list.rest, --index) : list.value;
}

console.log(arrayToList([10, 15]));

var listToConvert = arrayToList([10, 20, 30]);
console.log(listToArray(listToConvert));

console.log(prepend(10, prepend(20, null)));

console.log(nth(arrayToList([10, 20, 30]), 1));