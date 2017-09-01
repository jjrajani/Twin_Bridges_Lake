import React, { Component } from 'react';
import LocationMap from './components/LocationMap.js';
import GetDirections from './components/GetDirections.js';

export class Location extends Component {
  render() {
    return (
      <div className="main-content">
        <div className="content location">
          <h3 className="sub_header">Location</h3>
          <div className="location_map">
            <LocationMap />
          </div>
          <GetDirections />
        </div>
      </div>
    );
  }
}

export default Location;
