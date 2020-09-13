import React from 'react';
import ReactDom from 'react-dom';
import App from "./App";
import { createStore } from 'redux';

// reducer
const initState = 0;
function counter(state = initState, action) {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
        case 'INCREMENTBYN':
            return state + action.payload
      case 'DECREMENT':
        return state - 1
      default:
        return state
    }
  }

  
//   action

const increment = () => {
    return {
        type: "INCREMENT",
    }
}

const incrementByn = (paylolad) => {
    return {
        type: "INCREMENTBYN",
        payload: paylolad,
    }
}

const decrement = () => {
    return {
        type: "DECREMENT",
    }
}

// store
const store = createStore(counter);

// subscribe
store.subscribe(() => console.log(store.getState()));

// dispatch the action
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(incrementByn(5)); //increment by 5 gives 7
store.dispatch(decrement());
 
ReactDom.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById("root"));

