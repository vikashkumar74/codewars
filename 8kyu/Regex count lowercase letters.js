// QUESTION //////////////////////////////
// Your task is simply to count the total number of lowercase letters in a string.

// Examples
// "abc" ===> 3

// "abcABC123" ===> 3

// "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

// "" ===> 0;

// "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

// "abcdefghijklmnopqrstuvwxyz" ===> 26


////////////////////////////////////////////////////////////////////////////
// SOLUTION

function lowercaseCount(str){
    //How many?
let count =0;
  for(let char of str){
  if (char.match(/[a-z]/))
    count++;
  }
 return count;
}