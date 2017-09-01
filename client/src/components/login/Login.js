import React, { Component } from 'react';
import { connect } from 'react-redux';

const Login = ({ auth }) => {
  const href = auth ? '/api/logout' : '/auth/facebook',
    buttonText = auth ? 'Logout' : 'Login';
  return (
    <a className="login_btn" href={href}>
      {buttonText}
    </a>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Login);
