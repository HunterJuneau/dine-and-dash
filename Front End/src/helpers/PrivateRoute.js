import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

// ONLY PASS ADMIN IF YOU WANT THE ROUTE TO BE ADMIN ONLY //
const PrivateRoute = ({
  component: Component,
  fbUser,
  admin = true,
  ...rest
}) => {
  const routeChecker = (attributes) => {
    if (fbUser && admin) {
      return <Component {...attributes} fbUser={fbUser} />;
    }
    return (
      <Redirect to={{ pathname: '/', state: { from: attributes.location } }} />
    );
  };
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  fbUser: PropTypes.any,
  admin: PropTypes.bool,
};

export default PrivateRoute;
