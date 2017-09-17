import React from 'react';
import { compose, withStateHandlers } from 'recompose';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow
} from 'react-google-maps';
import MapLabel from './MapLabel.js';
/* Get window width to determine map zoom level */
const windowWidth = window.innerWidth;
const zoomLevel = windowWidth < 576 ? 13 : 14;

const LocationMap = compose(
    withStateHandlers(
        () => ({
            isOpen: false
        }),
        {
            toggleInfoWindow: ({ isOpen }) => () => ({
                isOpen: !isOpen
            })
        }
    ),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={zoomLevel}
        defaultCenter={{ lat: 34.004436, lng: -83.968197 }}
    >
        <Marker
            position={{ lat: 34.004436, lng: -83.968197 }}
            onClick={props.toggleInfoWindow}
        >
            {props.isOpen &&
                <InfoWindow onCloseClick={props.toggleInfoWindow}>
                    <MapLabel />
                </InfoWindow>}
        </Marker>
    </GoogleMap>
);

export default LocationMap;
