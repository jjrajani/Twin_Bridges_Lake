import React from 'react';
import LocationMap from './components/LocationMap';
import GetDirections from './components/GetDirections';
import Scroll from 'react-scroll';
const ScrollElement = Scroll.Element;
/*
  Scroll Element works in conjunction with Navigation HomeDropDown scroll settings
  see src/components/nav/components/HomeDropDown
*/
const Location = () => {
  return (
    <ScrollElement name="location" id="location">
      <div className="row">
        <hr className="hr-extra-bottom-padding" />
        <div className="col-md-12">
          <h1>
            <i className="fa fa-map-marker blurb_icon_pad" />Our Location
          </h1>
          <p className="blurb_pad">
            We are located 1 mile down Hwy 124 from Hwy 20 (Buford Dr) in
            Lawrenceville.
          </p>
          <div className="location_map">
            <LocationMap
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `300px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
          <GetDirections />
        </div>
      </div>
    </ScrollElement>
  );
};

export default Location;
