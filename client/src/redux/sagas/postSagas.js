// @flow
import { replace } from 'connected-react-router';
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import { put, takeLatest, call } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import actions, {
  GET_BLOG_POST_DATA,
  GET_DRAFT_DATA,
  SAVE_DRAFT_CONTENT,
  SAVE_TITLE,
} from '../reducers/post/actions';

const {
  getDraftDataSubmit,
  getDraftDataFailure,
  getDraftDataSuccess,
  saveTitleFailure,
  saveDraftContentFailure,
  getBlogPostDataSubmit,
  getBlogPostDataSuccess,
  getBlogPostDataFailure,
} = actions;

const baseUrl = `${window.location.origin}/api/blog`;
const headers = {
  'Content-Type': 'application/json',
};

function* getDraftDataGenerator({
  payload: id,
}: {
  payload: string,
}): Saga<void> {
  yield put(getDraftDataSubmit());
  try {
    const res = yield call(fetch, `${baseUrl}/draft/${id}`);
    if (res.status === 200 || res.status === 304) {
      const body = yield res.json();
      const bodyContent = JSON.parse(body.content);
      let rawContent;
      const localContent = JSON.parse(window.localStorage.getItem('content'));
      if (localContent) {
        const localContentDate = new Date(localContent.date);
        const serverDate = new Date(body.updated);
        rawContent = serverDate.getTime() > localContentDate.getTime()
          ? bodyContent
          : localContent;
      } else {
        rawContent = bodyContent;
      }
      const content = EditorState.createWithContent(convertFromRaw(rawContent));
      const payload = {
        ...body,
        content,
      };

      yield put(getDraftDataSuccess(payload));
    } else {
      yield put(getDraftDataFailure());
      yield put(replace('/'));
    }
  } catch (e) {
    yield put(getDraftDataFailure());
    yield put(replace('/'));
  }
}

function* saveDraftContentGenerator({
  payload: { id, editorState },
}: {
  payload: { id: string, editorState: EditorState },
}): Saga<void> {
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
      headers,
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
    }
  } catch (e) {
    yield put(saveDraftContentFailure());
  }
}

function* saveTitleGenerator({
  payload: { id, title },
}: {
  payload: { id: string, title: string },
}): Saga<void> {
  try {
    const url = `${baseUrl}/draft/${id}/title`;
    const body = JSON.stringify({
      title,
    });
    yield fetch(url, {
      method: 'PATCH',
      headers,
      body,
    });
  } catch (e) {
    yield put(saveTitleFailure());
  }
}

function* getBlogPostDataGenerator({
  payload: id,
}: {
  payload: string,
}): Saga<void> {
  yield put(getBlogPostDataSubmit());
  try {
    const res = yield call(fetch, `${baseUrl}/post/${id}`);
    if (res.status === 200 || res.status === 304) {
      const body = yield res.json();
      const bodyContent = JSON.parse(body.content);
      const content = EditorState.createWithContent(
        convertFromRaw(bodyContent),
      );
      const payload = {
        ...body,
        content,
      };

      yield put(getBlogPostDataSuccess(payload));
    } else {
      yield put(getBlogPostDataFailure());
      yield put(replace('/'));
    }
  } catch (e) {
    yield put(getBlogPostDataFailure());
    yield put(replace('/'));
  }
}

const post = [
  takeLatest(GET_DRAFT_DATA, getDraftDataGenerator),
  takeLatest(SAVE_DRAFT_CONTENT, saveDraftContentGenerator),
  takeLatest(SAVE_TITLE, saveTitleGenerator),
  takeLatest(GET_BLOG_POST_DATA, getBlogPostDataGenerator),
];

export default post;
