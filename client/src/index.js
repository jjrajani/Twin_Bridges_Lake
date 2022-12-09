import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import './styles/main.css';
// import http from 'http';

import { App } from './components';
import reducers from './reducers';
import 'bootstrap3/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
// http.get('http://www.twinbridgeslake.fish');

// setInterval(function() {
  // http.get('http://www.twinbridgeslake.fish');
// }, 1780000);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
