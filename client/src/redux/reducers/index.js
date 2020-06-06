// @flow
import { CombinedState, combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import type { BrowserHistory } from 'history';
import auth from './auth';
import blog from './blog';
import post from './post';
import message from './messages';

export default (history: BrowserHistory): CombinedState =>
  combineReducers({
    router: connectRouter(history),
    auth,
    blog,
    post,
    message,
  });
