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
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import redLogo from '../assets/DineNDashRedLogo.png';
import Logo from '../assets/DNDCARTRED.jpg';
// import { createOrder } from '../helpers/data/OrderData';
import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ fbUser, admin }) => {
  const [isOpen, setIsOpen] = useState(false);

  // const [orders, setOrders] = useState({
  //   totalCost: '',
  //   paymentId: null,
  //   completed: false,
  // });

  // useEffect(() => {
  //   createOrder(orders).then((response) => setOrders(response));
  // }, []);
  // console.warn(orders);
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

            {admin ? (
              <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                  Admin Menu
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link className='nav-link' to='/admin/inventory'>
                      Inventory
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            ) : (
              ''
            )}
          </Nav>
        </Collapse>
        <Button className='nav-link' to='/cart'>
          <img id='navbar-logo' src={Logo} alt='Dine and Dash Cart Logo' />
        </Button>
        {fbUser !== null && (
          <>
            {fbUser ? (
              <Button color='warning' onClick={signOutUser}>
                Sign Out
              </Button>
            ) : (
              <Button color='primary' onClick={signInUser}>
                Sign In
              </Button>
            )}
          </>
        )}
        <img id='navbar-logo' src={redLogo} alt='Dine and Dash Red Logo' />
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  fbUser: PropTypes.any,
  admin: PropTypes.bool,
};

export default NavBar;
