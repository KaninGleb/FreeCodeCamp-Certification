// ❓DESCRIPTION
// The last challenge showed that React can control the internal state for certain elements like input and textarea,
// which makes them controlled components. This applies to other form elements as well,
// including the regular HTML form element.


// 🎯 Assignment
// The MyForm component is set up with an empty form with a submit handler.
// The submit handler will be called when the form is submitted.
//
// We've added a button which submits the form. You can see it has the type set to submit indicating it is
// the button controlling the form. Add the input element in the form and set its value and onChange() attributes
// like the last challenge. You should then complete the handleSubmit method so that it sets the component
// state property submit to the current input value in the local state.
//
// Note: You also must call event.preventDefault() in the submit handler,
// to prevent the default form submit behavior which will refresh the web page. For camper convenience,
// the default behavior has been disabled here to prevent refreshes from resetting challenge code.
//
// Finally, create an h1 tag after the form which renders the submit value from the component's state.
// You can then type in the form and click the button (or press enter),
// and you should see your input rendered to the page.


// ✅ SOLUTION
import {Component} from "react";

class MyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      submit: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  handleSubmit(e) {
    // Change code below this line
    e.preventDefault()
    this.setState({
      submit: this.state.input
    })
    // Change code above this line
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* Change code below this line */}
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
          />
          {/* Change code above this line */}
          <button type='submit'>Submit!</button>
        </form>
        {/* Change code below this line */}
        <h1>{this.state.submit}</h1>
        {/* Change code above this line */}
      </div>
    )
  }
}
