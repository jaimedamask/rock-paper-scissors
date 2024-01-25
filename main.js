// Create array possibleChoices with pool of possible plays
const possibleChoices = ['ROCK', 'PAPER', 'SCISSORS'];

// Write function getComputerCode to randomly return either 'Rock,' 'Paper,' or 'Scissors'
// Return string at randomized index position in possibleChoices
function getComputerChoice() {
    return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
}

// Gets computer choice and stores in variable
const computerSelection = getComputerChoice();

// Write function that plays a single round and takes playerSelection and computerSelection as parameters
// Return string declaring winner of round

// If playerSelection != Rock, Paper, or Scissors, return "That's not a valid choice. Please try again."
// If playerSelection = computerSelection, return "It's a draw! Try again!"
// If playerSelection = 'Rock' and computerSelection = 'Paper', return 'You lost! Paper beats rock!'
// If playerSelection = 'Rock' and computerSelection = 'Scissors', return 'You won! Rock beats scissors!'
// If playerSelection = 'Paper' and computerSelection = 'Rock', return 'You won! Paper beats rock!'
// If playerSelection = 'Paper' and computerSelection = 'Scissors', return 'You lost! Scissors beat paper!
// If playerSelection = 'Scissors' and computerSelection = 'Rock', return 'You lost! Rock beats scissors!'
// If playerSelection = 'Scissors' and computerSelection = 'Paper', return 'You won! Scissors beat paper!'

function playRound(playerSelection, computerSelection) {
    if (playerSelection != 'ROCK' && playerSelection != 'PAPER' && playerSelection != 'SCISSORS') {
        return "That's not a valid choice. Please try again.";
    } else if (playerSelection == computerSelection) {
        return "It's a draw! Try again!";
    } else if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
        return "You lost! Paper beats rock!";
    } else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
        return "You won! Rock beats scissors!";
    } else if (playerSelection == 'PAPER' && computerSelection == 'ROCK') {
        return "You won! Paper beats rock!";
    } else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
        return "You lost! Scissors beat paper!";
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
        return "You lost! Rock beats scissors!";
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        return "You won! Scissors beats paper!";
    }
}

const testChoice = 'paper';
const playerSelection = testChoice.toUpperCase();
console.log(playRound(playerSelection, computerSelection));