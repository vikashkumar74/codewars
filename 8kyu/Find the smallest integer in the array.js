// QUESTION //////////////////////////////

// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.


////////////////////////////////////////////////////////////////////////////
// SOLUTION

class SmallestIntegerFinder {
    findSmallestInt(args) {
      let smallest=args[0];
      for(let item of args){
        if(smallest>item){
          smallest=item;
        }
      }
      return smallest;
    }
  }

       /////// or///////
       class SmallestIntegerFinder {
        findSmallestInt(args) {
        args.sort((s,e)=>s-e)
          return args[0]
        }
      }
       /////// or///////
       class SmallestIntegerFinder {
        findSmallestInt(args) {
          return Math.min(...args)
        }
      }

      
     