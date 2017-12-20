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


// DOCUMENT READY FUNCTION

$(document).ready(function() {

var counter = 0;

   $("img").hide();

function compare(userChoice, computerChoice) {
 
  if(userChoice === "rock" && computerChoice === "Paper") {
    console.log("Computer Wins");
    $("#P3").show();
  }else if(userChoice === "rock" && computerChoice === "Scissors") {
    console.log("User Wins");
    $("#R3").show();
    counter = counter+1;
    $("#score").text(counter);
  }else if(userChoice === "paper" && computerChoice === "Rock") {
    console.log("User Wins");
    $("#P3").show();
    counter = counter+1;
    $("#score").text(counter);
  }else if(userChoice === "paper" && computerChoice === "Scissors") {
    console.log("Computer Wins");
    $("#S3").show();
  }else if(userChoice === "scissors" && computerChoice === "Rock") {
    console.log("Computer Wins");
    $("#R3").show();
  }else if(userChoice === "scissors" && computerChoice === "Paper") {
    console.log("User Wins");
    $("#S3").show();
    counter = counter+1;
    $("#score").text(counter);
  }else if(userChoice === "paper" && computerChoice === "Paper"){
    $("#Tie").show();
  }else if(userChoice === "rock" && computerChoice === "Rock"){
    $("#Tie").show();
  }else if(userChoice === "scissors" && computerChoice === "Scissors"){
    $("#Tie").show();
  }
}



$("#play").click(function() {
  var card = $("input").val();
  
  var userChoice = $("input").val().toLowerCase();
  var items = ["Rock","Paper","Scissors"];
  var index = Math.floor(Math.random() * items.length);
  var computerChoice = items[index];

$("img").hide();
console.log(userChoice, computerChoice);

  if(computerChoice === "Rock"){
    $("#R1").show();
}else if(computerChoice === "Paper"){
    $("#P1").show();
}else if(computerChoice === "Scissors"){
    $("#S1").show();
}

compare(userChoice, computerChoice);


if(userChoice === "rock"){
    $("#R2").show();
}else if(userChoice === "paper"){
    $("#P2").show();
}else if(userChoice === "scissors"){
    $("#S2").show();
}else if(userChoice !== "scissors" || "paper" || "rock"){
    alert("Not Valid Choice");
}
});

$("#reset").click(function(){
  $("img").hide();
  $("input").val("");
});

  $("#reset").click(function(){
    
    $("input").val("");
});



});

