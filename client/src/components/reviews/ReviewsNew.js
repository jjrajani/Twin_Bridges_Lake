import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { RatingSelect } from './components';

class ReviewsNew extends Component {
  submitReview(e) {
    e.preventDefault();
    this.props.createReview(this.props.review, this.props.auth);
    this.props.resetReview();
    this.props.resetStars();
  }

  render() {
    return (
      <div className="reviews_new">
        <p onClick={() => this.props.close()}>
          <i className="fa fa-times" />
        </p>
        <form onSubmit={this.submitReview.bind(this)}>
          <div className="input-row">
            <label>Rating</label>
            <RatingSelect selectRating={this.props.selectRating.bind(this)} />
          </div>
          {this.renderNameOfReviewer()}
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
  renderNameOfReviewer() {
    if (!this.props.auth) {
      return (
        <div className="input-row">
          <label>Name</label>
          <input
            onChange={this.props.updateReview.bind(this)}
            type="text"
            name="username"
            value={this.props.review.username}
          />
        </div>
      );
    } else {
      return (
        <div className="input-row">
          <label>
            {this.props.auth.username}
          </label>
        </div>
      );
    }
  }
}

function mapStateToProps({ currentReview, auth }) {
  return {
    review: currentReview,
    auth
  };
}

export default connect(mapStateToProps, {
  ...actions.reviewActions,
  resetStars: actions.selectStarsActions.resetStars,
  selectRating: actions.selectStarsActions.selectRating
})(ReviewsNew);
