// @flow
import { UPDATE_EDITOR_STATE } from './actions';

const initialState = {
  editorState: {},
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case UPDATE_EDITOR_STATE:
      return {
        ...state,
        editorState: payload,
      };
    default:
      return state;
  }
}
