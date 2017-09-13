import React, { Component } from 'react';
import { Navbar, Nav, MenuItem } from 'react-bootstrap';
import { HomeDropDown } from './components';
/*
  Navbar uses react-bootstrap
  see https://react-bootstrap.github.io/components.html#navbars
*/
class Navigation extends Component {
  render() {
    return (
      <Navbar fixedTop collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Twin Bridges Lake</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <HomeDropDown />
            <MenuItem eventKey={2} href="/our_fish">
              Our Fish
            </MenuItem>
            <MenuItem eventKey={3} href="/gallery">
              Gallery
            </MenuItem>
            <MenuItem eventKey={4} href="/rules">
              Rules
            </MenuItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
