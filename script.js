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

let winnerMessage = "You win!";
let loserMessage = "You lose!";

//return tie if humanChoice === computerChoice
//return winnerMessage if (rock-paper OR paper-scissors OR scissors-rock)
//return loserMessage if (rock-scissors OR paper-rock OR paper-scissors)

const playRound = (humanChoice, computerChoice) => {
    let a = computerChoice;
    let b = humanChoice;
    if (humanChoice === computerChoice) {
        return "tie!"
    } else if ((a==="rock" && b==="paper") || (a==="paper" && b==="scissors") || (a==="scissors" && b==="rock")) {
        return winnerMessage;
    } else {
        return loserMessage;
    }
};




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


