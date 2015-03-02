function PalindromeTwo(str) { 

  // code goes here  
  str= str.replace(/ ?\W ?/g,'').toLowerCase();
  //str= str.replace(/\s/,'');
  var isPalindrome = true; 
  for (var i = 0; i < str.length / 2 ; i ++){
    if (str[i] != str[str.length-1-i]){
      isPalindrome = false;
    };
  };
  
  var reverseStr = '';
  for (var i = str.length -1; i >= 0 ; i--){
    reverseStr += str[i];
  };
  return isPalindrome;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PalindromeTwo(readline());           
