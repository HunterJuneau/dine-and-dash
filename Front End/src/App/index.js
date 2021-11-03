import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import './App.scss';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
import { getAllProducts } from '../helpers/data/ProductData';

function App() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);

  firebase.auth().onAuthStateChanged((authed) => {
    if (authed) {
      const userInfo = {
        userName: authed.displayName,
        uid: authed.uid
      };
      setUser(userInfo);
    } else if (user || user === null) {
      setUser(false);
    }
  }, []);

  useEffect(() => getAllProducts().then(setProducts), []);
  return (
    <>
      <Router>
        <div className='App'>
          <NavBar />
          <Routes products={products} />
        </div>
      </Router>
    </>
  );
}

export default App;
