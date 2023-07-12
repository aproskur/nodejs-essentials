const {inc, dec, getCount} = require("./myModule")

//console.log(myModule.who);
inc();
inc();
inc();

console.log(`the count is ${getCount()}`)