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
