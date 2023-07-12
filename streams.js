const fs = require("fs");


//not good solutions. if bigger filer, this may create latency
/*
fs.readFile(
    "./chat-logs/chat-log.log", 
    "utf-8", 
    (err, chatLog) => {
        console.log(`File read ${chatLog.length}`);
    }
);
console.log("reading the file");
*/

let stream = fs.createReadStream(
    "./chat-logs/chat-log.log", 
    "utf-8"
);


//streams breaks a file down into bits, 
//readable streams raise data events and pass small chunks of data to our callbacks
let data;

stream.once("data", (chunk) => {
        console.log("read stream started");
        console.log("====================");
        console.log(chunk);
    }
);

stream.on("data", (chunk) => {
    console.log(`chunk ${chunk.length}`)
    data += chunk;
})

stream.on("end", () => {
    console.log(`finished ${data.length}`);
})

console.log("reading the file");