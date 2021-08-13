import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../Constants/ActionTypes';
import { updateRoleAPI } from '../Api/roleApi';
import swal from 'sweetalert';
import { getRoleRequest } from '../Actions/roleActions';

function* updateRole(action) {
  try {
    const role = yield call(updateRoleAPI, action.payload);
    if (role.statusCode === 200) {
      yield put(getRoleRequest());
    }
  } catch (err) {
    swal('Failed To Update');
  }
}

function* updateRoleSaga() {
  yield takeEvery(types.ROLE_UPDATE_REQUEST, updateRole);
}

export default updateRoleSaga;
