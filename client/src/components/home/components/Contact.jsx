import React from 'react';
import Scroll from 'react-scroll';
const ScrollElement = Scroll.Element;
/*
  Scroll Element works in conjunction with Navigation HomeDropDown scroll settings
  see src/components/nav/components/HomeDropDown
*/
const Contact = () => {
  return (
    <ScrollElement name="contact" id="contact">
      <div className="row">
        <hr className="hr-extra-bottom-padding" />
        <div className="col-md-12">
          <h1>
            <i className="fa fa-mobile" />
            Contact
          </h1>
          <p className="blurb_pad">
            Please feel free to contact us if you have any questions, comments,
            or concerns.
          </p>
          <div className="contact_info">
            <div className="sub_info">
              <i className="small_fa fa fa-phone" />
              <p>(770) 963-6739</p>
            </div>
            <div className="sub_info">
              <i className="small_fa fa fa-globe" />
              <p>
                <span>
                  1119 Braselton Hwy <br /> Lawrenceville, Ga 30043
                </span>
              </p>
            </div>
            <div className="sub_info">
              <i className="small_fa fa fa-envelope" />
              <p>twin.bridges.lake.fishing@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollElement>
  );
};

export default Contact;