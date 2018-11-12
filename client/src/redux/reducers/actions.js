// @flow
import type { EditorState } from 'draft-js';
import type { draft } from './types';

export const UPDATE_EDITOR_STATE = 'UPDATE_EDITOR_STATE';
export const DELETE_EDITOR_STATE = 'DELETE_EDITOR_STATE';
export const CREATE_NEW_DRAFT_SUBMIT = 'CREATE_NEW_DRAFT_SUBMIT';
export const CREATE_NEW_DRAFT_SUCCESS = 'CREATE_NEW_DRAFT_SUCCESS';
export const CREATE_NEW_DRAFT_FAILURE = 'CREATE_NEW_DRAFT_FAILURE';
export const GET_DRAFT_DATA = 'GET_DRAFT_DATA';

const updateEditorState = (editorState: EditorState) => ({
  type: UPDATE_EDITOR_STATE,
  payload: {
    editorState,
  },
});

const createNewDraft = () => ({
  type: CREATE_NEW_DRAFT_SUBMIT,
});

const createNewDraftSuccess = () => ({
  type: CREATE_NEW_DRAFT_SUCCESS,
});

const createNewDraftFailure = () => ({
  type: CREATE_NEW_DRAFT_FAILURE,
});

const getDraftData = (draft: draft) => ({
  type: CREATE_NEW_DRAFT_FAILURE,
  payload: draft,
});

export default {
  updateEditorState,
  createNewDraft,
  createNewDraftSuccess,
  createNewDraftFailure,
  getDraftData,
};
