// @flow
import { SHOW_MESSAGE, HIDE_MESSAGE } from './actions';
import type { messageState, Action } from '../../../types';

const initialState = {
  show: false,
  item: {
    name: '',
    index: null,
  },
};

export default function(state: messageState = initialState, action: Action) {
  const { type, payload } = action;
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
