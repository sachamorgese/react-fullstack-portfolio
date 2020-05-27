// @flow
import type { ActionType, UserDataType } from '../../../types/actionType';

export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_SUBMIT = 'FETCH_USER_SUBMIT';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

const fetchUser = (): ActionType => ({
  type: FETCH_USER,
});

const fetchUserSubmit = (): ActionType => ({
  type: FETCH_USER_SUBMIT,
});

const fetchUserSuccess = (userData: UserDataType): ActionType => ({
  type: FETCH_USER_SUCCESS,
  payload: userData,
});

const fetchUserFailure = (): ActionType => ({
  type: FETCH_USER_FAILURE,
});

export default {
  fetchUser,
  fetchUserSubmit,
  fetchUserSuccess,
  fetchUserFailure,
};
