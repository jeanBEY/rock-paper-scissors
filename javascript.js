function getComputerChoice() {
    let number;
    let compChoice;
    number = Math.floor(Math.random() * 3) + 1;

    if(number === 1){
        compChoice = "rock";
    } 
    else if(number === 2){
        compChoice = "paper";
    }
    else{
        compChoice = "scissors";
    }

    return compChoice;
}

function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase();

    if(playerSelection == "scissors" && computerSelection == "rock"){
        return "computer";
    }
    if(playerSelection == "paper" && computerSelection == "scissors"){
        return "computer";
    }
    if(playerSelection == "rock" && computerSelection == "paper"){
        return "computer";
    }
    if(computerSelection == "scissors" && playerSelection == "rock"){
        return "player";
    }
    if(computerSelection == "paper" && playerSelection == "scissors"){
        return "player";
    }
    if(computerSelection == "rock" && playerSelection == "paper"){
        return "player";
    }
    else {
        return "No Winner!  Play again!";
    }

}

function game() {

    let playerScore = 0;
    let computerScore = 0;
    let roundResults;

    //ROUND 1
    let playerSelection = prompt("Choose by typing rock, paper or scissors");
    roundResults = playRound(playerSelection,getComputerChoice());
    if(roundResults == "player"){
        playerScore++;
        console.log("You win this round!");
    }
    else if(roundResults = "computer"){
        computerScore++;
        console.log("Computer wins this round!");
    }
    else {
        console.log("No winner this round...");
    }

    //ROUND 2
    playerSelection = prompt("Choose by typing rock, paper or scissors");
    roundResults = playRound(playerSelection,getComputerChoice());
    if(roundResults == "player"){
        playerScore++;
        console.log("You win this round!");
    }
    else if(roundResults = "computer"){
        computerScore++;
        console.log("Computer wins this round!");
    }
    else {
        console.log("No winner this round...");
    }

    //ROUND 3
    playerSelection = prompt("Choose by typing rock, paper or scissors");
    roundResults = playRound(playerSelection,getComputerChoice());
    if(roundResults == "player"){
        playerScore++;
        console.log("You win this round!");
    }
    else if(roundResults = "computer"){
        computerScore++;
        console.log("Computer wins this round!");
    }
    else {
        console.log("No winner this round...");
    }

    //ROUND 4
    playerSelection = prompt("Choose by typing rock, paper or scissors");
    roundResults = playRound(playerSelection,getComputerChoice());
    if(roundResults == "player"){
        playerScore++;
        console.log("You win this round!");
    }
    else if(roundResults = "computer"){
        computerScore++;
        console.log("Computer wins this round!");
    }
    else {
        console.log("No winner this round...");
    }

    //ROUND 5
    playerSelection = prompt("Choose by typing rock, paper or scissors");
    roundResults = playRound(playerSelection,getComputerChoice());
    if(roundResults == "player"){
        playerScore++;
        console.log("You win this round!");
    }
    else if(roundResults = "computer"){
        computerScore++;
        console.log("Computer wins this round!");
    }
    else {
        console.log("No winner this round...");
    }

    //DECLARE WINNER OF GAME
    if(computerScore > playerScore){
        console.log("Computer WINS!");
    }
    else if(playerScore > computerScore){
        console.log("You WIN!");
    }
    else {
        console.log("No winner....THE END");
    }
    
}

game();