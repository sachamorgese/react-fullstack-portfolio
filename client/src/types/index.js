// @flow
import type { EditorState as EditorStateType } from 'draft-js';

export type draftItem = {
  _id: string,
  title: string,
};

export type blogState = {
  newDraft: boolean,
  creating: boolean,
  postId: string,
  draftId: string,
  loading: boolean,
  failed: boolean,
  drafts: Array<draftItem>,
};

export type draft = {
  title: string,
  content: EditorStateType,
  labels: Array<string>,
  publishedPost: string,
  created: string,
};

export type postComponentType = {
  editorState: EditorStateType,
  newDraft: boolean,
  title: string,
  updateEditorState: Function,
  updateTitle: Function,
  getDraftData: Function,
  saveDraftContent: Function,
  createEditorState: Function,
};

export type adminHomeComponentType = {
  createNewDraft: Function,
  getDrafts: Function,
  drafts: Array<draftItem>,
};

export type messageItem = {
  name: string,
  index: number | null,
};

export type messageState = {
  show: boolean,
  item: messageItem,
};

type CreateNewDraft = {
  type: 'CREATE_NEW_DRAFT',
  payload: void,
};

type CreateNewDraftSubmit = {
  type: 'CREATE_NEW_DRAFT_SUBMIT',
  payload: void,
};

type CreateNewDraftSuccess = {
  type: 'CREATE_NEW_DRAFT_SUCCESS',
  payload: void,
};

type CreateNewDraftFailure = {
  type: 'CREATE_NEW_DRAFT_FAILURE',
  payload: void,
};

type GetDrafts = {
  type: 'GET_DRAFTS',
  payload: void,
};

type GetDraftsSubmit = {
  type: 'GET_DRAFTS_SUBMIT',
  payload: void,
};

type GetDraftsSuccess = {
  type: 'GET_DRAFTS_SUCCESS',
  payload: Array<draftItem>,
};

type GetDraftsFailure = {
  type: 'GET_DRAFTS_FAILURE',
  payload: void,
};

type DeleteDraft = {
  type: 'DELETE_DRAFT',
  payload: string,
};

type DeleteDraftSubmit = {
  type: 'DELETE_DRAFT_SUBMIT',
  payload: void,
};

type DeleteDraftSuccess = {
  type: 'DELETE_DRAFT_SUCCESS',
  payload: Array<draftItem>,
};

type DeleteDraftFailure = {
  type: 'DELETE_DRAFT_FAILURE',
  payload: void,
};

type UpdateEditorState = {
  type: 'UPDATE_EDITOR_STATE',
  payload: EditorStateType,
};

type UpdateTitle = {
  type: 'UPDATE_TITLE',
  payload: string,
};

type SaveDraftContent = {
  type: 'SAVE_DRAFT_CONTENT',
  payload: {
    id: string,
    editorState: EditorStateType,
  },
};

type SaveDraftContentFailure = {
  type: 'SAVE_DRAFT_CONTENT_FAILURE',
  payload: void,
};

type SaveTitle = {
  type: 'SAVE_TITLE',
  payload: {
    id: string,
    title: string,
  },
};

type SaveTitleFailure = {
  type: 'SAVE_TITLE_FAILURE',
  payload: void,
};

type GetDraftData = {
  type: 'GET_DRAFT_DATA',
  payload: string,
};

type GetDraftDataSubmit = {
  type: 'GET_DRAFT_DATA_SUBMIT',
  payload: void,
};

type GetDraftDataSuccess = {
  type: 'GET_DRAFT_DATA_SUCCESS',
  payload: draft,
};

type GetDraftDataFailure = () => {
  type: 'GET_DRAFT_DATA_FAILURE',
  payload: void,
};

type CreateEditorState = {
  type: 'CREATE_EDITOR_STATE',
  payload: void,
};

type DeleteEditorState = {
  type: 'DELETE_EDITOR_STATE',
  payload: void,
};

type ShowMessage = {
  type: 'SHOW_MESSAGE',
  payload: messageItem,
};

type HideMessage = {
  type: 'HIDE_MESSAGE',
  payload: void,
};

export type Action =
  | CreateNewDraft
  | CreateNewDraftSubmit
  | CreateNewDraftSuccess
  | CreateNewDraftFailure
  | GetDrafts
  | GetDraftsSubmit
  | GetDraftsSuccess
  | GetDraftsFailure
  | DeleteDraft
  | DeleteDraftSubmit
  | DeleteDraftSuccess
  | DeleteDraftFailure
  | UpdateEditorState
  | UpdateTitle
  | SaveDraftContent
  | SaveDraftContentFailure
  | SaveTitle
  | SaveTitleFailure
  | GetDraftData
  | GetDraftDataSubmit
  | GetDraftDataSuccess
  | GetDraftDataFailure
  | CreateEditorState
  | DeleteEditorState
  | ShowMessage
  | HideMessage;
