import React from 'react';

const ReviewsStars = ({ stars }) => {
  let starsHTML = [];
  for (let i = 1; i <= 5; i++) {
    starsHTML.push(<Star active={i <= stars ? true : false} key={i} />);
  }
  return (
    <div className="review_stars">
      {starsHTML}
    </div>
  );
};

const Star = ({ active }) => {
  return (
    <div className="star">
      {active
        ? <i className={'fa fa-star'} />
        : <i className={'fa fa-star-o'} />}
    </div>
  );
};

export default ReviewsStars;
