import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import NavStore from './NavStore';
/*
  Navbar uses react-bootstrap
  see https://react-bootstrap.github.io/components.html#navbars
*/
class Navigation extends NavStore {
    render() {
        return (
          <div ref="wrapper">
            <Navbar fixedTop collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Twin Bridges Lake</a>
                    </Navbar.Brand>
                    <Navbar.Toggle ref={c => this._toggle = c} onClick={this.toggle}/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown
                            eventKey={1}
                            title="Home"
                            id="basic-nav-dropdown"
                        >
                            {this.renderDropDownItems()}
                        </NavDropdown>
                        {this.renderPlainMenuItems()}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
          </div>
        );
    }
}

export default Navigation;
