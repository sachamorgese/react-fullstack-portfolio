// @flow
import type { PostItem } from '../../../types/state';

export const CREATE_NEW_DRAFT = 'CREATE_NEW_DRAFT';
export const CREATE_NEW_DRAFT_SUBMIT = 'CREATE_NEW_DRAFT_SUBMIT';
export const CREATE_NEW_DRAFT_SUCCESS = 'CREATE_NEW_DRAFT_SUCCESS';
export const CREATE_NEW_DRAFT_FAILURE = 'CREATE_NEW_DRAFT_FAILURE';
export const GET_ALL_BLOG_POSTS = 'GET_ALL_BLOG_POSTS';
export const GET_ALL_BLOG_POSTS_SUBMIT = 'GET_ALL_BLOG_POSTS_SUBMIT';
export const GET_DRAFTS_SUCCESS = 'GET_DRAFTS_SUCCESS';
export const GET_DRAFTS_FAILURE = 'GET_DRAFTS_FAILURE';
export const GET_BLOG_POSTS_SUCCESS = 'GET_BLOG_POSTS_SUCCESS';
export const GET_BLOG_POSTS_FAILURE = 'GET_BLOG_POSTS_FAILURE';
export const DELETE_DRAFT = 'DELETE_DRAFT';
export const DELETE_DRAFT_SUBMIT = 'DELETE_DRAFT_SUBMIT';
export const DELETE_DRAFT_SUCCESS = 'DELETE_DRAFT_SUCCESS';
export const DELETE_DRAFT_FAILURE = 'DELETE_DRAFT_FAILURE';
export const DELETE_BLOG_POST = 'DELETE_BLOG_POST';
export const DELETE_BLOG_POST_SUBMIT = 'DELETE_BLOG_POST_SUBMIT';
export const DELETE_BLOG_POST_SUCCESS = 'DELETE_BLOG_POST_SUCCESS';
export const DELETE_BLOG_POST_FAILURE = 'DELETE_BLOG_POST_FAILURE';

const createNewDraft = () => ({
  type: CREATE_NEW_DRAFT,
});

const createNewDraftSubmit = () => ({
  type: CREATE_NEW_DRAFT_SUBMIT,
});

const createNewDraftSuccess = () => ({
  type: CREATE_NEW_DRAFT_SUCCESS,
});

const createNewDraftFailure = () => ({
  type: CREATE_NEW_DRAFT_FAILURE,
});

const getAllPosts = () => ({
  type: GET_ALL_BLOG_POSTS,
});

const getAllPostsSubmit = () => ({
  type: GET_ALL_BLOG_POSTS_SUBMIT,
});

const getDraftsSuccess = (payload: Array<PostItem>) => ({
  type: GET_DRAFTS_SUCCESS,
  payload,
});

const getDraftsFailure = () => ({
  type: GET_DRAFTS_FAILURE,
});

const getBlogPostsSuccess = (payload: Array<PostItem>) => ({
  type: GET_BLOG_POSTS_SUCCESS,
  payload,
});

const getBlogPostsFailure = () => ({
  type: GET_BLOG_POSTS_FAILURE,
});

const deleteDraft = (id: string) => ({
  type: DELETE_DRAFT,
  payload: id,
});

const deleteDraftSubmit = () => ({
  type: DELETE_DRAFT_SUBMIT,
});

const deleteDraftSuccess = () => ({
  type: DELETE_DRAFT_SUCCESS,
});

const deleteDraftFailure = () => ({
  type: DELETE_DRAFT_FAILURE,
});

const deleteBlogPost = (id: string) => ({
  type: DELETE_BLOG_POST,
  payload: id,
});

const deleteBlogPostSubmit = () => ({
  type: DELETE_BLOG_POST_SUBMIT,
});

const deleteBlogPostSuccess = () => ({
  type: DELETE_BLOG_POST_SUCCESS,
});

const deleteBlogPostFailure = () => ({
  type: DELETE_BLOG_POST_FAILURE,
});

export default {
  createNewDraft,
  createNewDraftSubmit,
  createNewDraftSuccess,
  createNewDraftFailure,
  getAllPosts,
  getAllPostsSubmit,
  getDraftsSuccess,
  getDraftsFailure,
  getBlogPostsSuccess,
  getBlogPostsFailure,
  deleteDraft,
  deleteDraftSubmit,
  deleteDraftSuccess,
  deleteDraftFailure,
  deleteBlogPost,
  deleteBlogPostSubmit,
  deleteBlogPostSuccess,
  deleteBlogPostFailure,
};
