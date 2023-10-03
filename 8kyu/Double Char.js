// QUESTION //////////////////////////////
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

////////////////////////////////////////////////////////////////////////////
// SOLUTION

function doubleChar(str) {
    // Your code here
    let string=""
    for(let item of str){
       string+=item+item;
    }
    return string
  }

