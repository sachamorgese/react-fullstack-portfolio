// @flow
import type { EditorState } from 'draft-js';
import type { PostStateType } from '../../../types/state';
import type { ActionType } from '../../../types/actionType';

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
export const POST_BLOG_POST = 'POST_BLOG_POST';
export const POST_BLOG_POST_SUBMIT = 'POST_BLOG_POST_SUBMIT';
export const POST_BLOG_POST_SUCCESS = 'POST_BLOG_POST_SUCCESS';
export const POST_BLOG_POST_FAILURE = 'POST_BLOG_POST_FAILURE';
export const UPDATE_BLOG_POST = 'UPDATE_BLOG_POST';
export const UPDATE_BLOG_POST_SUBMIT = 'UPDATE_BLOG_POST_SUBMIT';
export const UPDATE_BLOG_POST_SUCCESS = 'UPDATE_BLOG_POST_SUCCESS';
export const UPDATE_BLOG_POST_FAILURE = 'UPDATE_BLOG_POST_FAILURE';
export const GET_BLOG_POST_DATA = 'GET_BLOG_POST_DATA';
export const GET_BLOG_POST_DATA_SUBMIT = 'GET_BLOG_POST_DATA_SUBMIT';
export const GET_BLOG_POST_DATA_SUCCESS = 'GET_BLOG_POST_DATA_SUCCESS';
export const GET_BLOG_POST_DATA_FAILURE = 'GET_BLOG_POST_DATA_FAILURE';
export const CLEAR_POST_DATA = 'CLEAR_POST_DATA';

const updateEditorState = (content: EditorState): ActionType => ({
  type: UPDATE_EDITOR_STATE,
  payload: content,
});

const updateTitle = (payload: string): ActionType => ({
  type: UPDATE_TITLE,
  payload,
});

const saveDraftContent = (
  id: string,
  editorState: EditorState,
): ActionType => ({
  type: SAVE_DRAFT_CONTENT,
  payload: {
    id,
    editorState,
  },
});

const saveDraftContentFailure = (): ActionType => ({
  type: SAVE_DRAFT_CONTENT_FAILURE,
});

const saveTitle = (id: string, title: string): ActionType => ({
  type: SAVE_TITLE,
  payload: {
    id,
    title,
  },
});

const saveTitleFailure = (): ActionType => ({
  type: SAVE_TITLE_FAILURE,
});

const getDraftData = (payload: string): ActionType => ({
  type: GET_DRAFT_DATA,
  payload,
});

const getDraftDataSubmit = (): ActionType => ({
  type: GET_DRAFT_DATA_SUBMIT,
});

const getDraftDataSuccess = (draft: PostStateType): ActionType => ({
  type: GET_DRAFT_DATA_SUCCESS,
  payload: draft,
});

const getDraftDataFailure = (): ActionType => ({
  type: GET_DRAFT_DATA_FAILURE,
});

const createEditorState = (): ActionType => ({
  type: CREATE_EDITOR_STATE,
});

const deleteEditorState = (): ActionType => ({
  type: DELETE_EDITOR_STATE,
});

const postBlogPost = (id: string, content: EditorState): ActionType => ({
  type: POST_BLOG_POST,
  payload: {
    id,
    content,
  },
});

const postBlogPostSubmit = (): ActionType => ({
  type: POST_BLOG_POST_SUBMIT,
});

const postBlogPostSuccess = (): ActionType => ({
  type: POST_BLOG_POST_SUCCESS,
});

const postBlogPostFailure = (): ActionType => ({
  type: POST_BLOG_POST_FAILURE,
});

const updateBlogPost = (draftId: string): ActionType => ({
  type: UPDATE_BLOG_POST,
  payload: {
    draftId,
  },
});

const updateBlogPostSubmit = (): ActionType => ({
  type: UPDATE_BLOG_POST_SUBMIT,
});

const updateBlogPostSuccess = (): ActionType => ({
  type: UPDATE_BLOG_POST_SUCCESS,
});

const updateBlogPostFailure = (): ActionType => ({
  type: UPDATE_BLOG_POST_FAILURE,
});

const getBlogPostData = (payload: string): ActionType => ({
  type: GET_BLOG_POST_DATA,
  payload,
});

const getBlogPostDataSubmit = (): ActionType => ({
  type: GET_BLOG_POST_DATA_SUBMIT,
});

const getBlogPostDataSuccess = (blogPost: PostStateType): ActionType => ({
  type: GET_BLOG_POST_DATA_SUCCESS,
  payload: blogPost,
});

const getBlogPostDataFailure = (): ActionType => ({
  type: GET_BLOG_POST_DATA_FAILURE,
});

const clearPostData = (): ActionType => ({
  type: CLEAR_POST_DATA,
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
  postBlogPost,
  postBlogPostSubmit,
  postBlogPostSuccess,
  postBlogPostFailure,
  updateBlogPost,
  updateBlogPostSubmit,
  updateBlogPostSuccess,
  updateBlogPostFailure,
  getBlogPostData,
  getBlogPostDataSubmit,
  getBlogPostDataSuccess,
  getBlogPostDataFailure,
  clearPostData,
};
