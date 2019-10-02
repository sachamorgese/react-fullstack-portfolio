// @flow

import React from 'react';
import { Route } from 'react-router-dom';
import type { matchPath } from 'react-router-dom'

import Draft from './Draft';
import AdminHome from './AdminHome';
import BlogPost from './BlogPost';

const Blog = ({ match }: {match: matchPath}) => (
  <>
    <Route path={`${match.path}admin`} component={AdminHome} />
    <Route path={`${match.path}draft/:id`} component={Draft} />
    <Route path={`${match.path}post/:id`} component={BlogPost} />
  </>
);

export default Blog;
