//Find the missing number in a given integer array of 1 to 100
let arr = [1, 2, 3, 4, 5, 7, 8, 9, 10];
const findMisssingNum = (arr) => {
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 != arr[i + 1]) {
      return arr[i] + 1;
    }
  }
  return false;
};
console.log(findMisssingNum(arr));
