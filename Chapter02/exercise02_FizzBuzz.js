var fizz = "Fizz";
var buzz = "Buzz";

/*
for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(fizz + buzz);
  }
  else if(i % 3 === 0){
    console.log(fizz);
  }
  else if (i % 5 === 0) {
    console.log(buzz);
  }
  else {
    console.log(i);
  }
}*/

for (var i = 1; i <= 100; i++) {
  var output = "";

  if (i % 3 == 0) {
    output += fizz;
  }
  if (i % 5 == 0) {
    output += buzz;
  }

  console.log(output || i);
}