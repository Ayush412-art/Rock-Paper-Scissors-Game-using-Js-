
let totalscore = 0;
function getComputerChoice() {
  const rpschoice = ['Rock', 'Paper', 'Scissors']
  const choice = Math.floor(Math.random() * rpschoice.length)
  
  return rpschoice[choice];
}


function getResult(playerChoice, computerChoice) {
  
  let score;

  if (playerChoice === computerChoice)
    score = 0;

  else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
    score = 1;
  }
  else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
    score = 1;
  }
  else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
    
    score = 1;
  }

  else 
    score = -1;


  return score;
}
const playerscore = document.getElementById('player-score')
const hands = document.getElementById('hands')
const result = document.getElementById('result')

function showResult(score, playerChoice, computerChoice) {

  if (score == 0) {

    result.innerText = 'Draw!'
  }

  else if (score == -1) {

    result.innerText = 'You Lose!'
  }
  else {

    result.innerText = 'You Win'
  }
  playerscore.innerText = totalscore;
  hands.innerText = `🙍‍♂${playerChoice} Vs 🤖${computerChoice}`
}


function onClickRPS(playerChoice ) {
 
  const computerChoice = getComputerChoice();

  let score = getResult(playerChoice, computerChoice);

  totalscore += score;
  showResult(score, playerChoice, computerChoice);

}


function playGame() {

  const rpsbuttons = document.querySelectorAll('.rpsButton')

  rpsbuttons.forEach(rpsbutton => {
    rpsbutton.onclick = () => onClickRPS(rpsbutton.value)
    
   
  })
  
}
  

const endgameButton = document.getElementById('endGameButton')
endgameButton.onclick = () => endGame()
function endGame() {
totalscore = 0;
playerscore.innerText = '';
hands.innerText = '';
result.innerText = '';

}
playGame()
