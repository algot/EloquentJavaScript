// Print farm inventory
function printFarmInventory(cows, chickens, pigs) {
  console.log(zeroPad(cows, 3) + " Cows");
  console.log(zeroPad(chickens, 3) + " Chickens");
  console.log(zeroPad(pigs, 3) + " Pigs");
}

function zeroPad(number, width) {
  var string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}

printFarmInventory(7, 11, 3);