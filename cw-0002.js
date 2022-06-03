// Codewars challenge 0002

// You are given an array (which will have a length of at least 3, but could 
// be very large) containing integers. The array is either entirely comprised 
// of odd integers or entirely comprised of even integers except for a single 
// integer N. Write a method that takes the array as an argument and returns 
// this "outlier" N.

function findOutlier(integers){
  
    let oddEven = integers.map( (num) => num % 2);
    let count = 0;
    let neg = false;
    
    for (let i=0; i<oddEven.length; i++) {
      if (oddEven[i] > 0) {
        count++;
      }
      if (oddEven[i] < 0) {
        count++;
        neg = true;
      }
    }
    
    if (count === 1 && neg) {
      oddNumIndex = oddEven.indexOf(-1);
      return integers[oddNumIndex];
    }
    if (count === 1 && !neg) {
      oddNumIndex = oddEven.indexOf(1);
      return integers[oddNumIndex];
    }
    evenNumIndex = oddEven.indexOf(0);
    return integers[evenNumIndex];
  
  }