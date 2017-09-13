import React from 'react';
import Scroll from 'react-scroll';
const ScrollElement = Scroll.Element;
/*
  Scroll Element works in conjunction with Navigation HomeDropDown scroll settings
  see src/components/nav/components/HomeDropDown
*/
const Hours = () => {
  return (
    <ScrollElement name="hours" id="hours">
      <div className="row">
        <hr className="hr-extra-bottom-padding" />
        <div className="col-md-12">
          <h1>
            <i className="fa fa-clock-o" />
            Hours of Operation
          </h1>
          <p className="blurb_pad">Open 24/7</p>
          <p className="blurb_pad">
            You read that right. Becaue the largest Catfish bite at night, Twin
            Bridges Lake stays open all the time.
          </p>
        </div>
      </div>
    </ScrollElement>
  );
};

export default Hours;
