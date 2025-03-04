// ❓DESCRIPTION
// Now let's take a look at a slightly more complex object. Object properties can be nested to an arbitrary depth, and their values can be any type of data supported by JavaScript, including arrays and even other objects. Consider the following:
//
// let nestedObject = {
//   id: 28802695164,
//   date: 'December 31, 2016',
//   data: {
//     totalUsers: 99,
//     online: 80,
//     onlineStatus: {
//       active: 67,
//       away: 13,
//       busy: 8
//     }
//   }
// };
// nestedObject has three properties: id (value is a number), date (value is a string), and data (value is an object with its nested structure). While structures can quickly become complex, we can still use the same notations to access the information we need. To assign the value 10 to the busy property of the nested onlineStatus object, we use dot notation to reference the property:

// 🎯 Assignment
// nestedObject.data.onlineStatus.busy = 10;
// Here we've defined an object userActivity, which includes another object nested within it. Set the value of the online key to 45.


// ✅ SOLUTION
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42,
    }
};

userActivity.data.online = 45;


// ✅ Checking
console.log(userActivity);