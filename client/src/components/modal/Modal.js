import React from 'react';

const Modal = ({ show, children, toggleModal }) => {
  const modalShowClass = show === true ? '' : 'hidden';
  return (
    <div className={`modal ${modalShowClass}`}>
      <div className="modal-overlay" />
      <div className="modal_content_wrapper">
        <p className="close" onClick={toggleModal}>
          <i className="fa fa-times" />
        </p>
        <div className="modal_content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
