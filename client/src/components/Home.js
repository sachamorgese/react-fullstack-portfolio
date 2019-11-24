import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import type { Dispatch } from '../types/state';
import authActions from '../redux/reducers/auth/actions';

function Home(props) {
  const { name, isLoggedIn } = props;
  return (
    <>
      {isLoggedIn ? (
        <>
          <span>{`Hello ${name}`}</span>
          <Link to="/blog/admin">Blog Admin</Link>
        </>
      ) : (
        <a href="/auth/google">LogIn</a>
      )}
    </>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  const { fetchUser } = authActions;
  return bindActionCreators(
    {
      fetchUser,
    },
    dispatch,
  );
};

const mapStateToProps = ({ auth: { isLoggedIn, name } }) => ({
  isLoggedIn,
  name,
});

export default connect(mapStateToProps, mapDispatchToProps())(Home);
