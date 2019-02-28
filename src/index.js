import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import todoReducer from './reducers/todoReducer'

import {createStore} from 'redux'
import {Provider} from 'react-redux' // wraps entire App in provider, allows props and store to be accessible throughout entire App


const store = createStore(todoReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));

