import React from 'react';
import LocationMap from './components/LocationMap.js';
import GetDirections from './components/GetDirections.js';
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
            <LocationMap />
          </div>
          <GetDirections />
        </div>
      </div>
    </ScrollElement>
  );
};

export default Location;
