// complete the given function

function palindrome(str){
 let cleaned = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  
  let reverse = cleaned.split("").reverse().join("");
  
  return cleaned === reverse;
}
module.exports = palindrome
