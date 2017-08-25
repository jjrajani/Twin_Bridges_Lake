import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { RatingSelect } from './components';

class ReviewsNew extends Component {
  submitReview(e) {
    e.preventDefault();
    this.props.createReview(this.props.review, this.props.auth);
  }

  render() {
    console.log('reviews new', this.props);
    return (
      <div>
        <p onClick={() => this.props.close()}>
          <i className="fa fa-times" />
        </p>
        <form onSubmit={this.submitReview.bind(this)}>
          <div className="input-row">
            <label>Rating</label>
            <RatingSelect selectRating={this.props.selectRating.bind(this)} />
          </div>
          <div className="input-row">
            <label>Review</label>
            <textarea
              onChange={this.props.updateReview.bind(this)}
              type="text"
              name="text"
              value={this.props.review.text}
            />
          </div>
          <button type="submit">Submit Review</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ currentReview, auth }) {
  return {
    review: currentReview,
    auth
  };
}

export default connect(mapStateToProps, {
  createReview: actions.reviewsActions.createReview,
  updateReview: actions.reviewActions.updateReview,
  selectRating: actions.reviewActions.selectRating
})(ReviewsNew);
