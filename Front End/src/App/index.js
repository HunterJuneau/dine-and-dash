import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
import { getAllProducts } from '../helpers/data/ProductData';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => getAllProducts().then(setProducts), []);
  return (
    <>
      <Router>
        <div className='App'>
          <NavBar/>
          <Routes
            products={products}/>
        </div>
      </Router>
    </>
  );
}

export default App;
