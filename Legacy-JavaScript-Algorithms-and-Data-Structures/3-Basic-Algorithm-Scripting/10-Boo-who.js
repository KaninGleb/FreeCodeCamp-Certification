// ❓DESCRIPTION
// Check if a value is classified as a boolean primitive. Return true or false.
//
// Boolean primitives are true and false.


// ✅ SOLUTION
function booWho(bool) {
    return typeof bool === 'boolean';
}


// ✅ Checking
console.log(booWho(true));
console.log(booWho(false));
console.log(booWho(null));
console.log(booWho(1));
console.log(booWho('true'));
console.log(booWho(undefined));