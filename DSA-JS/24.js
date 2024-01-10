// Find the longest substring without repeating characters.
function subString(str) {
  let longest = 0;
  let start = 0;
  let charMap = {};

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    if (charMap[currentChar] >= start) {
      start = charMap[currentChar] + 1;
    }
    charMap[currentChar] = i;
    longest = Math.max(longest, i - start + 1);
  }

  return longest;
}
//Lets Check
let text = "abcabcbb";
console.log(subString(text));
