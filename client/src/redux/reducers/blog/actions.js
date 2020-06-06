// @flow
import type { PostItemType } from '../../../types/state';
import type { ActionType, AllPostsType } from '../../../types/actionType';

export const CREATE_NEW_DRAFT = 'CREATE_NEW_DRAFT';
export const CREATE_NEW_DRAFT_SUBMIT = 'CREATE_NEW_DRAFT_SUBMIT';
export const CREATE_NEW_DRAFT_SUCCESS = 'CREATE_NEW_DRAFT_SUCCESS';
export const CREATE_NEW_DRAFT_FAILURE = 'CREATE_NEW_DRAFT_FAILURE';
export const CREATE_NEW_DRAFT_AND_DELETE = 'CREATE_NEW_DRAFT_AND_DELETE';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_ALL_POSTS_SUBMIT = 'GET_ALL_POSTS_SUBMIT';
export const GET_ALL_POSTS_SUCCESS = 'GET_ALL_POSTS_SUCCESS';
export const GET_ALL_POSTS_FAILURE = 'GET_ALL_POSTS_FAILURE';
export const GET_DRAFTS_SUCCESS = 'GET_DRAFTS_SUCCESS';
export const GET_DRAFTS_FAILURE = 'GET_DRAFTS_FAILURE';
export const GET_BLOG_POSTS = 'GET_BLOG_POSTS';
export const GET_BLOG_POSTS_SUBMIT = 'GET_BLOG_POSTS_SUBMIT';
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

const createNewDraft = (): ActionType => ({
  type: CREATE_NEW_DRAFT,
});

const createNewDraftSubmit = (): ActionType => ({
  type: CREATE_NEW_DRAFT_SUBMIT,
});

const createNewDraftSuccess = (): ActionType => ({
  type: CREATE_NEW_DRAFT_SUCCESS,
});

const createNewDraftFailure = (): ActionType => ({
  type: CREATE_NEW_DRAFT_FAILURE,
});

const createNewDraftAndDelete = (): ActionType => ({
  type: CREATE_NEW_DRAFT_AND_DELETE,
});

const getAllPosts = (): ActionType => ({
  type: GET_ALL_POSTS,
});

const getAllPostsSubmit = (): ActionType => ({
  type: GET_ALL_POSTS_SUBMIT,
});

const getAllPostsSuccess = ({
  blogPosts,
  drafts,
}: AllPostsType): ActionType => ({
  type: GET_ALL_POSTS_SUCCESS,
  payload: {
    blogPosts,
    drafts,
  },
});

const getAllPostsFailure = (): ActionType => ({
  type: GET_ALL_POSTS_FAILURE,
});

const getDraftsSuccess = (payload: Array<PostItemType>): ActionType => ({
  type: GET_DRAFTS_SUCCESS,
  payload,
});

const getDraftsFailure = (): ActionType => ({
  type: GET_DRAFTS_FAILURE,
});

const getBlogPosts = (): ActionType => ({
  type: GET_BLOG_POSTS,
})

const getBlogPostsSubmit = (): ActionType => ({
  type: GET_BLOG_POSTS_SUBMIT,
});

const getBlogPostsSuccess = (payload: Array<PostItemType>): ActionType => ({
  type: GET_BLOG_POSTS_SUCCESS,
  payload,
});

const getBlogPostsFailure = (): ActionType => ({
  type: GET_BLOG_POSTS_FAILURE,
});

const deleteDraft = (id: string): ActionType => ({
  type: DELETE_DRAFT,
  payload: id,
});

const deleteDraftSubmit = (): ActionType => ({
  type: DELETE_DRAFT_SUBMIT,
});

const deleteDraftSuccess = (): ActionType => ({
  type: DELETE_DRAFT_SUCCESS,
});

const deleteDraftFailure = (): ActionType => ({
  type: DELETE_DRAFT_FAILURE,
});

const deleteBlogPost = (id: string): ActionType => ({
  type: DELETE_BLOG_POST,
  payload: id,
});

const deleteBlogPostSubmit = (): ActionType => ({
  type: DELETE_BLOG_POST_SUBMIT,
});

const deleteBlogPostSuccess = (): ActionType => ({
  type: DELETE_BLOG_POST_SUCCESS,
});

const deleteBlogPostFailure = (): ActionType => ({
  type: DELETE_BLOG_POST_FAILURE,
});

export default {
  createNewDraft,
  createNewDraftSubmit,
  createNewDraftSuccess,
  createNewDraftFailure,
  createNewDraftAndDelete,
  getAllPosts,
  getAllPostsSubmit,
  getAllPostsSuccess,
  getAllPostsFailure,
  getDraftsSuccess,
  getDraftsFailure,
  getBlogPosts,
  getBlogPostsSubmit,
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
