const fs = require('fs');

//read contents of directory synchronously with a blocking request - blocking the rest of the processes until the file is read
//let files = fs.readdirSync('./')
//console.log(files);

fs.readdir('./', function(err, files) {
    if (err) {
        throw err;
    }
    console.log(files);
});

console.log("reading files")