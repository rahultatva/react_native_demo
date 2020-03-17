import {takeLatest, put, call} from 'redux-saga/effects';
import _ from 'lodash';
import {signInService, signOutService} from '../../services/apiService';

// Action watcher for USER_LOGIN
function* userLoginWatcher() {
  yield takeLatest('USER_LOGIN', userLoginHandler);
}

// Action Handler for login
function* userLoginHandler(action) {
  try {
    const reqParams = _.get(action, 'userDetail');
    const response = yield call(signInService, reqParams);
    yield put({
      type: 'USER_LOGIN_SUCCESS',
      payload: response,
    });
  } catch (error) {
    yield put({
      type: 'USER_LOGIN_FAIL',
      payload: [],
    });
  }
}

// Action watcher for USER_LOGOUT
function* userLogoutWatcher() {
  yield takeLatest('USER_LOGOUT', userLogoutHandler);
}

// Action Handler for lgout
function* userLogoutHandler() {
  try {
    yield call(signOutService);
    yield put({
      type: 'USER_LOGOUT_SUCCESS',
    });
  } catch (error) {
    yield put({
      type: 'USER_LOGOUT_FAIL',
    });
  }
}

// Export all Action watchers
export default [userLoginWatcher, userLogoutWatcher];
