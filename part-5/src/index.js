import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import reducer from './reducer/index';
import  ReactDom  from 'react-dom';


const store = createStore(
   reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && 
   window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDom.render(<React.StrictMode><Provider store = {store}><App /></Provider></React.StrictMode>, document.getElementById("root"))