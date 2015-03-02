function PrimeMover(num) { 

    // code goes here  
  var isPrime = true;
  var myArray=[];
  var counter = 0;
  var i = 2;
  while (counter < num){ //do this while we have not reached the numth prime
        for (var j = 2; j < i; j++){
        if (!(i%j)) { //check is j divides our number and return false if it does
          isPrime = false; 
          break;
        };
       };

    if (isPrime){ //if we found a prime number, add it to myArray and increment the prime counter
      myArray.push(i);
      counter++; 
    }

    isPrime = true; //reinitialize isPrime
    i++ ; // increment i
    
  };
  return myArray.pop(); //return the last entry
};
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PrimeMover(readline());           
