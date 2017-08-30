import React from 'react';

const Bait = ({ styleClass, zIndex }) => {
  return (
    <div className={`sub_content ${styleClass}`}>
      <h3 className="sub_header" style={{ zIndex }}>
        Bait
      </h3>
      <ul className="list first">
        <li className="list-item">
          <p>
            <span className="left">Chicken Liver</span>
            <span className="right">$4.50</span>
          </p>
        </li>
        <li className="list-item">
          <p>
            <span className="left">Rooster Liver</span>
            <span className="right">$5.00</span>
          </p>
        </li>
        <li className="list-item">
          <p>
            <span className="left">Frozen Shrimp</span>
            <span className="right">$4.00</span>
          </p>
        </li>
      </ul>
    </div>
  );
};
export default Bait;
