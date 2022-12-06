const fs = require('fs');

//take the data from the day01.txt file
fs.readFile('day01.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    const getSumByElf = (group) =>
    group
        .split("\n") //divide each group into arrays of string
        .map(Number) //make the strings into integers
        .reduce((sum,num) => sum + num, 0); //add each numbers of the array, sum starts at 0
    
    //sanitize the data
    const elves = 
        data
            .trim() //trim white space before and after the input
            .split("\n\n"); //divide the list into an array of groups


    //find the sum of each group
    const elvesSum = elves.map(getSumByElf);


    //Puzzle 1 find the largest
    const maxSum = Math.max(...elvesSum);

    //Puzzle 3 find the 3 largest
    elvesSum.sort(function(a, b){return b - a}); //sort descending order

    let largestSumTotal = 0;

    for(let i = 0; i < 3; i++){
        largestSumTotal += elvesSum[i];
    }



    console.log("Max sum : " + maxSum);
    console.log("Largest sum total : " + largestSumTotal);
} )





