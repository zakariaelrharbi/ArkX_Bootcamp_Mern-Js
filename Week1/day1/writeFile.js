// Implement a function writeFileAsync that takes a file path and content as arguments and writes 
// to the file asynchronously using fs.writeFile.It should return a Promise.
//  Include error handling for potential issues like write permissions.
const fs = require('fs');

function writeFileAsync(filepath, content) {

    return new Promise((resolve, reject) => {
        fs.writeFile(filepath, content, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        })
    })
}
module.exports = writeFileAsync;
// test :
// writeFileAsync("./text.txt", "My name is zakaria")
// .then(function () {
//     console.log("done");
// })
// .catch(function (err) {
//     console.log(err);
// })
// .finally(function () {
//     console.log("All settled");
// })