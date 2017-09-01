import React from 'react';

const InactiveStar = ({ rating, onMouseEnter, onMouseClick, onMouseLeave }) => {
  return (
    <i
      className="fa fa-star-o"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onMouseClick}
    />
  );
};

export default InactiveStar;
