import { put, takeLatest } from 'redux-saga/effects';
import { EditorState, convertToRaw } from 'draft-js';
import { push } from 'connected-react-router';

import actions, {
  CREATE_NEW_DRAFT,
  GET_DRAFTS,
} from '../reducers/blog/actions';

const {
  createNewDraftSubmit,
  createNewDraftSuccess,
  createNewDraftFailure,
  getDraftsSubmit,
  getDraftsSuccess,
  getDraftsFailure,
} = actions;

const baseUrl = `${window.location.origin}/api/blog`;

function* createNewDraftGenerator() {
  yield put(createNewDraftSubmit());
  const emptyState = EditorState.createEmpty();
  const body = JSON.stringify(convertToRaw(emptyState.getCurrentContent()));
  const content = JSON.stringify({ content: body });

  const url = `${baseUrl}/draft/new`;
  try {
    const res = yield fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: content,
    });
    yield put(createNewDraftSuccess());
    const { _id } = yield res.json();
    if (_id) {
      yield put(push(`/api/blog/draft/${_id}`));
    }
  } catch (e) {
    yield put(createNewDraftFailure());
  }
}

function* getDraftsGenerator() {
  try {
    yield put(getDraftsSubmit());
    const url = `${baseUrl}/drafts`;
    const res = yield fetch(url);
    const body = res.json();
    yield put(getDraftsSuccess(body));
  } catch (e) {
    yield put(getDraftsFailure());
  }
}

const blog = [
  takeLatest(CREATE_NEW_DRAFT, createNewDraftGenerator),
  takeLatest(GET_DRAFTS, getDraftsGenerator),
];

export default blog;
