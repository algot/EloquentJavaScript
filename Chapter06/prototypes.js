let empty = {};
console.log(empty.toString);
console.log(empty.toString());

console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
console.log(Object.getPrototypeOf([]) == Array.prototype);


let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEE!");


// constructor
function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}

function Rabbit(type) {
    this.type = type;
}

Rabbit.prototype.speak = function (line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}

let weirdRabbit = new Rabbit("weird");
weirdRabbit.speak("Hi!");

class RabbitClass {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let killerRabbit2 = new RabbitClass("killer");
let blackRabbit = new RabbitClass("black");

killerRabbit.speak("Hi, I'm a killer");
blackRabbit.speak("Hi, I'm black");