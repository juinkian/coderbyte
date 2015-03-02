function AdditivePersistence(num) { 

  // code goes here  
  num=num.toString();
  var count = 0;
  var addNum = 0;
  
  function add(number,count){
  	if (number.length == 1){
      return count;
    } else {
      	count++;
		addNum=0;
    	for (var i = 0; i< number.length ; i++){
        	addNum += parseInt(number[i]);
        };
      	return add(addNum.toString(),count);
    };
  };
  
  return add(num,count);

         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
AdditivePersistence(readline());           
