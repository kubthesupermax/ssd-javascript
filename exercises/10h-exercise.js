const inputElement = document.querySelector(".js-input");
const outputElement = document.querySelector(".js-output");
const buttonElement = document.querySelector("button");

buttonElement.addEventListener("click", (event) => {
  console.log(inputElement.value);
  if (Number(inputElement.value) < 0) {
    outputElement.innerHTML = "Please enter a positive number";
  }
  // outputElement.innerHTML = inputElement.value;
  //   if (Number(event.target.value) < 0) {
  //     outputElement.innerHTML = "Please enter a positive number";
  //   }
});
