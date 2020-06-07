// @flow
import {
  FETCH_USER_FAILURE,
  FETCH_USER_SUBMIT,
  FETCH_USER_SUCCESS,
} from './actions';
import type { ActionType } from '../../../types/actionType';
import type { AuthStateType } from '../../../types/state';

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  role: '',
  name: '',
  email: '',
};

export default function auth(
  state: AuthStateType = initialState,
  action: ActionType,
): AuthStateType {
  switch (action.type) {
    case FETCH_USER_SUBMIT:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...action.payload,
        isLoading: false,
        isLoggedIn: true,
      };
    case FETCH_USER_FAILURE:
      return initialState;
    default:
      return state;
  }
}
