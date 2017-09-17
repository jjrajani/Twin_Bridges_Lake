import React from 'react';

const GalleryHeader = () =>
    <div className="col-xs-12">
        <div className="header">
            <i className="fa fa-camera-retro" />
            <h1>Gallery</h1>
        </div>

        <p>Checkout some of the fish that were caught at Twin Bridges Lake.</p>
        <p>
            Email pictures of your catches to{' '}
            <a href="mailto:twin.bridges.lake.fishing@gmail.com">
                twin.bridges.lake.fishing@gmail.com
            </a>{' '}
            and we will add them to the gallery!
        </p>
    </div>;

export default GalleryHeader;
