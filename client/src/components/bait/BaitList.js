import React from 'react';
import { LiveBait, Bait, FakeBait } from './components';

const BaitList = () => {
  return (
    <div>
      <h2>Bait</h2>
      <p>
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
