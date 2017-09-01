import React from 'react';

const LoggedOutLanding = () => {
  return (
    <div className="landing">
      <div className="title center col">
        <div className="overlay" />
        <h1>Twin Bridges Lake</h1>
        <h2>Family Fishing & Monster Catfish</h2>
      </div>
      <div className="links center col">
        <a className="link" href="/location">
          <h3>Location</h3>
        </a>
        <a className="link" href="/gallery">
          <h3>Gallery</h3>
        </a>
        <a className="link" href="/admissions">
          <h3>Admissions</h3>
        </a>
      </div>
    </div>
  );
};

export default LoggedOutLanding;
