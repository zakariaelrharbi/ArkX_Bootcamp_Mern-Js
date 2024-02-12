const fs = require('fs');

// read file
const Data = fs.readFileSync('system.js');
console.log(Data.byteLength)

// create a file and write on it
fs.writeFileSync('README.md', 'Today we gonna learn read write\n');

// add more content to an existing file
fs.appendFileSync('README.md', 'you again');

// copy a file 
fs.copyFileSync('README.md', 'README1.md');

// rename a file
fs.renameSync('README1.md', 'README2.md');

// delete file
fs.unlinkSync('README2.md');

// read directly content of a file
const dir = fs.readdirSync(__dirname);
console.log(dir);

// create a new directory
fs.mkdirSync('draft')

// look for any changes that happen to a file
fs.watchFile('Day4/draft/README2.md', ()=>{
    console.log("data added.")
});