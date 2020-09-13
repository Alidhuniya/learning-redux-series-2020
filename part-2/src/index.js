import React from 'react';
import ReactDom from 'react-dom';
import App from "./App";
import { combineReducers, createStore } from 'redux';

// actions
export const todoTypes = {
    ADD_TO_DO: "ADD_TO_DO",
    COMPLETE_TO_DO: "COMPLETE_TO_DO",
    VISIBILITY_FILTER: "VISIBILITY_FILTER",
}
const addtodo = () => {
    return {
        type: todoTypes.ADD_TO_DO,
        
    }
}

const completetodo = () => {
    return {
        type: todoTypes.COMPLETE_TO_DO,
        
        
    }
}

const visible = () => {
    return {
        type: todoTypes.VISIBILITY_FILTER,
        filter: 'SHOW_COMPLETED',
    }
}


//reducers
 
const initState = {
    text: "add to do",
    complete: "completed",
}
function visibilityFilter(state = 'SHOW_ALL', action) {
    switch (action.type) {
      case todoTypes.VISIBILITY_FILTER:
        return action.filter
      default:
        return state
    }
  }
 
  function todos(state =initState, action) {
    switch (action.type) {
      case todoTypes.ADD_TO_DO:
        return state.text
      case todoTypes.COMPLETE_TO_DO:
        return null
      default:
        return state
    }
  }
  

  const reducer = combineReducers({ visibilityFilter, todos });

  //store
  const store = createStore(reducer);

  // subscribe
store.subscribe(() => console.log(store.getState()));

// dispatch the action
store.dispatch(addtodo());
store.dispatch(completetodo());
store.dispatch(visible());


 
ReactDom.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById("root"));

