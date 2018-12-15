// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import type { BrowserHistory } from 'history/createBrowserHistory';
import Blog from './Blog';

const App = ({ history }: { history: BrowserHistory }) => (
  <div className="App" style={{ height: '100%' }}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Blog} /* /blog/admin */ />
        <Route path="/blog/" component={Blog} />
      </Switch>
    </ConnectedRouter>
  </div>
);

export default App;
