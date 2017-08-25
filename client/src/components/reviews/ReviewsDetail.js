import React from 'react';
import { ReviewsDelete, ReviewsStars } from './components';

const ReviewsDetail = ({ review }) => {
  return (
    <div key={review.id} className="reviews_detail">
      <ReviewsDelete review={review} />
      <div className="top">
        <p>
          {review.user}
        </p>
        <ReviewsStars stars={review.rating} />
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
