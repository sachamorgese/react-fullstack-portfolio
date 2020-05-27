// @flow
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import type { AuthStateType, ReduxType } from '../types/state';

export default function Home(): React$Element<any> {
  const { name, isLoggedIn, role } = useSelector((state: ReduxType): AuthStateType => state.auth)

  return (
    <>
      {isLoggedIn ? (
        <>
          <span style={{ display: 'block' }}>{`Hello ${name}`}</span>
          {role === 'admin' && <Link to="/blog/admin">Blog Admin</Link>}
        </>
      ) : (
        <a href="/auth/google">LogIn</a>
      )}
    </>
  );
}
