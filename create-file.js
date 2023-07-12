const fs = require("fs");

let md = `
    This is a new file
    ==================

    ES6 Template Strings
    honor white space

    *Template strings
    *Node File system
    *Readline CLI

`

/*
fs.writeFile("javascript.md", md.trim(), function(){
    console.log("Markdown was created");
});
*/

fs.writeFile("javascript.md", md.trim(), function(err){
    if(err){
        throw err;
    }
    fs.appendFileSync("javascript.md", "\n\n### node.js");
    console.log("Markdown was created");
});