import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { RatingSelect } from './components';

class ReviewsNew extends Component {
  constructor(props) {
    super(props);
    this.state = { inValid: false };
  }
  componentDidUpdate() {
    if (this.props.review.rating > 0 && this.state.inValid === true) {
      this.setState({ inValid: false });
    }
  }
  submitReview(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.props.createReview(this.props.review, this.props.auth);
      this.props.resetReview();
      this.props.resetStars();
    } else {
      this.setState({ inValid: true });
    }
  }

  isValid() {
    return this.props.review.rating > 0;
  }

  render() {
    const inValidClass = this.state.inValid ? 'invalid' : '';
    return (
      <div className={`reviews_new ${inValidClass}`}>
        <p className="close_btn" onClick={() => this.props.close()}>
          <i className="fa fa-times" />
        </p>
        <form onSubmit={this.submitReview.bind(this)}>
          <div className={`input-row rating`}>
            <label>Rating</label>
            <RatingSelect selectRating={this.props.selectRating.bind(this)} />
          </div>
          {this.renderNameOfReviewer()}
          <div className="input-row">
            <label htmlFor="text" className="textarea">
              Review
            </label>
            <textarea
              onChange={this.props.updateReview.bind(this)}
              type="text"
              name="text"
              id="text"
              required
              value={this.props.review.text}
            />
          </div>
          <div className="input-row">
            <button type="submit">Submit Review</button>
          </div>
        </form>
      </div>
    );
  }
  renderNameOfReviewer() {
    const value =
      this.props.review.username === 'guest' ? '' : this.props.review.username;
    if (!this.props.auth) {
      return (
        <div className="input-row">
          <label htmlFor="username">Name</label>
          <input
            onChange={this.props.updateReview.bind(this)}
            type="text"
            name="username"
            id="username"
            required
            placeholder="guest"
            value={value}
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
