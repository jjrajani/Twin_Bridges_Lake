import React, { Component } from 'react';
import { MenuItem } from 'react-bootstrap';
import Scroll from 'react-scroll';
import scrollPoints from '../home/utils/scrollPoints';
import menuItems from './menu_items.json';

const scroller = Scroll.scroller;

class NavStore extends Component {
  componentDidMount() {
    if ('ontouchend' in window) {
      document.body.style.cursor = 'pointer';
    }
    window.addEventListener('click', this.toggle);
  }
  toggle = e => {
    if (this.refs.wrapper.contains(e.target)) {
      return;
    } else if (this._toggle.context.$bs_navbar.expanded) {
      this._toggle.context.$bs_navbar.onToggle();
    }
  }
  renderDropDownItems = () => {
    return Object.keys(scrollPoints).map((key, i) => {
      const { to, pad, title } = scrollPoints[key];
      return (
        <MenuItem
          key={key}
          eventKey={`1.${i}`}
          href={`/${key}`}
          onClick={() =>
              scroller.scrollTo( to, pad )}
        >
          {title}
      </MenuItem>
      )
    });
  }
  renderPlainMenuItems = () => {
    let eventKey = 1;
    return menuItems.map(item => {
      eventKey++
      return (
        <MenuItem key={item.href + eventKey} eventKey={eventKey} href={item.href} className={item.className}>
            {item.text}
        </MenuItem>
      )
    })
  }
}

export default NavStore;
