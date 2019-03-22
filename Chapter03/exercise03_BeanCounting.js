function CountBs(inputString, charToCount) {
  var count = 0;

  for (var i = 0; i < inputString.length; i++) {
    if (inputString[i] == charToCount) {
      count++;
    }
  }
  return count;
}

console.log(CountBs("AAAAaaaBbbaaahhBfhfha", "a"));