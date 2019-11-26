import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { isAdmin } from '../../utils/authUtils';

type Props = {
  state: {
    isLoggedIn: boolean,
    role: string,
    isLoading: boolean,
  },
  children: string,
};

function PrivateRoute({ state, children, ...rest }: Props) {
  const { isLoggedIn, role, isLoading } = state;

  return (
    <Route
      {...rest}
      render={() => {
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

const mapStateToProps = ({ auth: { isLoggedIn, role, isLoading } }) => ({
  state: { isLoggedIn, role, isLoading },
});

export default connect(mapStateToProps)(PrivateRoute);
