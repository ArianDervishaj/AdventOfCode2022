const fs = require('fs');

//take the data from the day02.txt file
fs.readFile('./day02.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    //Sanitize the data and make it usable.
    const strat = 
    data
        .trim()
        .split("\n");

    const scorePuzzle1 = puzzle1(strat);
    console.log("Puzzle 1 : " + scorePuzzle1);

    const scorePuzzle2 = puzzle2(strat);
    console.log("Puzzle 2 : " + scorePuzzle2);
    
} )