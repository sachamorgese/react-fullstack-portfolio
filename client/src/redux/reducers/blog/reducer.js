// @flow
import {
  CREATE_NEW_DRAFT_SUBMIT,
  CREATE_NEW_DRAFT_SUCCESS,
  CREATE_NEW_DRAFT_FAILURE,
} from './actions';
import { blogState, action } from '../types';

const initialState = {
  newDraft: false,
  creating: false,
  postId: '',
  draftId: '',
};

export default function(state: blogState = initialState, { type }: action) {
  switch (type) {
    case CREATE_NEW_DRAFT_SUBMIT:
      return {
        ...state,
        new: true,
        creating: true,
      };
    case CREATE_NEW_DRAFT_SUCCESS:
      return {
        ...state,
        creating: false,
      };
    case CREATE_NEW_DRAFT_FAILURE:
      return {
        ...state,
        creating: false,
        new: false,
      };
    default:
      return state;
  }
}
