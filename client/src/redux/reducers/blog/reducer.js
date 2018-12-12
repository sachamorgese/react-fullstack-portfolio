// @flow

import {
  CREATE_NEW_DRAFT_SUBMIT,
  CREATE_NEW_DRAFT_SUCCESS,
  CREATE_NEW_DRAFT_FAILURE,
  GET_ALL_POSTS_SUBMIT,
  GET_DRAFTS_SUCCESS,
  GET_DRAFTS_FAILURE,
  GET_BLOGPOSTS_SUCCESS,
  GET_BLOGPOSTS_FAILURE,
} from './actions';
import type { Action } from '../../../types/action';
import {
  SAVE_DRAFT_CONTENT_FAILURE,
  GET_DRAFT_DATA_FAILURE,
  GET_DRAFT_DATA_SUBMIT,
  GET_DRAFT_DATA_SUCCESS,
  POST_BLOGPOST_SUBMIT,
  POST_BLOGPOST_FAILURE,
  GET_BLOGPOST_DATA_SUBMIT,
  GET_BLOGPOST_DATA_FAILURE,
  GET_BLOGPOST_DATA_SUCCESS,
} from '../post/actions';
import type { State } from '../../../types/state';

const initialState = {
  newDraft: false,
  creating: false,
  loading: false,
  failed: false,
  drafts: [],
  blogPosts: [],
};

export default function(state: State = initialState, action: Action) {
  switch (action.type) {
    case CREATE_NEW_DRAFT_SUBMIT:
      return {
        ...state,
        new: true,
        creating: true,
      };
    case CREATE_NEW_DRAFT_SUCCESS:
      return {
        ...state,
        creating: false,
        failed: false,
      };
    case CREATE_NEW_DRAFT_FAILURE:
      return {
        ...state,
        creating: false,
        new: false,
        failed: true,
        error: true,
      };
    case GET_DRAFT_DATA_SUBMIT:
    case POST_BLOGPOST_SUBMIT:
    case GET_ALL_POSTS_SUBMIT:
    case GET_BLOGPOST_DATA_SUBMIT:
      return {
        ...state,
        loading: true,
      };
    case GET_DRAFT_DATA_SUCCESS:
    case GET_BLOGPOST_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        failed: false,
      };
    case GET_DRAFT_DATA_FAILURE:
    case GET_DRAFTS_FAILURE:
    case GET_BLOGPOSTS_FAILURE:
    case POST_BLOGPOST_FAILURE:
    case GET_BLOGPOST_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        failed: true,
      };
    case SAVE_DRAFT_CONTENT_FAILURE:
      return {
        ...state,
        failed: true,
      };
    case GET_DRAFTS_SUCCESS:
      return {
        ...state,
        loading: false,
        failed: false,
        drafts: action.payload,
      };
    case GET_BLOGPOSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        failed: false,
        blogPosts: action.payload,
      };
    default:
      return state;
  }
}
