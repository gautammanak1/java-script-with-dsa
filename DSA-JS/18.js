// Calculate the powert of a number using recursion
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}
// Lets check :

let base = 3;
let exp = 5;
console.log(power(base, exp));
