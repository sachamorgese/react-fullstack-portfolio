// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import type { RoleType } from '../types/component';

type HomePropsType = {
  name: string,
  isLoggedIn: boolean,
  role: RoleType,
};

function Home(props: HomePropsType): React$Element<any> {
  const { name, isLoggedIn, role } = props;
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

const mapStateToProps = ({
  auth: { isLoggedIn, name, role },
}: {
  auth: HomePropsType,
}): HomePropsType => ({
  isLoggedIn,
  name,
  role,
});

export default connect(mapStateToProps)(Home);
