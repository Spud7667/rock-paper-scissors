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
    console.log(random + 1)
    let computerOutput = computerChoice[random].choice
    return computerOutput // Det value som datorn får

}

console.log(getComputerChoice())

// En funtktion som tar player input och skickar tillbaka ett nummer

function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper or Scissors?: ").toUpperCase()
    let rock = 1
    let paper = 2
    let scissors = 3

    if(playerChoice == "ROCK") {
        console.log(rock)
        return rock
    } else if (playerChoice == "PAPER") {
        console.log(paper)
        return paper
    } else if (playerChoice == "SCISSORS") {
        console.log(scissors)
        return scissors
    } else {
        console.log("Wrong input")
    }
}
getPlayerChoice()