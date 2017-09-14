import React from 'react';
import Scroll from 'react-scroll';
const ScrollElement = Scroll.Element;
/*
  Scroll Element works in conjunction with Navigation HomeDropDown scroll settings
  see src/components/nav/components/HomeDropDown
*/
const Admissions = () => {
  return (
    <ScrollElement name="admissions" id="admissions">
      <div className="row">
        <hr className="hr-extra-bottom-padding" />
        <div className="col-md-12">
          <h1>
            <i className="fa fa-ticket" />
            Admissions
          </h1>
          <ul className="admissions_list blurb_pad">
            <li className="admissions_list_item">
              <p className="item">Adults</p>
              <p className="price">$12</p>
            </li>
            <li className="admissions_list_item">
              <p className="item">Kids (under 12)</p>
              <p className="price">$5</p>
            </li>
            <li className="admissions_list_item">
              <p className="item">Kids (under 5)</p>
              <p className="price">Free</p>
            </li>
            <li className="admissions_list_item">
              <p className="item">Rental Rods</p>
              <p className="price">$5</p>
            </li>
          </ul>
          <p className="blurb_pad small_text">
            Prices are per shift. We have a day shift and a night shift.
          </p>
        </div>
      </div>
    </ScrollElement>
  );
};

export default Admissions;
