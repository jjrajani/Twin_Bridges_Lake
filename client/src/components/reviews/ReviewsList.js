import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewsDetail from './ReviewsDetail';
import ReviewsNew from './ReviewsNew';
import { Filter } from './components';
import * as actions from '../../actions';

class ReviewsList extends Component {
  componentDidMount() {
    this.props.fetchReviews();
  }

  render() {
    const modalShowClass = this.props.showReviewModal === true ? '' : 'hidden';
    if (this.props.reviews.length <= 0) {
      return <div>Loading...</div>;
    }
    return (
      <div className="reviews_list">
        <div className={`modal ${modalShowClass}`}>
          <div className="modal-overlay" />
          <ReviewsNew close={this.props.toggleModal} />
        </div>
        <p className="new_review btn" onClick={() => this.props.toggleModal()}>
          Leave Review
        </p>
        <Filter />
        <ul>
          {this.props.reviews.map((r, i) => {
            return <ReviewsDetail key={i} review={r} />;
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ reviews, showReviewModal }) {
  return { reviews, showReviewModal };
}

export default connect(mapStateToProps, {
  fetchReviews: actions.reviewsActions.fetchReviews,
  toggleModal: actions.reviewModalActions.toggleModal
})(ReviewsList);