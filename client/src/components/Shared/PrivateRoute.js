// @flow
import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAdmin } from '../../utils/authUtils';
import LoadingSpinner from './LoadingSpinner';
import type { AuthStateType, ReduxType } from '../../types/state';

type PropsType = {
  children: React$Element<any>,
};

export default function PrivateRoute({
  children,
  ...rest
}: PropsType): React$Element<any> {
  const { isLoggedIn, role, isLoading } = useSelector(
    (state: ReduxType): AuthStateType => state.auth,
  );

  return (
    <Route
      {...rest}
      render={(): React$Element<any> => {
        if (isLoading) return <LoadingSpinner />;
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
