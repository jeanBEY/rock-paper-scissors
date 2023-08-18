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

console.log(getComputerChoice());