const fs = require('fs');

function splitArray(array){
    
    const nbOfPart = 2;
    let splitedArray = [[],[]];

    for(let left = 0; left < array.length / nbOfPart; left++){
        splitedArray[0].push(array[left]);
    }

    for(let right = array.length / nbOfPart; right < array.length; right++){
        splitedArray[1].push(array[right])
    }

    return splitedArray
    
}

//take the data from the day03.txt file
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
        const splitedRucksack = splitArray(rucksack);
        const leftRucksack = splitedRucksack[0];
        const rightRucksack = splitedRucksack[1];


        console.log(leftRucksack + " & " + rightRucksack);
        console.log(rucksack.length + " " + leftRucksack.length + " " + rightRucksack.length)
    })
} )