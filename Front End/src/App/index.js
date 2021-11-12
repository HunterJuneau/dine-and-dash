import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';
import './App.scss';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
import { getAllProducts } from '../helpers/data/ProductData';
import { getAllUsers } from '../helpers/data/UserData';
import { adminConfig } from '../helpers/apiKeys';

function App() {
  const [fbUser, setFbUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [admin, setAdmin] = useState(false);
  // const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        authed
          .getIdToken()
          .then((token) => window.sessionStorage.setItem('token', token));
        setFbUser(authed);
        setAdmin(adminConfig.includes(authed.uid));
      } else if (fbUser || fbUser === null) {
        setFbUser(false);
        setAdmin(false);
      }
    });
  }, []);

  useEffect(() => {
    getAllProducts().then(setProducts);
    getAllUsers().then(setUsers);
  }, []);

  // console.warn(users);
  return (
    <>
      <Router>
        <div className='App'>
          <NavBar fbUser={fbUser} admin={admin} />
          <Routes
            fbUser={fbUser}
            products={products}
            setProducts={setProducts}
            users={users}
            admin={admin}
          />
        </div>
      </Router>
    </>
  );
}

export default App;
