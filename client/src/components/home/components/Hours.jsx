import React from 'react';
import Scroll from 'react-scroll';
const ScrollElement = Scroll.Element;
/*
  Scroll Element works in conjunction with Navigation HomeDropDown scroll settings
  see src/components/nav
*/
const Hours = () =>
    <ScrollElement name="hours" id="hours">
        <div className="row">
            <hr className="hr-extra-bottom-padding" />
            <div className="col-md-12">
                <div className="header">
                    <i className="fa fa-clock-o" />
                    <h1>Hours of Operation</h1>
                </div>

                <p className="blurb_pad">Open 24/7</p>
                <p className="blurb_pad">
                    You read that right. Because the largest Catfish bite at
                    night, Twin Bridges Lake stays open all the time.
                </p>
            </div>
        </div>
    </ScrollElement>;

export default Hours;
