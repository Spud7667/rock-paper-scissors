/*

Generate a random choice for the computer based on three different variables stored in an array?;
rock, paper, scissors and return that value and store it in a variable.


*/

let rock = document.querySelector(".rock").addEventListener("click", () => {
    getPlayerChoice("rock");
})

let paper = document.querySelector(".paper").addEventListener("click", () => {
    getPlayerChoice("paper");
})

let scissors = document.querySelector(".scissors").addEventListener("click", () => {
    getPlayerChoice("scissors");
})

let computerScore = 0;
let playerScore = 0;
let updatedPlayerScore = document.querySelector("p.playerScore");
let updatedComputerScore = document.querySelector("p.computerScore");

function getComputerChoice() {
    let computerChoice = [
        { choice: "Rock", value: 1},
        { choice: "Paper", value: 2},
        { choice: "Scissors", value: 3},
    ];

    let random = Math.floor(Math.random()*3)
    let computerOutput = computerChoice[random].value
   // console.log("Computer Choice is:", computerOutput)
    return computerOutput // Det value som datorn får

}

// En funtktion som tar player input och skickar tillbaka ett nummer

function getPlayerChoice(choice) {
    switch (choice) {
        case "rock":
            playGame(1);
            break;
        case "paper":
            playGame(2);
            break;
        case "scissors":
            playGame(3);
            break;
    }
}

// Funtkion som spelar ett parti
// Funktion

// Rock = 1
// Paper = 2
// Scis = 3

function playGame(player) {
    let cpu = getComputerChoice()
    console.log("Computer Choose: " + cpu, "Player Choose: " + player)

    switch(true) {
        case (cpu === 1 && player === 1):
            document.querySelector("div.result").innerText = "Both guessed rock! It's a TIE!";
            document.querySelector("div.winner").innerText = "";
            return;
        case (cpu === 2 && player === 2):
            document.querySelector("div.result").innerText = "Both guessed paper! It's a TIE!";
            document.querySelector("div.winner").innerText = "";
            return;
        case (cpu === 3 && player === 3):
            document.querySelector("div.result").innerText = "Both guessed scissors! It's a TIE!";
            document.querySelector("div.winner").innerText = "";
            return;
        case (cpu === 1 && player === 3):
            document.querySelector("div.result").innerText = "Computer: Rock & Player: Scissors - Computer Wins!";
            document.querySelector("div.winner").innerText = "";
            computerScore++
            updatedComputerScore.innerText = `${computerScore}: Computer Score`;
            winCondition();
            return;
        case (cpu === 2 && player === 1):
            document.querySelector("div.result").innerText = "Computer: Paper & Player: Rock - Computer Wins!";
            document.querySelector("div.winner").innerText = "";
            computerScore++
            updatedComputerScore.innerText = `${computerScore}: Computer Score`;
            winCondition();
            return;
        case (cpu === 3 && player === 2):
            document.querySelector("div.result").innerText = "Computer: Scissors & Player: Paper - Computer Wins!";
            document.querySelector("div.winner").innerText = "";
            computerScore++
            updatedComputerScore.innerText = `${computerScore}: Computer Score`;
            winCondition();
            return;
        case (cpu === 1 && player === 2):
            document.querySelector("div.result").innerText = "Computer: Rock & Player: Paper - Player Wins!";
            document.querySelector("div.winner").innerText = "";
            playerScore++
            updatedPlayerScore.innerText = `Player Score: ${playerScore}`;
            winCondition();
            return;
        case (cpu === 2 && player === 3):
            document.querySelector("div.result").innerText = "Computer: Paper & Player: Scissors - Player Wins!";
            document.querySelector("div.winner").innerText = "";
            playerScore++
            updatedPlayerScore.innerText = `Player Score: ${playerScore}`;
            winCondition();
            return;
        case (cpu === 3 && player === 1):
            document.querySelector("div.result").innerText = "Computer: Scissors & Player: Scissors - Player Wins!";
            document.querySelector("div.winner").innerText = "";
            playerScore++
            updatedPlayerScore.innerText = `Player Score: ${playerScore}`;
            winCondition();
            return;
        default:
            console.log("Enter valid values for CPU and Player (1 for Rock, 2 for Paper, 3 for Scissors).");
    }
    

}

function winCondition() {
    if (playerScore === 5) {
        document.querySelector("div.winner").innerText = "You Win! Game Over.";
        resetScore();
        } else if (computerScore === 5) {
            document.querySelector("div.winner").innerText = "Computer Wins! Game Over.";
            resetScore();
        }

    }

function resetScore() {
    if (playerScore === 5 || computerScore === 5) {
    computerScore = 0;
    playerScore = 0;
    updatedComputerScore.innerText = `Computer Score: ${computerScore}`;
    updatedPlayerScore.innerText = `Player Score: ${playerScore}`;
    computerScore = 0;
    playerScore = 0;
    updatedComputerScore.innerText = `Computer Score: ${computerScore}`;
    updatedPlayerScore.innerText = `Player Score: ${playerScore}`;
}
}
// for (let i = 0; i < 5; i++ ) {
//     playGame();
// }

// If sats som jämför värdet (siffrorna) i båda funktionerna
// Ändrar värdet från siffror till bokstäver
// Printar ut vem som vinner.
// Rock vinner över Paper, Paper vinner över 