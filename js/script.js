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
            console.log("Both guessed rock! It's a TIE!");
            return;
        case (cpu === 2 && player === 2):
            console.log("Both guessed paper! It's a TIE!");
            return;
        case (cpu === 3 && player === 3):
            console.log("Both guessed scissors! It's a TIE!");
            return;
        case (cpu === 1 && player === 3):
            console.log("Computer: Rock & Player: Scissors - Computer Wins!");
            return;
        case (cpu === 2 && player === 1):
            console.log("Computer: Paper & Player: Rock - Computer Wins!");
            return;
        case (cpu === 3 && player === 2):
            console.log("Computer: Scissors & Player: Paper - Computer Wins!");
            return;
        case (cpu === 1 && player === 2):
            console.log("Computer: Rock & Player: Paper - Player Wins!");
            return;
        case (cpu === 2 && player === 3):
            console.log("Computer: Paper & Player: Scissors - Player Wins!");
            return;
        case (cpu === 3 && player === 1):
            console.log("Computer: Scissors & Player: Scissors - Player Wins!");
            return;
        default:
            console.log("Enter valid values for CPU and Player (1 for Rock, 2 for Paper, 3 for Scissors).");
    }
    

}
// for (let i = 0; i < 5; i++ ) {
//     playGame();
// }

// If sats som jämför värdet (siffrorna) i båda funktionerna
// Ändrar värdet från siffror till bokstäver
// Printar ut vem som vinner.
// Rock vinner över Paper, Paper vinner över 