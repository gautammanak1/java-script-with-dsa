// Check if two strings are anagrams

function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str1.split("").sort().join("");
  return sortedStr1 === sortedStr2;
}

//Lets check
let word1 = "listen";
let word2 = "silent";
console.log(areAnagrams(word1, word2));
