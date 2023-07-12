const fs = require("fs");

//fs.renameSync("./assets/logs", "accounts/logs");
//console.log("logs folder moved");

/*
fs.rmdir("./accounts", function(err){
    if(err){
        console.log(err);
    } else {
        console.log("accounts directory removed")
    }
});
*/

fs.readdirSync("./accounts").forEach((file) => {
    fs.renameSync(`./accounts/${file}`, `./library/${file}`)
});
console.log("files removed");
fs.rmdirSync("./accounts");
console.log("folder has been removed")