// @flow
import { UPDATE_EDITOR_STATE, GET_DRAFT_DATA } from './actions';
import { EditorState } from 'draft-js';

import type { EditorState as EditorStateType } from 'draft-js';

const initialState = {
  title: '',
  content: EditorState.createEmpty(),
  labels: [],
  publishedPost: '',
  created: '',
};

export default function(state: draft = initialState, { type, payload }) {
  switch (type) {
    case GET_DRAFT_DATA:
      return {
        ...state,
        content: payload.editorState,
      };
    case UPDATE_EDITOR_STATE:
      return {
        ...state,
        editorState: payload,
      };
    default:
      return state;
  }
}
