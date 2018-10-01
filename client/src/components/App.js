import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { NewPost } from './Blog';
import './App.css';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Route exact path="/" component={NewPost} />
    </BrowserRouter>
  </div>
);

export default App;
