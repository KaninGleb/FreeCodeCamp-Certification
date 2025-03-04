// ❓DESCRIPTION
// Sometimes you need to iterate through all the keys within an object. You can use a for...in loop to do this. The for...in loop looks like:
//
// const refrigerator = {
//   'milk': 1,
//   'eggs': 12,
// };
//
// for (const food in refrigerator) {
//   console.log(food, refrigerator[food]);
// }
//
// This code logs milk 1 and eggs 12, with each key-value pair on its own line.
//
// We defined the variable food in the loop head and this variable was set to each of the object's keys on each iteration, resulting in each food's name being printed to the console.
//
// NOTE: Objects do not maintain an ordering to stored keys like arrays do; thus a key's position on an object, or the relative order in which it appears, is irrelevant when referencing or accessing that key.

// 🎯 Assignment
// We've defined a function countOnline which accepts one argument, allUsers. Use a for...in statement inside this function to loop through the allUsers object and return the number of users whose online property is set to true. An example of an object which could be passed to countOnline is shown below. Each user will have an online property set to either true or false.
//
// {
//   Alan: {
//     online: false
//   },
//   Jeff: {
//     online: true
//   },
//   Sarah: {
//     online: false
//   }
// }


// ✅ SOLUTION
const users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

function countOnline(allUsers) {
    let onlineCount = 0;

    for (const user in allUsers) {
        if (allUsers[user].online) {
            onlineCount++;
        }
    }

    return onlineCount;
}

// ✅ Checking
console.log(countOnline(users));