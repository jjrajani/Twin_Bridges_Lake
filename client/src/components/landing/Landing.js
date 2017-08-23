import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Hamburger } from '../';

class Landing extends Component {
  render() {
    return this.props.auth ? this.loggedInLanding() : this.loggedOutLanding();
  }

  loggedOutLanding() {
    return (
      <div className="landing">
        <div className="header center col">
          <h1>Twin Bridges Lake</h1>
          <h2>Family Fishing & Monster Catfish</h2>
        </div>
        <div className="center col">
          <Link to="/recently_caught">
            <h3>Recently Caught</h3>
          </Link>
          <h3>Location</h3>
          <h3>Admissions</h3>
        </div>
        <div className="footer">
          <h4>1119 Braselton Hwy, Lawrenceville Ga, 30043</h4>
          <h4>(770) 963-6739</h4>
        </div>
      </div>
    );
  }

  loggedInLanding() {
    return (
      <div className="landing">
        <div className="header center col">
          <h1>Twin Bridges Lake</h1>
          <h2>Family Fishing & Monster Catfish</h2>
        </div>
        <div className="center col">
          <h3>My Fish</h3>
          <h3>My Rewards</h3>
          <Link to="/recently_caught">
            <h3>Recently Caught</h3>
          </Link>
          <h3>Location</h3>
          <h3>Admissions</h3>
        </div>
        <div className="footer">
          <h4>1119 Braselton Hwy, Lawrenceville Ga, 30043</h4>
          <h4>(770) 963-6739</h4>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Landing);
