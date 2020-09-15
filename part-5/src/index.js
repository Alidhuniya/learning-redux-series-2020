import React from 'react';
import ReactDom from 'react-dom';
import App from "./App";
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from './redux/reducers/index';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__()
 )

 
ReactDom.render(<React.StrictMode><Provider store = {store}><App /></Provider></React.StrictMode>, document.getElementById("root"));

