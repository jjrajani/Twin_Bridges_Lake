import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          {this.renderLogo()}
          {this.renderLogin()}
        </div>
      </nav>
    );
  }

  renderLogo() {
    return (
      <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo">
        Emaily
      </Link>
    );
  }

  renderLogin() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return this.renderLoginButtons();
      default:
        return this.renderLogoutButton();
    }
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
