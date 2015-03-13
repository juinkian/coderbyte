//solution 1
function LongestWord(sen) { 


  // code goes here  
var parts = sen.match(/\w[a-z]{0,}/gi);
var longestIndex = -1;
var longestWord = 0;

for(var i=0; i < parts.length; i++){
    if(parts[i].length > longestWord){
        longestWord = parts[i].length;
        longestIndex = i;
    }
}

   return parts[longestIndex]; 
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline());           

//solution 2
function LongestWord(sen) { 
var myArray;
var longest=0; 
var longestWord;
  
  // code goes here  
  myArray= sen.match(/\w+/gi);
  
   myArray.forEach(function(entry){
   	if( entry.length > longest) {
    	longest = entry.length;
      	longestWord=entry;
    };
   });
  return longestWord;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline());           
