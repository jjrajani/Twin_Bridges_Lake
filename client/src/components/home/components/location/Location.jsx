import React from 'react';
import LocationMap from './components/LocationMap';
import GetDirections from './components/GetDirections';
import Scroll from 'react-scroll';
const ScrollElement = Scroll.Element;
/*
  Scroll Element works in conjunction with Navigation HomeDropDown scroll settings
  see src/components/nav/components/HomeDropDown
*/

const Location = () =>
    <ScrollElement name="location" id="location">
        <div className="row">
            <hr className="hr-extra-bottom-padding" />
            <div className="col-md-12">
                <div className="header">
                    <i className="fa fa-map-marker" />
                    <h1>Our Location</h1>
                </div>
                <p className="blurb_pad">
                    We are located 1 mile down Hwy 124 from Hwy 20 (Buford Dr)
                    in Lawrenceville.
                </p>
                <div className="location_map">
                    <LocationMap
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBdV3zDcGG6qy5hB_JL42TvRVIypqbUnd0&libraries=geometry,drawing,places`}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `450px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
                <GetDirections />
            </div>
        </div>
    </ScrollElement>;

export default Location;
