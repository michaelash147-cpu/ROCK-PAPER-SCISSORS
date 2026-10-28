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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
        if (humanChoice===computerChoice) {
            return "tie!";
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
let container = document.createElement("div");
let body = document.querySelector("body");

rockButton.textContent = "rock";
paperButton.textContent = "paper";
scissorsButton.textContent = "scissors";


rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
    container.textContent = "your score: " + humanScore + "\ncomputer score: " + computerScore;
});
paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
    container.textContent = "your score: " + humanScore + "\ncomputer score: " + computerScore;
});
scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
    container.textContent = "your score: " + humanScore + "\ncomputer score: " + computerScore;
});

container.style.whiteSpace = "pre-line";




body.appendChild(container);
body.appendChild(rockButton);
body.appendChild(paperButton);
body.appendChild(scissorsButton);







