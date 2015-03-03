function CountingMinutesI(str) { 
  var myArray,
      start,
      end,
      startHour,
      startMinute,
      endHour,
      endMinute,
      startTotalMinute,
      endTotalMinute,
      adjustment=0;
  // code goes here  
  myArray = str.split('-');
  start = myArray[0]; 
  end = myArray[1];
  startHour = parseInt(start.match(/\d+/gi)[0]);
  startMinute= parseInt(start.match(/\d+/gi)[1]);
  endHour = parseInt(end.match(/\d+/gi)[0]);
  endMinute= parseInt(end.match(/\d+/gi)[1]);
  
  if((start.match('pm'))&&(startHour<12)){
  startHour +=12;   
     };

//return startHour;
  
  if ((start.match('am'))&&(startHour==12)){
      startHour -=12; 
      };
  
  if((end.match('pm'))&&(endHour<12)){
  endHour +=12;   
     };

  
   if ((end.match('am'))&&(endHour==12)){
      endHour -=12; 
    };
  

  //For debugging
 

   startTotalMinute= (startHour * 60 + startMinute);
   endTotalMinute = endHour * 60 + endMinute;
  
   if (startTotalMinute > endTotalMinute) {
      adjustment = 24*60
  };
  
 // return startHour+ ' ' +  startMinute + ' ' + endHour + ' ' + endMinute
  return  endTotalMinute - startTotalMinute + adjustment;     
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
CountingMinutesI(readline());           
