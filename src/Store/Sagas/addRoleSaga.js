import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../Constants/ActionTypes';
import { addRoleAPI } from '../Api/roleApi';
import { getRoleRequest } from '../Actions/roleActions';

function* addRole(action) {
  try {
    const addNewRole = yield call(addRoleAPI, action.payload);
    if (addNewRole.statusCode === 200) {
      yield put(getRoleRequest());
    }
  } catch (err) {
    console.log(err);
  }
}

function* addRoleSaga() {
  yield takeEvery(types.ROLE_ADD_SUCCESS, addRole);
}

export default addRoleSaga;
