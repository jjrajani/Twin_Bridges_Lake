import React from 'react';

const Admissions = () => {
  return (
    <div className="content">
      <h3 className="sub_header">Admissions</h3>
      <p className="text">
        Twin Bridges Family Fishing and Monster Catfish promises to be a good
        time. lorem ipsum anad lal the toher things when you think of something
        good worthh saying then perhaps the admissions page is coming together.
      </p>
      <h3 className="sub_header">Entrance Fees</h3>
      <ul className="list">
        <li className="list-item">
          <p>
            <span className="left">Adult</span>
            <span className="right">$12</span>
          </p>
        </li>
        <li className="list-item">
          <p>
            <span className="left">Child (under 12)</span>
            <span className="right">$5</span>
          </p>
        </li>
        <li className="list-item">
          <p>
            <span className="left">Senior</span>
            <span className="right">$8</span>
          </p>
        </li>
      </ul>
      <h3 className="sub_header">Rental Fees</h3>
      <ul className="list">
        <li className="list-item">
          <p>
            <span className="left">Rental Rod (unlimmited tackle)</span>
            <span className="right">$5</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Admissions;
