import React from 'react';

const LiveBait = () => {
  return (
    <div className="sub_content">
      <h3 className="sub_header">Live Bait</h3>
      <ul className="list">
        <label>Worms</label>
        <li className="list-item">
          <p>
            <span className="left">Night Crawlers</span>
            <span className="right">$4.5</span>
          </p>
        </li>
        <li className="list-item">
          <p>
            <span className="left">Red Wigglers</span>
            <span className="right">$4.5</span>
          </p>
        </li>
      </ul>
      <ul className="list">
        <label>Minnows</label>
        <li className="list-item">
          <p>
            <span className="left">Half Dozen</span>
            <span className="right">$3</span>
          </p>
        </li>
        <li className="list-item">
          <p>
            <span className="left">Dozen</span>
            <span className="right">$6</span>
          </p>
        </li>
      </ul>
      <ul className="list">
        <label>Crickets</label>
        <li className="list-item">
          <p>
            <span className="left">Half Tube</span>
            <span className="right">$3</span>
          </p>
        </li>
        <li className="list-item">
          <p>
            <span className="left">Full Tube</span>
            <span className="right">$5</span>
          </p>
        </li>
      </ul>
    </div>
  );
};
export default LiveBait;
