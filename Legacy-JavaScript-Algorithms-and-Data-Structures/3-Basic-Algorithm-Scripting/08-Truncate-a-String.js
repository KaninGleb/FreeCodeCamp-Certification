// ❓DESCRIPTION
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.


// ✅ SOLUTION
function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + '...';
    }
    return str;
}


// ✅ Checking
console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8));
console.log(truncateString('Hello, world!', 5));
console.log(truncateString('Short', 10));
console.log(truncateString('This is a test string.', 10));
