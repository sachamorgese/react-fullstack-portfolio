// @flow
import { put, takeLatest } from 'redux-saga/effects';

import type { Saga } from 'redux-saga';

import authActions, { FETCH_USER } from '../reducers/auth/actions';

const baseUrl = `${window.location.origin}`;

const { fetchUserSubmit, fetchUserSuccess, fetchUserFailure } = authActions;

function* fetchUserGenerator(): Saga<void> {
  yield put(fetchUserSubmit());
  try {
    const url = `${baseUrl}/api/user/current_user`;
    const res = yield fetch(url);
    if (res.status === 200) {
      const body = yield res.json();
      yield put(fetchUserSuccess(body));
    } else {
      yield put(fetchUserFailure());
    }
  } catch (e) {
    yield put(fetchUserFailure());
  }
}

const auth = [takeLatest(FETCH_USER, fetchUserGenerator)];

export default auth;
