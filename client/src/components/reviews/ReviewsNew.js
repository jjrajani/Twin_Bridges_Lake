import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { RatingSelect } from './components';

class ReviewsNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: {
        rating: 0,
        text: 'Leave your review...',
        username: 'guest'
      }
    };
  }
  selectRating(rating) {
    this.setState({
      review: {
        rating: rating,
        text: this.state.review.text,
        username: 'guest'
      }
    });
  }
  handleChange(e) {
    this.setState({
      review: {
        rating: this.state.review.rating,
        text: e.target.value,
        username: 'guest'
      }
    });
  }
  submitReview(e) {
    e.preventDefault();
    this.props.createReview(this.state.review);
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
            <RatingSelect selectRating={this.selectRating.bind(this)} />
          </div>
          <div className="input-row">
            <label>Review</label>
            <textarea
              onChange={this.handleChange.bind(this)}
              type="text"
              value={this.state.review.text}
            />
          </div>
          <button type="submit">Submit Review</button>
        </form>
      </div>
    );
  }
}

export default connect(null, {
  createReview: actions.reviewsActions.createReview
})(ReviewsNew);
