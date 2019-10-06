// @flow
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import type { BrowserHistory } from 'history/createBrowserHistory';
import Blog from './Blog';
import AdminHome from './Blog/AdminHome';
import authActions from '../redux/reducers/auth/actions'
import type { Dispatch } from '../types/state';

const App = ({ history, fetchUser }: { history: BrowserHistory, fetchUser: Function }) => {
  useEffect( () => {
    fetchUser()
  }, [fetchUser]);

  return (
    <div className="App" style={{ height: '100%' }}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={AdminHome} /* /blog/admin */ />
          <Route path="/blog/" component={Blog} />
        </Switch>
      </ConnectedRouter>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const { fetchUser } = authActions;
  return bindActionCreators(
    {
      fetchUser
    },
    dispatch,
  );
};

export default connect(() => ({}), mapDispatchToProps)(App);
