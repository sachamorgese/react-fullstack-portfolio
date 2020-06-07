// @flow
import { SHOW_MESSAGE, HIDE_MESSAGE } from './actions';
import type { ActionType } from '../../../types/actionType';
import type { MessageStateType } from '../../../types/state';

const initialState = {
  show: false,
  item: {
    name: '',
    index: null,
  },
};

export default function messages(
  state: MessageStateType = initialState,
  action: ActionType,
): MessageStateType {
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
