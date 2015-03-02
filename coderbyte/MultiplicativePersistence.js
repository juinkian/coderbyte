function MultiplicativePersistence(num) { 

  // code goes here  
  num = num.toString();
  var count = 0;
  var myArray=[];
  var number2 =1;
 
  function mult(number){
    if (number.length==1){
      return parseInt(number);
    } else {
        count++;
        number2 = 1;   
  		for (var i = 0 ; i < number.length; i++){
        	number2 *= parseInt(number[i]);
    	};
      return mult(number2.toString());
    };
  };
  mult(num);
  return count;
       
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MultiplicativePersistence(readline());           
