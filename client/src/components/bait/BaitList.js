import React from 'react';
import { LiveBait, Bait, FakeBait } from './components';

const BaitList = () => {
  return (
    <div className="content">
      <h2 className="sub_header">Bait</h2>
      <p className="text">
        We have all the bait in the world everything is here no matter what you
        need we have it long time
      </p>
      <LiveBait />
      <Bait />
      <FakeBait />
    </div>
  );
};

export default BaitList;
