// @flow
import { CREATE_NEW_DRAFT_SUBMIT } from './actions';
import { blogState } from './types';

const initialState = {
  creating: false,
  postId: '',
  draftId: '',
};

export default function(state: blogState = initialState, { payload, type }) {
  switch (type) {
    case CREATE_NEW_DRAFT_SUBMIT:
      return {
        ...state,
        creating: true,
      };
    default:
      return state;
  }
}
