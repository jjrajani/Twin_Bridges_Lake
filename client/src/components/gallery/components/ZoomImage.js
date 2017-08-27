import React from 'react';
import { connect } from 'react-redux';

const ZoomImage = ({ close, image, showClass }) => {
  return (
    <div className={`zoom_image ${showClass}`}>
      <div className="overlay" />
      <p className="close" onClick={() => close()}>
        <i className="fa fa-times" />
      </p>
      <div className="image">
        <img src={image} />
      </div>
    </div>
  );
};

export default ZoomImage;
