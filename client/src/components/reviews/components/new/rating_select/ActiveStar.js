import React from 'react';

const ActiveStar = ({ onMouseEnter, onMouseClick, onMouseLeave }) => {
  return (
    <i
      className="fa fa-star"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onMouseClick}
    />
  );
};

export default ActiveStar;
