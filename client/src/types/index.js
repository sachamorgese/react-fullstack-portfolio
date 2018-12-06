// @flow
import type { EditorState as EditorStateType } from 'draft-js';
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

export type DraftItem = {
  _id: string,
  title: string,
};

export type MessageItem = {
  name: string,
  index: number | null,
};

export type BlogState = {
  newDraft: boolean,
  creating: boolean,
  postId: string,
  draftId: string,
  loading: boolean,
  failed: boolean,
  drafts: Array<DraftItem>,
};

export type DraftState = {
  title: string,
  content: EditorStateType,
  labels: Array<string>,
  publishedPost: string,
  created: string,
};

export type MessageState = {
  show: boolean,
  item: MessageItem,
};

export type PostComponentType = {
  editorState: EditorStateType,
  newDraft: boolean,
  title: string,
  updateEditorState: Function,
  updateTitle: Function,
  getDraftData: Function,
  saveDraftContent: Function,
  createEditorState: Function,
};

export type AdminHomeComponentType = {
  createNewDraft: Function,
  getDrafts: Function,
  drafts: Array<DraftItem>,
  showMessage: Function,
  hideMessage: Function,
  deleteDraft: Function,
  message: MessageState,
};

type CreateNewDraft = {
  type: 'CREATE_NEW_DRAFT',
};

type CreateNewDraftSubmit = {
  type: 'CREATE_NEW_DRAFT_SUBMIT',
};

type CreateNewDraftSuccess = {
  type: 'CREATE_NEW_DRAFT_SUCCESS',
};

type CreateNewDraftFailure = {
  type: 'CREATE_NEW_DRAFT_FAILURE',
};

type GetDrafts = {
  type: 'GET_DRAFTS',
};

type GetDraftsSubmit = {
  type: 'GET_DRAFTS_SUBMIT',
};

type GetDraftsSuccess = {
  type: 'GET_DRAFTS_SUCCESS',
  payload: Array<DraftItem>,
};

type GetDraftsFailure = {
  type: 'GET_DRAFTS_FAILURE',
};

type DeleteDraft = {
  type: 'DELETE_DRAFT',
  payload: string,
};

type DeleteDraftSubmit = {
  type: 'DELETE_DRAFT_SUBMIT',
};

type DeleteDraftSuccess = {
  type: 'DELETE_DRAFT_SUCCESS',
  payload: Array<DraftItem>,
};

type DeleteDraftFailure = {
  type: 'DELETE_DRAFT_FAILURE',
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
};

type GetDraftData = {
  type: 'GET_DRAFT_DATA',
  payload: string,
};

type GetDraftDataSubmit = {
  type: 'GET_DRAFT_DATA_SUBMIT',
};

type GetDraftDataSuccess = {
  type: 'GET_DRAFT_DATA_SUCCESS',
  payload: DraftState,
};

type GetDraftDataFailure = {
  type: 'GET_DRAFT_DATA_FAILURE',
};

type CreateEditorState = {
  type: 'CREATE_EDITOR_STATE',
};

type DeleteEditorState = {
  type: 'DELETE_EDITOR_STATE',
};

type ShowMessage = {
  type: 'SHOW_MESSAGE',
  payload: MessageItem,
};

type HideMessage = {
  type: 'HIDE_MESSAGE',
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

export type State = BlogState | MessageState | DraftState;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;
