function VowelCount(str) { 

  // code goes here  
  return (str.match(/[aeiou]/gi) !==null) ? str.match(/[aeiou]/gi).length : 0 ; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
VowelCount(readline());           


function VowelCount(str) { 

  // code goes here  
  var match = str.match(/[aeiuo]/gi);
  if (match) {
  	return match.length;
  } else {
  	return 0;
  }
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
VowelCount(readline());           










                            
                            
                            
  