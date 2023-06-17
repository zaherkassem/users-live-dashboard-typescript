import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from '../utils/jwtUtil';

const PrivateRoute = ({ component: Component, layout: Layout, ...rest }:any) => (
  <Route
    {...rest}
    render={(props:any) =>
      isAuthenticated() ? (
        <Layout>
          <Component {...props} />
        </Layout>
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
