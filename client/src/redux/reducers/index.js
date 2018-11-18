import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './auth/authReducer';
import blog from './blog/reducer';
import post from './post/reducer';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    blog,
    post,
  });
