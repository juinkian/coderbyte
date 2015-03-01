function PrimeMover(num) { 

  // code goes here  


var isPrime = true;
var myArray=[];
var counter = 0;
var i = 2;
while (counter < num){
      for (var j = 2; j < i; j++){
      if (!(i%j)) {
        isPrime = false; 
        break;
      };
     };

  if (isPrime){
    myArray.push(i);
    counter++;
  }
  isPrime = true;
  i++ ;
};
return myArray.pop();
};
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PrimeMover(readline());           
