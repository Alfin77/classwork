let messageBuffer = Buffer.from("NodeJS is fast");

let wordNodeJS = messageBuffer.slice(0, 6);
console.log("Word:", wordNodeJS.toString());

let wordPowerful = Buffer.from("Powerful");

if (wordNodeJS.compare(wordPowerful) < 0) {
    console.log("NodeJS comes before Powerful");
} else {
    console.log("Powerful comes before NodeJS");
}

let jsonOutput = wordNodeJS.toJSON();
console.log("JSON:", jsonOutput);