const fetch = require("node-fetch");

fetchWithAccept("text/plain");
fetchWithAccept("text/html");
fetchWithAccept("application/json");
fetchWithAccept("application/rainbows+unicorns");

function fetchWithAccept(mediaType) {
    fetch('https://eloquentjavascript.net/author', {
        method: "GET",
        headers: {
            accept: mediaType
        }
    }).then(resp => {
        console.log(resp.status);
    });
}