let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
}; /* getItem takes the key and returns the value, parse converts to javascript object */

updateScoreElement();

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
    document.querySelector(".js-auto-play-button").innerText = "Stop playing";
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    document.querySelector(".js-auto-play-button").innerText = "Auto Play";
  }
}

// rock when clicked
document.querySelector(".js-rock-button").addEventListener("click", () => {
  playGame("rock");
});

// paper when clicked
document.querySelector(".js-paper-button").addEventListener("click", () => {
  playGame("paper");
});

// scissors when clicked
document.querySelector(".js-scissors-button").addEventListener("click", () => {
  playGame("scissors");
});

// reset score when clicked
document
  .querySelector(".js-reset-score-button")
  .addEventListener("click", () => {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem("score");
    updateScoreElement();
  });

// auto play when clicked
document.querySelector(".js-auto-play-button").addEventListener("click", () => {
  autoPlay();
});

// Key down
document.body.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (event.key === "r") {
    playGame("rock");
  } else if (event.key === "p") {
    playGame("paper");
  } else if (event.key === "s") {
    playGame("scissors");
  }
});

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";

  if (computerMove === "rock" && playerMove === "scissors") {
    result = "You lose.";
  } else if (computerMove === "paper" && playerMove === "scissors") {
    result = "You Win.";
  } else if (computerMove === "scissors" && playerMove === "scissors") {
    result = "Tie.";
  } else if (computerMove === "rock" && playerMove === "paper") {
    result = "You Win.";
  } else if (computerMove === "paper" && playerMove === "paper") {
    result = "Tie.";
  } else if (computerMove === "scissors" && playerMove === "paper") {
    result = "You lose.";
  } else if (computerMove === "rock" && playerMove === "rock") {
    result = "Tie.";
  } else if (computerMove === "paper" && playerMove === "rock") {
    result = "You lose.";
  } else if (computerMove === "scissors" && playerMove === "rock") {
    result = "You Win.";
  }

  if (result === "You Win.") {
    score.wins += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  } else if (result === "You lose.") {
    score.losses += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-result").innerHTML = `${result}`;
  document.querySelector(".js-moves").innerHTML = ` You
  <img src="images/${playerMove}-emoji.png" class="move-icon" />
  <img src="images/${computerMove}-emoji.png" class="move-icon" />
  Computer`;
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }
  return computerMove;
}
