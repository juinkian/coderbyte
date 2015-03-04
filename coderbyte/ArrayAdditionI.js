function ArrayAdditionI(arr) { 
  var maxNum = 0,
      maxNumIndex = 0,
  	  isAddition = false;
  // code goes here
  maxNum = arr.reduce(function(a,b){
  	return Math.max(a,b);
  });

  maxNumIndex = arr.indexOf(maxNum);
 arr = arr.slice(0,maxNumIndex).concat(arr.slice(maxNumIndex+1));
  //return maxNum;
  
  function findAddition(num,arr){
      if (num <= maxNum){
      if (num == maxNum){
          isAddition= true;
        return num;
      } else if (arr.length<1) {
      } else {
       // arr.forEach(function(entry,index){
        //  arr=arr.slice(0,index).concat(arr.slice(index+1))
         // return findAddition(num+entry,arr); 
       // });

        for (var i = 0 ; i < arr.length ; i ++) { 
             findAddition(num+arr[i],arr.slice(0,i).concat(arr.slice(i+1)));
        }; 

      };
      return isAddition;
    };
  };
  
  return findAddition(0,arr);
  
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArrayAdditionI(readline());           
