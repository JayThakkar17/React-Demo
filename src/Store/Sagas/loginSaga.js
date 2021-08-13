import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../Constants/ActionTypes';
import { getLoginAPI } from '../Api';
import { userLoginFailure } from '../Actions/loginActions';
import { setName, storeToken } from '../../Utils/login';
import swal from 'sweetalert';

function* userLogin(action) {
  try {
    let user = yield call(getLoginAPI, action.payload);
    if (user.statusCode === 200) {
      yield put({ type: types.LOGIN_SUCCESS, payload: user });
      yield call(storeToken, user.accessToken);
      yield call(setName, user.user.firstName);
    }
    if (user.statusCode !== 200) {
      swal('Error', 'Invalid Credentials', 'error');
    }
  } catch {
    yield put(userLoginFailure());
  }
}

function* loginSaga() {
  yield takeEvery(types.LOGIN_REQUEST, userLogin);
}

export default loginSaga;
