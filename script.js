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

    if (humanChoice === computerChoice) {
        return "tie" + humanChoice + computerChoice;
    } else if (computerChoice === "rock") {
        if (humanChoice === "paper") {
            return "win";
        } else {
            return "lose";
        }
    } else if (computerChoice === "paper") {
        if (humanChoice === "scissors") {
            return "win";
        } else {
            return "lose";
        }
    } else if (humanChoice === "rock") {
        return "win";
    } else {
        return "lose";
    }
   
};

console.log("computer: " + computerChoice);
console.log("human: " + humanChoice);
console.log(playRound(humanChoice, computerChoice));


