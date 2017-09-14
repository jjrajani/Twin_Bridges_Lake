import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import './styles/main.css';
import http from 'http';

import { App } from './components';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
http.get('http://www.twinbridgeslake.herokuapp.com');

setInterval(function() {
  http.get('http://twinbridgeslake.herokuapp.com');
}, 1780000);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
