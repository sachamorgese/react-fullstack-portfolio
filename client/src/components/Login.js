// @flow
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import type { AuthStateType, ReduxType } from '../types/state';

export default function Login(): React$Element<any> {
  const { name, isLoggedIn, role } = useSelector((state: ReduxType): AuthStateType => state.auth)

  console.log('coococococo')

  return (
    <>
      {isLoggedIn ? (
        <>
          <span style={{ display: 'block' }}>{`Hello ${name}`}</span>
          {role === 'admin' && <Link to="/blog/admin">Blog Admin</Link>}
          {role !== 'admin' && ((): React$Element<any>  => <Redirect to="/blog/home" />)()}
        </>
      ) : (
        <a href="/auth/google">LogIn</a>
      )}
    </>
  );
}
