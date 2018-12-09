// @flow
import type { MessageItem } from '../../../types/state';

export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const HIDE_MESSAGE = 'HIDE_MESSAGE';

const showMessage = (payload: MessageItem) => ({
  type: SHOW_MESSAGE,
  payload,
});

const hideMessage = () => ({
  type: HIDE_MESSAGE,
});

export default {
  showMessage,
  hideMessage,
};
