//  problem :Implement a function to check if a given string is a palindrome. A palindrome is a
//  word, phrase, or sequence that reads the same forward as backward (e.g., "racecar",
//   "level").

function palindrome(strValue) {
  reversedValue = strValue.split("").reverse().join("");

  if (reversedValue == strValue) {
    return true;
  }
  return false;
}

console.log(palindrome("level"));
console.log(palindrome("racecar"));
console.log(palindrome("hunt"));
