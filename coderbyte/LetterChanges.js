function LetterChanges(str) { 

  // code goes here  
 //return str; 
  str= str.split('');  
for (var i = 0; i < str.length ; i ++)
{
  if (str[i].match(/[a-z]/gi)){
     str[i] =  String.fromCharCode((str[i].charCodeAt(0))+1);
                  };

  if (str[i].match(/[aeiou]/gi)){
    str[i] = str[i].toUpperCase();
      };
};
  
  return str.join('');
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());           
