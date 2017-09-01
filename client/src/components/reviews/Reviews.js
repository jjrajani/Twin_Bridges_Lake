import React from 'react';
import { connect } from 'react-redux';
import { ReviewsHeader, ReviewsList, Modal, ReviewsNew } from './components';
import * as actions from '../../actions';

const Reviews = ({ showReviewModal, toggleModal }) => {
  return (
    <div className={`main-content reviews`}>
      <Modal show={showReviewModal}>
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

function mapStateToProps({ showReviewModal }) {
  return { showReviewModal };
}

export default connect(mapStateToProps, {
  toggleModal: actions.reviewModalActions.toggleModal
})(Reviews);
