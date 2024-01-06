//Find the maximum number in an array.

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Lets check :
let numbers = [3, 8, 1, 6, 2, 8, 10];
console.log(findMax(numbers));
