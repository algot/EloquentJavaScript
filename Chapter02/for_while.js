var result = 1;
var counter = 0;
while (counter < 10) {
  result *= 2;
  counter++;
}
console.log(result);

var result = 1;
for (var counter = 0; counter < 10; counter++) {
  result *= 2;
}
console.log(result);

for (var current = 20;; current++) {
  if (current % 7 == 0) {
    break;
  }
}
console.log(current);

// switch (prompt("How is weather?")) {
//   case "rain":
//     console.log("Don't forget your umbrella.");
//     break;
//   case "snow":
//     console.log("Damn!");
//     break;
//   case "Sunny":
//     console.log("Great!");
//     break;
//   default:
//     console.log("Uncertanly.");
//     break;
// }