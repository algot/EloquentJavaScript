'use strict'

// Create Promise object
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // move promise to  fulfilled state with result "result"
        resolve("result");
    }, 1000);
});

// promise.then attaches handlers on successfull result or error
promise
    .then(
        result => {
            // First callback function - will start on resolve
            console.log("Fullfilled: " + result);
        },
        error => {
            // Second callback - will start on reject
            console.log("Rejected: " + error);
        }
    );