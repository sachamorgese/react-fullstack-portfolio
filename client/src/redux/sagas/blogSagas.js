import { put, takeLatest } from 'redux-saga/effects';
import { EditorState, convertToRaw } from 'draft-js';
import { push } from 'connected-react-router';

import {
  CREATE_NEW_DRAFT,
  CREATE_NEW_DRAFT_SUBMIT,
  CREATE_NEW_DRAFT_SUCCESS,
  CREATE_NEW_DRAFT_FAILURE,
} from '../reducers/blog/actions';

const baseUrl = `${window.location.origin}/api/blog`;

function* newDraft() {
  yield put({ type: CREATE_NEW_DRAFT_SUBMIT });
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
    yield put({ type: CREATE_NEW_DRAFT_SUCCESS });
    const { _id } = yield res.json();
    if (_id) {
      yield put(push(`/api/blog/draft/${_id}`));
    }
  } catch (e) {
    yield put({ type: CREATE_NEW_DRAFT_FAILURE });
    console.error(e);
  }
}

const blog = [takeLatest(CREATE_NEW_DRAFT, newDraft)];

export default blog;
