function ThirdGreatest(strArr) { 
 var myObj={}; 
  var myArray=[];
  var lengthArray=[],
      sortedArray = []; 
  var count=0;
  
  // code goes here  
  strArr.forEach(function(entry){
  	myObj[entry] = entry.length;
  });
  
  strArr.forEach(function(entry){
       lengthArray.push(entry.length);
  	myArray.push({
      "word" : entry, 
      "entry": entry.length})
  });

  
  sortedArray = lengthArray.slice()
    		.sort(function(a,b){
  				return b - a;
  });
  
  if(sortedArray[0] =  sortedArray[2]){
  	count++;
  };
  
  if(sortedArray[1] =  sortedArray[2]){
  	count++;
  };
  
  while (count != 0){
  
  };
  
  return strArr[lengthArray.indexOf(sortedArray[2],)];
  
  
  
  
return sortedArray[2];
  return myArray;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ThirdGreatest(readline());                            















                            
                            
                            
  