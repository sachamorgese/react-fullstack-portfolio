// @flow
import type { draftItem } from '../types';

export const CREATE_NEW_DRAFT = 'CREATE_NEW_DRAFT';
export const CREATE_NEW_DRAFT_SUBMIT = 'CREATE_NEW_DRAFT_SUBMIT';
export const CREATE_NEW_DRAFT_SUCCESS = 'CREATE_NEW_DRAFT_SUCCESS';
export const CREATE_NEW_DRAFT_FAILURE = 'CREATE_NEW_DRAFT_FAILURE';
export const GET_DRAFTS = 'GET_DRAFTS';
export const GET_DRAFTS_SUBMIT = 'GET_DRAFTS_SUBMIT';
export const GET_DRAFTS_SUCCESS = 'GET_DRAFTS_SUCCESS';
export const GET_DRAFTS_FAILURE = 'GET_DRAFTS_FAILURE';

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

const getDrafts = () => ({
  type: GET_DRAFTS,
});

const getDraftsSubmit = () => ({
  type: GET_DRAFTS_SUBMIT,
});

const getDraftsSuccess = (payload: Array<draftItem>) => ({
  type: GET_DRAFTS_SUCCESS,
  payload,
});

const getDraftsFailure = () => ({
  type: GET_DRAFTS_FAILURE,
});

export default {
  createNewDraft,
  createNewDraftSubmit,
  createNewDraftSuccess,
  createNewDraftFailure,
  getDrafts,
  getDraftsSubmit,
  getDraftsSuccess,
  getDraftsFailure,
};
