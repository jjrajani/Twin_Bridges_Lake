import React from 'react';
import {
  AboutUs,
  Contact,
  Hours,
  Admissions,
  Location,
  KidsPond
} from './components';

const Home = () => {
  return (
    <div className="content home">
      <AboutUs />
      <Location />
      <Hours />
      <KidsPond />
      <Admissions />
      <Contact />
    </div>
  );
};

export default Home;
