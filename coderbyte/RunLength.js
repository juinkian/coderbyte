function RunLength(str) { 

  // code goes here  
  var myArray =[];
  var counter = 1;
  for (var i = 0; i<str.length; i++){
    if( str[i] == str[i+1]){
   	  counter ++;      
    } else {
      myArray.push(counter);
      myArray.push(str[i]);
      counter = 1;
    };
  };
  return myArray.join(''); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
RunLength(readline());           
