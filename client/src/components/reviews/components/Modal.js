import React from 'react';
import * as actions from '../../../actions';
import { connect } from 'react-redux';

const Modal = ({ show, children }) => {
  const modalShowClass = show === true ? '' : 'hidden';
  return (
    <div className={`modal ${modalShowClass}`}>
      <div className="modal-overlay" />
      <div className="modal_content_wrapper">
        <div className="modal_content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
