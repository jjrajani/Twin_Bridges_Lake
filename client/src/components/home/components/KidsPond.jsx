import React from 'react';
import Scroll from 'react-scroll';
const ScrollElement = Scroll.Element;
/*
  Scroll Element works in conjunction with Navigation HomeDropDown scroll settings
  see src/components/nav/components/HomeDropDown
*/
const KidsPond = () => {
  return (
    <ScrollElement name="kids_pond" id="kids_pond">
      <div className="row">
        <hr className="hr-extra-bottom-padding" />
        <div className="col-md-12">
          <h1>
            <i className="fa fa-child" />
            Kids Pond
          </h1>
          <p className="blurb_pad">
            We have a kids pond that is overstocked so the kids are guaranteed
            to catch.
          </p>
          <div className="col-md-12">
            <div className="kids_pond_image" />
          </div>
          <div className="col-md-6 col-md-offset-3 top_pad">
            <div className="alert alert-danger text-center">
              Kids Pond is Catch and Release Only
            </div>
          </div>
        </div>
      </div>
    </ScrollElement>
  );
};

export default KidsPond;
