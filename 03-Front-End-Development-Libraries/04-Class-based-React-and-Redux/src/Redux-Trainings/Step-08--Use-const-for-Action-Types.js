// ❓DESCRIPTION
// A common practice when working with Redux is to assign action types as read-only constants,
// then reference these constants wherever they are used.
// You can refactor the code you're working with to write the action types as const declarations.


// 🎯 Assignment
// Declare LOGIN and LOGOUT as const values and assign them to the strings 'LOGIN' and 'LOGOUT', respectively.
// Then, edit the authReducer() and the action creators to reference these constants instead of string values.
//
// Note: It's generally a convention to write constants in all uppercase,
// and this is standard practice in Redux as well.


// ✅ SOLUTION
import {createStore} from "redux";

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

const defaultState = {
  authenticated: false
}

const authReducer = (state = defaultState, action) => {


  switch (action.type) {
    case LOGIN:
      return { authenticated: true }

    case LOGOUT:
      return { authenticated: false }

    default:
      return state
  }
}

const store = createStore(authReducer)

const loginUser = () => {
  return {
    type: LOGIN
  }
}

const logoutUser = () => {
  return {
    type: LOGOUT
  }
}
