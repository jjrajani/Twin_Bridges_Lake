import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Hamburger } from '../';

class Header extends Component {
  render() {
    return (
      <div id="header">
        <Hamburger />
      </div>
    );
  }

  // {this.renderLogin()}

  renderLogin() {
    return this.props.auth
      ? this.renderLogoutButton()
      : this.renderLoginButtons();
  }

  renderLoginButtons() {
    return (
      <ul className="right">
        <li>
          <a href="/auth/facebook">Login With Facebook</a>
        </li>
      </ul>
    );
  }

  renderLogoutButton() {
    return (
      <ul className="right">
        <li>
          <a href="/api/logout">Logout</a>
        </li>
      </ul>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
