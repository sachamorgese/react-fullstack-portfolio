// @flow

import { Dispatch as ReduxDispatch } from 'redux';
import type { EditorState as EditorStateType } from 'draft-js';
import type { ActionType } from './actionType';

export type PostItemType = {
  _id: string,
  title: string,
};

export type MessageItemType = {
  name: string,
  index: number | null,
};

export type BlogStateType = {
  newDraft: boolean,
  creating: boolean,
  loading: boolean,
  failed: boolean,
  drafts: Array<PostItemType>,
  blogPosts: Array<PostItemType>,
};

export type PostStateType = {
  title: string,
  content: EditorStateType,
  labels: Array<string>,
  created: string,
};

export type MessageStateType = {
  show: boolean,
  item: MessageItemType,
};

export type AuthStateType = {
  isLoading: boolean,
  isLoggedIn: boolean,
  role: string,
  name: string,
  email: string,
};

export type StateType =
  | BlogStateType
  | MessageStateType
  | PostStateType
  | AuthStateType;
export type DispatchType = ReduxDispatch<ActionType>;
