// ❓DESCRIPTION
// Now that you're getting comfortable writing JSX, you may be wondering how it differs from HTML.
//
// So far, it may seem that HTML and JSX are exactly the same.
//
// One key difference in JSX is that you can no longer use the word class to define HTML classes.
// This is because class is a reserved word in JavaScript. Instead, JSX uses className.
//
// In fact, the naming convention for all HTML attributes and event references in JSX become camelCase.
// For example, a click event in JSX is onClick, instead of onclick. Likewise, onchange becomes onChange.
// While this is a subtle difference, it is an important one to keep in mind moving forward.


// 🎯 Assignment
// Apply a class of myDiv to the div provided in the JSX code.


// ✅ SOLUTION
const JSX = (
  <div className='myDiv'>
    <h1>Add a class to this div</h1>
  </div>
);
