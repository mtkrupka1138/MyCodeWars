// Codewars challenge 0004

// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more 
// than one digit, continue reducing in this way until a single-digit 
// number is produced. The input will be a non-negative integer.

function calc_total(arrToSum) {
    let sum = 0;
    for (let i=0; i < arrToSum.length; i++) {
      sum = sum + Number(arrToSum[i])
    }
    return sum;
}
  
function digital_root(n) {
    let numAsStringArr = n.toString().split('');
    let total = calc_total(numAsStringArr);
    while (total.toString().split('').length > 1) {
      total = calc_total(total.toString().split(''));
    }
    return total;
}