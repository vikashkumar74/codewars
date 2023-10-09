// QUESTION //////////////////////////////
// Color Ghost
// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"


////////////////////////////////////////////////////////////////////////////
// SOLUTION

var Ghost = function() {
    // your code goes here
    const colors=[ "white" , "yellow" ,"purple" ,"red"]
    const c=[Math.floor(Math.random()*colors.length)]
    this.color=colors[c]
  };