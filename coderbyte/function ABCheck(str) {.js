function ABCheck(str) { 
var Check = false; 
  // code goes here  
  for (var i = 0; i < str.length ; i ++ ){ 
  if( str[i] =='a' && ((str[i+4] == 'b') || (str[i-4]=='b'))){
       Check= true; 
       }
  }
       
       return Check;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ABCheck(readline());                            


//Simpler solution
function ABCheck(str) { 
  return /a...b/g.test(str);
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ABCheck(readline());           
