// QUESTION //////////////////////////////
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

////////////////////////////////////////////////////////////////////////////
// SOLUTION
function countPositivesSumNegatives(input) {
    // your code here
    if (input == null||input.length < 1){
    return [];
  } else{
      let arr=[];
    let c=input.filter((e)=>e<0).reduce((sum,item)=>sum+item,0);
    let d=input.filter((e)=>e>0).length;
  arr.push(d)
  arr.push(c)
    return arr;
  }
  }