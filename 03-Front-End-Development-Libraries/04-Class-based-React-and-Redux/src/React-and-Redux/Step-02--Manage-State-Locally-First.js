// ❓DESCRIPTION
// Here you'll finish creating the DisplayMessages component.


// 🎯 Assignment
// First, in the render() method, have the component render an input element, button element, and ul element.
// When the input element changes, it should trigger a handleChange() method.
// Also, the input element should render the value of input that's in the component's state.
// The button element should trigger a submitMessage() method when it's clicked.
//
// Second, write these two methods. The handleChange() method should update the input with what the user is typing.
// The submitMessage() method should concatenate the current message (stored in input)
// to the messages array in local state, and clear the value of the input.
//
// Finally, use the ul to map over the array of messages and render it to the screen as a list of li elements.


// ✅ SOLUTION
import {Component} from "react";

class DisplayMessages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      messages: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
  }

  // Add handleChange() and submitMessage() methods here
  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  submitMessage() {
    this.setState(prevState => ({
      messages: [ ...prevState.messages, prevState.input ],
    }))
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        {/* Render an input, button, and ul below this line */}
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
        {/* Change code above this line */}
      </div>
    )
  }
}
