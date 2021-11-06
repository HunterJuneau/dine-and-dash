import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
  Button
} from 'reactstrap';
import redLogo from '../assets/DineNDashRedLogo.png';
import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ fbUser }) => {
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
        { fbUser !== null
          && <>
          {
            fbUser ? <Button color='warning' onClick={signOutUser}>Sign Out</Button>
              : <Button color='primary' onClick={signInUser}>Sign In</Button>
          }
            </>
        }
        <img id='navbar-logo' src={redLogo} alt='Dine and Dash Red Logo' />
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  fbUser: PropTypes.any
};

export default NavBar;
