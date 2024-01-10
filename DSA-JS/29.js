//Find the first recurring character in a string.
function firstString(str) {
  const charMap = {};
  for (let char of str) {
    if (charMap[char]) {
      return char;
    } else {
      charMap[char] = 1;
    }
  }
  return null;
}

// Example usage:
let text = "ABCDEBC";
console.log(firstString(text));
