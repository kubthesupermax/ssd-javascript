// const clickButtonElement = document.querySelector(".js-button");
const buttonElement = document.querySelector("button");

const gamingButtonElement = document.querySelector(".gaming");
const musicButtonElement = document.querySelector(".music");
const techButtonElement = document.querySelector(".tech");

gamingButtonElement.addEventListener("click", () => {
  toggleOnlyOne(gamingButtonElement);
});
musicButtonElement.addEventListener("click", () => {
  toggleOnlyOne(musicButtonElement);
});
techButtonElement.addEventListener("click", () => {
  toggleOnlyOne(techButtonElement);
});

function toggleOnlyOne(clickedButton) {
  // Remove from all
  gamingButtonElement.classList.remove("is-toggled");
  musicButtonElement.classList.remove("is-toggled");
  techButtonElement.classList.remove("is-toggled");

  // Add to only the clicked one
  clickedButton.classList.add("is-toggled");
}
