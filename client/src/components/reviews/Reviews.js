import React from 'react';
import { connect } from 'react-redux';
import { ReviewsHeader, ReviewsList, ReviewsNew } from './components';
import { Modal } from '../';
import * as actions from '../../actions';

const Reviews = ({ showModal, toggleModal }) => {
  return (
    <div className={`main-content reviews`}>
      <Modal show={showModal} toggleModal={toggleModal}>
        <ReviewsNew />
      </Modal>
      <ReviewsHeader />
      <div className="content">
        <h3 className="sub_header">Reviews</h3>
        <ReviewsList />
      </div>
    </div>
  );
};

function mapStateToProps({ reviews }) {
  return { showModal: reviews.modal };
}

export default connect(mapStateToProps, {
  toggleModal: actions.reviewsActions.toggleModal
})(Reviews);
