import React, { Component } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class Gallery extends Component {
  componentDidMount() {
    this.props.fetchPics();
  }
  render() {
    return (
      <div className="gallery">
        <ul className="image-list">
          {this.props.pics.map(p => {
            return (
              <li key={p} className="image-item">
                <img src={p} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ pics }) {
  return { pics };
}

export default connect(mapStateToProps, {
  fetchPics: actions.picsActions.fetchPics
})(Gallery);
