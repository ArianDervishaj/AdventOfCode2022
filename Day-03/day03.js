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
function sumOfPriorites(array){
    const asciiCodeA = 65;
    const asciiCodea = 97;
    let sum = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i].charCodeAt(0) < 91 && array[i].charCodeAt(0) > 64 ){ //check if char is upper case
            sum += (array[i].charCodeAt(0) - asciiCodeA + 1 + 26);
        }
        else{
            sum += (array[i].charCodeAt(0) - asciiCodea + 1);
        }

    }

    return sum;
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
DvScpDDVfBPqVcSbDpbfHpqwCWGJCwCJhvFdFFwlMGJWCG
fhHPbhZSpDbDTmsTZTjRzzQz
QbVQvNrrdFcbcMvvdNrcGrrczPnPplPnfnpzwpgmlflRVwwP
jBHLRqZWtLLqWDhBLshBCLsHgpfftfPmmpfpwnwfwJgfpfPn
WCRhsLDsDLBChTLWHChFTTMdGTQGvGQcMQNGMd
DvScpDDVfBPqVcSbDpbfHpqwCWGJCwCJhvFdFFwlMGJWCG
fhHPbhZSpDbDTmsTZTjRzzQz
QbVQvNrrdFcbcMvvdNrcGrrczPnPplPnfnpzwpgmlflRVwwP
jBHLRqZWtLLqWDhBLshBCLsHgpfftfPmmpfpwnwfwJgfpfPn
WCRhsLDsDLBChTLWHChFTTMdGTQGvGQcMQNGMd
PFFTlhllffsNsscl
    `;

    //Sanitize the data and make it usable.
    const rucksacks = 
    data
        .trim()
        .split("\n");
        
    console.log(rucksacks)
    let bothArray = [];
    rucksacks.map(rucksack => {
        const splitedRucksack = splitArray(rucksack);
        const leftRucksack = splitedRucksack[0];
        const rightRucksack = splitedRucksack[1];
        let bothArrayDeletable = [];

        for(let left = 0; left < leftRucksack.length; left++){
            for(let right = 0; right < rightRucksack.length; right++){

                if(leftRucksack[left] === rightRucksack[right]){

                    if(!bothArrayDeletable.includes(leftRucksack[left])){ //if the letter isn't already in the array pushes it in the array
                        bothArrayDeletable.push(leftRucksack[left]);
                        bothArray.push(leftRucksack[left])
                    }

                }

            }
        }


    } )
    console.log(bothArray);
    console.log(sumOfPriorites(bothArray));
})