import React, { Component } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class RecentlyCaught extends Component {
  componentDidMount() {
    this.props.fetchPics();
  }
  render() {
    console.log(this.props);
    return <div>RecentlyCaught</div>;
  }
}

function mapStateToProps({ pics }) {
  return { pics };
}

export default connect(mapStateToProps, {
  fetchPics: actions.picsActions.fetchPics
})(RecentlyCaught);
