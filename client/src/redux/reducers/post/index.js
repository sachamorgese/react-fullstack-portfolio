// @flow

import { EditorState } from 'draft-js';
import {
  UPDATE_EDITOR_STATE,
  UPDATE_TITLE,
  GET_DRAFT_DATA_SUCCESS,
  GET_BLOG_POST_DATA_SUCCESS,
  CLEAR_POST_DATA,
} from './actions';
import type { ActionType } from '../../../types/actionType';
import type { PostStateType } from '../../../types/state';

const initialState = {
  title: '',
  content: EditorState.createEmpty(),
  labels: [],
  created: '',
};

export default function(state: PostStateType = initialState, action: ActionType): PostStateType {
  switch (action.type) {
    case UPDATE_EDITOR_STATE:
      return {
        ...state,
        content: action.payload,
      };
    case GET_DRAFT_DATA_SUCCESS:
      return {
        ...state,
        content: action.payload.content,
        labels: action.payload.labels,
        title: action.payload.title,
      };
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case GET_BLOG_POST_DATA_SUCCESS:
      return {
        ...state,
        content: action.payload.content,
        labels: action.payload.labels,
        title: action.payload.title,
      };
    case CLEAR_POST_DATA: {
      return initialState
    }
    default:
      return state;
  }
}
