// Codewars challenge 0001

// Write a function that takes in a string of one or more words, and returns 
// the same string, but with all five or more letter words reversed. Strings 
// passed in will consist of only letters and spaces. Spaces will be included 
// only when more than one word is present. 

function spinWords(string){
    const words = string.split(' ');
    const wordReverse = words.map((word) => {
      if (word.length >= 5) {
        const arr = word.split('');
        const arrRev = arr.reverse();
        const joinArr = arrRev.join('');
        word = joinArr;
        return joinArr;
      }
      return word;
    })
    const newSentence = wordReverse.join(' ');
    return newSentence;
  }