function play(clickedButton) {
  console.log(clickedButton)
}

try {
  module.exports.play = play;
} catch (err) {
  console.log("rps-b.js functions loaded");
}