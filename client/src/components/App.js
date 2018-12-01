// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import type { BrowserHistory } from 'history/createBrowserHistory';
import { Post, AdminHome } from './Blog';

const App = ({ history }: { history: BrowserHistory }) => (
  <div className="App" style={{ height: '100%' }}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={AdminHome} /* /blog/admin */ />
        <Route path="/blog/draft/:id" component={Post} />
      </Switch>
    </ConnectedRouter>
  </div>
);

export default App;
