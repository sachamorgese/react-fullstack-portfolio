import { takeEvery, all, put, takeLatest } from 'redux-saga/effects';

const baseUrl = `${window.location.origin}/api/blog`;

function* newDraft() {
  const url = `${baseUrl}/draft/new`;
  try {
    const res = yield fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { _id } = yield res.json();
  } catch (e) {
    console.log(e);
  }
}

const blog = [takeLatest('CREATE_NEW_DRAFT_SUBMIT', newDraft)];

export default blog;
