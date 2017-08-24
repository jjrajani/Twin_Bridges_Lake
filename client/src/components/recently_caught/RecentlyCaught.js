import React, { Component } from 'react';
import { connect } from 'react-redux';

class RecentlyCaught extends Component {
  render() {
    return <div>RecentlyCaught</div>;
  }
}

function mapStateToProps({ pics }) {
  return { pics };
}

export default connect(mapStateToProps)(RecentlyCaught);
