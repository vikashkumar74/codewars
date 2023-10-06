// QUESTION //////////////////////////////

// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []
////////////////////////////////////////////////////////////////////////////
// SOLUTION

function twoHighest(arr) {
    if(arr.length==0||arr.length==1){
      return arr;
    }
     const mySet=new Set(arr.sort((s,e)=>e-s));
    let [first,second]=mySet;
      const arr2=[];
      arr2.push(first);
      arr2.push(second);
      return arr2;
    }