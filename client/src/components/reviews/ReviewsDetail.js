import React from 'react';
import { ReviewsDelete, ReviewsRating } from './components';

const ReviewsDetail = ({ review }) => {
  return (
    <div key={review.id} className="reviews_detail">
      <ReviewsDelete review={review} />
      <div className="top">
        <p>
          {review.user}
        </p>
        <ReviewsRating stars={review.rating} />
      </div>
      <div className="btm">
        <p>
          {review.review}
        </p>
      </div>
    </div>
  );
};

export default ReviewsDetail;
