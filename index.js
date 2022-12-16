let playerOneScore = 0;
let playerTwoScore = 0;

let playerOneTurn = true;

const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1ScoreBoard = document.getElementById("player1ScoreBoard");
const player2ScoreBoard = document.getElementById("player2ScoreBoard");
const message = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");


rollBtn.addEventListener("click", function(){
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber);

    if (playerOneTurn) {
        playerOneScore += randomNumber;
        player1ScoreBoard.textContent = playerOneScore;
        player1Dice.textContent = randomNumber;
        message.textContent = "Player 1 Turn";
        activeDice();
        playerOneTurn = false;
        resetGameButton();
        
    } else {
        playerTwoScore += randomNumber;
        player2ScoreBoard.textContent = playerTwoScore;
        player2Dice.textContent = randomNumber;
        message.textContent = "Player 2 Turn";
        activeDice();
        playerOneTurn = true;
        resetGameButton();        
    }
})

function activeDice() {
    if (playerOneTurn) {
        player1Dice.classList.add("active");
        player2Dice.classList.remove("active");
    } else {
        player1Dice.classList.remove("active");
        player2Dice.classList.add("active");
    }
} 

function resetGameButton() {
    if (playerOneScore >= 22 || playerTwoScore >= 22) {
        rollBtn.style.display = "none";
        resetBtn.style.display = "inline-block";
    }

    if (playerOneScore >= 22) {
        message.textContent = "Player 1 Won!";
    } else if (playerTwoScore >= 22) {
        message.textContent = "Player 2 Won!";
    }
}


resetBtn.addEventListener("click", function(){
    playerOneTurn = true;
    player1ScoreBoard.textContent = 0;
    playerOneScore = 0;
    player1Dice.textContent = "-";
    message.textContent = "Player 1 Turn";
    activeDice();
    resetBtn.style.display = "none";
    rollBtn.style.display = "inline-block";

    player2ScoreBoard.textContent = 0;
    playerTwoScore = 0;
    player2Dice.textContent = "-";
        
    resetBtn.style.display = "none";
    rollBtn.style.display = "inline-block";

    
})