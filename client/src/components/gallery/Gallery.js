import React from 'react';
import { ImageList, GalleryModal } from './components';

const Gallery = () => {
  return (
    <div className="main-content our_story">
      <div className="content">
        <h3 className="sub_header">Gallery</h3>
        <div className="gallery">
          <GalleryModal />
          <ImageList />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
