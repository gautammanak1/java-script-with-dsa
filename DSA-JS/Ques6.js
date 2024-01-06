//Remove all duplicates from an array of integer
const arr = [1, 1, 1, 1, 1, 1, 1];
const removeDupes = (arr) => {
  let result = [];
  let previous = arr[0];
  result[0] = previous;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != previous) {
      result.push(arr[i]);
    }

    previous = arr[i];
  }

  return result;
};
console.log(removeDupes(arr));
