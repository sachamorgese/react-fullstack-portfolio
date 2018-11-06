// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Post, AdminHome } from './Blog';

const App = () => (
  <div className="App" style="height: 100%">
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={AdminHome} />
        <Route path="/blog/admin" component={Post} />
      </Switch>
    </ConnectedRouter>
  </div>
);

export default App;
