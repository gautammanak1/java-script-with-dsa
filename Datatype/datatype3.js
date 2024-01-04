//Functions: Node.js functions are defined using the function keyword then the name of the function and parameters which are passed in the function. In Node.js, we don’t have to specify datatypes for the parameters and check the number of arguments received. Node.js functions follow every rule which is there while writing JavaScript functions.

function multiply(num1, num2) {
  return num1 * num2;
}

let x = 2;
let y = 3;
console.log("Multiplication of", x, "and", y, "is", multiply(x, y));
