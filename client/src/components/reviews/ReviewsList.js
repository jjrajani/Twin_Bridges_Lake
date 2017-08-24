import React, { Component } from 'react';
import REVIEWS from './reviews';
import ReviewsDetail from './ReviewsDetail';

class ReviewsList extends Component {
  constructor(props) {
    super(props);
    this.state = { reviews: [] };
  }
  componentDidMount() {
    this.setState({ reviews: REVIEWS });
  }

  render() {
    if (!this.state.reviews) {
      return <div>Loading...</div>;
    }
    return (
      <ul>
        {this.state.reviews.map(r => {
          return <ReviewsDetail key={r.id} review={r} />;
        })}
      </ul>
    );
  }
}

export default ReviewsList;
