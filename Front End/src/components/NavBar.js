import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import redLogo from '../assets/DineNDashRedLogo.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/'>Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <Link className='nav-link' to='/products'>
                Products
              </Link>
            </NavItem>

            <NavItem>
              <Link className='nav-link' to='/user'>
                Users
              </Link>
            </NavItem>

            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Admin Menu
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link className='nav-link' to='/admin/inventory'>Inventory</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
        <img id='navbar-logo' src={redLogo} alt='Dine and Dash Red Logo' />
      </Navbar>
    </div>
  );
};

export default NavBar;
