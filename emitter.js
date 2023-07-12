const events = require('events');

let emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) => {
    console.log(`${user} ${message}`);
});

emitter.emit("customEvent", "Hello", "computer");
emitter.emit("customEvent", "Cool", "Astronotarb");

process.stdin.on("data", (data) => {
    const input = data.toString().trim();
    if (input === 'exit') {
        emitter.emit("customEvent", "Bye", "proccess");
        process.exit();
    }

    emitter.emit("customEvent", data.toString().trim(), "terminal")
});