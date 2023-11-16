// QUESTION //////////////////////////////
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity

////////////////////////////////////////////////////////////////////////////
// SOLUTION
function capitalize(s){
    const upper = s.toUpperCase()
    let a = ""
    let b = ""
    for (let i = 0; i < s.length; ++i) {
      if (i & 1) {
        a += s[i]
        b += upper[i]
      } else {
        a += upper[i]
        b += s[i]
      }
    }
    return [a, b]
  };