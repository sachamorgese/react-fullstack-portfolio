import { takeEvery, all, put, takeLatest, call } from 'redux-saga/effects';
import {
  UPDATE_EDITOR_STATE,
  GET_EDITOR_STATE,
} from '../reducers/post/actions';

const baseUrl = `${window.location.origin}/api/blog`;

function* updateEditorState() {
  const res = yield call(fetch, `${baseUrl}/draft/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const body = yield res.json();
}

function* getEditorState({ payload: id }) {
  const res = yield call(fetch, `${baseUrl}/draft/${id}`);
  // const res = yield call(fetch);
}

const post = [
  takeLatest(UPDATE_EDITOR_STATE, updateEditorState),
  takeLatest(GET_EDITOR_STATE, getEditorState),
];

export default post;
