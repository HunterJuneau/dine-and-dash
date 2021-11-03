import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import LandingPage from '../views/LandingPages';
import ProductsView from '../views/ProductsView';
import InventoryView from '../views/InventoryView';
import SingleProduct from '../views/SingleProduct';

export default function Routes({ products }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={() => <LandingPage />} />
        <Route
          exact
          path='/products'
          component={() => <ProductsView products={products} />}
        />
        <Route
          exact
          path='/products/:productId'
          component={() => <SingleProduct />}
        />
        <Route
          path='/admin'
          component={() => <InventoryView products={products} />}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  products: PropTypes.array,
};
