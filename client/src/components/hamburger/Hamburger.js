import { slide as Menu } from 'react-burger-menu';

import React, { Component } from 'react';

export default class Hamburger extends Component {
  render() {
    return (
      <div className="hamburger">
        <Menu noOverlay>
          <a id="story" className="menu-item" href="/story">
            Our Story
          </a>
          <a id="stock" className="menu-item" href="/fish">
            The Fish We Stock
          </a>
          <a id="catches" className="menu-item" href="/recently_caught">
            Recently Caught
          </a>
          <a id="reviews" className="menu-item" href="/reviews">
            Reviews
          </a>
          <a id="admissions" className="menu-item" href="/admissions">
            Admissions
          </a>
          <a id="location" className="menu-item" href="/location">
            Location
          </a>
        </Menu>
      </div>
    );
  }
}
