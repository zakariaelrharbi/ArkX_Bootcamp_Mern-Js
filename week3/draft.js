// this function check if the path you give it is a file or a directory

const fs = require('fs');

fs.stat('C:/ArkX_Bootcamp_Mern-Js/week3/draft.js', (err, stats) => {
    if (err) {
        console.error(err);
        return;
    }

    if (stats.isFile()) {
        console.log('It is a file!');
    } else if (stats.isDirectory()) {
        console.log('It is a directory!');
    }
});
