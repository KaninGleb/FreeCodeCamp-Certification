// ❓DESCRIPTION
// Check if a string (first argument, str) ends with the given target string (second argument, target).
//
// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.


// ✅ SOLUTION
function confirmEnding(str, target) {
    return str.substring(str.length - target.length) === target;
}


// ✅ Checking
console.log(confirmEnding('Bastian', 'n'));
console.log(confirmEnding('Bastian', 'ian'));
console.log(confirmEnding('Bastian', 'x'));