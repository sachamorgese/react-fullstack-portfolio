// @flow
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { PostEditor } from './Blog';
import './App.css';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Route exact path="/" component={PostEditor} />
    </BrowserRouter>
  </div>
);

export default App;
