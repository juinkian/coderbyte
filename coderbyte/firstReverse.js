
// first solution  with recursion

  // code goes here  
function FirstReverse(str) { 
	if (str === "") {
      return  ""; 
    } else {
    	return str[str.length-1] + FirstReverse(str.substring(0,str.length-1));
    };
  
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstReverse(readline());           

// second solution with Array Loop
function FirstReverse(str) { 

  // code goes here  
  var reverse = '';
  str.split('').forEach(function(entry){
  	reverse = entry + reverse;
  });
  return reverse; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstReverse(readline());           
