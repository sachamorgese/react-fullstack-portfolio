// @flow

import {
  CREATE_NEW_DRAFT_SUBMIT,
  CREATE_NEW_DRAFT_SUCCESS,
  CREATE_NEW_DRAFT_FAILURE,
  GET_ALL_POSTS_SUBMIT,
  GET_ALL_POSTS_SUCCESS,
  GET_DRAFTS_SUCCESS,
  GET_DRAFTS_FAILURE,
  GET_BLOG_POSTS_SUCCESS,
  GET_BLOG_POSTS_FAILURE,
} from './actions';
import type { ActionType } from '../../../types/actionType';
import {
  SAVE_DRAFT_CONTENT_FAILURE,
  GET_DRAFT_DATA_FAILURE,
  GET_DRAFT_DATA_SUBMIT,
  GET_DRAFT_DATA_SUCCESS,
  POST_BLOG_POST_SUBMIT,
  POST_BLOG_POST_FAILURE,
  GET_BLOG_POST_DATA_SUBMIT,
  GET_BLOG_POST_DATA_FAILURE,
  GET_BLOG_POST_DATA_SUCCESS,
} from '../post/actions';
import type { BlogStateType } from '../../../types/state';

const initialState = {
  newDraft: false,
  creating: false,
  loading: false,
  failed: false,
  drafts: [],
  blogPosts: [],
};

export default function(
  state: BlogStateType = initialState,
  action: ActionType,
): BlogStateType {
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
    case POST_BLOG_POST_SUBMIT:
    case GET_ALL_POSTS_SUBMIT:
    case GET_BLOG_POST_DATA_SUBMIT:
      return {
        ...state,
        loading: true,
      };
    case GET_DRAFT_DATA_SUCCESS:
    case GET_BLOG_POST_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        failed: false,
      };
    case GET_DRAFT_DATA_FAILURE:
    case GET_DRAFTS_FAILURE:
    case GET_BLOG_POSTS_FAILURE:
    case POST_BLOG_POST_FAILURE:
    case GET_BLOG_POST_DATA_FAILURE:
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
    case GET_BLOG_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        failed: false,
        blogPosts: action.payload,
      };
    case GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        drafts: action.payload.drafts,
        blogPosts: action.payload.blogPosts,
      };
    default:
      return state;
  }
}
