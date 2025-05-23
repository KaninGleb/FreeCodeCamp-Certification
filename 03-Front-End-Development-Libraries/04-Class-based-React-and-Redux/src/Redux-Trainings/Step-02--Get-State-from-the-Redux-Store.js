// ❓DESCRIPTION
// The Redux store object provides several methods that allow you to interact with it.
// For example, you can retrieve the current state held in the Redux store object with the getState() method.


// 🎯 Assignment
// The code from the previous challenge is re-written more concisely in the code editor.
// Use store.getState() to retrieve the state from the store, and assign this to a new variable currentState.


// ✅ SOLUTION
import {createStore} from "redux";

const store = createStore(
  (state = 5) => state
)

// Change code below this line
const currentState = store.getState()
