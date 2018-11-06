import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './authReducer';
import blog from './blogReducer';
import post from './postReducer';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    blog,
    post,
  });
