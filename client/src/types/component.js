import type { EditorState as EditorStateType } from 'draft-js';
import type { MessageItem, MessageState, PostItem } from './state';

export type DraftComponentType = {
  editorState: EditorStateType,
  newDraft: boolean,
  title: string,
  updateEditorState: Function,
  updateTitle: Function,
  getDraftData: Function,
  saveDraftContent: Function,
  createEditorState: Function,
  failed: boolean,
  saveTitle: Function,
  postBlogPost: Function,
  match: any,
};

export type AdminHomeComponentType = {
  createNewDraft: Function,
  getDrafts: Function,
  drafts: Array<PostItem>,
  showMessage: Function,
  hideMessage: Function,
  deleteDraft: Function,
  message: MessageState,
};

type LinksType = {
  title: string,
  _id: string,
};

export type LinksListType = {
  listName: 'Drafts' | 'Blogs',
  listArray: Array<LinksType>,
  messageItem: MessageItem,
  deleteDraft: Function,
  hideMessage: Function,
  onDeleteClick: Function,
  linkType: 'draft' | 'blog',
};

export type PostEditorType = {
  updateEditorState: Function,
  editorState: EditorStateType,
  saveDraftContent: Function,
  postBlogPost: Function,
  id: string,
  history: Object,
};
