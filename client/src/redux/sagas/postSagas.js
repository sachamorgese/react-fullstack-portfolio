import { replace } from 'connected-react-router';
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import { put, takeLatest, call } from 'redux-saga/effects';
import {
  GET_DRAFT_DATA,
  GET_DRAFT_DATA_SUBMIT,
  GET_DRAFT_DATA_SUCCESS,
  GET_DRAFT_DATA_FAILURE,
  SAVE_DRAFT_CONTENT,
  SAVE_DRAFT_CONTENT_FAILURE,
  SAVE_TITLE,
  SAVE_TITLE_FAILURE,
} from '../reducers/post/actions';

const baseUrl = `${window.location.origin}/api/blog`;

function* getDraftData({ payload: id }) {
  yield put({ type: GET_DRAFT_DATA_SUBMIT });
  try {
    const res = yield call(fetch, `${baseUrl}/draft/${id}`);
    const body = yield res.json();
    let rawContent;
    const localContent = JSON.parse(window.localStorage.getItem('content'));
    if (localContent) {
      const localContentDate = new Date(localContent.date);
      const serverDate = new Date(body.updated);
      rawContent =
        serverDate.getTime() > localContentDate.getTime()
          ? body.content
          : localContent;
    } else {
      rawContent = body.content;
    }
    const content = EditorState.createWithContent(convertFromRaw(rawContent));
    const payload = {
      ...body,
      content,
    };
    yield put({ type: GET_DRAFT_DATA_SUCCESS, payload });
  } catch (e) {
    yield put(replace('/'));
    yield put({ type: GET_DRAFT_DATA_FAILURE });
  }
}

function* saveDraftContent({ payload: { id, editorState } }) {
  try {
    const url = `${baseUrl}/draft/${id}/content`;
    const rawContent = JSON.stringify(
      convertToRaw(editorState.getCurrentContent()),
    );
    const body = JSON.stringify({
      content: rawContent,
    });
    const res = yield fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });
    if (res.status === 200) {
      window.localStorage.removeItem('content');
    } else {
      const content = {
        ...convertToRaw(editorState.getCurrentContent()),
        date: Date.now(),
      };
      window.localStorage.setItem('content', JSON.stringify(content));
      yield put({ type: SAVE_DRAFT_CONTENT_FAILURE });
    }
  } catch (e) {
    yield put({ type: SAVE_DRAFT_CONTENT_FAILURE });
  }
}

function* saveTitle({ payload: { id, title } }) {
  try {
    const url = `${baseUrl}/draft/${id}/title`;
    const body = JSON.stringify({
      title,
    });
    yield fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });
  } catch (e) {
    yield put({ type: SAVE_TITLE_FAILURE });
  }
}

const post = [
  takeLatest(GET_DRAFT_DATA, getDraftData),
  takeLatest(SAVE_DRAFT_CONTENT, saveDraftContent),
  takeLatest(SAVE_TITLE, saveTitle),
];

export default post;
