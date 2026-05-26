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

//console.log(getComputerChoice());
//console.log(getHumanChoice());