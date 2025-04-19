// 11a
const nums = [10, 20, 30];
nums[nums.length - 1] = 99;
console.log(nums);

// 11b
function getLastValue(arr) {
  return arr[arr.length - 1];
}

console.log(getLastValue([1, 2, 3, 4, 5]));

// 11c
function arrSwap(arr) {
  let arr2 = arr.slice();
  arr2[arr2.length - 1] = arr[0];
  arr2[0] = arr[arr.length - 1];
  return arr2;
}
console.log(arrSwap([1, 2, 3, 4, 5]));
console.log(arrSwap(["hi", "bye"]));

// 11d
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

// 11e
for (let i = 5; i >= 0; i--) {
  console.log(i);
}

// 11f
let t = 0;
while (t <= 10) {
  console.log(t);
  t += 2;
}

let f = 5;
while (f >= 0) {
  console.log(f);
  f--;
}

// 11g
const arr = [1, 2, 3, 4, 5];

let newArr = [];
for (let i = 0; i < arr.length; i++) {
  newArr.push(arr[i] + 1);
}

console.log(newArr);

// 11h
function addOne(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + 1);
  }
  return newArr;
}

console.log(addOne([1, 2, 3, 4, 5]));

// 11i
function addNum(arr, num) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + num);
  }
  return newArr;
}

console.log(addNum([1, 2, 3, 4, 5], 10));

// 11j
function ad(arr, arr2) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + arr2[i]);
  }
  return newArr;
}

console.log(ad([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));

// 11k
function countPositives(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count++;
    }
  }
  return count;
}

console.log(countPositives([-1, 2, 3, -4, 5]));

// 11l
function minMax(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }
  return [min, max];
}

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([23, 45, 67, 89, 12]));
console.log(minMax([-1, -2, -3, -4, -5]));

//11 o
const randomWords = [
  "book",
  "pen",
  "pencil",
  "search",
  "notebook",
  "search",
  "mouse",
  "keyboard",
  "search",
  "keyboard",
];

const randomWords2 = [
  "book",
  "pen",
  "pencil",
  "keyboard",
  "search",
  "pencil",
  "notebook",
];
const randomWords3 = ["book", "pen", "pencil", "notebook"];

// for (let i = 0; i < findSearch.length; i++) {
//   if (findSearch[i] === "search") {
//     console.log(i);
//   }
// }

// 11p
function findSearch(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "search") {
      newArr.push(i);
    }
  }

  if (newArr.length > 1) {
    return `The index of the first apperance of "search" is ${newArr[0]}`;
  } else if (newArr.length === 1) {
    console.log(newArr[0]);
  } else {
    return -1;
  }
}
console.log(findSearch(randomWords));
findSearch(randomWords2);
console.log(findSearch(randomWords3));

// 11q
function findIndex(arr, word) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      newArr.push(i);
    }
  }

  if (newArr.length >= 1) {
    return newArr[0];
  } else {
    return -1;
  }
}

console.log(findIndex(randomWords, "pencil"));
console.log(findIndex(randomWords2, "keyboard"));
console.log(findIndex(randomWords3, "search"));

//11 r
function removeEgg(foods) {
  for (let i = foods.length - 1; i >= 0; i--) {
    if (foods[i] !== "egg") continue;
    foods.splice(i, 1);
  }
  return foods;
}
function removeEgg2(foods) {
  let newFoods = [];
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] !== "egg") {
      newFoods.push(foods[i]);
      continue;
    }
  }
  return newFoods;
}
function removeEgg3(foods) {
  const newFoods = foods.filter((food) => food !== "egg");
  return newFoods;
}

function removeeggs5(foods) {
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === "egg") {
      foods.splice(i, 1);
      i--; // adjust index since we removed an item
    }
  }

  return foods;
}

console.log(removeeggs5(["egg", "apple", "egg", "egg", "banana"]));
console.log(removeEgg(["egg", "apple", "egg", "egg", "banana"]));
console.log(removeEgg2(["egg", "apple", "egg", "egg", "banana"]));
console.log(removeEgg3(["egg", "apple", "egg", "egg", "banana"]));

//11 s
function removeFirstTwoEggs(foods) {
  let eggCount = 0;

  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === "egg") {
      if (eggCount < 2) {
        foods.splice(i, 1);
        eggCount++;
        i--; // adjust index since we removed an item
      }
    }
  }

  return foods;
}

console.log(removeFirstTwoEggs(["egg", "apple", "egg", "egg", "banana"]));
// Output: ["apple", "egg", "banana"]

//11 t
function removeLastTwoEggs(foods) {
  let eggCount = 0;

  for (let i = 0; i < foods.length; i++) {
    if (foods.reverse()[i] === "egg") {
      if (eggCount < 2) {
        foods.splice(i, 1);
        eggCount++;
        i--; // adjust index since we removed an item
      }
    }
  }

  return foods.reverse();
}

const foods = ["egg", "apple", "egg", "egg", "banana"];
console.log(removeLastTwoEggs(foods));
console.log(foods);
// Output: ["apple", "egg", "banana"]

//11 u
function removeLastTwoEggs2(foods) {
  const foodsCopy = foods.slice(); // create a copy of the original array
  const reversedFoods = foodsCopy.reverse();

  let eggCount = 0;
  for (let i = 0; i < reversedFoods.length; i++) {
    if (reversedFoods[i] === "egg") {
      if (eggCount < 2) {
        reversedFoods.splice(i, 1);
        eggCount++;
        i--;
      }
    }
  }

  return reversedFoods.reverse();
}
const foods2 = ["egg", "apple", "egg", "egg", "banana"];
console.log(removeLastTwoEggs2(foods2));
console.log(foods2);

//11 v Fizzbuzz
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 !== 0) {
    console.log("fizz");
  } else if (i % 5 === 0 && i % 3 !== 0) {
    console.log("buzz");
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else {
    console.log(i);
  }
}

//11 w
function findIndex(arr, word) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      newArr.push(i);
    }
  }

  if (newArr.length >= 1) {
    return newArr[0];
  } else {
    return -1;
  }
}

function unique(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function unique2(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];

    if (findIndex(newArr, word) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const randomWords4 = [
  "book",
  "pen",
  "pencil",
  "search",
  "book",
  "search",
  "mouse",
  "keyboard",
  "search",
  "keyboard",
];

console.log(unique(randomWords4));
console.log(unique2(randomWords4));
