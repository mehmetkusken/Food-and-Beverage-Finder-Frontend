import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider }  from 'react-redux';
import { createStore, applyMiddleware, compose  } from 'redux';
import  reducer  from './redux/reducer'
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
  ));

ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
