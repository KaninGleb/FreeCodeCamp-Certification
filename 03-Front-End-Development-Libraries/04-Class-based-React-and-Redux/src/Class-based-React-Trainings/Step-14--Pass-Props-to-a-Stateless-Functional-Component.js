// ❓DESCRIPTION
// The previous challenges covered a lot about creating and composing JSX elements, functional components,
// and ES6 style class components in React. With this foundation,
// it's time to look at another feature very common in React: props.
// In React, you can pass props, or properties, to child components.
// Say you have an App component which renders a child component called Welcome which is a stateless functional component.
// You can pass Welcome a user property by writing:
//
// <App>
//   <Welcome user='Mark' />
// </App>
//
// You use custom HTML attributes created by you and supported by React to be passed to the component.
// In this case, the created property user is passed to the component Welcome.
// Since Welcome is a stateless functional component, it has access to this value like so:
//
// const Welcome = (props) => <h1>Hello, {props.user}!</h1>
//
// It is standard to call this value props and when dealing with stateless functional components,
// you basically consider it as an argument to a function which returns JSX.
// You can access the value of the argument in the function body. With class components,
// you will see this is a little different.


// 🎯 Assignment
// There are Calendar and CurrentDate components in the code editor.
// When rendering CurrentDate from the Calendar component,
// pass in a property of date assigned to the current date from JavaScript's Date object.
// Then access this prop in the CurrentDate component, showing its value within the p tags.
// Note that for prop values to be evaluated as JavaScript, they must be enclosed in curly brackets,
// for instance date={Date()}.


// ✅ SOLUTION
import {Component} from "react";

const CurrentDate = (props) => {
  return (
    <div>
      { /* Change code below this line */ }
      <p>The current date is: {props.date}</p>
      <CurrentDate />
      { /* Change code above this line */ }
    </div>
  )
}

class Calendar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* Change code below this line */ }
        <CurrentDate date={ Date() }/>
        { /* Change code above this line */ }
      </div>
    )
  }
}
