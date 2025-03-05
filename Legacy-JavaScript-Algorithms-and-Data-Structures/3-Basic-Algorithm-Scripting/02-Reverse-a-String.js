// ❓DESCRIPTION
// Reverse the provided string and return the reversed string.
// For example, "hello" should become "olleh".


// ✅ SOLUTION
function reverseString(str) {
    return str.split('').reverse().join('');
}


// ✅ Checking
console.log(reverseString('hello'));