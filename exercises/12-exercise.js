/*
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

//12e and 12f
const buttonElement2 = document.querySelector(".js-add-to-cart-button");
const added = document.querySelector(".js-added");
buttonElement2.addEventListener("click", () => {
  added.innerHTML = "Added!";
  const timeout = setTimeout(() => {
    added.innerHTML = "";
  }, 2000);

  clearTimeout(timeout);
});

// 12g
let messages = 2;
setInterval(function () {
  if (document.title === "App") {
    document.title = `(${messages}) New messages`;
  } else {
    document.title = "App";
  }
}, 1000);

// 12h and 12i
const buttonElement3 = document.querySelector(".js-add-button");
buttonElement3.addEventListener("click", () => {
  messages = messages + 1;
  document.title = `(${messages}) New messages`;
});

const buttonElement4 = document.querySelector(".js-remove-button");
buttonElement4.addEventListener("click", () => {
  messages > 0 ? (messages = messages - 1) : (messages = 0);
  document.title = `(${messages}) New messages`;
});

*/
