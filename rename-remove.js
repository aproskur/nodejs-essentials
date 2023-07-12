const fs = require('fs');

//fs.renameSync('./lib/config.js', './lib/project-config.js');

//console.log("file renamed");
/*
fs.rename("./lib/notes.md", "./notes.md", function(err) {
    if(err) {
        throw err;
    }
    console.log("File moved");

})
*/
//fs.unlinkSync("./lib/project-config.js");

fs.unlink("notes.md", function(err){
    if(err){
        throw err;
    } 
    console.log("notes.md removed");
});
