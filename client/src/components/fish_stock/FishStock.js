import React from 'react';

const FishStock = () => {
  return (
    <div className="content">
      <h3 className="sub_header">Fish in the Lake</h3>
      <ul className="list">
        <li className="list-item">Bluehead Catfish</li>
        <li className="list-item">Channel Catfish</li>
        <li className="list-item">Large Mouth Bass</li>
        <li className="list-item">Bream</li>
        <li className="list-item">Crappie</li>
        <li className="list-item">Carp</li>
      </ul>

      <div className="sub_content">
        <p className="text">
          While the Bass, Bream, Crappie and Carp all thrive naturally at Twin
          Bridges, the Catfish we keep regularly stocked. We stock locally
          raised catfish from a farm here in Georgia.
        </p>
      </div>

      <div className="sub_content">
        <p className="text">
          <span className="warning">Watch Out!</span> Some of the cats have been
          here upwards of 20 years and have grown into{' '}
          <span className="monster_cats">Monster Cats</span>. Weighing upwards
          of 60lbs, these cats will put you to the test.
        </p>
      </div>
    </div>
  );
};

export default FishStock;
