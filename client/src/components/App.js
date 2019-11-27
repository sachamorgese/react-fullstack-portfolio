// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import type { BrowserHistory } from 'history/createBrowserHistory';
import Blog from './Blog';
import AdminHome from './Blog/AdminHome';
import ProtectedRoute from './Shared/PrivateRoute';
import authActions from '../redux/reducers/auth/actions';
import type { Dispatch } from '../types/state';
import Home from './Home';

const App = ({ history }: { history: BrowserHistory }) => {
  return (
    <div className="App" style={{ height: '100%' }}>
      <ConnectedRouter history={history}>
        <Switch>
          <ProtectedRoute path="/blog/admin">
            <Route component={AdminHome} />
          </ProtectedRoute>
          <Route path="/blog/" component={Blog} />
          <Route exact path="/" component={Home} />
        </Switch>
      </ConnectedRouter>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const { fetchUser } = authActions;
  return bindActionCreators(
    {
      fetchUser,
    },
    dispatch,
  );
};

export default connect(() => ({}), mapDispatchToProps)(App);
