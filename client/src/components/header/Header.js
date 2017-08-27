import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Hamburger } from '../';

class Header extends Component {
  render() {
    return (
      <div id={`header`} className={`${this.props.styles}`}>
        <Hamburger />
        {this.logo()}
        {this.renderLogin()}
      </div>
    );
  }

  logo() {
    return window.location.pathname === '/'
      ? null
      : <h1 className="logo">Twin Bridges Lake</h1>;
  }

  renderLogin() {
    return this.props.auth
      ? this.renderLogoutButton()
      : this.renderLoginButtons();
  }

  renderLoginButtons() {
    return (
      <a className="login_btn" href="/auth/facebook">
        Login
      </a>
    );
  }

  renderLogoutButton() {
    return (
      <ul>
        <li>
          <a className="login_btn" href="/api/logout">
            Logout
          </a>
        </li>
      </ul>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
