import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewsDetail from './ReviewsDetail';
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
      <ul>
        {this.props.reviews.map((r, i) => {
          return <ReviewsDetail key={i} review={r} />;
        })}
      </ul>
    );
  }
}

function mapStateToProps({ reviews }) {
  return { reviews };
}

export default connect(mapStateToProps, actions.reviewsActions)(ReviewsList);
