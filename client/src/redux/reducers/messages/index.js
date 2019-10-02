// @flow
import { SHOW_MESSAGE, HIDE_MESSAGE } from './actions';
import type { Action } from '../../../types/action';
import type { State } from '../../../types/state';

const initialState = {
  show: false,
  item: {
    name: '',
    index: null,
  },
};

export default function(state: State = initialState, action: Action) {
  switch (action.type) {
    case SHOW_MESSAGE:
      return {
        ...state,
        show: true,
        item: action.payload,
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
