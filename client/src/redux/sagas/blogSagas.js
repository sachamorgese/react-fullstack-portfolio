import { put, takeLatest, call } from 'redux-saga/effects';
import { EditorState, convertToRaw } from 'draft-js';
import { push } from 'connected-react-router';

import blogActions, {
  CREATE_NEW_DRAFT,
  GET_DRAFTS,
  DELETE_DRAFT,
} from '../reducers/blog/actions';
import messageActions from '../reducers/messages/actions';

const {
  createNewDraftSubmit,
  createNewDraftSuccess,
  createNewDraftFailure,
  getDraftsSubmit,
  getDraftsSuccess,
  getDraftsFailure,
  deleteDraftSubmit,
  deleteDraftSuccess,
  deleteDraftFailure,
} = blogActions;

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
    if (res.status === 200) {
      yield put(createNewDraftSuccess());
      const { _id } = yield res.json();
      if (_id) {
        yield put(push(`/blog/draft/${_id}`));
      }
    } else {
      yield put(createNewDraftFailure());
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
    if (res.status === 200) {
      const body = yield res.json();
      yield put(getDraftsSuccess(body));
    } else {
      yield put(getDraftsFailure());
    }
  } catch (e) {
    yield put(getDraftsFailure());
  }
}

function* deleteDraftGenerator(id) {
  try {
    yield put(deleteDraftSubmit());
    const url = `${baseUrl}/draft/${id}`;
    const res = yield fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res === 200) {
      yield put(deleteDraftSuccess());
      yield put(messageActions.hideMessage());
    } else {
      yield put(deleteDraftFailure());
      yield put(messageActions.hideMessage());
    }
  } catch (e) {
    yield put(deleteDraftFailure());
    yield put(messageActions.hideMessage());
  }
}

function* deleteDraftHandlerGenerator({ payload: id }) {
  yield call(deleteDraftGenerator, id);
  yield call(getDraftsGenerator);
}

const blog = [
  takeLatest(CREATE_NEW_DRAFT, createNewDraftGenerator),
  takeLatest(GET_DRAFTS, getDraftsGenerator),
  takeLatest(DELETE_DRAFT, deleteDraftHandlerGenerator),
];

export default blog;
