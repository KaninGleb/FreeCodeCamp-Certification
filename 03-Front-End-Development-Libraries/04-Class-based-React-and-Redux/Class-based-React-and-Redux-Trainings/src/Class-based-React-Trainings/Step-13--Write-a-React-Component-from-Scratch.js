// ❓DESCRIPTION
// Now that you've learned the basics of JSX and React components,
// it's time to write a component on your own. React components are the core building blocks
// of React applications so it's important to become very familiar with writing them. Remember,
// a typical React component is an ES6 class which extends React.Component.
// It has a render method that returns HTML (from JSX) or null. This is the basic form of a React component.
// Once you understand this well, you will be prepared to start building more complex React projects.


// 🎯 Assignment
// Define a class MyComponent that extends React.Component.
// Its render method should return a div that contains an h1 tag with the text: My First React Component! in it.
// Use this text exactly, the case and punctuation matter. Make sure to call the constructor for your component, too.
//
// Render this component to the DOM using ReactDOM.render().
// There is a div with id='challenge-node' available for you to use.


// ✅ SOLUTION
import {Component} from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>My First React Component!</h1>
    )
  }
}

const div = document.getElementById('challenge-node')

ReactDOM.render(<MyComponent />, div)
