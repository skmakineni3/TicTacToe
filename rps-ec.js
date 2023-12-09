// rps-ec.js
let humanScore = 0;
let computerScore = 0;

function play(clickedButton) {
  const cpu = randomSelection();
  const winner = whoWins(clickedButton, cpu);

  if (winner === "Human") {
    humanScore++;
  } else if (winner === "Computer") {
    computerScore++;
  }

  // Display results with images, winner, and scores on the web page
  displayResult(clickedButton, "humanImage");
  displayResult(cpu, "computerImage");
  displayResult(winner, "winner");
  displayResult(humanScore, "humanScore");
  displayResult(computerScore, "computerScore");
}

function displayResult(what, where) {
  const element = document.getElementById(where);

  if (where === "humanImage" || where === "computerImage") {
    // Set the image source based on the choice
    element.src = "images/" + what.toLowerCase() + ".png";
  } else {
    // Set the content for the winner and scores
    element.textContent = what;
  }
}

function resetScores() {
  humanScore = 0;
  computerScore = 0;
  displayResult(humanScore, "humanScore");
  displayResult(computerScore, "computerScore");
}
