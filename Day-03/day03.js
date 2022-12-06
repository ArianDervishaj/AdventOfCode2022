const fs = require('fs');

//take the data from the day02.txt file
fs.readFile('./day02.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    //Sanitize the data and make it usable.
    const strat = 
    data
        .trim()
        .split("\n");

    
} )