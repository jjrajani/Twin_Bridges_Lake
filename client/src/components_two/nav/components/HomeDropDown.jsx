import React from 'react';
import { NavDropdown, MenuItem } from 'react-bootstrap';
import Scroll from 'react-scroll';
import scrollPadding from '../../home/utils/scrollOptions';

const scroller = Scroll.scroller;
/*
  Scroller works in conjunction with ScrollElements
  see src/components/home/components
  see https://github.com/fisshy/react-scroll
*/
const HomeDropDown = () =>
  <NavDropdown eventKey={1} title="Home" id="basic-nav-dropdown">
    <MenuItem
      eventKey={1.1}
      href="/#about_us"
      onClick={() => {scroller.scrollTo('about_us', scrollPadding.header})}
    >
      About Us
    </MenuItem>
    <MenuItem
      eventKey={1.2}
      href="/#location"
      onClick={() =>
        scroller.scrollTo('location', scrollPadding.headerAndHorizLine)}
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
        scroller.scrollTo('kids_pond', scrollPadding.headerAndHorizLine)}
    >
      Kids Pond
    </MenuItem>
    <MenuItem
      eventKey={1.3}
      href="/#admissions"
      onClick={() =>
        scroller.scrollTo('admissions', scrollPadding.headerAndHorizLine)}
    >
      Admissions
    </MenuItem>
    <MenuItem
      eventKey={1.4}
      href="/#contact"
      onClick={() =>
        scroller.scrollTo('contact', scrollPadding.headerAndHorizLine)}
    >
      Contact
    </MenuItem>
  </NavDropdown>;

export default HomeDropDown;
