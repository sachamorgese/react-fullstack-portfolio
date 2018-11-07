export const UPDATE_EDITOR_STATE = 'UPDATE_EDITOR_STATE';
export const DELETE_EDITOR_STATE = 'DELETE_EDITOR_STATE';
export const CREATE_NEW_DRAFT_SUBMIT = 'CREATE_NEW_DRAFT_SUBMIT';
export const CREATE_NEW_DRAFT_SUCCESS = 'CREATE_NEW_DRAFT_SUCCESS';

export function updateEditorState(editorState) {
  return {
    type: UPDATE_EDITOR_STATE,
    payload: {
      editorState,
    },
  };
}
