function PowersofTwo(num) { 

var start = 2; 
function isPowerOfTwo(start,target){
    if (start == target){
    return true;
  } else if (start > target) {
    return false;	
  } else {
    start *=2 ;
    return isPowerOfTwo(start,target);
  };
};
  
return isPowerOfTwo(start,num);
  

}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PowersofTwo(readline());           
