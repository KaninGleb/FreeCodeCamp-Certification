// ❓DESCRIPTION
// The last several challenges worked with arrays,
// but there are ways to help enforce state immutability when state is an object, too.
// A useful tool for handling objects is the Object.assign() utility.
// Object.assign() takes a target object and source objects and maps properties from
// the source objects to the target object.
// Any matching properties are overwritten by properties in the source objects.
// This behavior is commonly used to make shallow copies of objects by passing an empty object
// as the first argument followed by the object(s) you want to copy.
//
// Here's an example:
//
// const newObject = Object.assign({}, obj1, obj2);
//
// This creates newObject as a new object, which contains the properties that currently exist in obj1 and obj2.


// 🎯 Assignment
// The Redux state and actions were modified to handle an object for the state.
// Edit the code to return a new state object for actions with type ONLINE,
// which set the status property to the string online. Try to use Object.assign() to complete the challenge.


// ✅ SOLUTION
import {createStore} from "redux";

const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
}

const immutableReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ONLINE':
      // Don't mutate state here or the tests will fail
      return Object.assign({}, state, { status: 'online' })

    default:
      return state
  }
}

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
}

const store = createStore(immutableReducer)
