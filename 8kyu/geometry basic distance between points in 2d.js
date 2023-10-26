// QUESTION //////////////////////////////

// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have attributes x and y.

// Write a function calculating distance between Point a and Point b.

// Input coordinates fit in range 
// −
// −50⩽x,y⩽50. Tests compare expected result and actual answer with tolerance of 1e-6.
////////////////////////////////////////////////////////////////////////////
// SOLUTION

function distanceBetweenPoints(a, b) {
    const cX=a.x-b.x;
      const cY=a.y-b.y;
    
     return Math.sqrt((cX*cX)+(cY*cY))
       // your code here
    }

