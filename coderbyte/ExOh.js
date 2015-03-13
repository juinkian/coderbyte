function ExOh(str) { 

  // code goes here  
  var x = str.match(/[x]/gi);
  var o = str.match(/[o]/gi);
  return (x === null || o === null ) ? false : same = x.length === o.length;;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ExOh(readline());           
