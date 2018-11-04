// @flow
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Post, AdminHome } from './Blog';
import './App.Module.scss';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AdminHome} />
        <Route path="/blog/admin" component={Post} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
