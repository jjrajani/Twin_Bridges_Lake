import React from 'react';

const ActiveStar = ({ rating, onMouseEnter, onMouseClick }) => {
  return (
    <i
      className="fa fa-star"
      onMouseEnter={() => onMouseEnter()}
      onClick={() => onMouseClick()}
    />
  );
};

export default ActiveStar;
