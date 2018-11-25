// @flow
import type { EditorState } from 'draft-js';
import type { draft as draftType } from '../types';

export const UPDATE_EDITOR_STATE = 'UPDATE_EDITOR_STATE';
export const UPDATE_TITLE = 'UPDATE_TITLE';
export const GET_DRAFT_DATA = 'GET_DRAFT_DATA';
export const GET_DRAFT_DATA_SUBMIT = 'GET_DRAFT_DATA_SUBMIT';
export const GET_DRAFT_DATA_SUCCESS = 'GET_DRAFT_DATA_SUCCESS';
export const GET_DRAFT_DATA_FAILURE = 'GET_DRAFT_DATA_FAILURE';
export const SAVE_DRAFT_CONTENT = 'SAVE_DRAFT_CONTENT';
export const SAVE_DRAFT_CONTENT_FAILURE = 'SAVE_DRAFT_CONTENT_FAILURE';
export const SAVE_TITLE = 'SAVE_TITLE';
export const SAVE_TITLE_FAILURE = 'SAVE_TITLE_FAILURE';
export const CREATE_EDITOR_STATE = 'CREATE_EDITOR_STATE';
export const DELETE_EDITOR_STATE = 'DELETE_EDITOR_STATE';

const updateEditorState = (content: EditorState) => ({
  type: UPDATE_EDITOR_STATE,
  payload: content,
});

const updateTitle = (payload: string) => ({
  type: UPDATE_TITLE,
  payload,
});

const saveDraftContent = (id: string, editorState: EditorState) => ({
  type: SAVE_DRAFT_CONTENT,
  payload: {
    id,
    editorState,
  },
});

const saveDraftContentFailure = () => ({
  type: SAVE_DRAFT_CONTENT_FAILURE,
});

const saveTitle = (id: string, title: string) => ({
  type: SAVE_TITLE,
  payload: {
    id,
    title,
  },
});

const saveTitleFailure = () => ({
  type: SAVE_TITLE_FAILURE,
});

const getDraftData = (payload: string) => ({
  type: GET_DRAFT_DATA,
  payload,
});

const getDraftDataSubmit = () => ({
  type: GET_DRAFT_DATA_SUBMIT,
});

const getDraftDataSuccess = (draft: draftType) => ({
  type: GET_DRAFT_DATA_SUCCESS,
  payload: draft,
});

const getDraftDataFailure = () => ({
  type: GET_DRAFT_DATA_FAILURE,
});

const createEditorState = () => ({
  type: CREATE_EDITOR_STATE,
});

const deleteEditorState = () => ({
  type: DELETE_EDITOR_STATE,
});

export default {
  updateEditorState,
  updateTitle,
  saveDraftContent,
  saveDraftContentFailure,
  saveTitle,
  saveTitleFailure,
  getDraftData,
  getDraftDataSubmit,
  getDraftDataSuccess,
  getDraftDataFailure,
  createEditorState,
  deleteEditorState,
};
