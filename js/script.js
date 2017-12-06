//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

/* Returns a random integer between a and b, inclusive. */


// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES


//FUNCTIONS
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.floor(Math.random() * 3)

if (computerChoice === 0) {
    computerChoice = "rock";
} else if(computerChoice === 1) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
} 

var compare = function(userChoice, computerChoice) {
 
  if(userChoice === "rock" && computerChoice === "paper") {
    console.log("Computer Wins");
  }else if(userChoice === "rock" && computerChoice === "scissors") {
    console.log("User Wins");
  }else if(userChoice === "paper" && computerChoice === "rock") {
    console.log("User Wins");
  }else if(userChoice === "paper" && computerChoice === "scissors") {
    console.log("Computer Wins");
  }else if(userChoice === "scissors" && computerChoice === "rock") {
    console.log("Computer Wins");
  }else if(userChoice === "scissors" && computerChoice === "paper") {
    console.log("User Wins");
  }else{
    console.log("Tie")
  }
}; 
compare();


// DOCUMENT READY FUNCTION

