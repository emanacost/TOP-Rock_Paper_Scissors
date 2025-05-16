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

function getHumanChoice() {
    choice = prompt ("Please choose: Rock, Paper, or Scissor");
    // console.log(choice)
    const choiceLowercase = choice.toLowerCase();
    // console.log(choiceLowercase);
    if (choiceLowercase == "rock") {
        return "Rock";
    } else if (choiceLowercase == "paper") {
        return "Paper";
    } else if (choiceLowercase == "scissor") {
        return "Scissor";
    } else {
        alert("Invalid input!");
        return undefined
    };
};

// Commenting out human choice input handling for letter
    // let i = 0;
    // let humanChoice = getHumanChoice();
    // while (i != 1) {
    //     if (humanChoice != undefined) {
    //         console.log("Got human choice successfully");
    //         i = 1;
    //     } else {
    //         console.log("Running human choice again");
    //         humanChoice = getHumanChoice();
    //         i = 0;
    //     }
    // };


//console.log(getComputerChoice());

// Quick little test of the getComputerChoice function
// let test = 0
// while (test < 10) {
//     console.log(getComputerChoice());
//     test++;
// }

