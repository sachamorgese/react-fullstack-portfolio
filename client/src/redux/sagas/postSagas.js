import { takeEvery, all, put, takeLatest, call } from 'redux-saga/effects';

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

const post = [takeLatest('UPDATE_EDITOR_STATE', updateEditorState)];

export default post;
