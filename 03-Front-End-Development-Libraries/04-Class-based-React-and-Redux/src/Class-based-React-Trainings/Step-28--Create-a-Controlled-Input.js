// ❓DESCRIPTION
// Your application may have more complex interactions between state and the rendered UI.
// For example, form control elements for text input,
// such as input and textarea, maintain their own state in the DOM as the user types.
// With React, you can move this mutable state into a React component's state.
// The user's input becomes part of the application state, so React controls the value of that input field.
// Typically, if you have React components with input fields the user can type into, it will be a controlled input form.


// 🎯 Assignment
// The code editor has the skeleton of a component called ControlledInput to create a controlled input element.
// The component's state is already initialized with an input property that holds an empty string.
// This value represents the text a user types into the input field.
//
// First, create a method called handleChange() that has a parameter called event.
// When the method is called, it receives an event object that contains a string of text from the input element.
// You can access this string with event.target.value inside the method.
// Update the input property of the component's state with this new string.
//
// In the render method, create the input element above the h4 tag.
// Add a value attribute which is equal to the input property of the component's state.
// Then add an onChange property set to the handleChange() event handler method.
//
// When you type in the input box, that text is processed by the handleChange() method,
// set as the input property in the local state, and rendered as the value in the input box on the page.
// The component state is the single source of truth regarding the input data.
//
// Last but not least, don't forget to add the necessary bindings in the constructor.


// ✅ SOLUTION
import {Component} from "react";

class ControlledInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }
    // Change code below this line
    this.handleChange = this.handleChange.bind(this)
    // Change code above this line
  }
  // Change code below this line
  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }
  // Change code above this line
  render() {
    return (
      <div>
        { /* Change code below this line */}
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}/>
        { /* Change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    )
  }
}
