const getComputerChoice = () => {
    let randomNum = Math.random();
    if (randomNum < 1/3) {
        return "rock";
    } else if (randomNum < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
    
};

const getHumanChoice = () => {
    return prompt("Rock paper or scissors?");
}

let humanScore = 0;
let computerScore = 0;

let computerChoice = getComputerChoice().toLowerCase();
let humanChoice = getHumanChoice().toLowerCase();


const playRound = (humanChoice, computerChoice) => {
    let winnerMessage = "You win!";
    let loserMessage = "You lose!";
    if (humanChoice === computerChoice) {
        return "tie";
    } else if (computerChoice === "rock") {
        if (humanChoice === "paper") {
            return winnerMessage;
        } else {
            return loserMessage;
        }
    } else if (computerChoice === "paper") {
        if (humanChoice === "scissors") {
            return winnerMessage;
        } else {
            return loserMessage;
        }
    } else if (humanChoice === "rock") {
        return winnerMessage;
    } else {
        return loserMessage;
    }
}; 


//return tie if humanChoice === computerChoice
//return winnerMessage if (rock-paper OR paper-scissors OR scissors-rock)
//return loserMessage if (rock-scissors OR paper-rock OR paper-scissors)





const playGame = () => {
    //loop through five rounds calling playRound each time
    //keep track of score by appending result of each playRound call to the end of humanScore
    //declare winner

    for (let i = 0; i < 5; i++) {
        if (playRound(humanChoice, computerChoice) === "human") {
            humanScore++
        } else {
            computerScore++
        }
    }

    return "human: " + humanScore + "\n" + "computer: " + computerScore;
 
};


//console.log("computer: " + computerChoice);
//console.log("human: " + humanChoice);
console.log(playGame(humanChoice, computerChoice));


