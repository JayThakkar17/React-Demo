import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../Constants/ActionTypes';
import { deleteRoleAPI } from '../Api/roleApi';
import { getRoleRequest } from '../Actions/roleActions';

function* deleteRole(action) {
  console.log('Action', action);
  try {
    const response = yield call(deleteRoleAPI, action.payload.id);
    if (response.statusCode === 200) {
      yield put(getRoleRequest());
    }
  } catch (err) {
    console.log(err);
  }
}

function* deleteRoleSaga() {
  yield takeEvery(types.ROLE_DELETE_SUCCESS, deleteRole);
}

export default deleteRoleSaga;
