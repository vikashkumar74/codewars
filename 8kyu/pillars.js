// QUESTION //////////////////////////////

// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

//  1 number of pillars (≥ 1);
//  2 distance between pillars (10 - 30 meters);
//  3 width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

////////////////////////////////////////////////////////////////////////////
// SOLUTION


function pillars(numPill, dist, width) {
    // your code here
    let totalPillar=numPill-1;
    if(totalPillar>=1){
    let totalwidth= width*totalPillar-width;
    let length=totalPillar*dist*100+totalwidth;
      return length;
    }
    else{
      return 0;
    }
  }