// @flow

import type { EditorState as EditorStateType } from 'draft-js';
import type { MessageItemType, PostItemType } from './state';
import type { ActionType } from './actionType';

export type RoleType = 'admin' | 'mod' | 'user';

export type BasicActionType = () => ActionType;

type ActionWithArgsType = <T, K>(T, K) => ActionType;

export type HistoryType = {
  ...History,
  listen: (() => void) => void,
};

export type BlogPostType = {
  loading: boolean,
  title: string,
  failed: boolean,
  history: HistoryType,
  clearPostData: ActionWithArgsType,
  match: any,
  getBlogPostData: (string) => void,
  content: EditorStateType,
  role: RoleType,
  createNewDraft: (?string) => void,
};

export type DraftComponentType = {
  editorState: EditorStateType,
  newDraft: boolean,
  title: string,
  updateEditorState: (EditorStateType) => ActionType,
  updateTitle: ActionWithArgsType,
  getDraftData: ActionWithArgsType,
  saveDraftContent: (string, EditorStateType) => ActionType,
  createEditorState: ActionWithArgsType,
  failed: boolean,
  saveTitle: ActionWithArgsType,
  postBlogPost: ActionWithArgsType,
  history: HistoryType,
  clearPostData: ActionWithArgsType,
  match: any,
  getBlogPostData: (string) => void,
  content: EditorStateType,
  role: RoleType,
  createNewDraft: (?string) => void,
  loading: boolean,
};

export type AdminHomeComponentType = {
  createNewDraft: BasicActionType,
  deleteBlogPost: ActionWithArgsType,
  getDrafts: ActionWithArgsType,
  getAllPosts: () => void,
  drafts: Array<PostItemType>,
  blogPosts: Array<PostItemType>,
  loading: boolean,
  showMessage: ActionWithArgsType,
  hideMessage: ActionWithArgsType,
  deleteDraft: ActionWithArgsType,
  messageItem: MessageItemType,
};

export type LinksType = {
  title: string,
  _id: string,
};

export type LinksListType = {
  listName: 'Drafts' | 'BlogPosts',
  listArray: Array<LinksType>,
  messageItem: MessageItemType,
  deleteEntry: ActionWithArgsType,
  hideMessage: ActionWithArgsType,
  onDeleteClick: (string, number) => void,
  linkType: 'draft' | 'post',
};

export type PostEditorType = {
  updateEditorState: ActionWithArgsType,
  editorState: EditorStateType,
  saveDraftContent: ActionWithArgsType,
  postBlogPost: ActionWithArgsType,
  id: string,
  history: HistoryType,
};

export type BlogButtonType = {
  label: string,
  onClick: () => void | ActionType,
};

export type PopUpType = {
  popUpClass: string,
  children: Array<React$Element<any>>,
  onClickYes: () => ActionType,
  onClickNo: () => ActionType,
};
