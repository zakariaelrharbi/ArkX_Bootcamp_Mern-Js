// Setup: Create a new Node.js project. Include necessary modules like fs for file operations.
// This code creates a variable named fs and assigns it the value of the node:fs module, 
// which is an object that contains methods and properties for working with the file system in Node.js.
// This allows the code to use the fs variable to perform file system operations in the rest of the code.

const fs = require("fs");
function readFileAsync(filepath) {

    //return a promise.
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, 'utf-8', (err, data) =>{
            if (err) {
                reject('Error reading file : ' + err);
            } else {
                resolve(data);
            }
        });
    });
}
module.exports = readFileAsync;
// test :
// readFileAsync("./text.txt")
// .then(function (data) {
//     console.log(data);
// })
// .catch(function (err) {
//     console.log(err);    
// })
// .finally(function () {
//     console.log("All settled");
// })