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
    if (this.props.reviews.length <= 0) {
      return <div>Loading...</div>;
      return this.loadingScreen();
    } else {
      return this.renderList();
    }
  }
  loadingScreen() {
    const modalShowClass = this.props.showReviewModal === true ? '' : 'hidden';
    return (
      <div className="reviews">
        <div className={`modal ${modalShowClass}`}>
          <div className="modal-overlay" />
          <ReviewsNew close={this.props.toggleModal} />
        </div>
        <div className="buttons">
          <p
            className="leave_review btn"
            onClick={() => this.props.toggleModal()}
          >
            Leave Review
          </p>
        </div>
      </div>
    );
  }

  renderList() {
    const modalShowClass = this.props.showReviewModal === true ? '' : 'hidden';
    return (
      <div className="reviews">
        <div className={`modal ${modalShowClass}`}>
          <div className="modal-overlay" />
          <ReviewsNew close={this.props.toggleModal} />
        </div>
        <div className="buttons">
          <p
            className="leave_review btn"
            onClick={() => this.props.toggleModal()}
          >
            Leave Review
          </p>
          <Filter />
        </div>
        <ul className="reviews_list">
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
