// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import type { BrowserHistory } from 'history';
import auth from './auth/authReducer';
import blog from './blog/reducer';
import post from './post/reducer';
import message from './messages/reducer';

export default (history: BrowserHistory) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    blog,
    post,
    message,
  });
