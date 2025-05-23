// ❓DESCRIPTION
// As the challenges continue to use more complex compositions with React components and JSX,
// there is one important point to note. Rendering ES6 style class components within other components
// is no different than rendering the simple components you used in the last few challenges.
// You can render JSX elements, stateless functional components, and ES6 class components within other components.


// 🎯 Assignment
// In the code editor, the TypesOfFood component is already rendering a component called Vegetables.
// Also, there is the Fruits component from the last challenge.
//
// Nest two components inside of Fruits — first NonCitrus, and then Citrus.
// Both of these components are provided for you behind the scenes.
// Next, nest the Fruits class component into the TypesOfFood component,
// below the h1 heading element and above Vegetables. The result should be a series of nested components,
// which uses two different component types.


// ✅ SOLUTION
import {Component} from "react";

class Fruits extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* Change code below this line */ }
        <Citrus />
        <NonCitrus />
        { /* Change code above this line */ }
      </div>
    )
  }
}

class TypesOfFood extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ }
        <Fruits />
        { /* Change code above this line */ }
        <Vegetables />
      </div>
    )
  }
}
