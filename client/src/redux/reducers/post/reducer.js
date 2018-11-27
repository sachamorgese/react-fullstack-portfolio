// @flow

import { EditorState } from 'draft-js';
import {
  UPDATE_EDITOR_STATE,
  UPDATE_TITLE,
  GET_DRAFT_DATA_SUCCESS,
} from './actions';
import type { draft, action } from '../types';

const initialState = {
  title: '',
  content: EditorState.createEmpty(),
  labels: [],
  publishedPost: '',
  created: '',
};

export default function(
  state: draft = initialState,
  { type, payload }: action,
) {
  switch (type) {
    case GET_DRAFT_DATA_SUCCESS:
      return {
        ...state,
        content: payload.content,
        labels: payload.labels,
        title: payload.title,
      };
    case UPDATE_EDITOR_STATE:
      return {
        ...state,
        content: payload,
      };
    case UPDATE_TITLE:
      return {
        ...state,
        title: payload,
      };
    default:
      return state;
  }
}
