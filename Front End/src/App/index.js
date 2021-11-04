import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
import { getAllProducts } from '../helpers/data/ProductData';
import { getAllUsers } from '../helpers/data/UserData';

function App() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  // const [orders, setOrders] = useState([]);

  useEffect(() => getAllProducts().then(setProducts), []);
  useEffect(() => getAllUsers().then(setUsers), []);
  // useEffect(() => getOrders().then(setOrders), []);

  // console.warn(orders);
  return (
    <>
      <Router>
        <div className='App'>
          <NavBar />
          <Routes products={products} users={users}/>
        </div>
      </Router>
    </>
  );
}

export default App;
