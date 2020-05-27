import { all } from 'redux-saga/effects';

import blogSagas from './blogSagas';
import postSagas from './postSagas';
import authSagas from './authSagas';

const allSaga = [...blogSagas, ...postSagas, ...authSagas];

export default function* sagas() {
  yield all(allSaga);
}
