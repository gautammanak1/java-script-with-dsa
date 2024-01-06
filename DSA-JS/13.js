// Find the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
// Lets check
let num = 5;
console.log(factorial(num));
