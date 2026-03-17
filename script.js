// complete the given function

function palindrome(str){
  let reverse = str.split("").reverse().join("");
  if(str === reverse){
	  return true
  }	
	else{
		return false
	}
}
module.exports = palindrome
