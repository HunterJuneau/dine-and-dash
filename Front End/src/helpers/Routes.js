import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import LandingPage from '../views/LandingPages';
import ProductsView from '../views/ProductsView';
import InventoryView from '../views/InventoryView';
import SingleProduct from '../views/SingleProduct';
import AllUsersView from '../views/AllUsersView';
import UserProfileView from '../views/UserProfileView';
import UserOrdersView from '../views/UserOrdersView';

export default function Routes({ products, users, fbUsers }) {
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
          exact
          path='/user'
          component={() => <AllUsersView users={users} fbUsers={fbUsers} />}
        />

        <Route
          exact
          path='/user/:id'
          component={() => <UserProfileView users={users} />}
        />

        <Route
          exact
          path='/user/order/:id'
          component={() => <UserOrdersView />}
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
  users: PropTypes.any,
  fbUsers: PropTypes.any
};
