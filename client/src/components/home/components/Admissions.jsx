import React from 'react';
import Scroll from 'react-scroll';
const ScrollElement = Scroll.Element;
/*
  Scroll Element works in conjunction with Navigation HomeDropDown scroll settings
  see src/components/nav
*/
const Admissions = () =>
    <ScrollElement name="admissions" id="admissions">
        <div className="row">
            <hr className="hr-extra-bottom-padding" />
            <div className="col-md-12">
                <div className="header">
                    <i className="fa fa-ticket" />
                    <h1>Admissions</h1>
                </div>

                <ul className="admissions_list blurb_pad">
                    <li className="admissions_list_item">
                        <p>Adults</p>
                        <p>$12</p>
                    </li>
                    <li className="admissions_list_item">
                        <p>Kids (under 12)</p>
                        <p>$5</p>
                    </li>
                    <li className="admissions_list_item">
                        <p>Kids (under 5)</p>
                        <p>Free</p>
                    </li>
                    <li className="admissions_list_item">
                        <p>Rental Rods</p>
                        <p>$5</p>
                    </li>
                </ul>
                <p className="blurb_pad small_text">
                    Prices are per shift. We have a day shift and a night shift.
                </p>
            </div>
        </div>
    </ScrollElement>;

export default Admissions;
