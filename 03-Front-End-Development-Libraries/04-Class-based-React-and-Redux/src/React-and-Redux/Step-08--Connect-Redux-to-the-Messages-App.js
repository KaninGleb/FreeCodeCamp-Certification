// ❓DESCRIPTION
// Now that you understand how to use connect to connect React to Redux,
// you can apply what you've learned to your React component that handles messages.
//
// In the last lesson, the component you connected to Redux was named Presentational, and this wasn't arbitrary.
// This term generally refers to React components that are not directly connected to Redux.
// They are simply responsible for the presentation of UI and do this as a function of the props they receive.
// By contrast, container components are connected to Redux.
// These are typically responsible for dispatching actions to the store and often pass store state to
// child components as props.


// 🎯 Assignment
// The code editor has all the code you've written in this section so far.
// The only change is that the React component is renamed to Presentational.
// Create a new component held in a constant called Container that uses connect to connect
// the Presentational component to Redux. Then, in the AppWrapper, render the React Redux Provider component.
// Pass Provider the Redux store as a prop and render Container as a child. Once everything is set up,
// you will see the messages app rendered to the page again.


// ✅ SOLUTION
// Redux:
import {createStore} from "redux";
import {Component} from "react";
import {Provider, connect} from "react-redux";

const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
}

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message]

    default:
      return state
  }
}

const store = createStore(messageReducer);

// React:
class Presentational extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  submitMessage() {
    this.setState((state) => {
      const currentMessage = state.input

      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      }
    })
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>

        <ul>
          {this.state.messages.map((message, idx) => {
            return (
              <li key={idx}>{message}</li>
            )
          })
          }
        </ul>
      </div>
    )
  }
}

// React-Redux:
const mapStateToProps = (state) => {
  return {messages: state}
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
      dispatch(addMessage(newMessage))
    }
  }
}


// Define the Container component here:
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational)

class AppWrapper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Complete the return statement:
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    )
  }
}
