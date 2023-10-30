// QUESTION //////////////////////////////

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

////////////////////////////////////////////////////////////////////////////
// SOLUTION

function position(letter){
    const str="abcdefghijklmnopqrstuvwxyz";
     let index = str.indexOf(letter)+1;
  return `Position of alphabet: ${index}`
    
  //Write your own Code!
  }