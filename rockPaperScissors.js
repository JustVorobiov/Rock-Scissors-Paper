//crete a function that check is User choice fine or not
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Wrong choice. Try again.');
  }
}
// computer make a choise
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1: 
      return 'paper';
      break;
    case 2: 
      return 'scissors';
      break;
    default:
      break;    
  }
}
//determine a winner
function determineWinner(userChoice, computerChoice) {
  if(userChoice === computerChoice){
    return 'Tie';
  }

  if(userChoice === 'rock') {
    if(computerChoice === 'paper'){
      return 'Computer Win';
    } else {
      return 'User Win';
    }
  }  

  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
       return 'Computer Win';
    } else {
      return 'User Win';
    }
  }
  
  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'Computer Win';
    } else {
      return 'User Win';
    }
  }

  if(userChoice === 'bomb'){
    return 'Stop cheating, you win';
  }
}
// start the game
const playGame = () => {
  let userChoice = getUserChoice("BOMb");
  let computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
//game starts
playGame();
