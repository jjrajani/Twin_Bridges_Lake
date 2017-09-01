import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import MapLabel from './MapLabel.js';
/*
https://github.com/tomchentw/react-google-maps
*/
const LocationMap = ({
  google,
  onMapClicked,
  onMarkerClick,
  activeMarker,
  showingInfoWindow
}) => {
  return (
    <Map
      google={google}
      initialCenter={{
        lat: 34.006866,
        lng: -83.9684561
      }}
      zoom={15}
      onClick={onMapClicked}
    >
      <Marker
        onClick={onMarkerClick}
        name={'Twin Bridges Lake'}
        position={{
          lat: 34.004325,
          lng: -83.9681861
        }}
      />

      <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
        <MapLabel />
      </InfoWindow>
    </Map>
  );
};

function mapStateToProps({ location }) {
  return {
    showingInfoWindow: location.showingInfoWindow,
    activeMarker: location.activeMarker
  };
}
export default connect(mapStateToProps, {
  onMapClicked: actions.locationActions.mapClicked,
  onMarkerClick: actions.locationActions.markerClick
})(
  GoogleApiWrapper({
    apiKey: 'AIzaSyCexFsxDoQltJZDyF__z2ayYEKteqw2bJY'
  })(LocationMap)
);
