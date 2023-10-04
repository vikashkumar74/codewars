// QUESTION //////////////////////////////

// Create a function that takes in the sum and age difference of two people, 
// calculates their individual ages, and returns a pair of values
//  (oldest age first) if those exist or null/None or {-1, -1} in C if:

// sum < 0
// difference < 0
// Either of the calculated ages come out to be negative

// examples:-
// it returns 14,10 when passed 24,4
// it returns 18,12 when passed 30,6
// it returns 40,30 when passed 70,10
// it returns 11,7 when passed 18,4
// it returns 38.5,24.5 when passed 63,14

////////////////////////////////////////////////////////////////////////////
// SOLUTION

function getAges(sum,difference){
    const  arr=[];
   if(sum<0||difference<0||sum<difference)
 return null
 
   
   
     const c=(sum+difference)/2;
     const d=(sum-difference)/2;
    
    arr.push(c);
     arr.push(d);
     return arr;
   
 };