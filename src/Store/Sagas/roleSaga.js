import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../Constants/ActionTypes';
import { getRoleAPI } from '../Api/roleApi';
import { getRoleFailure, getRoleSuccess } from '../Actions/roleActions';

function* getRole(action) {
  try {
    const role = yield call(getRoleAPI, action.payload);
    if (role.statusCode === 200) {
      yield put(getRoleSuccess(role.data));
    }
  } catch (err) {
    yield put(getRoleFailure(err));
  }
}

function* roleSaga() {
  yield takeEvery(types.GET_ROLE_REQUEST, getRole);
}

export default roleSaga;
