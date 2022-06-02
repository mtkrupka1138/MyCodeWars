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