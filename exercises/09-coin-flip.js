const headsButtonElement = document.querySelector(".js-heads-button");
const tailsButtonElement = document.querySelector(".js-tails-button");

//9d
let inputElement = document.querySelector(".js-text-input");
const submitButtonElement = document.querySelector(".js-submit-button");
const displayTextElement = document.querySelector(".js-display-text");

submitButtonElement.addEventListener("click", () => {
  renderDisplayMessage();
});

//9e
document.body.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    renderDisplayMessage();
  }
});

//9f
function renderDisplayMessage() {
  let inputValue = inputElement.value;
  displayTextElement.innerText = `Your name is ${inputValue}`;
  inputElement.value = "";
}

//9c

let result = "";

let score = { wins: 0, losses: 0 };

//let guess = prompt("Heads or Tails?");
let guess;
headsButtonElement.addEventListener("click", () => {
  playGame("Heads");
});
tailsButtonElement.addEventListener("click", () => {
  playGame("Tails");
});

function playGame(guess) {
  let randomNumber = Math.random();
  console.log(randomNumber);
  randomNumber < 0.5 ? (result = "Heads") : (result = "Tails");
  if (guess === result) {
    alert("You win!");
    score.wins += 1;
  } else {
    alert("You lose!");
    score.losses += 1;
  }
  console.log(score);
  localStorage.setItem("coin-flip-scores", JSON.stringify(score));
}
