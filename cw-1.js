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