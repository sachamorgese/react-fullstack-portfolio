import { Dispatch as ReduxDispatch } from 'redux';
import type { EditorState as EditorStateType } from 'draft-js';
import type { Action } from './action';

export type PostItem = {
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
  drafts: Array<PostItem>,
  posts: Array<PostItem>,
};
export type PostState = {
  title: string,
  content: EditorStateType,
  labels: Array<string>,
  created: string,
};
export type MessageState = {
  show: boolean,
  item: MessageItem,
};

export type AuthState = {
  isLoading: boolean,
  isLoggedIn: boolean,
  role: string,
  name: string,
  email: string,
};

export type State = BlogState | MessageState | PostState | AuthState;
export type Dispatch = ReduxDispatch<Action>;
