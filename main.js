const words = ["rock","paper","scissor"];
let round = 1;
let prw = 0;
let crw = 0;
    


function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];

    return randomWord;
}


function playRound(playerSelection, computerSelection){
    const rbs = "Rock beats Scissor";
    const sbp = "Scissor beats Paper";
    const pbr = "Paper beats Rock";
    const win ="You win! ";
    const lose = "You lose! ";
    const draw = "Draw!";

    if (playerSelection === "rock"){
        if(computerSelection === "paper"){
            crw += 1;
            return lose + pbr;
        }
        else if (computerSelection === "scissor"){
            prw += 1;
            return win + rbs;
        }
        else if (computerSelection === "rock"){
            return  draw;
        }
    }

    if (playerSelection === "paper"){
        if(computerSelection === "paper"){
            return draw;
        }
        else if (computerSelection === "scissor"){
            crw += 1;
            return lose + sbp;
        }
        else if (computerSelection === "rock"){
            prw += 1;
            return  win + pbr;
        }
    }
    if (playerSelection === "scissor"){
        if(computerSelection === "paper"){
            prw += 1;
            return win + sbp;
        }
        else if (computerSelection === "scissor"){
            return draw;
        }
        else if (computerSelection === "rock"){
            crw += 1;
            return  lose + rbs;
        }
    }
}


function gme() {
    const r = "Round " + round + ": ";
    let playerSelection = prompt(r + "Please Enter (rock,paper or scissor)");
    while(!words.includes(playerSelection)){
        playerSelection = prompt("Invalid Input, please Enter (rock,paper or scissor) only");
    }
    computerSelection = getComputerChoice();
    const play = playRound(playerSelection, computerSelection);
    const score = " Scores ( Me: " + prw + " vs Comp: " + crw + " )";
    return r + play + score}

function winner(){
    const score = " Scores ( Me: " + prw + " vs Comp: " + crw + " )";
    
        if(prw > crw){
            return "Congratulations!, You won the game." + score;
        } else if(prw < crw) {
            return "Sorry, You lose the game!" + score;
        } else if(prw === crw) {
            return "Draw!, Try Again?" + score;
        }

}


while( round <= 5 ){
    console.log(gme());
    round++; 

}

console.log(winner());
   
