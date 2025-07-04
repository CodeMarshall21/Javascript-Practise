// ROCK PAPER SCISSORS

const choices = ["rock","paper","scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;


let result = "";

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // console.log(computerChoice);
    if (playerChoice === computerChoice){
        result = "IT'S A TIE !"
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN !" : "YOU LOSE !";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN !" : "YOU LOSE !";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN !" : "YOU LOSE !";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;

    if(result === "YOU WIN !"){
        resultDisplay.classList.add("greenDisplay");
        playerScore ++;
    }
    else if(result === "YOU LOSE !"){
        resultDisplay.classList.add("redDisplay");
        computerScore ++;
    }
    else{
        resultDisplay.classList.remove("greenDisplay","redDisplay");
    }

    resultDisplay.textContent = result;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

}