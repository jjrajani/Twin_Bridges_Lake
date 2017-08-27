import React, { Component } from 'react';

export default class ScrollTo extends Component {
  componentDidUpdate() {
    window.scrollTo(0, this.props.y);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
