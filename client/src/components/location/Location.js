import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
/*
https://github.com/tomchentw/react-google-maps
*/

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class Location extends Component {
  render() {
    return (
      <div className="main-content">
        <div className="content location">
          <h3 className="sub_header">Location</h3>
          <div className="location_map">
            <Map
              google={this.props.google}
              initialCenter={{
                lat: 34.006866,
                lng: -83.9684561
              }}
              zoom={15}
              onClick={this.props.onMapClicked.bind(this)}
            >
              <Marker
                onClick={this.props.onMarkerClick.bind(this)}
                name={'Twin Bridges Lake'}
                position={{
                  lat: 34.004325,
                  lng: -83.9681861
                }}
              />

              <InfoWindow
                marker={this.props.activeMarker}
                visible={this.props.showingInfoWindow}
              >
                <div>
                  <h1>
                    {this.props.selectedPlace.name}
                  </h1>
                  <div>
                    <p>Open 24/7</p>
                    <p>
                      1119 Braselton Hwy<br />Lawrenceville Ga, 30043
                    </p>
                  </div>
                </div>
              </InfoWindow>
            </Map>
          </div>
          <div className="get_directions">
            <a
              className="button"
              href="https://www.google.com/maps/dir//1119+Braselton+Hwy,+Lawrenceville,+GA+30043/@34.004325,-83.9681861,17z/data=!4m16!1m7!3m6!1s0x88f5bfd6137099db:0x545ba3641367130d!2s1119+Braselton+Hwy,+Lawrenceville,+GA+30043!3b1!8m2!3d34.004325!4d-83.9681861!4m7!1m0!1m5!1m1!1s0x88f5bfd6137099db:0x545ba3641367130d!2m2!1d-83.9681861!2d34.004325"
              target="blank"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ location }) {
  return {
    showingInfoWindow: location.showingInfoWindow,
    activeMarker: location.activeMarker,
    selectedPlace: location.selectedPlace
  };
}
export default connect(mapStateToProps, {
  onMarkerClick: actions.locationActions.markerClick,
  onMapClicked: actions.locationActions.mapClicked
})(
  GoogleApiWrapper({
    apiKey: 'AIzaSyCexFsxDoQltJZDyF__z2ayYEKteqw2bJY'
  })(Location)
);
