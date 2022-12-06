const fs = require('fs');

const WIN = 6;
const DRAW = 3;

const elfRock = "A";
const elfPaper = "B";
const elfScissor = "C";

const scoreRock = 1;
const scorePaper = 2;
const scoreScissor = 3;

const elf = 0;
const player = 1;

function puzzle1(strat){
    /*
    Elf :
    A = rock
    B = paper
    C = scissor

    Us :
    X = rock, score 1 point 
    Y = paper, score 2 points
    Z = scissor, score 3 points
    */
   const playerRock = "X";
   const playerPaper = "Y";

    let score = 0;
        
    strat.map(group => {

        const game = group.split(" "); //split each array to have to arrays with a char in each


        if (game[player] === playerRock){ 
    
            score += scoreRock;
            
            if(game[elf] === elfScissor){ 

                score += WIN;

            }else if(game[elf] === elfRock){ 

                score += DRAW;
            }
        
        }else if(game[player] === playerPaper){ 
            
            score += scorePaper;
    
            if(game[elf] === elfRock){

                score += WIN;

            }else if(game[elf] === elfPaper){ 

                score += DRAW;
            }

        }else{ //if we play scissor

            score += scoreScissor;
    
            if(game[elf] === elfPaper){ 
                score += WIN;

            }else if(game[elf] === elfScissor){ 
                score += DRAW;
            }
        }
    
    })
    return score;

}

function puzzle2(strat){
    /*
    Elf :
    A = rock
    B = paper
    C = scissor

    Us :
    X = lose, score 0 point 
    Y = draw, score 3 points
    Z = win, score 6 points

    Rock = score 1 point
    Paper = score 2 point
    Scissor = score 3 point
    */
    const playerLose = "X";
    const playerDraw = "Y";

    let score = 0;
    
    strat.map(group => {

        const game = group.split(" "); //split each array to have to arrays with a char in each

        if(game[player] === playerLose){ 

            //player will always play to lose. Elf : rock => player : scissor, etc

            if(game[elf] === elfRock){
                score += scoreScissor;

            }else if(game[elf] === elfPaper){
                score += scoreRock;

            }else{ 
                score += scorePaper;
            }

        } else if(game[player] === playerDraw){ 
            score += DRAW;

            //player will always play to draw. Elf : rock => player : rock, etc

            if(game[elf] === elfRock){
                score += scoreRock;

            }else if(game[elf] === elfPaper){
                score += scorePaper;

            }else{
                score += scoreScissor;
            }

        }else{
            score += WIN;

            //player will always play to win. Elf : rock => player : paper, etc

            if(game[elf] === elfRock){
                score += scorePaper;

            }else if(game[elf] === elfPaper){
                score += scoreScissor;

            }else{
                score += scoreRock;
            }

        }

    })

    return score;
    
}

//take the data from the day01.txt file
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



