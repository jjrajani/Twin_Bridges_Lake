import React from 'react';

const LoggedInLanding = () => {
  return (
    <div className="landing">
      <div className="title center col">
        <div className="overlay" />
        <h1>Twin Bridges Lake</h1>
        <h2>Family Fishing & Monster Catfish</h2>
      </div>
      <div className="links center col">
        <a className="link" to="/">
          <h3>My Fish</h3>
        </a>
        <a className="link" to="/">
          <h3>My Rewards</h3>
        </a>
        <a className="link" to="/recently_caught">
          <h3>Recently Caught</h3>
        </a>
        <a className="link" to="/location">
          <h3>Location</h3>
        </a>
        <a className="link" to="/admissions">
          <h3>Admissions</h3>
        </a>
      </div>
    </div>
  );
};

export default LoggedInLanding;
