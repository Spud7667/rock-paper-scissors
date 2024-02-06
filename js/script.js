/*

Generate a random choice for the computer based on three different variables stored in an array?;
rock, paper, scissors and return that value and store it in a variable.


*/


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

function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper or Scissors?: ").toUpperCase()
    let choices = [
        {choice: "rock", value: 1},
        {choice: "paper", value: 2},
        {choice: "scissors", value: 3},
    ]
    // let rock = 1
    // let paper = 2
    // let scissors = 3

    if(playerChoice == "ROCK") {
        // console.log(rock)
        return choices[0].value
    } else if (playerChoice == "PAPER") {
        // console.log(paper)
        return choices[1].value
    } else if (playerChoice == "SCISSORS") {
        // console.log(scissors)
        return choices[2].value
    } else {
        console.log("Wrong input")
    }
}

// Funtkion som spelar ett parti
// Funktion

// Rock = 1
// Paper = 2
// Scis = 3

function playGame() {
    let cpu = getComputerChoice()
    let player = getPlayerChoice()
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
for (let i = 0; i < 5; i++ ) {
    playGame();
}

// If sats som jämför värdet (siffrorna) i båda funktionerna
// Ändrar värdet från siffror till bokstäver
// Printar ut vem som vinner.
// Rock vinner över Paper, Paper vinner över 