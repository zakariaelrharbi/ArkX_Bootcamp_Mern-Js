// function processFiles that:
// * Reads multiple text files
// * Manipulates the content of these files in some way 
// * Writes the modified content to new files
const fs = require('fs');
const readFile = require('./readFile');
const writeFile = require('./writeFile');
// i created a function with a parametre files so i created a variable to loop on all files
// i created a new variable where i stored the data i recieved from readFile function 
// then i manipulate the data i recieved.

function processFiles(...files) {
    for (let i = 0; i < files.length; i++) {
        let readData = "";
        readFile(files[i])
        .then(function (data){
            readData = data.toUpperCase()
            writeFile(files[i], readData)
            .then(function () {
                console.log("it works");
            })
            .catch(function (err) {
                console.log(err);
            })
        })
        .catch(function (err) {
            let readError = "";
            readError = err;
            console.log(err);
        })
    }
}
module.exports = processFiles;
processFiles("readme.md");
