// @flow
import type { EditorState } from 'draft-js';
import type { draftType } from '../types';

export const UPDATE_EDITOR_STATE = 'UPDATE_EDITOR_STATE';
export const UPDATE_EDITOR_STATE_SUBMIT = 'UPDATE_EDITOR_STATE_SUBMIT';
export const UPDATE_EDITOR_STATE_SUCCESS = 'UPDATE_EDITOR_STATE_SUCCESS';
export const UPDATE_EDITOR_STATE_FAILURE = 'UPDATE_EDITOR_STATE_FAILURE';
export const DELETE_EDITOR_STATE = 'DELETE_EDITOR_STATE';

export const GET_DRAFT_DATA = 'GET_DRAFT_DATA';

const updateEditorState = (editorState: EditorState) => ({
  type: UPDATE_EDITOR_STATE,
  payload: {
    editorState,
  },
});

const updateEditorStateSubmit = (editorState: EditorState) => ({
  type: UPDATE_EDITOR_STATE_SUBMIT,
  payload: {
    editorState,
  },
});

const updateEditorStateSuccess = () => ({
  type: UPDATE_EDITOR_STATE_SUCCESS,
});

const updateEditorStateFailure = () => ({
  type: UPDATE_EDITOR_STATE_FAILURE,
});

const deleteEditorState = () => ({
  type: DELETE_EDITOR_STATE,
});

const getDraftData = (draft: draftType) => ({
  type: GET_DRAFT_DATA,
  payload: draft,
});

export default {
  updateEditorState,
  updateEditorStateSubmit,
  updateEditorStateSuccess,
  updateEditorStateFailure,
  deleteEditorState,
  getDraftData,
};
