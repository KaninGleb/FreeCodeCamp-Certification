// ❓DESCRIPTION
// Return the length of the longest word in the provided sentence.
//
// Your response should be a number.


// ✅ SOLUTION
function findLongestWordLength(str) {
    const words = str.split(' ');
    return words.reduce((max, word) => Math.max(max, word.length), 0);
}


// ✅ Checking
console.log(findLongestWordLength('The quick brown fox jumped over the lazy dog')); // Output: 6