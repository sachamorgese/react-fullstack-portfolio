import type { EditorState as EditorStateType } from 'draft-js';
import type { PostItem, PostState, MessageItem } from './state';

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
type GetAllPosts = {
  type: 'GET_ALL_POSTS',
};
type GetDraftsSubmit = {
  type: 'GET_DRAFTS_SUBMIT',
};
type GetDraftsSuccess = {
  type: 'GET_DRAFTS_SUCCESS',
  payload: Array<PostItem>,
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
  payload: Array<PostItem>,
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
  payload: PostState,
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
type GetBlogPostsSubmit = {
  type: 'GET_BLOGPOSTS_SUBMIT',
};
type GetBlogPostsSuccess = {
  type: 'GET_BLOGPOSTS_SUCCESS',
  payload: Array<PostItem>,
};
type GetBlogPostsFailure = {
  type: 'GET_BLOGPOSTS_FAILURE',
};
type PostBlogPostType = {
  id: string,
  content: EditorStateType,
};
type PostBlogPost = {
  type: 'POST_BLOGPOST',
  payload: PostBlogPostType,
};
type PostBlogPostSubmit = {
  type: 'POST_BLOGPOST_SUBMIT',
};
type PostBlogPostSuccess = {
  type: 'POST_BLOGPOST_SUCCESS',
};
type PostBlogPostFailure = {
  type: 'POST_BLOGPOST_FAILURE',
};
type GetBlogPostData = {
  type: 'GET_BLOGPOST_DATA',
  payload: string,
};
type GetBlogPostDataSubmit = {
  type: 'GET_BLOGPOST_DATA_SUBMIT',
};
type GetBlogPostDataSuccess = {
  type: 'GET_BLOGPOST_DATA_SUCCESS',
  payload: PostState,
};
type GetBlogPostDataFailure = {
  type: 'GET_BLOGPOST_DATA_FAILURE',
};

export type Action =
  | CreateNewDraft
  | CreateNewDraftSubmit
  | CreateNewDraftSuccess
  | CreateNewDraftFailure
  | GetAllPosts
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
  | HideMessage
  | GetBlogPostsSubmit
  | GetBlogPostsSuccess
  | GetBlogPostsFailure
  | PostBlogPost
  | PostBlogPostSubmit
  | PostBlogPostSuccess
  | PostBlogPostFailure
  | GetBlogPostData
  | GetBlogPostDataSubmit
  | GetBlogPostDataSuccess
  | GetBlogPostDataFailure;
