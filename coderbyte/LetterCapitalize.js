//solution 1 
function LetterCapitalize(str) { 

  // code goes here  
  str = str.split(' ');
  for (var i = 0 ; i < str.length ; i++){
    str[i] =  str[i].substring(0,1).toUpperCase()+str[i].substring(1);
  };
  
  return str.join(" "); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize(readline());           

//solution 2
function LetterCapitalize(str) { 
var myArray=[];
  // code goes here  
  str=str.match(/\w+/gi); 
  str.forEach(function(word){
  	myArray.push( word[0].toUpperCase() + word.slice(1) );
  });
  return myArray.join(' ');       
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize(readline());           
