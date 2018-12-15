// @flow
import { put, takeLatest, call, all } from 'redux-saga/effects';
import { EditorState, convertToRaw } from 'draft-js';
import { push } from 'connected-react-router';

import blogActions, {
  CREATE_NEW_DRAFT,
  GET_ALL_POSTS,
  DELETE_DRAFT,
} from '../reducers/blog/actions';

import postActions, { POST_BLOGPOST } from '../reducers/post/actions';

import messageActions from '../reducers/messages/actions';

const {
  createNewDraftSubmit,
  createNewDraftSuccess,
  createNewDraftFailure,
  getAllPostsSubmit,
  getDraftsSuccess,
  getDraftsFailure,
  deleteDraftSubmit,
  deleteDraftSuccess,
  deleteDraftFailure,
  getBlogPostsSuccess,
  getBlogPostsFailure,
} = blogActions;

const {
  postBlogPostSubmit,
  postBlogPostSuccess,
  postBlogPostFailure,
} = postActions;

const baseUrl = `${window.location.origin}/api/blog`;
const headers = {
  'Content-Type': 'application/json',
};

function* createNewDraftGenerator(): any {
  yield put(createNewDraftSubmit());
  const emptyState = EditorState.createEmpty();
  const body = JSON.stringify(convertToRaw(emptyState.getCurrentContent()));
  const content = JSON.stringify({ content: body });

  const url = `${baseUrl}/draft/new`;
  try {
    const res = yield fetch(url, {
      method: 'POST',
      headers,
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

function* getDraftsGenerator(): any {
  try {
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

function* getBlogPostsGenerator(): any {
  try {
    const url = `${baseUrl}/posts`;
    const res = yield fetch(url);
    if (res.status === 200) {
      const body = yield res.json();
      yield put(getBlogPostsSuccess(body));
    } else {
      yield put(getBlogPostsFailure());
    }
  } catch (e) {
    yield put(getBlogPostsFailure());
  }
}

function* deleteDraftGenerator(id): any {
  try {
    yield put(deleteDraftSubmit());
    const url = `${baseUrl}/draft/${id}`;
    const res = yield fetch(url, {
      method: 'DELETE',
      headers,
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

function* deleteDraftHandlerGenerator({ payload: id }): any {
  yield call(deleteDraftGenerator, id);
  yield call(getDraftsGenerator);
}

function* postBlogPostGenerator({ payload: { id, content } }): any {
  try {
    yield put(postBlogPostSubmit());
    const url = `${baseUrl}/post/new`;
    const rawContent = JSON.stringify(
      convertToRaw(content.getCurrentContent()),
    );
    const body = JSON.stringify({ id, content: rawContent });
    const res = yield fetch(url, {
      method: 'POST',
      headers,
      body,
    });
    if (res.status === 200) {
      yield put(postBlogPostSuccess());
      const { _id } = yield res.json();
      yield put(push(`/blog/post/${_id}`));
    } else {
      yield put(postBlogPostFailure());
    }
  } catch (e) {
    yield put(postBlogPostFailure());
  }
}

function* handleGetAllPosts(): any {
  yield put(getAllPostsSubmit());
  yield all([getDraftsGenerator(), getBlogPostsGenerator()]);
}

const blog = [
  takeLatest(CREATE_NEW_DRAFT, createNewDraftGenerator),
  takeLatest(GET_ALL_POSTS, handleGetAllPosts),
  takeLatest(DELETE_DRAFT, deleteDraftHandlerGenerator),
  takeLatest(POST_BLOGPOST, postBlogPostGenerator),
];

export default blog;
