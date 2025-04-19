//7a
/*
 function greet() {
   console.log("Hello");
 }

 greet();
 greet();

// 7b
function greet(name) {
  console.log(`Hello ${name}`);
}
greet("Simon");
greet("Frank");


//7c
function greet(name) {
  if (name == undefined) {
    console.log(`Hi there`);
  } else {
    console.log(`Hello ${name}`);
  }
}

greet("Simon");
greet("Frank");
greet();


//7d
function convertToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

console.log(convertToFahrenheit(25));
console.log(convertToFahrenheit(40));


//7e
function convertToCelsius(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

console.log(convertToCelsius(77));
console.log(convertToCelsius(86));


//7f
const convertTemperature = function (degrees, unit) {
  if (unit.toLowerCase() == "f") {
    const celsius = ((degrees - 32) * 5) / 9;
    return `${celsius}`;
  } else if (unit.toLowerCase() == "c") {
    const fahrenheit = (degrees * 9) / 5 + 32;
    return `${fahrenheit}`;
  }
};

console.log(convertTemperature(25, "C"));
console.log(convertTemperature(86, "F"));


//7g
function convertLength(length, from, to) {
  if (from == "miles" && to == "km") {
    return length * 1.6;
  } else if (from == "km" && to == "miles") {
    return length / 1.6;
  }
}
console.log(convertLength(50, "miles", "km"));
console.log(convertLength(32, "km", "miles"));
*/

//7j
let calculation = "";
function updateCalculation(operator) {
  calculation += operator;
  console.log(calculation);
}
