let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() { // generates a random numbers between 0 and 9
    return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, computerGuess, target) { // compares the guesses, returns true if human wins.
    const humanDifference = Math.abs(target - humanGuess);
    const computerDifference = Math.abs(target - computerGuess);
    return humanDifference <= computerDifference;
}

function updateScore(winner) { // updates the score of the winner, either computer or human.
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber += 1
}