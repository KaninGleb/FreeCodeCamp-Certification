// ❓DESCRIPTION
// In the first object challenge we mentioned the use of bracket notation as a way to access property values using the evaluation of a variable. For instance, imagine that our foods object is being used in a program for a supermarket cash register. We have some function that sets the selectedFood and we want to check our foods object for the presence of that food. This might look like:
//
// let selectedFood = getCurrentFood(scannedItem);
// let inventory = foods[selectedFood];
// This code will evaluate the value stored in the selectedFood variable and return the value of that key in the foods object, or undefined if it is not present. Bracket notation is very useful because sometimes object properties are not known before runtime or we need to access them in a more dynamic way.

// 🎯 Assignment
// We've defined a function, checkInventory, which receives a scanned item as an argument. Return the current value of the scannedItem key in the foods object. You can assume that only valid keys will be provided as an argument to checkInventory.


// ✅ SOLUTION
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
}

function checkInventory(scannedItem) {
    return foods[scannedItem];
}


// ✅ Checking
console.log(checkInventory("apples"));