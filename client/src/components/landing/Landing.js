import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoggedInLanding, LoggedOutLanding } from './components';

class Landing extends Component {
  render() {
    return this.props.auth ? <LoggedInLanding /> : <LoggedOutLanding />;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Landing);
