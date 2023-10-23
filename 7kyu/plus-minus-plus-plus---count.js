// QUESTION //////////////////////////////
// Count how often sign changes in array.

// result
// number from 0 to ... . Empty array returns 0

// example
// const arr = [1, -3, -4, 0, 5];

// /*
// | elem | count |
// |------|-------|
// |  1   |  0    |
// | -3   |  1    |
// | -4   |  1    |
// |  0   |  2    |
// |  5   |  2    |
// */

// // catchSignChange(arr) == 2;
////////////////////////////////////////////////////////////////////////////
// SOLUTION

function catchSignChange(arr) {
    // TODO
    let count=0;
    let sum=0;
    if(arr==""){
      return 0;
    }
    for(let i=0;i<arr.length-1;i++){
     
      if((arr[i] <0 && arr[i+1]>=0)||(arr[i]>=0&&arr[i+1]<0)){
        count++;
      }
    
    }
  
    return count
   
  }