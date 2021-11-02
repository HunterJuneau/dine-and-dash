import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import LandingPage from '../views/LandingPages';
import ProductsView from '../views/ProductsView';
import InventoryView from '../views/InventoryView';

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
          path='/admin'
          component={() => <InventoryView products={products} />}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  products: PropTypes.array
};
