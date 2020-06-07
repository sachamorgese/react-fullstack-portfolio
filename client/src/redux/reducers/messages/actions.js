// @flow
import type { MessageItemType } from '../../../types/state';
import type { ActionType } from '../../../types/actionType';

export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const HIDE_MESSAGE = 'HIDE_MESSAGE';

const showMessage = (payload: MessageItemType): ActionType => ({
  type: SHOW_MESSAGE,
  payload,
});

const hideMessage = (): ActionType => ({
  type: HIDE_MESSAGE,
});

export default {
  showMessage,
  hideMessage,
};
