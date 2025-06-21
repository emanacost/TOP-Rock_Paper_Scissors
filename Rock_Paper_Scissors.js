// A Rock Papers Scissors game written in Javascript
// No UI, will just use console and browser text prompt

//Simple test to make sure JS is linked to html
console.log("I'm Alive!");
// console.log(Math.random().toFixed(2))

// Pseudocode for the random number function

// Write a function that randomly returns Rock Papers or Scissors
    // Initialize function Return R, P, or S
    // Randomly generate a number
    // Depending on the number return R, P, or S

// function getComputerChoice() {
//    Math.random
//}

function getComputerChoice() {
    let rand = Math.random().toFixed(2);
    // let rand = 0.22;
    // console.log(rand)
    if (rand <= 0.33) {
        return "Rock";
    } else if (rand <= 0.67) {
        return "Paper";
    } else if (rand > 0.67) {
        return "Scissor";
    };
};

// Write a function that takes the human's input
    // Prompt the human to enter either Rock, Paper, or Scissor
    // Depending on the users input return the R, P, or S

// function getHumanChoice() {
//     choice = prompt ("Please choose: Rock, Paper, or Scissor");
//     // console.log(choice)
//     const choiceLowercase = choice.toLowerCase();
//     // console.log(choiceLowercase);
//     if (choiceLowercase == "rock") {
//         return "Rock";
//     } else if (choiceLowercase == "paper") {
//         return "Paper";
//     } else if (choiceLowercase == "scissor") {
//         return "Scissor";
//     } else {
//         alert("Invalid input!");
//         return undefined
//     };
// };

// Define the three buttons
let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorBtn = document.querySelector("#scissor");

// Select score display elements
const humanScoreDisplay = document.querySelector("#score-human-count");
const computerScoreDisplay = document.querySelector("#score-computer-count");

// Initialize variables that will keep track of scores
let humanScore = 0

let computerScore = 0

// Select results div container
const resultsDisplay = document.querySelector("#results-container-1");
const resultsDisplay2 = document.querySelector("#results-container-2");
const resultsDisplay3 = document.querySelector("#results-container-3");

// Main function that will determine winner, returns winner
    // Do a shit ton of if statements?
function playRound(humanChoice, computerChoice) {
    resetResultsDisplay();
    if (humanChoice == computerChoice) {
        resultsDisplay.textContent = "Opponent chose, " + computerChoice + "!";
        resultsDisplay2.textContent = "Tie!😶";
        return "Tie";
    } else if (humanChoice == "Rock" && computerChoice == "Paper") {
        resultsDisplay.textContent = "You chose, " + humanChoice;
        resultsDisplay2.textContent = "Opponent chose, " + computerChoice + "!";
        resultsDisplay3.textContent = "You Lose!😔";
        return "PC";
    } else if (humanChoice == "Rock" && computerChoice == "Scissor") {
        resultsDisplay.textContent = "You chose, " + humanChoice;
        resultsDisplay2.textContent = "Opponent chose, " + computerChoice + "!";
        resultsDisplay3.textContent = "You Win!😀";
        return "Player";
    } else if (humanChoice == "Paper" && computerChoice == "Scissor") {
        resultsDisplay.textContent = "You chose, " + humanChoice;
        resultsDisplay2.textContent = "Opponent chose, " + computerChoice + "!";
        resultsDisplay3.textContent = "You Lose!😔";
        return "PC";
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        resultsDisplay.textContent = "You chose, " + humanChoice;
        resultsDisplay2.textContent = "Opponent chose, " + computerChoice + "!";
        resultsDisplay3.textContent = "You Win!😀";
        return "Player";
    } else if (humanChoice == "Scissor" && computerChoice == "Rock") {
        resultsDisplay.textContent = "You chose, " + humanChoice;
        resultsDisplay2.textContent = "Opponent chose, " + computerChoice + "!";
        resultsDisplay3.textContent = "You Lose!😔";
        return "PC";
    } else if (humanChoice == "Scissor" && computerChoice == "Paper") {
        resultsDisplay.textContent = "You chose, " + humanChoice;
        resultsDisplay2.textContent = "Opponent chose, " + computerChoice + "!";
        resultsDisplay3.textContent = "You Win!😀";
        return "Player";
    }
}

    // How game with UI will function
        // Page will load
        // Player is presented with three options(rock, paper, and scissors) 
        // When player hits button some code will execute determining the winner of that round
        // Player will be informed of who won round and buttons will be available again

//Function playGame for main game loop
function playGame(humanChoice) {
    // Get computer choice
    let computerChoice = getComputerChoice();
    // Determine winner
    let winner = playRound(humanChoice, computerChoice);
    // Update score
    if (winner == "PC") {
        computerScore++;
        // Update the computer score display
        computerScoreDisplay.textContent = computerScore.toString();
    } else if (winner == "Player") {
        humanScore++;
        // Update the human score display
        humanScoreDisplay.textContent = humanScore.toString();
    } else if (winner == "Tie") {
        console.log("Last round was a tie")
    }
}

//Run playGame for 5 rounds
// let g = 0
// while (g < 5) {
//     playGame();
//     alert("Current score");
//     alert("You: " + humanScore);
//     alert("Opponent: " + computerScore);
//     g++;
// }
let rounds = 0;


// Set up the three buttons run the playGame function
// While also setting itself as humanChoice
rockBtn.addEventListener("click", () => {

    if (rounds >= 5) { 
        checkVictor(); 
    } else {
        playGame("Rock");
        rounds++;
    };
});
paperBtn.addEventListener("click", () => {
    if (rounds >= 5) {
        checkVictor();
    } else {
        playGame("Paper");
        rounds++;
    };
});
scissorBtn.addEventListener("click", () => {
    if (rounds >= 5) {
        checkVictor();
    } else {
        playGame("Scissor");
        rounds++;
    };
});

//Check overall victor
function checkVictor() {
    if (humanScore == computerScore) {
        resetResultsDisplay();
        resultsDisplay.textContent = "Tie, no one won!";
        resultsDisplay3.textContent = "Refresh to play again.";
    } else if (humanScore < computerScore) {
        resetResultsDisplay();
        resultsDisplay.textContent = "You Lose!";
        resultsDisplay3.textContent = "Try again by refreshing";
    } else if (humanScore > computerScore) {
        resetResultsDisplay();
        resultsDisplay.textContent = "You Won!🎉🎉";
        resultsDisplay3.textContent = "Hone your skills by refreshing";
    };
};

// Function to reset the results display containers
function resetResultsDisplay() {
    resultsDisplay.textContent = "";
    resultsDisplay2.textContent = "";
    resultsDisplay3.textContent = "";
}

// Quick little test of the getComputerChoice function
    // let test = 0
    // while (test < 10) {
    //     console.log(getComputerChoice());
    //     test++;
    // }

//Static choices for testing
//let humanChoice = "Scissor"
//let computerChoice = "Rock"
//playRound(humanChoice, computerChoice)