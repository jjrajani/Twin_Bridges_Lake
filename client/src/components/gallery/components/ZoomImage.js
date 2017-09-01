import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

const ZoomImage = ({ toggleModal, currentImage, showGalleryModal }) => {
  const showClass = showGalleryModal === true ? '' : 'hidden';
  return (
    <div className={`zoom_image ${showClass}`}>
      <div className="overlay" />
      <div className="modal_container">
        <p className="close" onClick={toggleModal}>
          <i className="fa fa-times" />
        </p>
        <div className="image">
          <img src={currentImage} alt="taken at twin bridges lake" />
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ showGalleryModal, gallery }) {
  return { showGalleryModal, currentImage: gallery.currentImage };
}

export default connect(mapStateToProps, {
  toggleModal: actions.galleryModalActions.toggleModal
})(ZoomImage);
