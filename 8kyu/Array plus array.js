// QUESTION //////////////////////////////

// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too

// examples
// assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
// assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
// assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
// assert.strictEqual(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);

////////////////////////////////////////////////////////////////////////////
// SOLUTION

function arrayPlusArray(arr1, arr2) {
  
    const c=arr1.concat(arr2).reduce((sum,value)=>sum+value,0)
    return c ;
  }
  
