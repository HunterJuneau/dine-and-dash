import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const routeChecker = (attributes) => (user
    ? (<Component {...attributes} user={user} />)
    : (<Redirect to={{ pathname: '/', state: { from: attributes.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any
};

export default PrivateRoute;
