function reverseArray(arr) {
  var reversedArray = [];

  for (var i = arr.length - 1; i >= 0; --i)
    reversedArray.push(arr[i]);

  return reversedArray;
}

function reverseArrayInPlace(arr) {
  var middleOfArray = Math.floor(arr.length / 2);

  for (var firstPosition = 0; firstPosition < middleOfArray; ++firstPosition) {
    var lastPosition = arr.length - firstPosition - 1;
    
    var tmp = arr[lastPosition];
    arr[lastPosition] = arr[firstPosition];
    arr[firstPosition] = tmp;
  }
  return arr;
}

// console.log(reverseArray([0, 1, 1, 2, 3, 4, 5]));

var inPlaceArray = [0, 1, 2, 3, 4, 5];
reverseArrayInPlace(inPlaceArray);
console.log(inPlaceArray);