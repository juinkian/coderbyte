function DivisionStringified(num1,num2) { 

  // code goes here  
  var answer =''; 
  var div =  Math.round(num1 / num2).toString(); 
  if(div.length <= 3) {
    return div; 
  } else {
      for (var i = div.length-1 ; i >=0; i--){
          answer = div[i] + answer;
         if (!((div.length-i)%3)) {
         answer = ',' + answer;
         };
      };
    return answer;
    };
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DivisionStringified(readline());           
