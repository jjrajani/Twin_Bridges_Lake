import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { Modal } from '../../';

const GalleryModal = ({ showModal, currentImage, toggleModal }) => {
  return (
    <Modal show={showModal} toggleModal={toggleModal}>
      <div className="gallery_modal">
        <img src={currentImage} alt="taken at twin bridges lake" />
      </div>
    </Modal>
  );
};

function mapStateToProps({ gallery }) {
  return {
    showModal: gallery.modal,
    currentImage: gallery.currentImage
  };
}

export default connect(mapStateToProps, {
  toggleModal: actions.galleryActions.toggleModal
})(GalleryModal);
