import React from 'react';

const InactiveStar = ({ rating, onMouseEnter, onMouseClick }) => {
  return (
    <i
      className="fa fa-star-o"
      onMouseEnter={() => onMouseEnter()}
      onClick={() => onMouseClick()}
    />
  );
};

export default InactiveStar;
