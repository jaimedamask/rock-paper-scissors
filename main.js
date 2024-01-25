// Create array possibleChoices with pool of possible plays
const possibleChoices = ['ROCK', 'PAPER', 'SCISSORS'];

// Randomly returns either 'Rock,' 'Paper,' or 'Scissors' by returning string at randomized index position in possibleChoices
function getComputerChoice() {
    return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
}


let computerSelection; // Stores computer selection for each round
let playerScore = 0; // Keeps track of number of rounds player wins
let computerScore = 0; // Keeps track of number of rounds computer wins
let playerSelection; // Holds player response to prompt for play

// game Function:
// Declare variable to hold outcome of each round
// If playerSelection is not rock, paper, or scissors, outcome is "That's not a valid choice. Please try again."
// If playerSelection and computerSelection are the same, outcome is "It's a draw! Try again!"
// If any of below win cases is true
    // player chooses rock and computer chooses scissors
    // player chooses paper and computer chooses rock
    // player chooses scissors and computer chooses paper
// Then outcome is "You won! playerSelection beats computerSelection!"
// Otherwise, outcome is "You lost! computerSelection beats playerSelection!"

// Loop through prompting player and running playRound until player or computer wins 3 rounds (best of 5)
// Log player and computer scores to console
// Declare winner of the most rounds


function game() {
    let outcome;
    function playRound(playerSelection, computerSelection) {
        if (playerSelection != 'ROCK' && playerSelection != 'PAPER' && playerSelection != 'SCISSORS') {
                outcome = "That's not a valid choice. Please try again.";
        } else if (playerSelection == computerSelection) {
                outcome = "It's a draw! Try again!";
        } else if ((playerSelection == 'ROCK' && computerSelection == 'SCISSORS') || (playerSelection == 'PAPER' && computerSelection == 'ROCK') || (playerSelection == 'SCISSORS' && computerSelection == 'PAPER')) {
            outcome = 'You won! ' + playerSelection + ' beats ' + computerSelection + '!';
            playerScore += 1;
        } else {
            outcome = 'You lost! ' + computerSelection + ' beats ' + playerSelection + '!';
            computerScore += 1;
        }
        console.log(outcome);
    }

    while (playerScore < 3 && computerScore < 3) {
        computerSelection = getComputerChoice();
        // console.log(computerSelection);
        playerSelection = prompt('Pick rock, paper, or scissors').toUpperCase();
        playRound(playerSelection, computerSelection);
        
        console.log(playerScore, computerScore);
    }

    if (playerScore < computerScore) {
        console.log('You lost. Refresh the page to try again.');
    } else {
        console.log('You won! Great job!');
    }
}

game();