// ❓DESCRIPTION
// The mapDispatchToProps() function is used to provide specific action creators to your React components so
// they can dispatch actions against the Redux store. It's similar in structure to the mapStateToProps() function
// you wrote in the last challenge.
// It returns an object that maps dispatch actions to property names, which become component props.
// However, instead of returning a piece of state, each property returns
// a function that calls dispatch with an action creator and any relevant action data.
// You have access to this dispatch because it's passed in to mapDispatchToProps() as
// a parameter when you define the function, just like you passed state to mapStateToProps().
// Behind the scenes, React Redux is using Redux's store.dispatch() to conduct these dispatches with mapDispatchToProps().
// This is similar to how it uses store.subscribe() for components that are mapped to state.
//
// For example, you have a loginUser() action creator that takes a username as an action payload.
// The object returned from mapDispatchToProps() for this action creator would look something like:
//
// {
//   submitLoginUser: function(username) {
//     dispatch(loginUser(username));
//   }
// }


// 🎯 Assignment
// The code editor provides an action creator called addMessage().
// Write the function mapDispatchToProps() that takes dispatch as an argument, then returns an object.
// The object should have a property submitNewMessage set to the dispatch function,
// which takes a parameter for the new message to add when it dispatches addMessage().


// ✅ SOLUTION
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
}

// Change code below this line
const mapDispatchToProps = (dispatch) => ({
  submitNewMessage: message => dispatch(addMessage(message)),
})
