
let humanScore = 0;
let computerScore = 0;

function play(clickedButton) {
  const P = clickedButton.toLowerCase();
  
  const C = randomSelection();

  const winner = whoWins(P, C);

  displayResult(P, "humanImage");
  displayResult(C, "computerImage");
  displayResult(winner, "winner");
}

function displayResult(what, where) {
  const element = document.getElementById(where);

  if (where === "humanImage" || where === "computerImage") {
    element.src = "images/" + what.toLowerCase() + ".png";
  } else {
    element.textContent = what;
  }
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
