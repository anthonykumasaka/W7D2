import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'; 
import { allTodos } from './reducers/selectors';

import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore(); 
  window.store = store; 
  ReactDOM.render((
    <Root store={store} /> 
  ), document.getElementById('main')); 
}); 

window.allTodos = allTodos; 