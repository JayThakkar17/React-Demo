import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../Constants/ActionTypes';
import { getLoginAPI } from '../Api';
import { userLoginFailure, userLoginSuccess } from '../Actions/loginActions';

function* userLogin(action) {
  // debugger
  try {
    const user = yield call(getLoginAPI, action.payload);
    yield put(userLoginSuccess(user));
  } catch {
    yield put(userLoginFailure("Can't Login"));
  }
}

function* loginSaga() {
  yield takeEvery(types.LOGIN_REQUEST, userLogin);
}

export default loginSaga;
