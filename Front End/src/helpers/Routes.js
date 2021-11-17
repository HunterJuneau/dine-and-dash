import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import LandingPage from '../views/LandingPages';
import ProductsView from '../views/ProductsView';
import CartView from '../views/CartView';
import InventoryView from '../views/InventoryView';
import SingleProduct from '../views/SingleProduct';
import AllUsersView from '../views/AllUsersView';
import UserProfileView from '../views/UserProfileView';
import UserOrdersView from '../views/UserOrdersView';
import UserSingleOrderDetailsView from '../views/UserSingleOrderDetailsView';
import PrivateRoute from './PrivateRoute';

export default function Routes({
  fbUser,
  products,
  users,
  setProducts,
  admin,
}) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={() => <LandingPage />} />
        <Route
          exact
          path='/products'
          component={() => (
            <ProductsView products={products} setProducts={setProducts} />
          )}
        />
        <Route
          exact
          path='/products/:productId'
          component={() => <SingleProduct />}
        />

        <PrivateRoute
          exact
          path='/profile'
          component={() => <UserProfileView fbUser={fbUser} />}
          fbUser={fbUser}
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

        <PrivateRoute
          component={() => <InventoryView products={products} />}
          fbUser={fbUser}
          admin={admin}
          exact
          path='/admin/inventory'
        />

        <PrivateRoute
          component={() => <SingleProduct admin={true} />}
          fbUser={fbUser}
          admin={admin}
          exact
          path='/admin/inventory/:productId'
        />

        <Route exact path='/cart' component={() => <CartView />} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  fbUser: PropTypes.any,
  products: PropTypes.array,
  users: PropTypes.any,
  setProducts: PropTypes.func,
  admin: PropTypes.bool,
};
