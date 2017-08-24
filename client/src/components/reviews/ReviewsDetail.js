import React from 'react';

const ReviewsDetail = ({ review }) => {
  return (
    <div key={review.id}>
      <p>
        {review.user}
      </p>
      <p>
        {review.review}
      </p>
      <p>
        {review.rating}
      </p>
    </div>
  );
};

export default ReviewsDetail;
