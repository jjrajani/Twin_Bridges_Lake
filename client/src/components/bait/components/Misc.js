import React from 'react';

const Misc = () => {
  return (
    <ul className="sub_list">
      <li className="list_header">
        <h3>Misc.</h3>
      </li>
      <li className="list-item">
        <p>
          <span className="left">Frozen Shrimp</span>
          <span className="right">$4</span>
        </p>
      </li>
      <li className="list-item">
        <p>
          <span className="left">Stink Bait</span>
          <span className="right">(for the catfish)</span>
        </p>
      </li>
      <li className="list-item">
        <p>
          <span className="left">Rubber Lures</span>
          <span className="right">(for the bass)</span>
        </p>
      </li>
      <li className="list-item">
        <p>
          <span className="left">Corn</span>
          <span className="right">(for the carp)</span>
        </p>
      </li>
    </ul>
  );
};

export default Misc;
