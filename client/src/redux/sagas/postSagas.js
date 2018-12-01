import { replace } from 'connected-react-router';
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import { put, takeLatest, call } from 'redux-saga/effects';
import actions, {
  GET_DRAFT_DATA,
  SAVE_DRAFT_CONTENT,
  SAVE_TITLE,
} from '../reducers/post/actions';

const {
  getDraftDataSubmit,
  getDraftDataFailure,
  getDraftDataSuccess,
  saveTitleFailure,
  saveDraftContent,
  saveDraftContentFailure,
} = actions;

const baseUrl = `${window.location.origin}/api/blog`;

function* getDraftDataGenerator({ payload: id }) {
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
        rawContent =
          serverDate.getTime() > localContentDate.getTime()
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
    }
  } catch (e) {
    yield put(replace('/'));
    yield put(getDraftDataFailure());
  }
}

function* saveDraftContentGenerator({ payload: { id, editorState } }) {
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
      yield put(saveDraftContent());
    }
  } catch (e) {
    yield put(saveDraftContentFailure());
  }
}

function* saveTitleGenerator({ payload: { id, title } }) {
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
    yield put(saveTitleFailure());
  }
}

const post = [
  takeLatest(GET_DRAFT_DATA, getDraftDataGenerator),
  takeLatest(SAVE_DRAFT_CONTENT, saveDraftContentGenerator),
  takeLatest(SAVE_TITLE, saveTitleGenerator),
];

export default post;
