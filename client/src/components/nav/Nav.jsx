import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import Scroll from 'react-scroll';
import scrollPadding from '../home/utils/scrollOptions';

const scroller = Scroll.scroller;
// import { HomeDropDown } from './components';
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
            <NavDropdown eventKey={1} title="Home" id="basic-nav-dropdown">
              <MenuItem
                eventKey={1.1}
                href="/#about_us"
                onClick={() =>
                  scroller.scrollTo('about_us', scrollPadding.header)}
              >
                About Us
              </MenuItem>
              <MenuItem
                eventKey={1.2}
                href="/#location"
                onClick={() =>
                  scroller.scrollTo(
                    'location',
                    scrollPadding.headerAndHorizLine
                  )}
              >
                Location
              </MenuItem>
              <MenuItem
                eventKey={1.3}
                href="/#hours"
                onClick={() =>
                  scroller.scrollTo('hours', scrollPadding.headerAndHorizLine)}
              >
                Hours
              </MenuItem>
              <MenuItem
                eventKey={1.3}
                href="/#admissions"
                onClick={() =>
                  scroller.scrollTo(
                    'kids_pond',
                    scrollPadding.headerAndHorizLine
                  )}
              >
                Kids Pond
              </MenuItem>
              <MenuItem
                eventKey={1.3}
                href="/#admissions"
                onClick={() =>
                  scroller.scrollTo(
                    'admissions',
                    scrollPadding.headerAndHorizLine
                  )}
              >
                Admissions
              </MenuItem>
              <MenuItem
                eventKey={1.4}
                href="/#contact"
                onClick={() =>
                  scroller.scrollTo(
                    'contact',
                    scrollPadding.headerAndHorizLine
                  )}
              >
                Contact
              </MenuItem>
            </NavDropdown>
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
