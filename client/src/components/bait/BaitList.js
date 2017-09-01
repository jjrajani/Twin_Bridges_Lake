import React from 'react';
import { Worms, Minnows, Crickets, Liver, Misc } from './components';

const BaitList = () => {
  return (
    <div className="main-content">
      <div className="bait content">
        <h3 className="sub_header">Bait</h3>
        <ul className="list">
          <Worms />
          <Minnows />
          <Crickets />
          <Liver />
          <Misc />
        </ul>
      </div>
    </div>
  );
};

export default BaitList;
