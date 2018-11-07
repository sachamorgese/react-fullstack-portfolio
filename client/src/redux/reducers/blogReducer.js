// @flow
import { CREATE_NEW_DRAFT_SUBMIT } from './actions';

const initialState = {
  creating: false,
  postId: '',
  draftId: '',
};

export default function(state = initialState, { payload, type }) {
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
