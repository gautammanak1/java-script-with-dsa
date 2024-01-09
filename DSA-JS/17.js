// Find the missing num in an array of integers from 1 to n.

function missingNum(nums) {
  let n = nums.length;
  let totalSum = (n * (n + 1)) / 2;
  let currentSum = nums.reduce((acc, curr) => acc + curr, 0);
  return totalSum - currentSum;
}
// Lets Check
let num = [3, 1, 2, 0, 5];
console.log(missingNum(num));
