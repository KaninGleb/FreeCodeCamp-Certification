// ❓DESCRIPTION
// The ability to set default props is a useful feature in React.
// The way to override the default props is to explicitly set the prop values for a component.


// 🎯 Assignment
// The ShoppingCart component now renders a child component Items.
// This Items component has a default prop quantity set to the integer 0.
// Override the default prop by passing in a value of 10 for quantity.


// ✅ SOLUTION
import {Component} from "react";

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    { /* Change code below this line */ }
    return <Items quantity={ 10 }/>
    { /* Change code above this line */ }
  }
}