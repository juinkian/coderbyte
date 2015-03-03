function SimpleSymbols(str) { 

  // code goes here  
  str = str.split('');

  for (var i = 0; i < str.length; i ++ ){
   if (str[i].match(/[a-z]/gi)){
	if (str[i-1] !=="+" || str[i+1] !== "+"){
    	return false;
    } else {
   		 return true; 
    };
   };
    
  };
       
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleSymbols(readline());           
