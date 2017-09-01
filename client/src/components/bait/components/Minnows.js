import React from 'react';

const Minnows = () => {
  return (
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
  );
};

export default Minnows;
