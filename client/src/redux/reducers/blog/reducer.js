// @flow

import {
  CREATE_NEW_DRAFT_SUBMIT,
  CREATE_NEW_DRAFT_SUCCESS,
  CREATE_NEW_DRAFT_FAILURE,
  GET_DRAFTS_SUBMIT,
  GET_DRAFTS_SUCCESS,
  GET_DRAFTS_FAILURE,
} from './actions';
import { blogState, action } from '../types';
import {
  SAVE_DRAFT_CONTENT_FAILURE,
  GET_DRAFT_DATA_FAILURE,
  GET_DRAFT_DATA_SUBMIT,
  GET_DRAFT_DATA_SUCCESS,
} from '../post/actions';

const initialState = {
  newDraft: false,
  creating: false,
  loading: false,
  postId: '',
  draftId: '',
  failed: false,
  drafts: [],
};

export default function(
  state: blogState = initialState,
  { type, payload }: action,
) {
  switch (type) {
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
      return {
        ...state,
        loading: true,
      };
    case GET_DRAFT_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        failed: false,
      };
    case GET_DRAFT_DATA_FAILURE:
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
    case GET_DRAFTS_SUBMIT:
      return {
        ...state,
        loading: true,
      };
    case GET_DRAFTS_SUCCESS:
      return {
        ...state,
        loading: false,
        failed: false,
        drafts: payload,
      };
    case GET_DRAFTS_FAILURE:
      return {
        ...state,
        loading: false,
        failed: true,
      };
    default:
      return state;
  }
}
