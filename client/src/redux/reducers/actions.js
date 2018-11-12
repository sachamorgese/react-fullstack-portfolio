export const UPDATE_EDITOR_STATE = 'UPDATE_EDITOR_STATE';
export const DELETE_EDITOR_STATE = 'DELETE_EDITOR_STATE';
export const CREATE_NEW_DRAFT_SUBMIT = 'CREATE_NEW_DRAFT_SUBMIT';
export const CREATE_NEW_DRAFT_SUCCESS = 'CREATE_NEW_DRAFT_SUCCESS';
export const CREATE_NEW_DRAFT_FAILURE = 'CREATE_NEW_DRAFT_FAILURE';

function updateEditorState(editorState) {
  return {
    type: UPDATE_EDITOR_STATE,
    payload: {
      editorState,
    },
  };
}

function createNewDraft() {
  return {
    type: CREATE_NEW_DRAFT_SUBMIT,
  };
}

function createNewDraftSuccess() {
  return {
    type: CREATE_NEW_DRAFT_SUCCESS,
  };
}

function createNewDraftFailure() {
  return {
    type: CREATE_NEW_DRAFT_FAILURE,
  };
}

export default {
  updateEditorState,
  createNewDraft,
  createNewDraftSuccess,
  createNewDraftFailure,
};
