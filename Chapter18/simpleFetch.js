const fetch = require("node-fetch");

// fetch('http://www.google.com')
//     .then(resp => resp.text())
//     .then(text => console.log(text));

fetch('http://www.google.com', {
    method: "DELETE"
}).then(resp => {
    console.log(resp.status);
});

fetch('http://www.google.com', {
        headers: {
            Range: "bytes=8-19"
        }
    })
    .then(resp => resp.text())
    .then(console.log);