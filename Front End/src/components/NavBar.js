import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarBrand,
  // Button
} from 'reactstrap';
import redLogo from '../assets/DineNDashRedLogo.png';
import Logo from '../assets/DNDCARTRED.jpg';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/products">Products</Link>
            </NavItem>
          </Nav>
        </Collapse>
        <Link className="nav-link" to="/cart"><img id='navbar-logo' src={Logo} alt='Dine and Dash Cart Logo'/></Link>
        <img id='navbar-logo' src={redLogo} alt='Dine and Dash Red Logo'/>
      </Navbar>
    </div>
  );
};

export default NavBar;
