import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

class ImageList extends Component {
  componentDidMount() {
    this.props.fetchPics();
  }
  selectImage(url) {
    this.props.selectImage(url);
    this.props.toggleModal();
  }
  render() {
    return (
      <ul className="image-list">
        {this.props.pics.map(p => {
          return (
            <li
              key={p}
              className="image-item"
              style={{ backgroundImage: `url(${p})` }}
              onClick={this.selectImage.bind(this, p)}
            />
          );
        })}
      </ul>
    );
  }
}

function mapStateToProps({ pics }) {
  return { pics };
}

export default connect(mapStateToProps, {
  fetchPics: actions.picsActions.fetchPics,
  toggleModal: actions.galleryModalActions.toggleModal,
  selectImage: actions.galleryActions.selectImage
})(ImageList);
