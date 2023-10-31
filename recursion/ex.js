"use strict";

function isPalindrome(str) {
  if (str[0] == str.split("").reverse()[0]) {
    if (str.length <= 3) {
      return true;
    } else {
      return isPalindrome(str.slice(1, -1));
    }
  } else {
    return false;
  }
}

var hi = "hello";
console.log(hi.split("").reverse()[0]);

console.log(isPalindrome("") === true);
console.log(isPalindrome("a") === true);
console.log(isPalindrome("aa") === true);
console.log(isPalindrome("aba") === true);
console.log(isPalindrome("abba") === true);
console.log(isPalindrome("abccba") === true);

console.log(isPalindrome("ab") === false);
console.log(isPalindrome("abc") === false);
console.log(isPalindrome("abca") === false);
console.log(isPalindrome("abcdba") === false);
