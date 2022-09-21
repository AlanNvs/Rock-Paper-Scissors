"use strict"
function randomNumber () {
    const max = 3;
    const min = 1;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getComputerChoice() {    
    const computerResult = randomNumber();
    if(computerResult === 1) {
        return "ROCK";
    } else if(computerResult === 2) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}
function playerSelect() {
    const getString = prompt("Select: Rock, Paper or Scissors?");   
    const playerChoice = getString.toUpperCase();
    
    return playerChoice;
} 
function playRound(computerSelection, playerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = playerSelection.toUpperCase();
    let computerWin = "computerwin";
    let playerWin = "playerwin";

    console.log(`Computer selection: ${computerSelection}`);
    console.log(`Player selection: ${playerSelection}`);

    if(computerSelection === playerSelection) {
        console.log("It's a Draw!");
        return "It's a Draw!";
    } else if(computerSelection === "PAPER" && playerSelection === "ROCK") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
        return computerWin;
    } else if(computerSelection === "ROCK" && playerSelection === "SCISSORS") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}!`)
        return computerWin;
    } else if (computerSelection === "SCISSORS" && playerSelection === "PAPER") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
        return computerWin;
    } else if (computerSelection === "PAPER" && playerSelection === "SCISSORS") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
        return playerWin;
    } else if (computerSelection === "ROCK" && playerSelection === "PAPER") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
        return playerWin;
    } else if (computerSelection === "SCISSORS" && playerSelection === "ROCK") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
        return playerWin;
    }
}
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let result = 0;
    for(let i = 0; i < 5; i++) {
        result = playRound();
        if(result === 1) {
            computerScore++;
        } else if (result === 2){
            playerScore++;
        }
        console.log(`Player score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
    }
    if(playerScore > computerScore) {
        console.log(`You are the winner! You have won ${playerScore} times!`)
    } else if (computerScore > playerScore) {
        console.log(`The computer won! You have won ${playerScore} times and the Computer won ${computerScore} times!`);
    } else {
        console.log(`It's a Draw! You and the computer have won ${playerScore} times!`);
    }
} 

const container = document.querySelector("#container");

const div = document.createElement("div");
const p = document.createElement("p");
const pScorePC = document.createElement("p");
const pScorePlayer = document.createElement("p");

let playerCounter = 0;
let computerCounter = 0;

const btnRock = document.querySelector(".rock");

btnRock.addEventListener("click", (e) => {
    const winner = playRound(e, "rock");
    if(winner === "computerwin") {
        p.textContent = "You lose! PAPER beats ROCK!";
        computerCounter++;
        pScorePC.textContent = `Computer score: ${computerCounter}`;
        pScorePlayer.textContent = `Player score: ${playerCounter}`;
    } else if(winner === "playerwin") {
        p.textContent = "You win! ROCK beats SCISSORS!";
        playerCounter++;
        pScorePC.textContent = `Computer score: ${computerCounter}`;
        pScorePlayer.textContent = `Player score: ${playerCounter}`;
    } else p.textContent = winner;
});


const btnPaper = document.querySelector(".paper");

btnPaper.addEventListener("click", (e) => {
    const winner = playRound(e, "paper");
    if(winner === "computerwin") {
        p.textContent = "You lose! SCISSORS beats PAPER!"
        computerCounter++;
        pScorePC.textContent = `Computer score: ${computerCounter}`;
        pScorePlayer.textContent = `Player score: ${playerCounter}`;
    } else if(winner === "playerwin") {
        p.textContent = "You win! PAPER beats ROCK!";
        playerCounter++;
        pScorePC.textContent = `Computer score: ${computerCounter}`;
        pScorePlayer.textContent = `Player score: ${playerCounter}`;
    } else p.textContent = winner;
});


const btnScissors = document.querySelector(".scissors");

btnScissors.addEventListener("click", (e) => {
    const winner = playRound(e, "scissors");
    if(winner === "computerwin") {
        p.textContent = "You lose! ROCK beats SCISSORS!";
        computerCounter++;
        pScorePC.textContent = `Computer score: ${computerCounter}`;
        pScorePlayer.textContent = `Player score: ${playerCounter}`;
    } else if(winner === "playerwin") {
        p.textContent = "You win! SCISSORS beats PAPER!";
        playerCounter++;
        pScorePC.textContent = `Computer score: ${computerCounter}`;
        pScorePlayer.textContent = `Player score: ${playerCounter}`;
    } else p.textContent = winner;
});


div.appendChild(p);
div.appendChild(pScorePC);
div.appendChild(pScorePlayer);
container.appendChild(div);
//game();
