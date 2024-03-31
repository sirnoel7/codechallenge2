let num1;
let num2;
// declaring undefined variables num1 and num2
function listnum(num1, num2) {
if(num1>num2){
// this introduces a condition that checks whether num1 is of a higher value than num2
    let array = [];
// this states that if the condition is true, introduce a varaible known as array, which is an array
   for(let n=num1;n>=num2;n--){
 // this introduces a letter n to represent num1, and confirms if it is equal to or greater than num2
 //if so, it shall loop the function reducing the n variable in the array till it arrives at the num2
    array.push(n);
// this inputs each number into the array    
   }
   return array;
// this returns the newly formed array
}
  else {
// if num1 is not greater than num2, initiate this part of the code
    let array = [];
   for(let n=num1;n<=num2;n++){
//the letter n has been made to represent num1, at this point being equal to or less than 2
//the number is consistently added to 1 along the array, till it arrives at num2
    array.push(n);
// the values are continuously input into the array
   }
   return array;
// the new array is returned
  }
}

console.log(listnum(1,10));
//example of how it can be used





