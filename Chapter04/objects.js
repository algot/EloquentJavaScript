var day1 = {
  isSquirrel: false,
  events: ["work", "touch the wood", "pizza", "jogging", "tv"]
};
console.log(day1.isSquirrel);

console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);

var anObject = {
  left: 1,
  right: 2
};

console.log(anObject.left);
delete(anObject.left);
console.log(anObject.left);

console.log("left" in anObject);
console.log("right" in anObject);


var object1 = {
  value: 10
};
var object2 = object1;
var object3 = {
  value: 10
}

console.log(object1 == object2);
console.log(object1 == object3);

object1.value = 15;
console.log(object2.value);
console.log(object3.value);