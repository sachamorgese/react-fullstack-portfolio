// @flow
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import type { BrowserHistory } from 'history/createBrowserHistory';
import Blog from './Blog';

import '../style/components/App.scss';

const App = ({ history }: { history: BrowserHistory }): React$Element<any> => {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/blog/" component={Blog} />
          <Route exact path="/" component={(): React$Element<any> => <Redirect to="/blog/home" />} />
        </Switch>
      </ConnectedRouter>
    </div>
  );
};

export default App;
