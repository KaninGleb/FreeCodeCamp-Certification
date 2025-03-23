// ❓DESCRIPTION
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.


// ✅ SOLUTION
function chunkArrayInGroups(arr, size) {
    const result = [];

    for (let i = 0; i < arr.length; i += size) {
        const chunk = arr.slice(i, i + size);
        result.push(chunk);
    }
    return result;
}


// ✅ Checking
console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2));
