import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

const ImageList = ({ fetchPics, pics, selectImage }) => {
  fetchPics();
  return (
    <ul className="image-list">
      {pics.map(p => {
        return (
          <li
            key={p}
            className="image-item"
            style={{ backgroundImage: `url(${p})` }}
            onClick={selectImage.bind(this, p)}
          />
        );
      })}
    </ul>
  );
};

function mapStateToProps({ pics }) {
  return { pics };
}

export default connect(mapStateToProps, {
  fetchPics: actions.picsActions.fetchPics,
  selectImage: actions.galleryActions.selectImage
})(ImageList);
