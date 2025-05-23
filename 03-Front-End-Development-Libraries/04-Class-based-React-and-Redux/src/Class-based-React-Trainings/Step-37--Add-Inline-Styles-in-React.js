// ❓DESCRIPTION
// You may have noticed in the last challenge that there were several other syntax differences from HTML
// inline styles in addition to the style attribute set to a JavaScript object.
// First, the names of certain CSS style properties use camel case.
// For example, the last challenge set the size of the font with fontSize instead of font-size.
// Hyphenated words like font-size are invalid syntax for JavaScript object properties, so React uses camel case.
// As a rule, any hyphenated style properties are written using camel case in JSX.
//
// All property value length units (like height, width, and fontSize) are assumed to be in px unless otherwise specified.
// If you want to use em, for example, you wrap the value and the units in quotes, like {fontSize: "4em"}.
// Other than the length values that default to px, all other property values should be wrapped in quotes.


// 🎯 Assignment
// If you have a large set of styles, you can assign a style object to a constant to keep your code organized.
// Declare your styles constant as a global variable at the top of the file.
// Initialize styles constant and assign an object with three style properties and their values to it.
// Give the div a color of purple, a font-size of 40, and a border of 2px solid purple.
// Then set the style attribute equal to the styles constant.


// ✅ SOLUTION
import {Component} from "react";

const styles = {
  color: 'purple',
  fontSize: 40,
  border: '2px solid purple'
}
// Change code above this line

class Colorful extends Component {
  render() {
    // Change code below this line
    return (
      <div style={styles}>Style Me!</div>
    )
    // Change code above this line
  }
}
