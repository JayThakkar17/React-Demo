import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../Constants/ActionTypes';
import { getRoleIdAPI } from '../Api/roleApi';
import { getRoleIdSuccess } from '../Actions/roleActions';

function* getRoleId(action) {
  try {
    const getIdResponse = yield call(getRoleIdAPI, action.payload);
    if (getIdResponse.statusCode === 200) {
      yield put(getRoleIdSuccess(getIdResponse.data[0].roleName));
    }
  } catch (err) {
    console.log(err);
  }
}

function* getRoleIdSaga() {
  yield takeEvery(types.GET_ROLE_ID_REQUEST, getRoleId);
}

export default getRoleIdSaga;
