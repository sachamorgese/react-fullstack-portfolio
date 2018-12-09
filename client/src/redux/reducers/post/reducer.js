// @flow

import { EditorState } from 'draft-js';
import {
  UPDATE_EDITOR_STATE,
  UPDATE_TITLE,
  GET_DRAFT_DATA_SUCCESS,
} from './actions';
import type { Action } from '../../../types/action';
import type { State } from '../../../types/state';

const initialState = {
  title: '',
  content: EditorState.createEmpty(),
  labels: [],
  created: '',
};

export default function(state: State = initialState, action: Action) {
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
    default:
      return state;
  }
}
