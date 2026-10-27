function getComputerChoice() {
    let randomNum = Math.random();
    if (randomNum < 1/3) {
        return "rock";
    } else if (randomNum < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
};

function getHumanChoice() {
    return prompt("rock paper or scissors");
};

function playRound(humanChoice, computerChoice) {
        if (humanChoice===computerChoice) {
            return "tie!"
        } else if ((humanChoice==="rock" && computerChoice==="scissors")||(humanChoice==="paper" && computerChoice==="rock")||(humanChoice==="scissors" && computerChoice==="paper")) {
            humanScore++
            return "you win!" + " " + humanChoice + " beats " + computerChoice; 
        } else {
            computerScore++
            return "you lose!" + " " + computerChoice + " beats " + humanChoice;
        }
    }

        /*
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        if (humanChoice===computerChoice) {
            return "tie!"
        } else if ((humanChoice==="rock" && computerChoice==="scissors")||(humanChoice==="paper" && computerChoice==="rock")||(humanChoice==="scissors" && computerChoice==="paper")) {
            humanScore++
            return "you win!" + " " + humanChoice + " beats " + computerChoice; 
        } else {
            computerScore++
            return "you lose!" + " " + computerChoice + " beats " + humanChoice;
        }
    };
    /*
    for (let i=0; i<5; i++) {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
        
    }
    return console.log("your score: " + humanScore)
}; 

*/

let rockButton = document.createElement("button");
let paperButton = document.createElement("button");
let scissorsButton = document.createElement("button");

rockButton.addEventListener("click", playRound())






