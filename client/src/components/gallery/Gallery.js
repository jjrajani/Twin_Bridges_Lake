import React, { Component } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import ZoomImage from './components/ZoomImage';

class Gallery extends Component {
  componentDidMount() {
    this.props.fetchPics();
  }
  closeModal() {
    this.props.toggleModal();
  }
  selectImage(url) {
    this.props.selectImage(url);
    this.props.toggleModal();
  }
  render() {
    return (
      <div className="main-content our_story">
        <div className="content">
          <h3 className="sub_header">Gallery</h3>
          <div className="gallery">
            <ZoomImage
              close={this.closeModal.bind(this)}
              showClass={this.props.showGalleryModal === true ? '' : 'hidden'}
              image={this.props.gallery.currentImage}
            />
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
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ pics, showGalleryModal, gallery }) {
  return { pics, showGalleryModal, gallery };
}

export default connect(mapStateToProps, {
  fetchPics: actions.picsActions.fetchPics,
  toggleModal: actions.galleryModalActions.toggleModal,
  selectImage: actions.galleryActions.selectImage
})(Gallery);
