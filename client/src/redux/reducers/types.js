import type { EditorState as EditorStateType } from 'draft-js';

export type blogState = {
  creating: boolean,
  postId: string,
  draftId: string,
};

export type draft = {
  title: string,
  content: EditorStateType,
  labels: Array<string>,
  publishedPost: string,
  created: string,
};
