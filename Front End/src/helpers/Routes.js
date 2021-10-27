import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../views/LandingPages';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route
          exact path='/'
          component={() => <LandingPage/>}
        />
      </Switch>
    </div>
  );
}
