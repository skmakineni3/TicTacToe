
let humanScore = 0;
let computerScore = 0;

function play(clickedButton) {
  const cpu = randomSelection();
  const winner = whoWins(clickedButton, cpu);
  
  console.log(clickedButton);
  console.log('Human = ' + clickedButton);
  console.log('Computer = ' + cpu);
  console.log('wins = ' + winner);

}


function randomSelection() {
  const random = Math.floor(Math.random() * 3);
  let selection;

  if (random === 0) {
    selection = 'paper';
  } else if (random === 1) {
    selection = 'rock';
  } else if (random === 2) {
    selection = 'scissors';
  }

  return selection;
}

function whoWins(P, C) {
  if (beats(P, C)) {
    humanScore++;
    return "Human";
  } else if (beats(C, P)) {
    computerScore++;
    return "Computer";
  } else {
    return "Tie";
  }
}

function beats(A, B) {
  const winningCombos = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  return winningCombos[A] === B;
}

try {
  module.exports.play = play;
  module.exports.randomSelection = randomSelection;
  module.exports.whoWins = whoWins;
  module.exports.beats = beats;
  
} catch (err) {
  console.log("rps-cp.js functions loaded");
}