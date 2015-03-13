function TimeConvert(num) { 

	function findHour (time){
      return Math.floor(num/60);
    }
  
  	function findMinute(time){
    	return num % 60;
    }
  
  return findHour(num) + ':' + findMinute(num);
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
TimeConvert(readline());           
