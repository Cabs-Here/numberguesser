let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10);
};

function compareGuesses(hGuess, cGuess, target) {
    let human = Math.abs(hGuess - target);
    let computer = Math.abs(cGuess - target);
    if (human <= computer) {
        return true
    }
    return false;
}

function updateScore(winner) {
    if (winner == 'human') {
        humanScore++;
    }
    if (winner == 'computer') {
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber++;
}