// @flow
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Post } from './Blog';
import './App.Module.scss';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Route exact path="/" component={Post} />
    </BrowserRouter>
  </div>
);

export default App;
