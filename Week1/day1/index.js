const processFiles = require("./processFile");

try{

    processFiles("./readme.md")
}
catch(err){
    console.log(err);
}