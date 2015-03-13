function Palindrome(str) { 

  // code goes here  
 var  reverseStr = str.match(/[^ ]/gi).reverse().join('').toLowerCase();
 var compareStr = str.split(' ').join('').toLowerCase();
  
  return (reverseStr == compareStr) ? true : false;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
Palindrome(readline());                            















                            
                            
                            
  