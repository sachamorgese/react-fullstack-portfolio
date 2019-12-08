// @flow
/* eslint-disable consistent-return */

import { Saga } from 'redux-saga';
import { put, takeLatest, call, all } from 'redux-saga/effects';
import { EditorState, convertToRaw } from 'draft-js';
import { push } from 'connected-react-router';

import blogActions, {
  CREATE_NEW_DRAFT,
  GET_ALL_POSTS,
  DELETE_DRAFT,
  DELETE_BLOG_POST,
  CREATE_NEW_DRAFT_AND_DELETE,
} from '../reducers/blog/actions';

import postActions, { POST_BLOG_POST } from '../reducers/post/actions';

import messageActions from '../reducers/messages/actions';

const {
  createNewDraftSubmit,
  createNewDraftSuccess,
  createNewDraftFailure,
  getAllPostsSubmit,
  getAllPostsSuccess,
  getDraftsSuccess,
  getDraftsFailure,
  deleteDraftSubmit,
  deleteDraftSuccess,
  deleteDraftFailure,
  getBlogPostsSuccess,
  getBlogPostsFailure,
  deleteBlogPostSubmit,
  deleteBlogPostSuccess,
  deleteBlogPostFailure,
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

function* createNewDraftGenerator({
  payload: id,
}: {
  payload: { id: string },
}): Saga<void> {
  yield put(createNewDraftSubmit());
  const emptyState = EditorState.createEmpty();
  const body = JSON.stringify(convertToRaw(emptyState.getCurrentContent()));
  const postId = id || null;
  const content = JSON.stringify({ postId, content: body });

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

function* getDraftsGenerator(fetchAll: boolean = false): Saga<void> {
  try {
    const url = `${baseUrl}/drafts`;
    const res = yield fetch(url);
    if (res.status === 200) {
      const body = yield res.json();
      if (fetchAll) {
        return body;
      }
      yield put(getDraftsSuccess(body));
    } else {
      yield put(getDraftsFailure());
    }
  } catch (e) {
    yield put(getDraftsFailure());
  }
}

function* getBlogPostsGenerator(fetchAll: boolean = false): Saga<void> {
  try {
    const url = `${baseUrl}/posts`;
    const res = yield fetch(url);
    if (res.status === 200) {
      const body = yield res.json();
      if (fetchAll) {
        return body;
      }
      yield put(getBlogPostsSuccess(body));
    } else {
      yield put(getBlogPostsFailure());
    }
  } catch (e) {
    yield put(getBlogPostsFailure());
  }
}

function* deleteDraftGenerator(id: string): Saga<void> {
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

function* deleteDraftHandlerGenerator({
  payload: id,
}: {
  payload: { id: string },
}): Saga<void> {
  yield call(deleteDraftGenerator, id);
  yield call(getDraftsGenerator);
}

function* deleteBlogPostGenerator(id: string): Saga<void> {
  try {
    yield put(deleteBlogPostSubmit());
    const url = `${baseUrl}/post/${id}`;
    const res = yield fetch(url, {
      method: 'DELETE',
      headers,
    });
    if (res === 200) {
      yield put(deleteBlogPostSuccess());
      yield put(messageActions.hideMessage());
    } else {
      yield put(deleteBlogPostFailure());
      yield put(messageActions.hideMessage());
    }
  } catch (e) {
    yield put(deleteBlogPostFailure());
    yield put(messageActions.hideMessage());
  }
}

function* createNewDraftAndDeleteGenerator({
  payload,
}: {
  payload: { id: string },
}): Saga<void> {
  yield call(createNewDraftGenerator, payload);
  const { id } = payload;
  yield call(deleteBlogPostGenerator, id);
}

function* deleteBlogPostHandlerGenerator({
  payload: id,
}: {
  payload: { id: string },
}): Saga<void> {
  yield call(deleteBlogPostGenerator, id);
  yield call(getBlogPostsGenerator);
}

function* postBlogPostGenerator({
  payload: { id, content },
}: {
  payload: { id: string, content: EditorState },
}): Saga<void> {
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

function* handleGetAllPosts(): Saga<void> {
  yield put(getAllPostsSubmit());
  const [drafts, blogPosts] = yield all([
    call(getDraftsGenerator, true),
    call(getBlogPostsGenerator, true),
  ]);
  const payload = { drafts, blogPosts };
  yield put(getAllPostsSuccess(payload));
}

const blog = [
  takeLatest(CREATE_NEW_DRAFT, createNewDraftGenerator),
  takeLatest(CREATE_NEW_DRAFT_AND_DELETE, createNewDraftAndDeleteGenerator),
  takeLatest(GET_ALL_POSTS, handleGetAllPosts),
  takeLatest(DELETE_DRAFT, deleteDraftHandlerGenerator),
  takeLatest(DELETE_BLOG_POST, deleteBlogPostHandlerGenerator),
  takeLatest(POST_BLOG_POST, postBlogPostGenerator),
];

export default blog;
