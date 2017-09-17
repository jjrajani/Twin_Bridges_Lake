import React from 'react';

const GalleryHeader = () =>
    <div className="col-xs-12">
        <h1>
            <i className="fa fa-camera-retro" />
            Gallery
        </h1>
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
