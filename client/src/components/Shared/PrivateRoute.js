// @flow

import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { isAdmin } from '../../utils/authUtils';
import type { RoleType } from '../../types/component';

type PropsStateType = {
  isLoggedIn: boolean,
  role: RoleType,
  isLoading: boolean,
};

type PropsType = {
  state: PropsStateType,
  children: React$Element<any>,
};

function PrivateRoute({
  state,
  children,
  ...rest
}: PropsType): React$Element<any> {
  const { isLoggedIn, role, isLoading } = state;

  return (
    <Route
      {...rest}
      render={(): React$Element<any> => {
        if (isLoading) return <div>Loading...</div>;
        return isLoggedIn && isAdmin(role) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        );
      }}
    />
  );
}

const mapStateToProps = ({
  auth: { isLoggedIn, role, isLoading },
}: {
  auth: PropsStateType,
}): {state: PropsStateType} => ({
  state: { isLoggedIn, role, isLoading },
});

export default connect(mapStateToProps)(PrivateRoute);
