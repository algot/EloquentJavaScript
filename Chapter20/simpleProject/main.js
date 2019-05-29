const {
    reverse
} = require("./reverse");

// Index 2 holds the first actual command line argument
let argument = process.argv[2];
if (process.argv.length != 3) {
    console.log("Please specify only one string argument");
} else {
    console.log(reverse(argument));
}

// let {
//     readFile
// } = require("fs");

// readFile("file.txt", "utf8", (error, text) => {
//     if (error) throw error;
//     console.log("The file contains:", text);
// });

let {
    writeFile
} = require("fs");
writeFile("graffiti.txt", "Node was here", err => {
    if (err) console.log(`Failed to write file: ${err}`);
    else console.log("File written.");
});

const {
    readFile
} = require("fs").promises;

readFile("file.txt", "utf8").then(text => console.log("The file contains:", text));