// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import type { matchPath } from 'react-router-dom';

import Draft from './Draft';
import AdminHome from './AdminHome';
import BlogPost from './BlogPost';
import BlogHome from './BlogHome';
import Header from '../Shared/Header';
import Login from '../Login';
import ProtectedRoute from '../Shared/PrivateRoute';

const Blog = ({ match }: { match: matchPath }): React$Element<any> => (
  <>
    <Header location={match.path} />
    <Switch>
      <Route path={`${match.path}login`} component={Login} />
      <ProtectedRoute path={`${match.path}admin`}>
        <Route component={AdminHome} />
      </ProtectedRoute>
      <Route path={`${match.path}home`} component={BlogHome} />
      <Route path={`${match.path}draft/:id`} component={Draft} />
      <Route path={`${match.path}post/:id`} component={BlogPost} />
    </Switch>
  </>
);

export default Blog;
