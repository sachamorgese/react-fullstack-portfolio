import { takeEvery, all, put } from 'redux-saga/effects';

const baseUrl = `${window.location.origin}/api/blog/`;

function* newDraft() {
  const res = yield fetch(`${baseUrl}/draft/new`, {
    method: 'POST',
    headers: 'application/json',
    body: {},
  });
  console.log(res);
}

export default function* rootSaga() {
  yield all([newDraft()]);
}
