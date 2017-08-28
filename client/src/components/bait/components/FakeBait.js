import React from 'react';

const FakeBait = () => {
  return (
    <div className="sub_content">
      <h3 className="sub_header">Fake Bait</h3>
      <ul className="list">
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
    </div>
  );
};

export default FakeBait;