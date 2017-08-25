import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Hamburger } from '../';

class Header extends Component {
  render() {
    console.log(this.props);
    return (
      <div id="header">
        <Hamburger />
        <div className="right">
          {this.renderLogin()}
        </div>
      </div>
    );
  }

  renderLogin() {
    return this.props.auth
      ? this.renderLogoutButton()
      : this.renderLoginButtons();
  }

  renderLoginButtons() {
    return (
      <ul>
        <li>
          <a href="/auth/facebook">Login</a>
        </li>
      </ul>
    );
  }

  renderLogoutButton() {
    return (
      <ul>
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
