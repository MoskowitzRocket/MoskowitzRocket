const score = {
    W: 0,
    L: 0,
    D: 0
  }


function reset () {
alert(`Score Reset.\n\n\nWins: ${score.W} Losses: ${score.L} Ties: ${score.D}`);
console.log('score reset');
}

function playGame(playerMove) {
const computerMove = pickCPUMove();
let result = '';

if (playerMove === 'scissors') {
    if (computerMove === 'rock'){
    result = 'You lose.';
    } else if (computerMove === 'paper') {
    result = 'You win.';
    } else if (computerMove === 'scissor') {
    result = 'Tie.';
    }
    
} else if (playerMove === 'rock') {
    if (computerMove === 'rock'){
    result = 'Tie.';
    } else if (computerMove === 'paper') {
    result = 'You lose.';
    } else if (computerMove === 'scissor') {
    result = 'You win.';
    }

} else if (playerMove === 'paper') {
    if (computerMove === 'rock'){
    result = 'You win.';
    } else if (computerMove === 'paper') {
    result = 'Tie.';
    } else if (computerMove === 'scissor') {
    result = 'You lose.';
    }
    
}
if (result === 'You win.') {
    score.W += 1;
} else if (result === 'You lose.') {
    score.L +=1;
} else if (result === 'Tie.') {
    score.D +=1;
}

alert(`You Picked ${playerMove}. Computer picked ${computerMove}. ${result}\n\n\nScore is Wins: ${score.W} Losses: ${score.L} Ties: ${score.D}`);
}
function pickCPUMove () {
const randNum = Math.random();

let computerMove = '';

if (randNum >= 0 && randNum < (1/3)){
    computerMove = 'rock';
    console.log(`CPU Picked ${computerMove}`);
}
else if (randNum >= (1/3) && randNum < 2/3) {
    computerMove = 'paper'; 
    console.log(`CPU Picked ${computerMove}`);
}
else if (randNum >= (2/3) && randNum < 1){
    computerMove = 'scissor';
    console.log(`CPU Picked ${computerMove}`);
}

return computerMove;
}