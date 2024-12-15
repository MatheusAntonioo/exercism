console.log("high score board exercises");

console.log("----------------------");

function createScoreBoard() {
  const players = { "The Best Ever": 1000000 };

  for (let key in players) {
    // console.log(key, players[key])
    // var player = (key, players[key])
    return players;
  }
}
createScoreBoard();
console.log(createScoreBoard());

console.log("----------------------");

const scoreBoard = {
  "Amil Pastorius": 99373,
  "Min-seo Shin": 0,
  "Jesse Johnson": 1337,
};

function removePlayer(scoreBoard, player) {
  delete scoreBoard[player];
  return scoreBoard;
}
removePlayer(scoreBoard, "Jesse Johnson");
console.log(scoreBoard);

console.log("----------------------");

function addPlayer(scoreBoard, player, score) {
  const key = player;
  scoreBoard[key] = score;
  return scoreBoard;
}

addPlayer(scoreBoard, "Jesse Johnson", 1337);
console.log(scoreBoard);

console.log("----------------------");

function updateScore(scoreBoard, player, points) {
  if (!scoreBoard[player]) {
    scoreBoard[player] = 0;
  }
  scoreBoard[player] += points;
  return scoreBoard;
}
updateScore(scoreBoard, "Min-seo Shin", 1999);

updateScore(scoreBoard, "Jesse Johnson", 1337);
console.log(scoreBoard);

console.log("----------------------");

function applyMondayBonus(scoreBoard) {
  for (let key in scoreBoard) {
    scoreBoard[key] += 100;
  }
  return scoreBoard;
}
applyMondayBonus(scoreBoard);
console.log(scoreBoard);
