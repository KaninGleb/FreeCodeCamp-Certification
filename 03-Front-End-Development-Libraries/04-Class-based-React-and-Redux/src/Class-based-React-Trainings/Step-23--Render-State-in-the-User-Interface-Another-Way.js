// ❓DESCRIPTION
// There is another way to access state in a component. In the render() method, before the return statement,
// you can write JavaScript directly. For example, you could declare functions, access data from state or props,
// perform computations on this data, and so on.
// Then, you can assign any data to variables, which you have access to in the return statement.


// 🎯 Assignment
// In the MyComponent render method, define a const called name and set it equal to the name value in the component's state.
// Because you can write JavaScript directly in this part of the code,
// you don't have to enclose this reference in curly braces.
//
// Next, in the return statement, render this value in an h1 tag using the variable name.
// Remember, you need to use the JSX syntax (curly braces for JavaScript) in the return statement.


// ✅ SOLUTION
import {Component} from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }

  render() {
    // Change code below this line
    const name = this.state.name
    // Change code above this line
    return (
      <div>
        { /* Change code below this line */ }
        <h1>{name}</h1>
        { /* Change code above this line */ }
      </div>
    )
  }
}
