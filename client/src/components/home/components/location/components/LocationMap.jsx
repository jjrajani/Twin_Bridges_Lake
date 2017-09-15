import React from 'react';
import { compose, withProps, withStateHandlers } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps';
import MapLabel from './MapLabel.js';

const LocationMap = compose(
  withStateHandlers(
    () => ({
      isOpen: false
    }),
    {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen
      })
    }
  ),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 34.001866, lng: -83.9684561 }}
  >
    <Marker
      position={{ lat: 34.001866, lng: -83.9684561 }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen &&
        <InfoWindow onCloseClick={props.onToggleOpen}>
          <MapLabel />
        </InfoWindow>}
    </Marker>
  </GoogleMap>
);

export default LocationMap;
