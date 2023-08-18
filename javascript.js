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
        return "You Lose! Rock beats Scissors";
    }
    if(playerSelection == "paper" && computerSelection == "scissors"){
        return "You Lose! Scissors beats Paper";
    }
    if(playerSelection == "rock" && computerSelection == "paper"){
        return "You Lose! Paper beats Rock";
    }
    if(computerSelection == "scissors" && playerSelection == "rock"){
        return "You Win! Rock beats Scissors";
    }
    if(computerSelection == "paper" && playerSelection == "scissors"){
        return "You Win! Scissors beats Paper";
    }
    if(computerSelection == "rock" && playerSelection == "paper"){
        return "You Win! Paper beats Rock";
    }
    else {
        return "No Winner!  Play again!";
    }

}

console.log(getComputerChoice());
console.log(playRound("rock",getComputerChoice()));