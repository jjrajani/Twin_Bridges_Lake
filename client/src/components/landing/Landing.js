import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from '../';
import Title from './Title';

class Landing extends Component {
  render() {
    return this.props.auth ? this.loggedInLanding() : this.loggedOutLanding();
  }

  loggedOutLanding() {
    return (
      <div>
        <Header styles="landing_header" />
        <div className="landing">
          <Title />
          <div className="center col">
            <a className="link" href="/gallery">
              <h3>Gallery</h3>
            </a>
            <a className="link" href="/location">
              <h3>Location</h3>
            </a>
            <a className="link" href="/admissions">
              <h3>Admissions</h3>
            </a>
          </div>
        </div>
      </div>
    );
  }

  loggedInLanding() {
    return (
      <div>
        <Header styles="landing_header" />
        <div className="landing">
          <div className="header center col">
            <h1>Twin Bridges Lake</h1>
            <h2>Family Fishing & Monster Catfish</h2>
          </div>
          <div className="center col">
            <a to="/">
              <h3>My Fish</h3>
            </a>
            <a to="/">
              <h3>My Rewards</h3>
            </a>
            <a to="/recently_caught">
              <h3>Recently Caught</h3>
            </a>
            <a to="/location">
              <h3>Location</h3>
            </a>
            <a to="/admissions">
              <h3>Admissions</h3>
            </a>
          </div>
          <div className="footer">
            <h4>1119 Braselton Hwy, Lawrenceville Ga, 30043</h4>
            <h4>(770) 963-6739</h4>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Landing);
