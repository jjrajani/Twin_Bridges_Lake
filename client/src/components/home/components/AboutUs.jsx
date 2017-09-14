import React from 'react';
import Scroll from 'react-scroll';
const ScrollElement = Scroll.Element;
/*
  Scroll Element works in conjunction with Navigation HomeDropDown scroll settings
  see src/components/nav/components/HomeDropDown
*/
const AboutUs = () => {
  return (
    <ScrollElement name="about_us" id="about_us">
      <div className="row">
        <div className="col-md-12">
          <h1>
            <i className="fa fa-info-circle" />
            About Us
          </h1>
          <p className="blurb_pad">
            Twin Bridges Lake features a 15 acre lake stocked with Catfish. The
            fish in our lake range anywhere from 1/2 pound to over 70lbs! The
            lake also has a large native population of Bass, Bream, Carp, and
            Crappie. Our bait and tackle shop is stocked with rods, reels, bait
            and tackle. We make sure to carry everything you need to get
            fishing.
          </p>
          <div className="col-md-12">
            <div className="col-md-6">
              <div className="alert alert-success text-center">
                No Fishing License Required
              </div>
            </div>
            <div className="col-md-6">
              <div className="alert alert-danger text-center">
                Dogs Must Be On a Leash
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollElement>
  );
};

export default AboutUs;
