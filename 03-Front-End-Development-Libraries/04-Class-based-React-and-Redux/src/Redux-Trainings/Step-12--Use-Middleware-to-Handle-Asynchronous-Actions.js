// ❓DESCRIPTION
// So far these challenges have avoided discussing asynchronous actions,
// but they are an unavoidable part of web development.
// At some point you'll need to call asynchronous endpoints in your Redux app,
// so how do you handle these types of requests? Redux provides middleware designed specifically for this purpose,
// called Redux Thunk middleware. Here's a brief description how to use this with Redux.
//
// To include Redux Thunk middleware, you pass it as an argument to Redux.applyMiddleware().
// This statement is then provided as a second optional parameter to the createStore() function.
// Take a look at the code at the bottom of the editor to see this.
// Then, to create an asynchronous action, you return a function in the action creator that takes dispatch as an argument.
// Within this function, you can dispatch actions and perform asynchronous requests.
//
// In this example, an asynchronous request is simulated with a setTimeout() call.
// It's common to dispatch an action before initiating any asynchronous behavior so that your application state knows
// that some data is being requested (this state could display a loading icon, for instance).
// Then, once you receive the data, you dispatch another action which carries the data as
// a payload along with information that the action is completed.
//
// Remember that you're passing dispatch as a parameter to this special action creator.
// This is what you'll use to dispatch your actions,
// you simply pass the action directly to dispatch and the middleware takes care of the rest.


// 🎯 Assignment
// Write both dispatches in the handleAsync() action creator.
// Dispatch requestingData() before the setTimeout() (the simulated API call).
// Then, after you receive the (pretend) data, dispatch the receivedData() action, passing in this data.
// Now you know how to handle asynchronous actions in Redux. Everything else continues to behave as before.


// ✅ SOLUTION
import {applyMiddleware, createStore} from "redux";
import {thunk} from "redux-thunk";

const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => {
  return { type: REQUESTING_DATA }
}

const receivedData = (data) => {
  return { type: RECEIVED_DATA, users: data.users }
}

const handleAsync = () => {
  return function (dispatch) {

    // Dispatch request action here
    dispatch(requestingData())

    setTimeout(function () {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }

      // Dispatch received data action here
      dispatch(receivedData(data))

    }, 2500)
  }
}

const defaultState = {
  fetching: false,
  users: []
}

const asyncDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }

    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }

    default:
      return state;
  }
}

const store = createStore(
  asyncDataReducer,
  applyMiddleware(thunk)
)
