//played with recursive
function SimpleAdding(num) { 

  // code goes here  
  
  if (num ===0){
    return 0;
  } 
  else{
  	return num + SimpleAdding(num-1);
  };
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleAdding(readline());           
