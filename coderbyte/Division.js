function Division(num1,num2) { 

  // code goes here  
  var factor = 0;
  
  for (var i = 0 ; i <= Math.min(num1,num2) ; i ++){
    if( !(num1 % i) && !(num2 % i)){
    	factor = i; 
    };
  };
  return factor; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
Division(readline());           
