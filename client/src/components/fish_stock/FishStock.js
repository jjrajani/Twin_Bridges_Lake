import React from 'react';

const FishStock = () => {
  return (
    <div className="main-content fish_stock">
      <div className="content has_fixed_sub_header">
        <h3 className="fixed sub_header">Fish in the Lake</h3>
        <ul className="list">
          <ul className="sub_list centered">
            <li className="list_header">
              <h3>Stocked</h3>
            </li>
            <li className="list-item">
              <p>
                <span className="small">Bluehead Catfish</span>
              </p>
            </li>
            <li className="list-item">
              <p>
                <span className="small">Channel Catfish</span>
              </p>
            </li>
          </ul>
          <ul className="sub_list centered">
            <li className="list_header">
              <h3>Native</h3>
            </li>
            <li className="list-item">
              <p>
                <span className="left">Large Mouth Bass</span>
              </p>
            </li>
            <li className="list-item">
              <p>
                <span className="left">Bream</span>
              </p>
            </li>
            <li className="list-item">
              <p>
                <span className="left">Crappie</span>
              </p>
            </li>
            <li className="list-item">
              <p>
                <span className="left">Carp</span>
              </p>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default FishStock;
