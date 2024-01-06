// Check if a string is a palindorme
function isPalindorem(str) {
  return str == str.split("").reverse().join("");
}
//Lets Check
let word = "racecar";
console.log(isPalindorem(word));
