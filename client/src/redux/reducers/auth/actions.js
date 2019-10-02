// @flow
import type { UserData } from '../../../types/action';

export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_SUBMIT = "FETCH_USER_SUBMIT";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

const fetchUser = () => ({
  type: FETCH_USER,
});

const fetchUserSubmit = () => ({
  type: FETCH_USER_SUBMIT,
});

const fetchUserSuccess = (userData: UserData) => ({
  type: FETCH_USER_SUCCESS,
  payload: userData
});

const fetchUserFailure = () => ({
  type: FETCH_USER_FAILURE,
});

export default {
  fetchUser,
  fetchUserSubmit,
  fetchUserSuccess,
  fetchUserFailure,
}