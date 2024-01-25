// Create array possibleChoices with pool of possible plays
const possibleChoices = ['Rock', 'Paper', 'Scissors'];

// Write function getComputerCode to randomly return either 'Rock,' 'Paper,' or 'Scissors'
// Return string at randomized index position in possibleChoices
function getComputerCode() {
    return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
}
