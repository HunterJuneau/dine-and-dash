import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import LandingPage from '../views/LandingPages';
import ProductsView from '../views/ProductViews/ProductsView';
import CartView from '../views/CartView';
import InventoryView from '../views/InventoryView';
import SingleProduct from '../views/ProductViews/SingleProduct';
import AllUsersView from '../views/AllUsersView';
import UserProfileView from '../views/UserProfileView';
import UserOrdersView from '../views/UserOrdersView';
import UserSingleOrderDetailsView from '../views/UserSingleOrderDetailsView';
import ProductFormView from '../views/ProductViews/ProductFormView';

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
         <Route
          exact path='/cart'
          component={() => <CartView/>}
        />
        <Route
          exact path='/admin/addProduct'
          component={() => <ProductFormView setProducts={setProducts}/>}
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
