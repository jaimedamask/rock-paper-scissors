// Create array possibleChoices with pool of possible plays
const possibleChoices = ['ROCK', 'PAPER', 'SCISSORS'];

const roundOutcome = document.getElementById('round-outcome');
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const finalOutcomeEl = document.getElementById('final-outcome');

// Randomly returns either 'Rock,' 'Paper,' or 'Scissors' by returning string at randomized index position in possibleChoices
function getComputerSelection() {
    return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
}

let computerSelection; // Stores computer selection for each round
let computerScore = 0; // Keeps track of number of rounds computer wins
let playerSelection; // Holds player response to prompt for play
let playerScore = 0; // Keeps track of number of rounds player wins
let matchCount = 0;


const choices = document.getElementById('btn-container');

choices.addEventListener('click', e => {
    let outcome;
    if (e.target.matches('button')) {
        if (matchCount <= 5) {
            finalOutcomeEl.textContent = '';
            const button = e.target;
            playerSelection = button.textContent.toUpperCase();
            computerSelection = getComputerSelection();
            if (playerSelection === computerSelection) {
                outcome = "It's a draw! Try again!";
            } else if ((playerSelection == 'ROCK' && computerSelection == 'SCISSORS') || (playerSelection == 'PAPER' && computerSelection == 'ROCK') || (playerSelection == 'SCISSORS' && computerSelection == 'PAPER')) {
                outcome = `You won! ${playerSelection} beats ${computerSelection}!`;
                playerScore += 1;
                matchCount += 1;
            } else {
                outcome = `You lost! ${computerSelection} beats ${playerSelection}!`;
                computerScore += 1;
                matchCount += 1;
            }
        }
        roundOutcome.textContent = outcome;
        playerScoreEl.textContent = playerScore;
        computerScoreEl.textContent = computerScore;
        
        if (matchCount === 5) {
            if (playerScore > computerScore) {
                    finalOutcomeEl.textContent = 'You won! Great job!';
                } else if (playerScore < computerScore) {
                    finalOutcomeEl.textContent = 'You lost. Click your next selection to try again.';
                }
            matchCount = 0;
            playerScore = 0;
            computerScore = 0;
        }
    }
})