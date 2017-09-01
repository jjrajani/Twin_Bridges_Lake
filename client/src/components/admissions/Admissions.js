import React from 'react';

const Admissions = () => {
  return (
    <div className="main-content admissions">
      <div className="content has_fixed_sub_header">
        <h3 className="fixed sub_header">Admissions</h3>
        <ul className="list">
          <ul className="sub_list">
            <li className="list_header">
              <h3>Entrance Fees</h3>
            </li>
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
          <ul className="sub_list">
            <li className="list_header">
              <h3>Rental Fees</h3>
            </li>
            <li className="list-item">
              <p>
                <span className="left">Rental Rod (unlimmited tackle)</span>
                <span className="right">$5</span>
              </p>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Admissions;
