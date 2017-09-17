import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { GalleryHeader, ImageList } from './components';

const Gallery = () =>
    <div className="gallery">
        <div className="row">
            <GalleryHeader />
            <ImageList />
        </div>
    </div>;

export default Gallery;
