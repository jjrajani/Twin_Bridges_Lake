import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewsDetail from './ReviewsDetail';
import ReviewsNew from './ReviewsNew';
import * as actions from '../../actions';

class ReviewsList extends Component {
  componentDidMount() {
    this.props.fetchReviews();
  }

  render() {
    if (this.props.reviews.length <= 0) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <p className="new_review btn" onClick={() => this.props.toggleModal()}>
          Leave Your Review
        </p>
        <div
          className={`modal ${this.props.showReviewModal === true
            ? ''
            : 'hidden'}`}
        >
          <ReviewsNew close={this.props.toggleModal} />
        </div>
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
