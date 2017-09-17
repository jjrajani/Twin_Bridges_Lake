import React from 'react';
import { GalleryHeader, ImageList } from './components';

const Gallery = () =>
    <div className="gallery main_content">
        <div className="row">
            <GalleryHeader />
            <ImageList />
        </div>
    </div>;

export default Gallery;
