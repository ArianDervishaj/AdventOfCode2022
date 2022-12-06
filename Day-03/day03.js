const fs = require('fs');

function splitArray(array){
    
    const nbOfPart = 2;
    let splitedArray = [[],[]];

    
    
}

//take the data from the day02.txt file
fs.readFile('./day03.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    const dataSample = `
    vJrwpWtwJgWrhcsFMMfFFhFp
    jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
    PmmdzqPrVvPwwTWBwg
    wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
    ttgJtRGJQctTZtZT
    CrZsJsPPZsGzwwsLwLmpwMDw
    `;

    //Sanitize the data and make it usable.
    const rucksacks = 
    dataSample
        .trim()
        .split("\n");
        
        
    rucksacks.map(rucksack => {
        console.log(rucksack);
    })
} )