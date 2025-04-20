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
// 12j and 12k
const multtiply = (a, b) => a * b;

console.log(multtiply(2, 3));

//12L
const nums = [1, 2, 3, -4, -5, 6, -7, 8];

const countPositive = function (nums) {
  let count = 0;
  nums.forEach((element) => {
    if (element > 0) {
      count++;
    }
  });
  return count;
};

console.log(countPositive(nums));

//12M
const addNum = (arr, num) => arr.map((element) => element + num);

console.log(addNum([1, 2, 3, 4, 5], 10));

//12n
const removeEgg = function (foods) {
  const filteredFoods = foods.filter((element) => {
    if (element !== "egg") {
      return element;
    }
  });
  return filteredFoods;
};

console.log(removeEgg(["egg", "apple", "egg", "egg", "banana"]));

//12o
function removeEgg2(foods) {
  let eggsRemoved = 0;

  return foods.filter((food) => {
    // If the food is 'egg', we should return false
    // but only if we haven't removed 2 eggs already.
    if (food === "egg" && eggsRemoved < 2) {
      eggsRemoved++;
      return false;
    }

    return true;
  });
}

console.log(removeEgg2(["egg", "apple", "egg", "egg", "ham"]));
