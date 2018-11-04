import { takeEvery, all, put } from 'redux-saga/effects';

function* newDraft() {}

export default function* rootSaga() {
  yield all([newDraft()]);
}
