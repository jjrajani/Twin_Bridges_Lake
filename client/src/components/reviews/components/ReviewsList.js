import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import ReviewsDetail from './detail/ReviewsDetail';

class ReviewsList extends Component {
  componentDidMount() {
    this.props.fetchReviews();
  }
  render() {
    return (
      <ul className="reviews_list">
        {this.props.reviews.map((r, i) => {
          return <ReviewsDetail key={i} review={r} />;
        })}
      </ul>
    );
  }
}

function mapStateToProps({ reviews }) {
  return { reviews: reviews.list };
}

export default connect(mapStateToProps, {
  fetchReviews: actions.reviewsActions.fetchReviews
})(ReviewsList);
