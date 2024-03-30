let word = "";
//this states that the word variable is a string
let result = "";
// this states that the result variable is a string
function letterswap(word) {
    for(let i=0; i<word.length; i++){
        if(word[i] === word[i].toLowerCase()){
            result += word[i].toUpperCase();
//this checks if every letter in the word variable is in lowercase, if so, it is changed to uppercase
        } else {
            result += word[i].toLowerCase();
        }
// if the letter isnt in lowercase, then it shall be changed to uppercase automatically        
    }
return result;
};

console.log (letterswap(word));