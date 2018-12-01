import type { messageItem } from '../../../types';

export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const HIDE_MESSAGE = 'HIDE_MESSAGE';

const showMessage = (payload: messageItem) => ({
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
