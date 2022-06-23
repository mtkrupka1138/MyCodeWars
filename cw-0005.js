// Codewars challenge 0005

// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters.
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. 
// You should return an array of all the anagrams or an empty array if there are none.

function anagrams(word, words) {
    let sortedWordsArr = [];
    let anagramArr = [];
    let wordSorted = word.split('').sort().join('');
    for (let i = 0; i < words.length; i++) {
      let compareWord = words[i].split('').sort().join('');
      sortedWordsArr.push(compareWord);
    }
    for (let j = 0; j < sortedWordsArr.length; j++) {
      if (wordSorted === sortedWordsArr[j]) {
        anagramArr.push(words[j])
      }
    }
    return anagramArr;
}