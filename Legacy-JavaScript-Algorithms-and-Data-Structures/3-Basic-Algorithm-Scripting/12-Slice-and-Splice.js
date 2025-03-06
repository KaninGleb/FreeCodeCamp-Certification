// ❓DESCRIPTION
// You are given two arrays and an index.
//
// Copy each element of the first array into the second array, in order.
//
// Begin inserting elements at index n of the second array.
//
// Return the resulting array. The input arrays should remain the same after the function runs.


// ✅ SOLUTION
function frankenSplice(arr1, arr2, n) {
    const copy = arr2.slice();
    copy.splice(n, 0, ...arr1);
    return copy;
}


// ✅ Checking
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice([1, 2], [4, 5, 6], 2));
console.log(frankenSplice([1, 2, 3], [4, 5], 0));
console.log(frankenSplice([], [4, 5, 6], 1));