import { all } from 'redux-saga/effects';

import blogSagas from './blogSagas';
import postSagas from './postSagas';

const allSaga = [...blogSagas, ...postSagas];

export default function* sagas() {
  yield all(allSaga);
}
