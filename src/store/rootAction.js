import {all, fork} from 'redux-saga/effects';

import authSagas from './Auth/actions';

const forkList = sagasList => sagasList.map(saga => fork(saga));

export default function* rootSagas() {
  yield all([...forkList(authSagas)]);
}
