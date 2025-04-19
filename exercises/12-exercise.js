//12a
const add = function () {
  console.log(2, 3);
};

// add();
// add();

//12b
function rt(a) {
  a();
  a();
}

rt(() => console.log("hello"));
rt(add);

//12c and d
const buttonElement = document.querySelector(".js-button");
buttonElement.addEventListener("click", () => {
  //   console.log("Clicked");
  buttonElement.innerHTML = "loading...";
  setTimeout(() => {
    buttonElement.innerHTML = "Finished!";
  }, 1000);
});

//12e
const buttonElement2 = document.querySelector(".js-add-to-cart-button");
const added = document.querySelector(".js-added");
buttonElement2.addEventListener("click", () => {
  added.innerHTML = "Added!";
  setTimeout(() => {
    added.innerHTML = "";
  }, 2000);
});
