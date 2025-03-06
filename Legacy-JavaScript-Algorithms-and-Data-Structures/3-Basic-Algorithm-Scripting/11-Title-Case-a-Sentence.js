// ❓DESCRIPTION
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
//
// For the purpose of this exercise, you should also capitalize connecting words like the and of.


// ✅ SOLUTION
function titleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}


// ✅ Checking
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS A TEST"));
console.log(titleCase("the quick brown fox"));