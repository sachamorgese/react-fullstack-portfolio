// @flow
import type { EditorState as EditorStateType } from 'draft-js';
import type { PostItemType, PostStateType, MessageItemType } from './state';

type CreateNewDraftType = {
  type: 'CREATE_NEW_DRAFT',
};
type CreateNewDraftSubmitType = {
  type: 'CREATE_NEW_DRAFT_SUBMIT',
};
type CreateNewDraftSuccessType = {
  type: 'CREATE_NEW_DRAFT_SUCCESS',
};
type CreateNewDraftFailureType = {
  type: 'CREATE_NEW_DRAFT_FAILURE',
};
type CreateNewDraftAndDeleteType = {
  type: 'CREATE_NEW_DRAFT_AND_DELETE',
};
type GetAllPostsType = {
  type: 'GET_ALL_POSTS',
};
type GetAllPostsSubmitType = {
  type: 'GET_ALL_POSTS_SUBMIT',
};
export type AllPostsType = {
  blogPosts: Array<PostItemType>,
  drafts: Array<PostItemType>,
};
type GetAllPostsSuccessType = {
  type: 'GET_ALL_POSTS_SUCCESS',
  payload: AllPostsType,
};
type GetAllPostsFailureType = {
  type: 'GET_ALL_POSTS_FAILURE',
};
type GetDraftsSubmitType = {
  type: 'GET_DRAFTS_SUBMIT',
};
type GetDraftsSuccessType = {
  type: 'GET_DRAFTS_SUCCESS',
  payload: Array<PostItemType>,
};
type GetDraftsFailureType = {
  type: 'GET_DRAFTS_FAILURE',
};
type DeleteDraftType = {
  type: 'DELETE_DRAFT',
  payload: string,
};
type DeleteDraftSubmitType = {
  type: 'DELETE_DRAFT_SUBMIT',
};
type DeleteDraftSuccessType = {
  type: 'DELETE_DRAFT_SUCCESS',
};

type DeleteDraftFailureType = {
  type: 'DELETE_DRAFT_FAILURE',
};
type UpdateEditorStateType = {
  type: 'UPDATE_EDITOR_STATE',
  payload: EditorStateType,
};
type UpdateTitleType = {
  type: 'UPDATE_TITLE',
  payload: string,
};
type SaveDraftContentType = {
  type: 'SAVE_DRAFT_CONTENT',
  payload: {
    id: string,
    editorState: EditorStateType,
  },
};
type SaveDraftContentFailureType = {
  type: 'SAVE_DRAFT_CONTENT_FAILURE',
};
type SaveTitleType = {
  type: 'SAVE_TITLE',
  payload: {
    id: string,
    title: string,
  },
};
type SaveTitleFailureType = {
  type: 'SAVE_TITLE_FAILURE',
};
type GetDraftDataType = {
  type: 'GET_DRAFT_DATA',
  payload: string,
};
type GetDraftDataSubmitType = {
  type: 'GET_DRAFT_DATA_SUBMIT',
};
type GetDraftDataSuccessType = {
  type: 'GET_DRAFT_DATA_SUCCESS',
  payload: PostStateType,
};
type GetDraftDataFailureType = {
  type: 'GET_DRAFT_DATA_FAILURE',
};
type CreateEditorStateType = {
  type: 'CREATE_EDITOR_STATE',
};
type DeleteEditorStateType = {
  type: 'DELETE_EDITOR_STATE',
};
type ShowMessageType = {
  type: 'SHOW_MESSAGE',
  payload: MessageItemType,
};
type HideMessageType = {
  type: 'HIDE_MESSAGE',
};
type GetBlogPostsType = {
  type: 'GET_BLOG_POSTS',
};
type GetBlogPostsSubmitType = {
  type: 'GET_BLOG_POSTS_SUBMIT',
};
type GetBlogPostsSuccessType = {
  type: 'GET_BLOG_POSTS_SUCCESS',
  payload: Array<PostItemType>,
};
type GetBlogPostsFailureType = {
  type: 'GET_BLOG_POSTS_FAILURE',
};
type PostBlogPostPayloadType = {
  id: string,
  content: EditorStateType,
};
type PostBlogPostType = {
  type: 'POST_BLOG_POST',
  payload: PostBlogPostPayloadType,
};
type PostBlogPostSubmitType = {
  type: 'POST_BLOG_POST_SUBMIT',
};
type PostBlogPostSuccessType = {
  type: 'POST_BLOG_POST_SUCCESS',
};
type PostBlogPostFailureType = {
  type: 'POST_BLOG_POST_FAILURE',
};
type UpdateBlogPostType = {
  type: 'UPDATE_BLOG_POST',
  payload: {
    draftId: string,
  },
};

