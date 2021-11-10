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
import UserSingleOrderDetailsView from '../views/UserSingleOrderDetailsView';

export default function Routes({ products, users, setProducts }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={() => <LandingPage />} />
        <Route
          exact
          path='/products'
          component={() => <ProductsView products={products} setProducts={setProducts}/>}
        />
        <Route
          exact
          path='/products/:productId'
          component={() => <SingleProduct />}
        />

        <Route
          exact
          path='/user'
          component={() => <AllUsersView users={users} />}
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
          exact
          path='/productOrder/order/:orderId'
          component={() => <UserSingleOrderDetailsView />}
        />

        <Route
        exact
          path='/admin/inventory'
          component={() => <InventoryView products={products} />}
        />

        <Route
          exact
          path='/admin/inventory/:productId'
          component={() => <SingleProduct admin={true} />}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  products: PropTypes.array,
  users: PropTypes.any,
  setProducts: PropTypes.func
};
