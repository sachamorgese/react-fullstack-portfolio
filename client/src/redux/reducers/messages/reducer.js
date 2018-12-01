// @flow
import { SHOW_MESSAGE, HIDE_MESSAGE } from './actions';
import type { messageState, action } from '../../../types';

const initialState = {
  show: false,
  item: {
    name: '',
    index: null,
  },
};

export default function(
  state: messageState = initialState,
  { type, payload }: action,
) {
  switch (type) {
    case SHOW_MESSAGE:
      return {
        ...state,
        show: true,
        item: payload,
      };
    case HIDE_MESSAGE: {
      return {
        ...state,
        ...initialState,
      };
    }
    default:
      return state;
  }
}
