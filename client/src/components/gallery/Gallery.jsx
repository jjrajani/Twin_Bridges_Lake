import React, { Component } from 'react';
import { GalleryHeader, ImageList } from './components';
import { setAndSendPageview } from '../../googleAnalytics';

class Gallery extends Component {
    componentDidMount() {
        setAndSendPageview(window, '/gallery');
    }
    render() {
        return (
            <div className="gallery main_content">
                <div className="row">
                    <GalleryHeader />
                    <ImageList />
                </div>
            </div>
        );
    }
}

export default Gallery;
