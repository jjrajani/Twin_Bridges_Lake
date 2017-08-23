import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import { Header, Landing, RecentlyCaught } from './';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/recently_caught" component={RecentlyCaught} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions.authActions)(App);
