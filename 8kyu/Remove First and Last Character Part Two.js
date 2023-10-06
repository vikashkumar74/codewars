// QUESTION //////////////////////////////
// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

////////////////////////////////////////////////////////////////////////////
// SOLUTION

function array(string) {
    const num =string.split(",").slice(1,-1).join(" ");
     
     if(num.length<1)
       return null;
   
     return num
   }