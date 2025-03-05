// ❓DESCRIPTION
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.


// ✅ SOLUTION
function repeatStringNumTimes(str, num) {
    if (num <= 0) {
        return '';
    }

    let result = '';

    for (let i = 0; i < num; i++) {
        result += str;
    }

    return result;
}


// ✅ Checking
console.log(repeatStringNumTimes('abc', 3));