import { takeEvery, all, put, takeLatest } from 'redux-saga/effects';

const baseUrl = `${window.location.origin}/api/blog/`;

function* newDraft() {
  const res = yield fetch(`${baseUrl}/draft/new`, {
    method: 'POST',
    headers: 'application/json',
    body: {},
  });
  console.log(res);
}

const blog = [takeLatest('CREATE_NEW_DRAFT_SUBMIT', newDraft)];

export default blog;
