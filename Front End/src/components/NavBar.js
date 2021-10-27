import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  // Button
} from 'reactstrap';
import redLogo from '../assets/DineNDashRedLogo.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="navbar-brand" to="/">Home</Link>
            </NavItem>
          </Nav>
        </Collapse>
        <img id='navbar-logo' src={redLogo} alt='Dine and Dash Red Logo'/>
      </Navbar>
    </div>
  );
};

export default NavBar;
