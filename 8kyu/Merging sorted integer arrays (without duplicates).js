// QUESTION //////////////////////////////
// Write a function that merges two sorted arrays into a single one. 

// The arrays only contain integers. Also, the final outcome must be 
// sorted and not have any duplicate
// examples

// ([1, 3, 5], [2, 4, 6]) = [1, 2, 3, 4, 5, 6]);
//        ([2, 4, 8], [2, 4, 6]) = [2, 4, 6, 8]);
//    ([1, 3, 5], [2, 4, 6]) = [1, 2, 3, 4, 5, 6];

////////////////////////////////////////////////////////////////////////////
// SOLUTION

function mergeArrays(a, b) {
    // your code here
    const c=a.concat(b);
    let mySet = new Set(c)
  let arr=[...mySet]
  
   
    return arr.sort(function (a,b) { return a - b });
  }
  