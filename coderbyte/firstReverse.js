function FirstReverse(str) { 
	if (str === "") {
      return  ""; 
    } else {
    	return str[str.length-1] + FirstReverse(str.substring(0,str.length-1));
    };
  
  // code goes here  
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstReverse(readline());           
