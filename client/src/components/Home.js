// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

type HomePropsType = {
  name: string,
  isLoggedIn: boolean,
};

function Home(props: HomePropsType): React$Element<any> {
  const { name, isLoggedIn } = props;
  return (
    <>
      {isLoggedIn ? (
        <>
          <span style={{display: 'block'}}>{`Hello ${name}`}</span>
          <Link to="/blog/admin">Blog Admin</Link>
        </>
      ) : (
        <a href="/auth/google">LogIn</a>
      )}
    </>
  );
}

const mapStateToProps = ({
  auth: { isLoggedIn, name },
}: {
  auth: HomePropsType,
}): HomePropsType => ({
  isLoggedIn,
  name,
});

export default connect(mapStateToProps)(Home);
