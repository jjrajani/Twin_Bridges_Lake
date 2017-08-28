import React, { Component } from 'react';
import axios from 'axios';
/*
https://github.com/tomchentw/react-google-maps
*/

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }
  render() {
    console.log(this.props);
    return (
      <div className="location_map">
        <Map
          google={this.props.google}
          initialCenter={{
            lat: 34.004325,
            lng: -83.9681861
          }}
          zoom={15}
          onClick={this.onMapClicked.bind(this)}
        >
          <Marker
            onClick={this.onMarkerClick.bind(this)}
            name={'Twin Bridges Lake'}
          />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>
                {this.state.selectedPlace.name}
              </h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCexFsxDoQltJZDyF__z2ayYEKteqw2bJY'
})(Location);
