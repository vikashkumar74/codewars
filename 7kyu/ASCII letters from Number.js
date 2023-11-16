// QUESTION //////////////////////////////

// You have to create a function that converts integer given as string into ASCII uppercase letters or spaces.

// All ASCII characters have their numerical order in table.

// For example,

// from ASCII table, character of number 65 is "A".
// Numbers will be next to each other, So you have to split given number to two digit long integers.

// Examples (input -> output)
// '658776' -> 'AWL' (because in ASCII table 'A' is 65, 'W' is 87, 'L' is 76)
// '73327673756932858080698267658369' ->'I LIKE UPPERCASE'
// Good Luck!

////////////////////////////////////////////////////////////////////////////
// SOLUTION
function convert(number){
    // ...Convert integers given as string into ASCII uppercase letters...
     let upp=[];
    for (let i=0;i<number.length;i+=2){
        upp.push(number.slice(i,i+2));
      }
    return String.fromCharCode(...upp);
  }