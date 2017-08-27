import React from 'react';

const ZoomImage = ({ close, image, showClass }) => {
  return (
    <div className={`zoom_image ${showClass}`}>
      <div className="overlay" />
      <div className="modal_container">
        <p className="close" onClick={() => close()}>
          <i className="fa fa-times" />
        </p>
        <div className="image">
          <img src={image} alt="taken at twin bridges lake" />
        </div>
      </div>
    </div>
  );
};

export default ZoomImage;
