import React from 'react';
import { Stocked, Native } from './components';

const FishStock = () => {
  return (
    <div className="main-content fish_stock">
      <div className="content">
        <h3 className="sub_header">Fish in the Lake</h3>
        <ul className="list">
          <Stocked />
          <Native />
        </ul>
      </div>
    </div>
  );
};

export default FishStock;
