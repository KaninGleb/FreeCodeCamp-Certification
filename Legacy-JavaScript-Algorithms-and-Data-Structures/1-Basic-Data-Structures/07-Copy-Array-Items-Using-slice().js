// ❓DESCRIPTION
// The next method we will cover is slice(). Rather than modifying an array, slice() copies or extracts a given number of elements to a new array, leaving the array it is called upon untouched. slice() takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index). Consider this:
//
// let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
//
// let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather would have the value ['snow', 'sleet'], while weatherConditions would still have ['rain', 'snow', 'sleet', 'hail', 'clear'].
//
// In effect, we have created a new array by extracting elements from an existing array.

// 🎯 Assignment
// We have defined a function, forecast, that takes an array as an argument. Modify the function using slice() to extract information from the argument array and return a new array that contains the string elements warm and sunny.


// ✅ SOLUTION
function forecast(arr) {
    return arr.slice(2, 4);
}


// ✅ Checking
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));