import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import './styles/main.css';

// import { App } from './components';
import { AppTwo } from './components_two';
import reducers from './reducers';
// import actions from './actions';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <AppTwo />
  </Provider>,
  document.getElementById('root')
);
