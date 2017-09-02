import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { Filter } from './';

const ReviewsHeader = ({ toggleModal }) => {
  return (
    <div className="buttons_wrapper">
      <div className="buttons">
        <p className="leave_review btn" onClick={toggleModal}>
          Leave Review
        </p>
        <Filter />
      </div>
    </div>
  );
};

export default connect(null, {
  toggleModal: actions.reviewsActions.toggleModal
})(ReviewsHeader);