type UpdateBlogPostSubmitType = {
  type: 'UPDATE_BLOG_POST_SUBMIT',
};

type UpdateBlogPostSuccessType = {
  type: 'UPDATE_BLOG_POST_SUCCESS',
};

type UpdateBlogPostFailureType = {
  type: 'UPDATE_BLOG_POST_FAILURE',
};

type GetBlogPostDataType = {
  type: 'GET_BLOG_POST_DATA',
  payload: string,
};
type GetBlogPostDataSubmitType = {
  type: 'GET_BLOG_POST_DATA_SUBMIT',
};
type GetBlogPostDataSuccessType = {
  type: 'GET_BLOG_POST_DATA_SUCCESS',
  payload: PostStateType,
};
type GetBlogPostDataFailureType = {
  type: 'GET_BLOG_POST_DATA_FAILURE',
};
type ClearPostDataType = {
  type: 'CLEAR_POST_DATA',
};
type FetchUserType = {
  type: 'FETCH_USER',
};
type FetchUserSubmitType = {
  type: 'FETCH_USER_SUBMIT',
};

export type UserDataType = {
  role: string,
  name: string,
  email: string,
};

type FetchUserSuccessType = {
  type: 'FETCH_USER_SUCCESS',
  payload: UserDataType,
};
type FetchUserFailureType = {
  type: 'FETCH_USER_FAILURE',
};

type DeleteBlogPostType = {
  type: 'DELETE_BLOG_POST',
  payload: string,
};

type DeleteBlogPostSubmitType = {
  type: 'DELETE_BLOG_POST_SUBMIT',
};

type DeleteBlogPostSuccessType = {
  type: 'DELETE_BLOG_POST_SUCCESS',
};

type DeleteBlogPostFailureType = {
  type: 'DELETE_BLOG_POST_FAILURE',
};

export type ActionType =
  | CreateNewDraftType
  | CreateNewDraftSubmitType
  | CreateNewDraftSuccessType
  | CreateNewDraftFailureType
  | CreateNewDraftAndDeleteType
  | GetAllPostsType
  | GetAllPostsSubmitType
  | GetAllPostsSuccessType
  | GetAllPostsFailureType
  | GetDraftsSubmitType
  | GetDraftsSuccessType
  | GetDraftsFailureType
  | DeleteDraftType
  | DeleteDraftSubmitType
  | DeleteDraftSuccessType
  | DeleteDraftFailureType
  | UpdateEditorStateType
  | UpdateTitleType
  | SaveDraftContentType
  | SaveDraftContentFailureType
  | SaveTitleType
  | SaveTitleFailureType
  | GetDraftDataType
  | GetDraftDataSubmitType
  | GetDraftDataSuccessType
  | GetDraftDataFailureType
  | CreateEditorStateType
  | DeleteEditorStateType
  | ShowMessageType
  | HideMessageType
  | GetBlogPostsType
  | GetBlogPostsSubmitType
  | GetBlogPostsSuccessType
  | GetBlogPostsFailureType
  | PostBlogPostType
  | PostBlogPostSubmitType
  | PostBlogPostSuccessType
  | PostBlogPostFailureType
  | UpdateBlogPostType
  | UpdateBlogPostSubmitType
  | UpdateBlogPostSuccessType
  | UpdateBlogPostFailureType
  | GetBlogPostDataType
  | GetBlogPostDataSubmitType
  | GetBlogPostDataSuccessType
  | GetBlogPostDataFailureType
  | ClearPostDataType
  | FetchUserType
  | FetchUserSubmitType
  | FetchUserSuccessType
  | FetchUserFailureType
  | DeleteBlogPostType
  | DeleteBlogPostSubmitType
  | DeleteBlogPostSuccessType
  | DeleteBlogPostFailureType;
