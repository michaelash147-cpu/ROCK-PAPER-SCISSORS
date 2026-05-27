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

let winnerMessage = "You win!";
let loserMessage = "You lose!";

//return tie if humanChoice === computerChoice
//return winnerMessage if (rock-paper OR paper-scissors OR scissors-rock)
//return loserMessage if (rock-scissors OR paper-rock OR paper-scissors)




const playGame = () => {
    let overallScore = 0;
    const playRound = (humanChoice, computerChoice) => {
        let a = computerChoice;
        let b = humanChoice;
        if (humanChoice === computerChoice) {
            return "tie!" + " " + computerChoice + " " + humanChoice 
        } else if ((a==="rock" && b==="paper") || (a==="paper" && b==="scissors") || (a==="scissors" && b==="rock")) {
            return winnerMessage;
        } else {
            return loserMessage;
        }
    };


    for (let i = 1; i <= 5; i++) {
        let gameResult = playRound(getHumanChoice(), getComputerChoice());
        if (gameResult === winnerMessage) {
            overallScore++
        } else if (gameResult === loserMessage) {
            overallScore-- 
        } 
        console.log(overallScore)
    }

    if (overallScore > 0) {
        return "you win! overall score: " + overallScore
    } else if (overallScore === 0) {
        return "it's a tie! overall score: " + overallScore
    } else {
        return "you lose! overall score: " + overallScore
    }
};


//console.log("computer: " + computerChoice);
//console.log("human: " + humanChoice);
//console.log(playGame(humanChoice, computerChoice));
//console.log(playRound(getHumanChoice(), getComputerChoice()));
console.log(playGame());
