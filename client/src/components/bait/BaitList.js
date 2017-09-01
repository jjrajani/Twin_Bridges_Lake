import React from 'react';

const BaitList = () => {
  return (
    <div className="main-content">
      <div className="bait content has_fixed_sub_header">
        <h3 className="fixed sub_header">Bait</h3>
        <ul className="list">
          <ul className="sub_list">
            <li className="list_header">
              <h3>Worms</h3>
            </li>
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
          <ul className="sub_list">
            <li className="list_header">
              <h3>Minnows</h3>
            </li>
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
          <ul className="sub_list">
            <li className="list_header">
              <h3>Crickets</h3>
            </li>
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
          <ul className="sub_list">
            <li className="list_header">
              <h3>Liver</h3>
            </li>
            <li className="list-item">
              <p>
                <span className="left">Chicken</span>
                <span className="right">$4.5</span>
              </p>
            </li>
            <li className="list-item">
              <p>
                <span className="left">Rooster</span>
                <span className="right">$5</span>
              </p>
            </li>
          </ul>
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
        </ul>
      </div>
    </div>
  );
};

export default BaitList;
