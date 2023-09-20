const rockButton = document.getElementById("rockBtn");
const paperButton = document.getElementById("paperBtn");
const scissorsButton = document.getElementById("scissorsBtn");
const message = document.getElementById("message");
const round = document.getElementById("roundInfo");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");

//message.textContent = "You won!";
//console.log(playerScore);
//console.log(round);
//playerScore.dataset.score = parseInt(playerScore.dataset.score) + 2;
//round.dataset.round = parseInt(round.dataset.round) + 1;

//CLICK EVENTS
rockButton.addEventListener('click', () => {
    playRound('rock', getComputerSelection());
});

paperButton.addEventListener('click', () => {
    playRound('paper', getComputerSelection());
});

scissorsButton.addEventListener('click', () => {
    playRound('scissors', getComputerSelection());
});

//FUNCTIONS
function getComputerSelection() {
    let number;
    let computerChoice;
    number = Math.floor(Math.random() * 3) + 1;

    if(number === 1){
        computerChoice = "rock";
    } 
    else if(number === 2){
        computerChoice = "paper";
    }
    else{
        computerChoice = "scissors";
    }

    return computerChoice;
}

function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase();

    if(playerSelection == "scissors" && computerSelection == "rock" ||
        playerSelection == "paper" && computerSelection == "scissors"|| 
        playerSelection == "rock" && computerSelection == "paper"){
            
            computerScore.dataset.score = parseInt(computerScore.dataset.score) + 1;
            computerScore.textContent = "COMPUTER: " + computerScore.dataset.score;
            updateMessage('computer');
        }
    if(computerSelection == "scissors" && playerSelection == "rock" ||
        computerSelection == "paper" && playerSelection == "scissors" ||
        computerSelection == "rock" && playerSelection == "paper"){
            
            playerScore.dataset.score = parseInt(playerScore.dataset.score) + 1;
            playerScore.textContent = "PLAYER: " + playerScore.dataset.score;
            updateMessage('player');
        }

    else{
            updateMessage();
    }

}

function updateMessage(winner){

    round.dataset.round = parseInt(round.dataset.round) + 1;
    round.textContent = "ROUND: " + round.dataset.round;

    if(winner == "player"){
        message.textContent = "You WON that round!  Great job!";
    }
    else if(winner == "computer"){
        message.textContent = "You LOST that round!  Womp womp...";
    }
    else{
        message.textContent = "It was a TIE that round!";
    }
}