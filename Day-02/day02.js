const fs = require('fs');

//take the data from the day01.txt file
fs.readFile('./day02.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    console.log(data);
} )





