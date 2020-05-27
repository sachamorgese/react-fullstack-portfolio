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
import type { DispatchType } from '../types/state';
import Home from './Home';

import '../style/components/App.scss';

const App = ({ history }: { history: BrowserHistory }): React$Element<any> => {
  return (
    <div className="App">
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

const mapDispatchToProps = (dispatch: DispatchType): void => {
  const { fetchUser } = authActions;
  return bindActionCreators(
    {
      fetchUser,
    },
    dispatch,
  );
};

export default connect((): {} => ({}), mapDispatchToProps)(App);
